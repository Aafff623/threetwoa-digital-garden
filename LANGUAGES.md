# LANGUAGES.md

> 共享用词入口。Agent、Issue、PRD、handoff 与 README 应使用本文件定义的术语。

## 1. 产品用词

| 中文 | 英文 | 说明 |
|---|---|---|
| 数字花园 | Digital Garden | 项目核心隐喻，长期生长的个人归档 |
| 三两园 | Sanliang Garden | 对外中文品牌名（仓库 / npm：threetwoa-digital-garden） |
| 文章 | Article / Writing | 长文模块（`/writing`） |
| 短记 | Note | 碎片短内容（`/notes`） |
| 画廊 | Gallery | 图片墙（`/gallery`） |
| 足迹 | Footprints | 旅行 / 地理标记（`/footprints`） |
| 爱情归档 | Love archive | 私密关系时间线（`/love`） |
| 成就 | Achievements | 里程碑与徽章（`/achievements`） |
| 池塘 / 鱼塘 | Pond | 留言板（`/pond`） |
| 时间胶囊 | Time Capsule / Letter | 定时揭示信件（`/letter`） |
| 当前状态 | Now | 正在读 / 听 / 做（`/now`） |
| 风格 | Style | 视觉预设：life / swiss / minimalist / glass / brutalist |
| 控制台 | Style Console | 风格切换浮层 |
| 磁带站 | Tape Station | 顶/底滚动磁带装饰条 |
| 效果展示 | Showcase | README 真机界面相册（`showcase-*.png`） |
| README 预览壳 | README preview shell | `preview-readme.html`，不是资产 Gallery |

## 2. 技术用词

| 用词 | 含义 |
|---|---|
| RSC | React Server Component |
| Client Hook | `src/hooks/*` 中以 `use` 开头的客户端数据钩子 |
| Static Fallback | API 不可用时的 `src/data/*` / `src/mock/*` |
| Rewrite | `next.config.ts` 将 `/api/:path*` 转发到后端 |
| Smooth Scroll | Lenis + GSAP ScrollTrigger |
| Theme Applier | 注入自定义主题覆盖的组件 |

## 3. 流程用词

| 用词 | 含义 |
|---|---|
| Theme | 业务主题或 Epic，如 `readme-polish`、`nav-performance` |
| PRD | `docs/outputs/prd/{theme}/prd.md` |
| Handoff | `docs/outputs/handoff/{theme}/{task}.md`（覆盖式） |
| Report | `docs/outputs/report/{theme}/` 调研分析 |
| Gate | 进入下一阶段前必须通过的 Review |
| Awaiting-review | 实施完成，等待 Review |
| Archive | 过时产物移入对应 `archive/` |

## 4. 禁用词

- 不要把 `Digital Garden` 称为「博客模板」或「CMS 皮肤」。
- 不要把 `Style`（视觉预设）称为「主题」——theme 保留给后台自定义主题配置。
- 不要把 README Showcase 称作 Preview Gallery；本仓无资产预览站。
- 不要写 `docs/output/`（单数）或 `docs/agents/language.md` / `context.md`。
