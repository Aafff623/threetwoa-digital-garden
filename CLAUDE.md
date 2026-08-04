# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Output Style**: `humanizer-output-style` — see `~/.claude/skills/humanizer-output-style/SKILL.md`  
> **Windows Rules**: `.cursor/rules/windows-path-discipline.mdc` · `windows-shell-discipline.mdc`  
> **Answer Format**: `.cursor/rules/answer-format.mdc`  
> **Project voice**: `docs/agents/voice.md`  
> **Domain facts**: `CONTEXT.md` · **Shared terms**: `LANGUAGES.md` · **Agent gates**: `AGENTS.md`

## Project overview

Threetwoa Digital Garden（三两园）— personal blog and life-archive frontend: Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4. Public face of a three-part system: this Blog, Admin (Vue, spring_admin), Server (Java, spring_server).

## Common commands

- `npm run dev` — Next.js dev server at http://localhost:3000
- `npm run build` / `npm run start` — production (standalone)
- `npm run lint` — ESLint
- `npm test` — Vitest
- `npm run measure:nav` — navigation latency (Playwright)
- README shell: `python -m http.server 8095` → http://127.0.0.1:8095/preview-readme.html

## Development prerequisites

- Node.js >= 20.9.0
- Optional: [spring_server](https://github.com/Aafff623/spring_server) at `http://localhost:8080/api` (UI falls back to static data if down)

## Environment variables

`.env.development` / `.env.production`:

- `NEXT_PUBLIC_API_BASE_URL` — browser base; always `/api` (same-origin + rewrites)
- `SERVER_API_BASE_URL` — Server Components / SSR / rewrites (dev: `http://localhost:8080/api`)

`next.config.ts`: `output: "standalone"`, rewrite `/api/:path*` → `${SERVER_API_BASE_URL}/:path*`, `images.unoptimized: true`.

## Architecture

### Server vs client data fetching

- Server Components (`src/app/page.tsx`, `layout.tsx`, …) → `src/api/*` with `SERVER_API_BASE_URL`, fallback `src/data/*` / `src/mock/*`.
- Client Components → `src/hooks/*` via browser `/api` proxy; same fallbacks.
- New pages: server-first + local fallback, or client hook when interactivity needs it.

### API layer

`src/api/request.ts` picks Axios `baseURL` (browser vs server). Domain files in `src/api/*` — add endpoints there, not inline in components.

### Theming

Five styles: `life` (default), `swiss`, `minimalist`, `glass`, `brutalist` — CSS class on `<html>` (`style-life`, …), variables in `src/app/styles/themes/*.css`.

- `ThemeApplier` injects `<style id="custom-theme-style">` from `/config/public` when enabled.
- `StyleConsole` stores `atlas_style` / `atlas_style_mode` in `localStorage`.

### Global shell and motion

`layout.tsx`: fonts, background layers, `SmoothScroll` (Lenis + GSAP ScrollTrigger), Navbar, Footer, StyleConsole, TapeStation, etc. GSAP work should share ScrollTrigger and clean up with `ctx.revert()`.

### Content rendering

`src/components/ui/Markdown.tsx` — custom Markdown (callouts, tables, highlight.js, lightbox). Extend this parser for new syntax.

### Static fallbacks

1. Call API.  
2. If `code === 200`, map to local types.  
3. Else warn and use `src/data/*` / `src/mock/*`.

### TypeScript / ESLint

- Alias `@/*` → `./src/*`
- ESLint: `eslint-config-next` core-web-vitals + typescript; explicit `any` allowed.

## Docs layout (post project-init Full 2026-08-04)

- Outputs: `docs/outputs/{report,prd,handoff,commit-history}/` (**plural**)
- No `docs/agents/language.md` / `context.md`
- Media: `assets/images/readme/` · Showcase-first README (no Preview Gallery)
- Cursor rules: `.cursor/rules/` five MDCs (alwaysApply)

## Preferences archive

- Do not edit spring_server / spring_admin from this repo unless explicitly tasked.
- Prefer Chinese comments on new/edited code when the user rule requires it.
- Init / governance commits must not mix unrelated business WIP.
