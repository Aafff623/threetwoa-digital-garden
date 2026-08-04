# Asset Manifest — Threetwoa Digital Garden

> 本文件记录 `assets/` 目录下所有非代码媒体的来源、用途与维护状态。  
> 应用自身的静态资源见 `public/`，不在本清单范围内。

## 目录约定

| 路径 | 用途 | 何时建 |
|---|---|---|
| `assets/backup/` | 上游 zip / 原版源码只读备份 | 有上游原版时再建 |
| `assets/images/readme/` | README 契约图 + Showcase | 默认 |
| `assets/images/avatar/` | 文档或演示槽位头像 | 有图时 |
| `assets/images/icon/` | 文档或演示槽位图标 | 有图时 |
| `assets/video/` · `ppt/` · `speeches/` | 视频 / 演示文稿 / 逐字稿 | 有实际文件时 |

空槽**不**预建、不用 `.gitkeep`。当前无 `backup/`、`icon/`、`video/`、`ppt/`、`speeches/`。

## README 契约图

| 文件 | 尺寸（磁盘） | 用途 | 来源 | 状态 |
|---|---|---|---|---|
| `banner.png` | 2172×724 | README 页首横幅 | AI / 升级包 | ✅ |
| `features.png` | 1672×941 | 核心功能一览 | AI / 升级包 | ✅ |
| `architecture.png` | 1672×941 | Blog / Admin / Server 架构 | AI / 升级包 | ✅ |
| `tech-stack.png` | 1672×941 | 前端技术分层 | AI / 升级包 | ✅ |
| `workflow.png` | 1672×941 | 用户主链路 | AI / 升级包 | ✅ |
| `structure.png` | 1536×1024 | 仓库目录结构 | AI / 升级包 | ✅ |

> 可编辑 `_svg/` 源已在升级 PNG 落地后移除；需要改图时以 `docs/outputs/prd/readme-diagrams/readme-image-prompts.md` 重生。

## Showcase 截图

> Playwright 从本地 `npm run dev` 截取，分辨率 `1600×900`。本仓无 Preview Gallery（单产品）。

| 文件 | 场景 | 状态 |
|---|---|---|
| `showcase-home.png` | 首页 / Landing | ✅ |
| `showcase-writing.png` | 文章列表 | ✅ |
| `showcase-article-detail.png` | 文章详情 | ✅ |
| `showcase-gallery.png` | 照片墙 | ✅ |
| `showcase-about.png` | 关于 | ✅ |
| `showcase-letter.png` | 岁月信件 | ✅ |
| `showcase-archive.png` | 年份归档 | ✅ |
| `showcase-notes.png` | 日常碎片 | ✅ |
| `showcase-now.png` | 当前状态 | ✅ |
| `showcase-pond.png` | 鱼塘反馈 | ✅ |
| `showcase-footprints.png` | 足迹 | ✅ |
| `showcase-love.png` | 恋爱纪实 | ✅ |
| `showcase-achievements.png` | 成就徽章 | ✅ |

## 文档/演示槽位资产

| 文件 | 路径 | 用途 | 状态 |
|---|---|---|---|
| `avtor-boy.jpg` | `assets/images/avatar/` | 演示/文档占位头像 | ✅ |
| `avtor-girl.jpg` | `assets/images/avatar/` | 演示/文档占位头像 | ✅ |

## 变更日志

| 日期 | 变更 |
|---|---|
| 2026-07-12 | 建立清单；刷新 6 张 README 契约图；清理根目录散落文件。 |
| 2026-08-04 | project-init Full：路径迁 `docs/outputs/`；Showcase 保留；跳过重生图。 |
| 2026-08-05 | 细致 Review：清单与磁盘对齐（13 张 Showcase、真实尺寸）；去掉已不存在的 `_svg/` 声明；移除空 `backup/`。 |

## 维护责任

- 新增 README 配图必须按 [readme-diagram-brief.md](../docs/outputs/prd/readme-diagrams/readme-diagram-brief.md) 的契约文件名落盘。
- Showcase 更新后同步本表。
- 缺图时用 MiniMax `text_to_image` / GenerateImage 仅补缺，勿批量重刷已有图。
