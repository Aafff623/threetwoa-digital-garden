# LANGUAGES.md

> 共享用词入口。Agent、Issue、PRD、handoff 与 README 应使用本文件定义的术语。

## 1. 产品用词

| 中文 | 英文 | 说明 |
|---|---|---|
| 数字花园 | Digital Garden | 项目核心隐喻，指长期生长的个人归档 |
| 文章 | Article / Writing | 长文内容模块（`/writing`） |
| 短记 | Note | 碎片化短内容模块（`/notes`） |
| 画廊 | Gallery | 图片墙模块（`/gallery`） |
| 足迹 | Footprints | 旅行 / 地理标记模块（`/footprints`） |
| 爱情归档 | Love archive | 私密关系时间线与记忆模块（`/love`） |
| 成就 | Achievements | 个人里程碑与奖章模块（`/achievements`） |
| 池塘 | Pond | 留言板模块（`/pond`） |
| 时间胶囊 | Time Capsule | 定时揭示的信件 / 记忆 |
| 风格 | Style | 视觉主题：life / swiss / minimalist / glass / brutalist |
| 控制台 | Style Console | 风格切换浮层 |
| 磁带站 | Tape Station | 页面顶部 / 底部滚动磁带装饰条 |

## 2. 技术用词

| 用词 | 含义 |
|---|---|
| RSC | React Server Component，Next.js App Router 服务端组件 |
| Client Hook | `src/hooks/*` 中以 `use` 开头的客户端数据钩子 |
| Static Fallback | API 不可用时使用的 `src/data/*` 或 `src/mock/*` 本地数据 |
| Rewrite | Next.js `next.config.ts` 中将 `/api/:path*` 转发到后端 |
| Smooth Scroll | Lenis + GSAP ScrollTrigger 驱动的平滑滚动 |
| Theme Applier | 注入自定义主题覆盖的组件 |

## 3. 流程用词

| 用词 | 含义 |
|---|---|
| Theme | 一个业务主题或 Epic，如 `readme-polish`、`archive-ux` |
| PRD | `docs/output/prd/{theme}/prd.md` 中的需求文档 |
| Handoff | `docs/output/handoff/{theme}/{task}.md` 中的任务交付说明 |
| Gate | 进入下一阶段前必须通过的 Review 节点 |
| Awaiting-review | 实施完成，等待 Review 的状态 |
| Archive | 将过时 PRD / handoff 移入 `archive/` 子目录 |

## 4. 禁用词

- 不要把 `Digital Garden` 称为 "博客模板" 或 "CMS 皮肤"。
- 不要把 `Style` 称为 "主题"（theme 保留给后台自定义主题配置）。
