# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Output Style**: `humanizer-output-style` skill — 统一语气与去 AI 味。详见 `skills/humanizer-output-style/SKILL.md`

## Project overview

Threetwoa Digital Garden — a personal blog and life-archive frontend built with Next.js 16 App Router, React 19, TypeScript 5 and Tailwind CSS 4. It is the public-facing piece of a three-part system: this Blog (Next.js), an Admin dashboard (Vue, spring_admin), and a Java API server (spring_server).

## Common commands

- `npm run dev` — start the Next.js dev server on http://localhost:3000
- `npm run build` — production build (standalone output)
- `npm run start` — start the production server
- `npm run lint` — run ESLint

The project has no test runner configured yet; there is no `npm test`.

## Development prerequisites

- Node.js >= 20.9.0
- The Java backend [spring_server](https://github.com/Aafff623/spring_server) running, default `http://localhost:8080/api`

## Environment variables

Two env files exist: `.env.development` and `.env.production`.

- `NEXT_PUBLIC_API_BASE_URL` — base path used by the browser. Always `/api` so requests stay same-origin and are proxied by Next.js rewrites.
- `SERVER_API_BASE_URL` — address used by Server Components, SSR and rewrites. In development this points to `http://localhost:8080/api`; in production it points to the internal API host.

`next.config.ts` sets `output: "standalone"` and rewrites `/api/:path*` to `${SERVER_API_BASE_URL}/:path*`. Images are unoptimized (`images.unoptimized: true`) and remote patterns are configured for Unsplash and `localhost:8080`.

## Architecture

### Server vs. client data fetching

Server Components (e.g. `src/app/page.tsx`, `src/app/layout.tsx`) fetch directly via API helpers in `src/api/*` such as `getBlogsList` and `fetchPublicConfigForServer`. These calls use `SERVER_API_BASE_URL` and always fall back to local static data in `src/data/*` or `src/mock/*` if the backend is unreachable.

Client Components (most pages under `src/components/*/`) use hooks in `src/hooks/*` (e.g. `useArticles`, `useSysConfig`) that call the same API modules through the browser's `/api` proxy. These hooks also fall back to local static data when the backend is down.

New pages should follow this pattern: server-rendered entry fetches from `src/api/*` with a local fallback, or use a client hook if interactivity requires it.

### API layer

`src/api/request.ts` creates an Axios instance whose `baseURL` is chosen at runtime:

- Browser: `NEXT_PUBLIC_API_BASE_URL`
- Server: `SERVER_API_BASE_URL`

Per-domain API files live in `src/api/*` (blogs, gallery, config, love, notes, etc.). Add new endpoints there rather than inline in components.

### Theming and visual styles

The app supports five switchable visual styles: `life`, `swiss`, `minimalist`, `glass`, `brutalist`. Each is a CSS class on `<html>` (e.g. `style-life`) with variables defined in `src/app/styles/themes/*.css`. The default is `life`.

`src/components/ui/ThemeApplier.tsx` fetches public config from `/config/public` and, when `page.theme.enabled` is `true`, injects a `<style id="custom-theme-style">` that overrides the five style palettes with user-configured colors, background image, grain opacity, glows and custom CSS.

`src/components/ui/StyleConsole.tsx` is the floating UI that lets visitors switch styles manually or auto-switch by time/scroll. It stores the choice in `localStorage` under `atlas_style` and `atlas_style_mode`.

When working on styles, keep theme variables in sync across `src/app/globals.css`, the five `src/app/styles/themes/*.css` files, and the override injection in `ThemeApplier.tsx`.

### Global shell and motion

`src/app/layout.tsx` defines the shared shell:

- Multiple Google fonts loaded via `next/font/google`, exposed as CSS variables (`--font-inter`, `--font-jost`, etc.)
- Fixed background layers: solid color, optional background image, optional glass glows, and a film-grain overlay
- `SmoothScroll` wraps the page content and initializes Lenis + GSAP ScrollTrigger synchronization
- `Navbar`, `Footer`, `FloatingFooterPeekers`, `StyleConsole`, `BackToTop`, `TapeStation`

`SmoothScroll` (`src/components/ui/SmoothScroll.tsx`) registers `ScrollTrigger` and drives Lenis through GSAP's ticker. Client components that use GSAP should reuse the same `ScrollTrigger` instance and clean up with `ctx.revert()`.

### Content rendering

`src/components/ui/Markdown.tsx` is the custom Markdown renderer used for post bodies. It parses headings, paragraphs, lists, blockquotes, GitHub-style callouts (`> [!NOTE]`), tables, code blocks (via highlight.js), images with lightbox, inline styles and task checkboxes. When extending Markdown syntax or callout types, update this parser; it does not use a third-party Markdown library.

### Static fallbacks and local data

Because the backend may be unavailable during local development or builds, pages must not crash when API calls fail. The convention is:

1. Try the API.
2. If the response has `code === 200`, map it to the local TypeScript shape.
3. Otherwise, log a warning and use data from `src/data/*` or `src/mock/*`.

Files like `src/data/writing.ts`, `src/data/gallery.ts`, `src/mock/about.ts` and `src/mock/love.ts` hold these fallbacks.

### TypeScript paths

The project uses `@/*` as an alias for `./src/*`.

### ESLint configuration

`eslint.config.mjs` extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. Explicit `any` is allowed (`@typescript-eslint/no-explicit-any: off`), unused vars are warnings, and React Hooks exhaustive-deps/set-state-in-effect rules are disabled.
