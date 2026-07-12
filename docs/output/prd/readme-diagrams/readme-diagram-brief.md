# README Diagram Brief — Threetwoa Digital Garden

> Phase B asset contract for `README.md`.  
> Final images: `assets/images/readme/`.  
> SVG sources: `assets/images/readme/_svg/`（已随本次配图包落盘，可编辑源）。  
> **GPT 出图完整说明**（基本信息 / 详细描述 / 参照 / 元素 / Prompt）：  
> [`readme-image-prompts.md`](./readme-image-prompts.md)

---

## 1. README chapter map

| # | Section | Anchor | Assets |
|---:|---|---|---|
| 1 | Header | — | `banner.png` + shields |
| 2 | Why | `#why` | narrative only |
| 3 | Features | `#features` | `features.png` + table |
| 4 | Showcase | `#showcase` | `showcase-*.png` |
| 5 | Quick Start | `#quick-start` | commands |
| 6 | Architecture | `#architecture` | `architecture.png` + `tech-stack.png` |
| 7 | Workflow | `#workflow` | `workflow.png` |
| 8 | Structure | `#structure` | `structure.png` + tree |
| 9 | Roadmap | `#roadmap` | status table |
| 10 | Docs | `#docs` | links |
| 11 | License | `#license` | legal note |

**Preview**: single-product app — no Preview gallery shell; Showcase only.

---

## 2. Asset checklist

### 2.1 Diagrams / banner

| File | Purpose | Size | Method | Status |
|---|---|---|---|---|
| `banner.png` | README header | 1440×480 | AI image_gen → sharp crop | ✅ Done |
| `features.png` | Feature map | 1600×900 | Editorial SVG → PNG | ✅ Done |
| `architecture.png` | Three-tier system | 1600×900 | Editorial SVG → PNG | ✅ Done |
| `tech-stack.png` | Frontend layers | 1600×900 | Editorial SVG → PNG | ✅ Done |
| `workflow.png` | Visitor journey | 1600×900 | Editorial SVG → PNG | ✅ Done |
| `structure.png` | Repo layout | 1600×1067 | Editorial SVG → PNG | ✅ Done |

All diagrams have editable SVG sources under `assets/images/readme/_svg/`.

### 2.2 Showcase (Playwright)

| File | Scene | Status |
|---|---|---|
| `showcase-home.png` | Home / Landing | ✅ Present |
| `showcase-writing.png` | Writing list | ✅ Present |
| `showcase-article-detail.png` | Article detail | ✅ Present |
| `showcase-gallery.png` | Gallery | ✅ Present |
| `showcase-about.png` | About | ✅ Present |

---

## 3. Design language

| Token | Value |
|---|---|
| Background | Warm cream `#F7F4EE` → parchment `#EDE8DF` |
| Card surface | Off-white `#FFFEFB` |
| Accents | Sage / sky / violet / amber / rose (by layer role) |
| Typography | Inter (UI) · JetBrains Mono (paths) |
| Tone | Editorial digital garden — not cyber-dark |

---

## 4. Banner prompt (source)

```text
A wide cinematic banner for a GitHub project README (horizontal landscape).
Project: Threetwoa Digital Garden — personal blog and life archive.
Soft editorial digital-garden still life: floating polaroid frames, folded letters
with wax seals, map pins on a muted globe, sage-green leafy vines, faint code-editor
glow on paper, grid-notebook texture.
Palette: warm cream, sage green, dusty rose, charcoal, parchment.
No faces, no readable text, no logos, no neon, no corporate stock look.
```

---

## 5. Acceptance

- [x] README sections match the map above
- [x] All assets under `assets/images/readme/`
- [x] SVG sources under `assets/images/readme/_svg/`
- [x] Showcase captures present (no empty placeholders)
- [x] Quick Start commands copy-pasteable
- [x] No `docs/images/` paths
- [x] Docs table only links real files
- [x] Badges: `for-the-badge`, accurate stack versions, proprietary license, active status
