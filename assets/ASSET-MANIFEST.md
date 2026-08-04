# Asset Manifest — Threetwoa Digital Garden

> 本文件记录 `assets/` 目录下所有非代码媒体的来源、用途与维护状态。  
> 应用自身的静态资源见 `public/assets/`，不在本清单范围内。

## 目录约定

| 路径 | 用途 |
|---|---|
| `assets/backup/` | 上游 zip / 原版源码只读备份 |
| `assets/images/readme/` | README 契约图（banner / features / architecture / tech-stack / workflow / structure / preview-* / showcase-*） |
| `assets/images/readme/_svg/` | 上述契约图的可编辑 SVG 源文件 |
| `assets/images/avatar/` | 文档或演示槽位头像 |
| `assets/images/icon/` | 文档或演示槽位图标 |
| `assets/video/` | 演示视频 |
| `assets/ppt/` | 演示文稿 |
| `assets/speeches/` | 逐字稿 / 项目介绍稿 |

## README 契约图

| 文件 | 尺寸 | 用途 | 来源 | 可编辑源 |
|---|---|---|---|---|
| `banner.png` | 1440×480 | README 页首横幅 | AI 生成 → 裁剪 | `_svg/banner.svg` |
| `features.png` | 1600×900 | 核心功能一览 | Editorial SVG → PNG | `_svg/features.svg` |
| `architecture.png` | 1600×900 | Blog / Admin / Server 架构 | Editorial SVG → PNG | `_svg/architecture.svg` |
| `tech-stack.png` | 1600×900 | 前端技术分层 | Editorial SVG → PNG | `_svg/tech-stack.svg` |
| `workflow.png` | 1600×900 | 用户主链路 | Editorial SVG → PNG | `_svg/workflow.svg` |
| `structure.png` | 1600×1067 | 仓库目录结构 | Editorial SVG → PNG | `_svg/structure.svg` |

## Showcase 截图

> 由 Playwright 从本地 `npm run dev` 截取，分辨率 `1600×900`。

| 文件 | 场景 | 状态 |
|---|---|---|
| `showcase-home.png` | 首页 / Landing | ✅ Present |
| `showcase-writing.png` | 文章列表页 | ✅ Present |
| `showcase-article-detail.png` | 文章详情页 | ✅ Present |
| `showcase-gallery.png` | 画廊页 | ✅ Present |
| `showcase-about.png` | 关于页 | ✅ Present |

## 文档/演示槽位资产

| 文件 | 路径 | 用途 | 状态 |
|---|---|---|---|
| `avtor-boy.jpg` | `assets/images/avatar/` | 演示/文档占位头像 | ✅ Present |
| `avtor-girl.jpg` | `assets/images/avatar/` | 演示/文档占位头像 | ✅ Present |

## 变更日志

| 日期 | 变更 |
|---|---|
| 2026-07-12 | 按 `project-init` 规范建立本清单；从 `threetwoa-digital-garden-readme-assets.zip` 刷新 6 张 README 契约图及 SVG 源；清理 `assets/` 根目录散落/重复文件。 |

## 维护责任

- 新增 README 配图必须按 [readme-diagram-brief.md](../docs/outputs/prd/readme-diagrams/readme-diagram-brief.md) 的契约文件名落盘。
- Showcase 截图更新后需同步更新本清单的 "Showcase 截图" 表。
- 可编辑 SVG 源文件应随 PNG 一起更新，确保未来可修改。
