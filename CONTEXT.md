# CONTEXT.md

> Threetwoa Digital Garden（三两园）领域上下文：术语、硬约束与技术栈事实。  
> 单一事实源；流程路径见 `AGENTS.md` / `LANGUAGES.md`。

## 1. 项目定位

**三两园 · Sanliang Garden**（npm 包名 `threetwoa-digital-garden`）是个人博客与生活归档前端，属于三件套系统的公开展示层：

| 端 | 仓库 | 职责 |
|---|---|---|
| **Blog**（本仓） | `spring_blogs` / [threetwoa-digital-garden](https://github.com/Aafff623/threetwoa-digital-garden) | Next.js 访客侧展示 |
| **Admin** | [spring_admin](https://github.com/Aafff623/spring_admin) | Vue 内容与站点配置 |
| **Server** | [spring_server](https://github.com/Aafff623/spring_server) | Java Spring Boot API / 持久化 |

本仓**不**承担持久化与内容管理；本地可在后端不可用时回退静态数据预览 UI。

## 2. 领域术语

| 术语 | 含义 |
|---|---|
| **Digital Garden / 数字花园** | 长期维护、可生长、intentionally curated 的公开内容归档 |
| **Article / Writing** | 长文模块（`/writing`） |
| **Note** | 碎片短内容（`/notes`） |
| **Gallery** | 图片墙（`/gallery`） |
| **Footprints** | 足迹 / 旅行回顾（`/footprints`） |
| **Love archive** | 私密关系时间线与记忆（`/love`） |
| **Time Capsule / Letter** | 定时公开的信件（`/letter`） |
| **Achievement** | 里程碑与奖章（`/achievements`） |
| **Pond** | 留言板（`/pond`） |
| **Now** | 当前状态（正在读 / 听 / 做，`/now`） |
| **Archive** | 按年索引的文章归档（`/archive`） |
| **Style / 视觉风格** | `life` / `swiss` / `minimalist` / `glass` / `brutalist` 五套可切换预设 |
| **Style Console** | 右下角悬浮风格切换器 |
| **Theme Applier** | 按后台公开配置注入自定义主题覆盖 |
| **Rail** | 首页横向滚动内容条（如 ArticleRail / GalleryRail） |
| **Tape Station** | 页面顶/底滚动磁带装饰条 |
| **Smooth Scroll** | Lenis + GSAP ScrollTrigger 平滑滚动 |
| **Showcase** | README 产品主链路真机截图（`showcase-*.png`） |
| **Preview（本仓）** | **无**资产 Gallery 预览站；仅有 README 本地预览壳 `preview-readme.html` |

不确定项标注 `【待确认】`：对外品牌英文名是否统一为 Sanliang Garden（与仓库名 threetwoa 并存）。

## 3. 硬约束

### 3.1 数据获取

- Server Components 直接调用 `src/api/*`，失败时回退 `src/data/*` 或 `src/mock/*`。
- Client Components 通过 `src/hooks/*` 经浏览器 `/api` 代理访问后端，同样具备本地回退。
- 浏览器端 `NEXT_PUBLIC_API_BASE_URL` 固定为 `/api`（同源 + Next rewrite）。
- `SERVER_API_BASE_URL` 用于 Server Components、SSR 与 rewrites。

### 3.2 样式

- 默认视觉风格：`life`。
- 主题变量：`src/app/globals.css` 与 `src/app/styles/themes/*.css`。
- `ThemeApplier` 注入样式节点 ID 必须为 `custom-theme-style`。
- 风格选择存 `localStorage`：`atlas_style`、`atlas_style_mode`。

### 3.3 构建

- `next.config.ts`：`output: "standalone"`；`images.unoptimized: true`。
- 远程图片模式允许 Unsplash 与 `localhost:8080`。

### 3.4 媒体与文档资产

- README / 文档媒体：`assets/images/readme/`（及按需 `avatar/`）。
- 应用静态资源：`public/`。
- 禁止 `docs/images/`；任务产物用 **`docs/outputs/`**（复数）。
- 禁止维护 `docs/agents/language.md` / `docs/agents/context.md`。

### 3.5 导航分组

顶层导航按 4 大类（`navGroups`，见 `src/components/Navbar.tsx`）：

- **Words 文字**：Writing · Notes · Archive  
- **Visual 影像**：Gallery · Footprints  
- **Life 生活**：Love · Trophy · Now · Letter  
- **About 关于**：About · Pond  

桌面（≥ `md`）：大类胶囊 + hover 二级面板；手机：汉堡 + accordion。后台 `page.*.enable` 过滤子项。

## 4. 技术栈事实

| 层级 | 技术 |
|---|---|
| Framework | Next.js 16 App Router、React 19、TypeScript 5 |
| Styling | Tailwind CSS 4、CSS variables、五套 style 预设 |
| Motion | GSAP + ScrollTrigger、Lenis、Framer Motion |
| Data | Axios、同构 `src/api/*`、hooks、静态兜底 |
| Content | 自定义 Markdown 渲染、Highlight.js、Leaflet |
| Icons | `src/icon/` 自定义 TSX；另有 Phosphor / Lucide 依赖 |
| Test | Vitest（`npm test` / `npm run test`）；Playwright 用于测量脚本与 Showcase 截图 |
| Deploy | Vercel Demo：`threetwoa-digital-garden.vercel.app` |

## 5. 产品层根与入口

- 产品层根：`src/`
- App Router：`src/app/**/page.tsx`（约 13 个页面路由）
- 共享壳：`src/app/layout.tsx`（Navbar / Footer / SmoothScroll / StyleConsole / TapeStation 等）
- README 本地预览壳：仓库根 `preview-readme.{html,css,js}`（端口 **8095**，无 port-registry）
- 深度分析 Canvas：`canvases/spring-blogs-deep-analysis.canvas.tsx`（只读参考，不改 spring_server）

## 6. 开发命令

| 命令 | 用途 |
|---|---|
| `npm run dev` | 开发服务器（默认 :3000） |
| `npm run lint` | ESLint |
| `npm run build` / `npm run start` | 生产构建 / 启动 |
| `npm test` | Vitest |
| `npm run measure:nav` | 导航延迟测量（Playwright） |
| `python -m http.server 8095` | README 预览壳（访问 `/preview-readme.html`） |

## 7. 相关文档

- `CLAUDE.md` — 维护协议与编码约定  
- `LANGUAGES.md` — 共享用词  
- `AGENTS.md` — Agent 硬约束与路径表  
- `docs/outputs/report/project-init-full-2026-08-04/` — 本轮 Full init 五维调研  
