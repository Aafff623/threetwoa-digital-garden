<div align="center">

# 三两园 · Sanliang Garden

*"少写几行，多筑一境。"*

个人博客与生活档案馆前端 —— 把长文、照片、足迹与私人记忆，种进同一片数字花园。
Next.js 16 App Router · React 19 · TypeScript 5 · Tailwind CSS 4 · GSAP + Lenis

<p>
  <strong>中文</strong> · <a href="./README.en.md">English</a>
</p>

</div>

<p align="center">
  <img src="assets/images/readme/banner.png" alt="三两园 Sanliang Garden 横幅" width="100%" />
</p>

<p align="center">
  <a href="https://threetwoa-digital-garden.vercel.app"><img src="https://img.shields.io/badge/Demo-Live-059669?style=for-the-badge&labelColor=0f172a" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/Stack-Next.js_16_%7C_React_19_%7C_TS_%7C_Tailwind_4-3B82F6?style=for-the-badge&labelColor=0f172a" alt="Stack">
  <img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&labelColor=0f172a" alt="License">
  <a href="https://github.com/Aafff623/threetwoa-digital-garden"><img src="https://img.shields.io/github/stars/Aafff623/threetwoa-digital-garden?style=for-the-badge&labelColor=0f172a" alt="GitHub Stars"></a>
</p>

<p align="center">
  <a href="#为什么">🏯 为什么</a> ·
  <a href="#功能">✨ 功能</a> ·
  <a href="#效果展示">📸 效果展示</a> ·
  <a href="#快速开始">🚀 快速开始</a> ·
  <a href="#架构">🏗️ 架构</a> ·
  <a href="#访问链路">🧭 访问链路</a> ·
  <a href="#目录结构">📂 目录结构</a> ·
  <a href="#路线图">🗺️ 路线图</a> ·
  <a href="#文档">📚 文档</a>
</p>

---

## 为什么

个人内容很少会待在同一个地方：文字在笔记软件，照片在相册，轨迹在地图，私密记忆在社交平台——各自时间线不同，导出也互不兼容。

**三两园** 把这些面收进同一套有意设计的前端：

- 把长文、短记、照片墙、足迹与时间胶囊当作同一档案的不同叶子，而不是互不相干的信息流
- 用 Blog（本仓库）/ Admin / Server 三端分责：展示、运营、持久化边界清晰
- 以 Next.js App Router 做服务端优先渲染，GSAP + Lenis 提供杂志式动效，同时不牺牲结构

这不是通用 CMS 皮肤，也不是无限瀑布相册。它是一座可以持续浇灌、修剪、生长的 **数字花园**。

## 功能

<p align="center">
  <img src="assets/images/readme/features.png" alt="功能总览：文章、照片墙、足迹、恋爱纪实、时间胶囊、成就、鱼塘、主题系统" width="90%" />
</p>

| 模块 | 说明 | 状态 |
| --- | --- | :---: |
| **文章** | 列表、分类、归档、搜索与 Markdown 阅读 | ✅ |
| **照片墙** | 瀑布流画廊，灯箱与分类浏览 | ✅ |
| **足迹** | 地图标记与行程回顾 | ✅ |
| **恋爱纪实** | 共同时间线、愿望清单与记忆轨 | ✅ |
| **时间胶囊** | 写给未来的信，到期揭晓 | ✅ |
| **成就** | 个人里程碑与收集徽章 | ✅ |
| **鱼塘** | 访客留言、点赞与回复 | ✅ |
| **主题系统** | 五套预设：`life` / `swiss` / `minimalist` / `glass` / `brutalist` | ✅ |
| **响应式壳层** | 自适应布局与暗色友好 token | ✅ |
| **动效** | Lenis 平滑滚动 + GSAP ScrollTrigger | ✅ |

> **边界**：v0.1 面向单人站点。Admin 负责内容管理；多租户与团队协作不在当前范围。

## 效果展示

以下为 Playwright 在 `1600×900` 视口下的真机截图。完成本地 [快速开始](#快速开始) 后，可按推荐路径自行走查。

### 推荐演示路径

```
首页 hero/导航 → /writing 文章列表 → 点开文章读 Markdown
  → /gallery 照片墙灯箱 → /about 守园人氛围
```

### 页面相册

> 点击缩略图可放大查看。

| | | |
|:---:|:---:|:---:|
| [![首页](assets/images/readme/showcase-home.png)](assets/images/readme/showcase-home.png)<br><br>**首页**<br>hero · 导航 · 滚动动效 | [![文章列表](assets/images/readme/showcase-writing.png)](assets/images/readme/showcase-writing.png)<br><br>**文章列表**<br>归档分组 · 标签 · 搜索 | [![文章详情](assets/images/readme/showcase-article-detail.png)](assets/images/readme/showcase-article-detail.png)<br><br>**文章详情**<br>Markdown · 提示块 · 代码高亮 |
| [![照片墙](assets/images/readme/showcase-gallery.png)](assets/images/readme/showcase-gallery.png)<br><br>**照片墙**<br>瀑布流 · 灯箱 · 分类 | [![关于](assets/images/readme/showcase-about.png)](assets/images/readme/showcase-about.png)<br><br>**关于**<br>守园人 · 坐标 · 自我切片 | |

在线 Demo：[threetwoa-digital-garden.vercel.app](https://threetwoa-digital-garden.vercel.app)

## 快速开始

### 环境要求

- Node.js `>= 20.9.0`
- npm（或 pnpm）
- 已启动的 [spring_server](https://github.com/RRTiamo/spring_server)，默认 `http://localhost:8080/api`（仅预览 UI 时可省略；前端会回退到本地静态数据）

### 1. 克隆与安装

```bash
git clone https://github.com/Aafff623/threetwoa-digital-garden.git
cd threetwoa-digital-garden
npm ci
```

### 2. 环境变量

创建 `.env.development`：

```dotenv
# 浏览器同源请求 /api，由 Next.js rewrites 转发
NEXT_PUBLIC_API_BASE_URL=/api

# Server Component、SSR 与 rewrites 使用的后端地址
SERVER_API_BASE_URL=http://localhost:8080/api
```

生产环境使用 `.env.production`，键名相同，指向内网 API 主机。

### 3. 启动

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

### 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 开发服务器 |
| `npm run lint` | ESLint（core-web-vitals + TypeScript） |
| `npm run build` | 生产构建（`output: "standalone"`） |
| `npm run start` | 启动生产服务 |

提交前建议至少执行 `npm run lint` 与 `npm run build`。

## 架构

<p align="center">
  <img src="assets/images/readme/architecture.png" alt="系统架构：访客/编辑 → Blog/Admin → Spring Boot API → MySQL 与对象存储" width="90%" />
</p>

| 端 | 技术栈 | 职责 | 仓库 |
| --- | --- | --- | --- |
| **Blog** | Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 | 面向访客的展示前台 | 本仓库 |
| **Admin** | Vue | 内容与站点配置后台 | [spring_admin](https://github.com/RRTiamo/spring_admin) |
| **Server** | Java Spring Boot | API、鉴权、持久化与文件 | [spring_server](https://github.com/RRTiamo/spring_server) |

### 前端数据流

```text
Server Component / RSC
  → src/api/*                 （Axios · SERVER_API_BASE_URL）
  → 后端不可用时回退 src/data/* · src/mock/*

Client Component
  → src/hooks/*               （useArticles · useSysConfig 等）
  → 浏览器 /api               （NEXT_PUBLIC_API_BASE_URL）
  → Next.js rewrites          → spring_server
```

### 技术栈分层

<p align="center">
  <img src="assets/images/readme/tech-stack.png" alt="前端技术栈分层：框架、样式、动效、数据、内容" width="90%" />
</p>

| 分层 | 选型 |
| --- | --- |
| **框架** | Next.js 16 App Router、React 19、TypeScript 5 |
| **样式** | Tailwind CSS 4、CSS 变量主题、五套视觉预设 |
| **动效** | GSAP + ScrollTrigger、Lenis、Framer Motion |
| **数据** | Axios、同构 API 模块、Hooks、静态兜底 |
| **内容** | 自定义 Markdown、Highlight.js、Leaflet |

## 访问链路

<p align="center">
  <img src="assets/images/readme/workflow.png" alt="访客主链路：首页 → 文章列表 → 阅读 → 生活面 → 互动" width="90%" />
</p>

| 步骤 | 用户行为 | 技术侧发生了什么 |
| --- | --- | --- |
| 1 | 打开首页 | RSC 预取公共配置与最新文章，首屏直出 |
| 2 | 浏览 `/writing` | 客户端 Hook 拉取列表；失败则回退 `writingData` |
| 3 | 进入文章详情 | App Router `[slug]` 服务端渲染 Markdown |
| 4 | 切换主题 | `StyleConsole` 写入 `localStorage`，CSS 变量即时生效 |
| 5 | 鱼塘留言 | 浏览器请求 `/api/pond/*`，由 rewrite 转到 spring_server |

## 目录结构

<p align="center">
  <img src="assets/images/readme/structure.png" alt="仓库目录结构：src/ 树与 Server/Client/Theme 约定" width="90%" />
</p>

```text
src/
├─ api/              # 统一 Axios 与领域接口
├─ app/              # App Router 页面、布局、主题 CSS
│  └─ styles/themes/ # life · swiss · minimalist · glass · brutalist
├─ components/       # 页面区块与可复用 UI
├─ hooks/            # 客户端数据与配置 Hook
├─ icon/             # 图标映射
├─ interface/        # 共享 TypeScript 类型
├─ mock/             # 离线 / 失败兜底数据
└─ data/             # 轻量静态内容（品牌身份、文章、相册等）
```

**约定**

- 新接口优先放进 `src/api/*`，不要写在组件里
- 品牌身份统一走 [`src/data/identity.ts`](./src/data/identity.ts)，不散落硬编码
- 新页面遵循 `src/app/{route}/page.tsx`
- 首屏优先服务端拉取并带本地回退；需要交互时再用客户端 Hook

## 路线图

| 阶段 | 目标 | 状态 |
| --- | --- | :---: |
| MVP | 文章、照片墙、关于、主题切换 | ✅ 完成 |
| 生活档案 | 足迹、恋爱、时间胶囊、成就、鱼塘 | ✅ 完成 |
| 体验打磨 | 动效、加载性能、SEO | 🟡 进行中 |
| 内容运营 | Admin 与 Server 管理能力补齐 | 🟡 进行中 |
| 分发能力 | i18n、RSS、Open Graph 出图 | ⬜ 规划中 |

## 文档

| 文档 | 路径 | 说明 |
| --- | --- | --- |
| 开发约定 | [`CLAUDE.md`](./CLAUDE.md) | 架构、命令、环境变量与编码规范 |
| 项目标准 | [`AGENTS.md`](./AGENTS.md) · [`CONTEXT.md`](./CONTEXT.md) · [`LANGUAGES.md`](./LANGUAGES.md) | Agent 约束、域事实、共享词表 |
| 英文 README | [`README.en.md`](./README.en.md) | English documentation |
| 初始化决策 | [`docs/adr/0001-apply-project-init.md`](./docs/adr/0001-apply-project-init.md) | project-init 与分支统一 ADR |
| README 配图 brief | [`docs/output/prd/readme-diagrams/readme-diagram-brief.md`](./docs/output/prd/readme-diagrams/readme-diagram-brief.md) | 章节与配图契约 |
| 资源说明 | [`assets/README.md`](./assets/README.md) · [`assets/ASSET-MANIFEST.md`](./assets/ASSET-MANIFEST.md) | 媒体约定与资产清单 |

## 开源说明

本项目采用 [MIT License](./LICENSE)。

公开部署前请检查：

- `.env*` 不得包含令牌、数据库密码或云存储密钥
- `public/`、`assets/` 与 mock 数据中不要留下不打算公开的照片或个人信息
- 地图坐标、恋爱记录、时间信件等应由部署者替换为自己的数据

---

<div align="center">

**三两园 · Sanliang Garden** · 有意的归档 · 克制的动效 · 可回退的数据层

</div>
