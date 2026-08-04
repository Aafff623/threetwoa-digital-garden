# README Diagram Brief — Threetwoa Digital Garden

> Phase B asset contract for `README.md`。  
> Final images: `assets/images/readme/`。  
> **GPT / MiniMax 出图完整说明**：[`readme-image-prompts.md`](./readme-image-prompts.md)

---

## 1. README chapter map

| # | Section | Anchor | Assets |
|---:|---|---|---|
| 1 | Header | — | `banner.png` + shields |
| 2 | 为什么 | `#为什么` | narrative only |
| 3 | 功能 | `#功能` | `features.png` + table |
| 4 | Preview | `#preview` | 书面声明省略 Gallery；`preview-readme.*` 启动说明 |
| 5 | Showcase | `#showcase` | `showcase-*.png`（13） |
| 6 | 快速开始 | `#快速开始` | commands |
| 7 | 架构 | `#架构` | `architecture.png` + `tech-stack.png` |
| 8 | 访问链路 | `#访问链路` | `workflow.png` |
| 9 | 目录结构 | `#目录结构` | `structure.png` + tree（禁止 `<details>`） |
| 10 | 路线图 | `#路线图` | status table |
| 11 | 文档 | `#文档` | links |

**Preview**：单产品 Web 应用 — **无** Preview Gallery / `preview-shell.png`；对外以 Showcase 为主。

---

## 2. Asset checklist

### 2.1 Diagrams / banner

| File | Purpose | Size（磁盘） | Method | Status |
|---|---|---|---|---|
| `banner.png` | README header | 2172×724 | GPT upgraded zip | ✅ |
| `features.png` | Feature map | 1672×941 | GPT upgraded zip | ✅ |
| `architecture.png` | Three-tier system | 1672×941 | GPT upgraded zip | ✅ |
| `tech-stack.png` | Frontend layers | 1672×941 | GPT upgraded zip | ✅ |
| `workflow.png` | Visitor journey | 1672×941 | GPT upgraded zip | ✅ |
| `structure.png` | Repo layout | 1536×1024 | GPT upgraded zip | ✅ |

Legacy `_svg/` drafts removed after upgraded PNGs landed.  
`README.md` / `README.en.md` 均嵌入上述六图 + Showcase。

### 2.2 Showcase (Playwright · 1600×900)

| File | Scene | Status |
|---|---|---|
| `showcase-home.png` | Home / Landing | ✅ |
| `showcase-writing.png` | Writing list | ✅ |
| `showcase-article-detail.png` | Article detail | ✅ |
| `showcase-gallery.png` | Gallery | ✅ |
| `showcase-about.png` | About | ✅ |
| `showcase-letter.png` | Letter / time capsule | ✅ |
| `showcase-archive.png` | Yearly archive | ✅ |
| `showcase-notes.png` | Notes | ✅ |
| `showcase-now.png` | Now | ✅ |
| `showcase-pond.png` | Pond guestbook | ✅ |
| `showcase-footprints.png` | Footprints | ✅ |
| `showcase-love.png` | Love archive | ✅ |
| `showcase-achievements.png` | Achievements | ✅ |

---

## 3. Design language

| Token | Value |
|---|---|
| Background | Warm cream `#F7F4EE` → parchment `#EDE8DF` |
| Card surface | Off-white `#FFFEFB` |
| Accents | Sage / sky / violet / amber / rose (by layer role) |
| Typography | Editorial serif for brand · clean sans for UI labels |
| Tone | Editorial digital garden — not cyber-dark |

---

## 4. Acceptance

- [x] README 章节与上表地图一致（含 Preview 省略声明）
- [x] 全部契约图在 `assets/images/readme/`
- [x] `_svg/` 已退役（以 Prompt 为改图源）
- [x] Showcase 13 张齐全（无空占位）
- [x] Quick Start 命令可复制
- [x] 无 `docs/images/` 路径
- [x] Docs 表仅链真实文件
- [x] 徽章：`for-the-badge`；License = MIT；栈版本与仓一致
- [x] 目录结构 / Key docs **直接呈现**（无 `<details>`）

---

## 2026-08-04 project-init Full

- 契约说明图与 Showcase 已齐全 → **跳过重生图**。
- 单产品：无 Preview Gallery；README 预览壳为根目录 `preview-readme.*`（端口 8095）。
- 产物路径统一为 `docs/outputs/`（复数）。

## 2026-08-05 project-init 细致 Review

- 抽检：五 MDC 与用户级 MATCH；根入口 / agents / ADR-0000 / voice / preview-readme 齐全。
- 补齐：ASSET-MANIFEST · brief 与磁盘对齐；移除空 `backup/`；**不**重生图；**不**提交 src 业务 WIP。
