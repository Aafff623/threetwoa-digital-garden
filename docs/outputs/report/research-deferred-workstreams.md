# Research — Deferred Workstreams (Phase C)

> Date: 2026-07-12  
> Branches (scaffold): `chore/test-harness` · `perf/nav-p2` · `docs/license`  
> Status: research first — **do not ship without re-validation**

---

## C1 · Test harness (`chore/test-harness`)

### Why
Repo has no `npm test`. Identity, config cache, and route transition are regression-prone; AFK agents need a red-green seam.

### Evidence from codebase
- No Vitest/Jest/Playwright test config in package.json (only `dev|build|start|lint`).
- Critical pure seams already exist:
  - `getPublicConfig` client cache / empty mode (`src/api/config.ts`)
  - `hasServerApiBaseURL` / Vercel short-circuit (`src/api/request.ts`)
  - Soft-nav measure harness (`scripts/measure-nav-latency.mjs`) — external behavior, good for regression
- UI is GSAP-heavy; unit-testing full pages has low ROI.

### Recommendation
| Layer | Tool | First cases |
| --- | --- | --- |
| Unit | **Vitest** | config cache dedupe, empty server mode, identity constants shape |
| E2E smoke | **Playwright** (already used for measure) | home loads, click /writing, no RRTiamo text |
| Lint gate | existing ESLint | keep pre-push optional |

### Out of scope for first PR
- 80% coverage target
- Full visual regression suite

### Next implementation steps (when branch starts)
1. Add vitest + jsdom  
2. 3–5 unit tests on config/request  
3. One Playwright smoke script in CI (optional GitHub Action)  
4. Document `npm test` in README  

---

## C2 · Nav performance P2 (`perf/nav-p2`)

### Why
P0/P1 improved longtasks ~62% in dev; production still shows multi-second path times on cold routes (SSR + network), and About/home pin remain heavier.

### Evidence
- `docs/outputs/prd/nav-perf/latest-after-prod.md` — path 1–6s on some routes; About longtask max 271ms  
- About still has multi ScrollTrigger scrub + spotlight mousemove  
- Home pin rails still mount on return home  
- `Link` default prefetch across 11 nav items  

### Recommendation (priority order)
1. **Re-measure production after Phase A API short-circuit** — cold path should drop without 127.0.0.1 hangs  
2. If still slow: `prefetch={false}` on Navbar overflow items  
3. Gate About spotlight / heavy ST behind `matchMedia('(pointer:fine)')` and reduced-motion  
4. Consider lazy-mounting home pin rails until section in view  

### Success metrics
Reuse measure harness; targets from PRD-nav-performance.md (path ≤250ms soft-nav local; prod path quiet improvement vs latest-after-prod).

---

## C3 · License (`docs/license`)

### Why
README badges say Proprietary; no root LICENSE file. Public GitHub repo without LICENSE is ambiguous.

### Decision needed (HITL)
| Option | When |
| --- | --- |
| Keep **Proprietary / All rights reserved** | Personal showcase only; add short LICENSE notice |
| **MIT** | Want forks/reuse of frontend shell |
| **Source-available custom** | Share code but block commercial rebrand |

### Recommendation
Default for personal digital garden: **All rights reserved** notice file + keep Proprietary badge, unless user wants open-source contribution. Do **not** default to MIT without explicit OK.

### Next steps
1. User picks license  
2. Add `LICENSE`  
3. Align README badge  

---

## Branch policy

- Branch from latest `main`/`master` after Phase A merge.  
- One concern per branch.  
- Each branch opens with this research file (or a slice of it) + empty checklist issue.  
- No merge without measure or review for C2; no merge without user pick for C3.  
