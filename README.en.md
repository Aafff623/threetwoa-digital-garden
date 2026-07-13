<div align="center">

# 三两园 · Sanliang Garden

*"Code less, Architect more."*

A personal blog and life-archive frontend — long-form writing, photos, footprints, and private memories, gathered into a single digital garden.
Next.js 16 App Router · React 19 · TypeScript 5 · Tailwind CSS 4 · GSAP + Lenis

> Forked from the upstream blog system. Attribution to the original author.

<p>
  <a href="./README.md">中文</a> · <strong>English</strong>
</p>

</div>

<p align="center">
  <img src="assets/images/readme/banner.png" alt="Sanliang Garden banner" width="100%" />
</p>

<p align="center">
  <a href="https://threetwoa-digital-garden.vercel.app"><img src="https://img.shields.io/badge/Demo-Live-059669?style=for-the-badge&labelColor=0f172a" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/Stack-Next.js_16_%7C_React_19_%7C_TS_%7C_Tailwind_4-3B82F6?style=for-the-badge&labelColor=0f172a" alt="Stack">
  <img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&labelColor=0f172a" alt="License">
  <a href="https://github.com/Aafff623/threetwoa-digital-garden"><img src="https://img.shields.io/github/stars/Aafff623/threetwoa-digital-garden?style=for-the-badge&labelColor=0f172a" alt="GitHub Stars"></a>
</p>

<p align="center">
  <a href="#why">🏯 Why</a> ·
  <a href="#features">✨ Features</a> ·
  <a href="#showcase">📸 Showcase</a> ·
  <a href="#quick-start">🚀 Quick Start</a> ·
  <a href="#architecture">🏗️ Architecture</a> ·
  <a href="#workflow">🧭 Workflow</a> ·
  <a href="#structure">📂 Structure</a> ·
  <a href="#roadmap">🗺️ Roadmap</a> ·
  <a href="#docs">📚 Docs</a>
</p>

---

## Why

Personal content rarely lives in one place. Writing ends up in notes apps, photos in albums, travel traces on maps, and private memories on social platforms — each with its own timeline and export story.

**Sanliang Garden** consolidates those surfaces into a single, intentionally designed frontend:

- Treat articles, short notes, galleries, footprints, and time capsules as different leaves of one archive, not disconnected feeds
- Split responsibilities across Blog (this repo) / Admin / Server so presentation, operations, and persistence stay cleanly bounded
- Use Next.js App Router for server-first rendering, with GSAP + Lenis for magazine-like motion without sacrificing structure

This is not a generic CMS skin or an infinite photo feed. It is a **digital garden**: a long-lived, editable public archive you keep growing.

## Features

<p align="center">
  <img src="assets/images/readme/features.png" alt="Feature map — Articles, Gallery, Footprints, Love, Time Capsule, Achievements, Pond, Style System" width="90%" />
</p>

| Module | Description | Status |
| --- | --- | :---: |
| **Articles** | Listing, categories, archive, search, Markdown reading | ✅ |
| **Gallery** | Masonry wall with lightbox and category browsing | ✅ |
| **Footprints** | Map markers and trip retrospectives | ✅ |
| **Love archive** | Shared timeline, wishlist, and memory rail | ✅ |
| **Time capsule** | Letters to the future with scheduled reveal | ✅ |
| **Achievements** | Personal milestones and collectible medals | ✅ |
| **Pond** | Guestbook with likes and replies | ✅ |
| **Style system** | Five presets: `life` / `swiss` / `minimalist` / `glass` / `brutalist` | ✅ |
| **Responsive shell** | Adaptive layout with dark-mode-friendly tokens | ✅ |
| **Motion** | Lenis smooth scroll + GSAP ScrollTrigger | ✅ |

> **Scope**: v0.1 targets a single personal site. Admin manages content; multi-tenant and team collaboration are out of scope.

## Showcase

Playwright captures at `1600×900`. After [Quick Start](#quick-start), walk the recommended path below.

### Recommended path

```
Home hero/nav → /writing article list → open an article for Markdown
  → /gallery lightbox → /about the keeper's vibe
```

### Page gallery

> Click a thumbnail to enlarge.

| | | |
|:---:|:---:|:---:|
| [![Home](assets/images/readme/showcase-home.png)](assets/images/readme/showcase-home.png)<br><br>**Home**<br>hero · nav · scroll motion | [![Writing list](assets/images/readme/showcase-writing.png)](assets/images/readme/showcase-writing.png)<br><br>**Writing list**<br>archive groups · tags · search | [![Article](assets/images/readme/showcase-article-detail.png)](assets/images/readme/showcase-article-detail.png)<br><br>**Article**<br>Markdown · callouts · code highlight |
| [![Gallery](assets/images/readme/showcase-gallery.png)](assets/images/readme/showcase-gallery.png)<br><br>**Gallery**<br>masonry · lightbox · categories | [![About](assets/images/readme/showcase-about.png)](assets/images/readme/showcase-about.png)<br><br>**About**<br>the keeper · coordinates · self-slices | |

Live demo: [threetwoa-digital-garden.vercel.app](https://threetwoa-digital-garden.vercel.app)

## Quick Start

### Prerequisites

- Node.js `>= 20.9.0`
- npm (or pnpm)
- [spring_server](https://github.com/Aafff623/spring_server) running at `http://localhost:8080/api` (optional for UI-only browsing; the frontend falls back to local static data)

### 1. Clone and install

```bash
git clone https://github.com/Aafff623/threetwoa-digital-garden.git
cd threetwoa-digital-garden
npm ci
```

### 2. Environment

Create `.env.development`:

```dotenv
# Browser requests stay same-origin; Next.js rewrites forward to the API
NEXT_PUBLIC_API_BASE_URL=/api

# Used by Server Components, SSR, and rewrites
SERVER_API_BASE_URL=http://localhost:8080/api
```

Production builds use `.env.production` with the same keys pointed at the internal API host.

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint (core-web-vitals + TypeScript) |
| `npm run build` | Production build (`output: "standalone"`) |
| `npm run start` | Serve the production build |

Before commit, prefer `npm run lint` and `npm run build`.

## Architecture

<p align="center">
  <img src="assets/images/readme/architecture.png" alt="System architecture — Visitor/Editor → Blog/Admin → Spring Boot API → MySQL & Object Storage" width="90%" />
</p>

| Tier | Stack | Responsibility | Repository |
| --- | --- | --- | --- |
| **Blog** | Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 | Public-facing presentation | This repository |
| **Admin** | Vue | Content and site configuration | [spring_admin](https://github.com/Aafff623/spring_admin) |
| **Server** | Java Spring Boot | API, auth, persistence, files | [spring_server](https://github.com/Aafff623/spring_server) |

### Frontend data flow

```text
Server Component / RSC
  → src/api/*                 (Axios · SERVER_API_BASE_URL)
  → fallback src/data/* · src/mock/* when the API is unavailable

Client Component
  → src/hooks/*               (useArticles · useSysConfig · …)
  → browser /api              (NEXT_PUBLIC_API_BASE_URL)
  → Next.js rewrites          → spring_server
```

### Tech stack layers

<p align="center">
  <img src="assets/images/readme/tech-stack.png" alt="Frontend tech stack — Framework, Styling, Motion, Data, Content layers" width="90%" />
</p>

| Layer | Choices |
| --- | --- |
| **Framework** | Next.js 16 App Router, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 4, CSS variable themes, five style presets |
| **Motion** | GSAP + ScrollTrigger, Lenis, Framer Motion |
| **Data** | Axios, isomorphic API modules, hooks, static fallbacks |
| **Content** | Custom Markdown renderer, Highlight.js, Leaflet |

## Workflow

<p align="center">
  <img src="assets/images/readme/workflow.png" alt="Visitor journey — Landing → Browse Writing → Read Article → Explore Life → Engage" width="90%" />
</p>

| Step | User action | What the stack does |
| --- | --- | --- |
| 1 | Open home | RSC prefetches public config and latest posts for first paint |
| 2 | Browse `/writing` | Client hooks load the list; failures fall back to `writingData` |
| 3 | Open an article | App Router `[slug]` SSR-renders Markdown |
| 4 | Switch style | `StyleConsole` writes `localStorage`; CSS variables update immediately |
| 5 | Leave a pond message | Browser hits `/api/pond/*`, rewritten to spring_server |

## Structure

<p align="center">
  <img src="assets/images/readme/structure.png" alt="Repository structure — src/ tree and Server/Client/Theme conventions" width="90%" />
</p>

```text
src/
├─ api/              # Shared Axios clients and domain endpoints
├─ app/              # App Router pages, layout, theme CSS
│  └─ styles/themes/ # life · swiss · minimalist · glass · brutalist
├─ components/       # Page sections and reusable UI
├─ hooks/            # Client-side data and config hooks
├─ icon/             # Icon mappings
├─ interface/        # Shared TypeScript contracts
├─ mock/             # Offline / failure fallback fixtures
└─ data/             # Lightweight static content (brand, articles, gallery)
```

**Conventions**

- New endpoints belong in `src/api/*`, not inline in components
- Brand identity lives in [`src/data/identity.ts`](./src/data/identity.ts) — no scattered hardcodes
- New routes follow `src/app/{route}/page.tsx`
- Prefer server fetch with local fallback for first paint; use client hooks when interactivity requires it

## Roadmap

| Phase | Goal | Status |
| --- | --- | :---: |
| MVP | Articles, gallery, about, style switching | ✅ Done |
| Life archive | Footprints, love, time capsule, achievements, pond | ✅ Done |
| Experience | Motion polish, loading performance, SEO | 🟡 In progress |
| Content ops | Admin and Server management capabilities | 🟡 In progress |
| Distribution | i18n, RSS, Open Graph image pipeline | ⬜ Planned |

## Docs

| Document | Path | Notes |
| --- | --- | --- |
| Development guide | [`CLAUDE.md`](./CLAUDE.md) | Architecture, commands, env vars, coding conventions |
| Project standards | [`AGENTS.md`](./AGENTS.md) · [`CONTEXT.md`](./CONTEXT.md) · [`LANGUAGES.md`](./LANGUAGES.md) | Agent constraints, domain facts, shared vocabulary |
| Chinese README | [`README.md`](./README.md) | 默认中文文档 |
| Init decision | [`docs/adr/0001-apply-project-init.md`](./docs/adr/0001-apply-project-init.md) | project-init & branch unification ADR |
| README diagram brief | [`docs/output/prd/readme-diagrams/readme-diagram-brief.md`](./docs/output/prd/readme-diagrams/readme-diagram-brief.md) | Section plan, asset contract |
| Assets note | [`assets/README.md`](./assets/README.md) · [`assets/ASSET-MANIFEST.md`](./assets/ASSET-MANIFEST.md) | Media conventions & manifest |

## License

This project is released under the [MIT License](./LICENSE).

Before any public deployment, review:

- `.env*` must not contain tokens, database passwords, or cloud credentials
- `public/`, `assets/`, and mock data should not ship private photos or personal information you do not intend to publish
- Map coordinates, relationship records, and time-capsule letters should be replaced with deployer-owned content

---

<div align="center">

**三两园 · Sanliang Garden** · curated archive · intentional motion · resilient data layer

</div>
