# PRD — In-app Navigation Performance

> Status: ready-for-agent  
> Repo: `Aafff623/threetwoa-digital-garden`  
> Baseline harness: `scripts/measure-nav-latency.mjs`  
> Baseline report: `docs/output/prd/nav-perf/latest-baseline-dev.md`

---

## Problem Statement

Visitors (and local reviewers) experience **visible stutter when clicking between pages**. Soft navigations feel “stuck” for a beat even though the URL eventually changes. The site is a Lenis + GSAP-heavy Digital Garden shell; route changes tear down and rebuild many scroll animations while also re-fetching public config. In local `next dev`, cold compiles amplify the pain; production still pays the runtime cost.

## Solution

Make route transitions **predictably fast and calm**:

1. Measure soft-nav latency + main-thread longtasks with a repeatable Playwright protocol (Ctrl+F5 analogue → click).
2. Remove duplicate work on every navigation (config fetch, ScrollTrigger thrash, Lenis scroll memory).
3. Cap expensive motion on enter/exit (blur scrub, pin rails) without deleting the garden aesthetic.
4. Keep a harness so every phase can prove improvement with numbers.

## User Stories

1. As a visitor, I want page switches to feel immediate, so that browsing the garden is pleasant.
2. As a visitor, I want no multi-second freeze after a click, so that I trust the site is not broken.
3. As a visitor, I want scroll position to reset cleanly on a new page, so that I am not dropped mid-animation.
4. As a visitor on a mid-range laptop, I want longtasks under ~100ms during nav, so that input stays responsive.
5. As a visitor, I want About / Gallery / Love to still look polished, so that performance work does not gut the design.
6. As a developer, I want a one-command latency script, so that I can gate regressions.
7. As a developer, I want public config fetched once and shared, so that Navbar/Footer/Theme do not stampede the API.
8. As a developer, I want ScrollTrigger instances cleaned on route change, so that pin/scrub leftovers do not jank the next page.
9. As a developer, I want Lenis scrolled to top (or stopped) on route change, so that soft-nav does not fight residual inertia.
10. As a developer, I want heavy routes lazy about map/blur effects, so that first entry cost is bounded.
11. As a maintainer, I want phase commits with before/after numbers, so that history explains each win.
12. As a maintainer, I want GitHub issues for each vertical slice, so that AFK agents can pick work safely.
13. As a reviewer, I want docs linking baseline reports, so that PR discussion is evidence-based.
14. As a visitor with reduced-motion preference, I want nav to skip entrance thrash, so that accessibility and speed both improve.
15. As a developer on `next dev`, I want measurements labeled clearly as dev, so that cold compile is not confused with production cost.
16. As a product owner, I want P0 fixes first (cache + cleanup), so that we get the largest UX win with minimal design risk.

## Implementation Decisions

1. **Measurement seam**: Playwright soft-nav probe writing JSON/MD under `docs/output/prd/nav-perf/`. Metrics: `clickToPathMs`, `clickToContentMs`, `clickToQuietMs`, longtask count/max/total in a 2.5s window after click. Hard reload uses cache-disabled + reload (Ctrl+F5 analogue).
2. **Config seam**: Single shared promise/cache for `getPublicConfig` / client consumers (`useSysConfig`, `ThemeApplier`). TTL optional (~60s); in-flight dedupe mandatory.
3. **Scroll seam**: On `pathname` change in a tiny client `RouteTransition` helper inside the existing shell: stop Lenis inertia, `scrollTo(0, { immediate: true })`, and `ScrollTrigger.refresh()` after a microtask (or kill orphans only if safe). Prefer `gsap.context().revert()` already used in pages — ensure every page with ST uses it.
4. **Axios timeout**: Keep 15s but config cache prevents repeated 15s waits when backend is down; optional shorter timeout for `/config/public` only (3–5s) is allowed if it does not break SSR.
5. **Motion budget (P1)**: About-page `filter: blur()` scrub is GPU-expensive — replace with opacity/transform-only scrub or gate behind `prefers-reduced-motion` / desktop-only lighter path. Home pin rails stay but refresh less aggressively.
6. **Prefetch (P2)**: Heavy routes may set `prefetch={false}` on dense nav menus if measurements show prefetches fight the main click.
7. **No redesign** of page information architecture in this PRD.

## Testing Decisions

- Good tests assert **external behavior**: measured latency distributions and “no console thrash”, not private GSAP internals.
- Regression: re-run `node scripts/measure-nav-latency.mjs --label after-<phase>` against the same base URL.
- Manual: click Writing → Gallery → About → Home; scroll should start at top; no multi-second freeze.
- Prefer production `next start` for “truth” numbers; always label dev runs as `*-dev`.

### Success targets (vs baseline-dev)

| Metric | Baseline (avg) | Target |
| --- | ---: | ---: |
| click→path | ~430 ms | ≤ 250 ms or −30% |
| click→quiet | ~1170 ms | ≤ 800 ms or −30% |
| longtask max (worst route) | 200 ms (home) | ≤ 120 ms |
| longtask total (gallery) | 407 ms | ≤ 200 ms |

Exact baseline table is in the linked measure report.

## Out of Scope

- Rewriting the entire site to RSC-only.
- Removing Lenis permanently (may disable only if P0/P1 insufficient).
- Backend Spring Boot performance.
- Image CDN / full LCP campaign beyond nav path.
- Visual redesign of themes.

## Further Notes

### Baseline facts (dev, 2026-07-12)

Protocol: cache-disabled hard reload → click in-app link.

| Route | path | content | quiet | LT max | LT total |
| --- | ---: | ---: | ---: | ---: | ---: |
| writing | 215 | 220 | 868 | 52 | 52 |
| gallery | 493 | 703 | 1633 | 109 | 407 |
| about | 453 | 478 | 1102 | 140 | 221 |
| love | 280 | 437 | 991 | 76 | 129 |
| footprints | 426 | 433 | 1055 | 85 | 85 |
| pond | 506 | 666 | 1288 | 133 | 300 |
| home-from-writing | 636 | 669 | 1255 | 200 | 267 |

### Phase plan

| Phase | Slice | Goal |
| --- | --- | --- |
| P0a | Config cache + in-flight dedupe | Kill stampede / timeout stacking |
| P0b | Route transition: Lenis reset + ST refresh hygiene | Kill scroll thrash on switch |
| P1a | About blur scrub → transform/opacity | Cut GPU longtasks on About |
| P1b | Home pin/refresh tuning | Cut home-from-writing longtasks |
| P2 | Prefetch / dynamic import guards | Optional polish |

Each phase ends with: re-measure → commit.

---

## Checklist (tracker)

- [ ] P0a — public config cache
- [ ] P0b — route transition scroll hygiene
- [ ] P1a — About motion budget
- [ ] P1b — Home pin budget
- [ ] P2 — prefetch / lazy guards
- [ ] Re-measure after each phase; attach MD report
