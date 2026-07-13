# CONTEXT.md

> Threetwoa Digital Garden 领域上下文：术语、硬约束与技术栈事实。

## 1. 项目定位

**Threetwoa Digital Garden** 是一个个人博客与生活归档前端，属于三件套系统的公开展示层：

- **Blog**（本仓库）：Next.js 16 App Router 前端
- **Admin**：Vue 管理后台（[spring_admin](https://github.com/Aafff623/spring_admin)）
- **Server**：Java Spring Boot API（[spring_server](https://github.com/Aafff623/spring_server)）

## 2. 领域术语

| 术语 | 含义 |
|---|---|
| **Digital Garden** | 长期维护、可生长、 intentionally curated 的公开内容归档 |
| **Article / Writing** | 长文内容模块（`/writing`） |
| **Note** | 碎片化短内容模块（`/notes`） |
| **Gallery** | 图片墙模块（`/gallery`） |
| **Footprints** | 足迹 / 旅行回顾模块（`/footprints`） |
| **Love archive** | 私密关系时间线与记忆模块（`/love`） |
| **Time Capsule** | 定时公开的信件 / 记忆胶囊 |
| **Achievement** | 个人里程碑与奖章模块（`/achievements`） |
| **Pond** | 留言板模块（`/pond`） |
| **Style / 视觉风格** | `life` / `swiss` / `minimalist` / `glass` / `brutalist` 五种可切换主题 |
| **Style Console** | 右下角悬浮风格切换器 |
| **Theme Applier** | 根据后台公开配置注入自定义主题覆盖 |
| **Rail** | 首页横向滚动内容条（如 ArticleRail / GalleryRail） |
| **Tape Station** | 页面顶部 / 底部的滚动磁带装饰条 |
| **Smooth Scroll** | Lenis + GSAP ScrollTrigger 驱动的平滑滚动 |

## 3. 硬约束

### 3.1 数据获取

- Server Components 直接调用 `src/api/*`，失败时回退到 `src/data/*` 或 `src/mock/*`。
- Client Components 通过 `src/hooks/*` 经浏览器 `/api` 代理访问后端，同样具备本地回退。
- 浏览器端 `NEXT_PUBLIC_API_BASE_URL` 固定为 `/api`，保持同源并由 Next.js rewrite 转发。
- `SERVER_API_BASE_URL` 用于 Server Components、SSR 与 rewrites。

### 3.2 样式

- 默认视觉风格：`life`。
- 主题变量在 `src/app/globals.css` 与 `src/app/styles/themes/*.css` 中定义。
- `ThemeApplier` 注入的自定义样式 ID 必须为 `custom-theme-style`。
- 风格选择存储在 `localStorage`：`atlas_style` 与 `atlas_style_mode`。

### 3.3 构建

- `next.config.ts` 设置 `output: "standalone"`。
- 图片未优化（`images.unoptimized: true`）。
- 远程图片模式允许 Unsplash 与 `localhost:8080`。

### 3.4 媒体资产约定

- 文档 / README 用媒体：`assets/` 下按 `images/readme/`、`images/avatar/`、`images/icon/`、`video/` 归位。
- 应用自身静态资源：`public/` 下。
- 禁止 `docs/images/`。

## 4. 技术栈事实

| 层级 | 技术 |
|---|---|
| Framework | Next.js 16 App Router, React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, CSS variables |
| Motion | GSAP + ScrollTrigger, Lenis, Framer Motion |
| Data | Axios, isomorphic API modules, hooks |
| Content | Custom Markdown renderer, Highlight.js |
| Icons | Custom TSX icons in `src/icon/` |

## 5. 开发命令

| 命令 | 用途 |
|---|---|
| `npm run dev` | 启动开发服务器 |
| `npm run lint` | ESLint |
| `npm run build` | 生产构建 |
| `npm run start` | 启动生产服务器 |

## 6. 相关文档

- `CLAUDE.md`：维护协议与详细编码约定
- `LANGUAGES.md`：共享用词
- `AGENTS.md`：Agent 硬约束与路径表
