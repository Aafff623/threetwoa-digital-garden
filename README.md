# Threetwoa Digital Garden

> *个人博客与生活档案馆前端 —— 把长文、照片、足迹与私人记忆收进同一片数字花园。*

**语言**：[中文](./README.md) · [English](./README.en.md)

<p align="center">
  <img src="assets/images/readme/banner.png" alt="Threetwoa Digital Garden 横幅" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.9-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-%3E%3D20.9-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/License-Proprietary-6B7280?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Status-Active-22C55E?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Version-0.1.0-0EA5E9?style=for-the-badge" alt="Version" />
</p>

<p align="center">
  <a href="#为什么">为什么</a> ·
  <a href="#功能">功能</a> ·
  <a href="#效果展示">效果展示</a> ·
  <a href="#快速开始">快速开始</a> ·
  <a href="#架构">架构</a> ·
  <a href="#访问链路">访问链路</a> ·
  <a href="#目录结构">目录结构</a> ·
  <a href="#路线图">路线图</a> ·
  <a href="#文档">文档</a>
</p>

---

## 为什么

个人内容很少会待在同一个地方：文字在笔记软件，照片在相册，轨迹在地图，私密记忆在社交平台——各自时间线不同，导出也互不兼容。

**Threetwoa Digital Garden** 把这些面收进同一套有意设计的前端：

- 把长文、短记、照片墙、足迹与时间胶囊当作同一档案的不同叶子，而不是互不相干的信息流
- 用 Blog（本仓库）/ Admin / Server 三端分责：展示、运营、持久化边界清晰
- 以 Next.js App Router 做服务端优先渲染，GSAP + Lenis 提供杂志式动效，同时不牺牲结构

这不是通用 CMS 皮肤，也不是无限瀑布相册。它是一座可以持续浇灌、修剪、生长的 **数字花园**。

## 功能

<p align="center">
  <img src="assets/images/readme/features.png" alt="功能总览：文章、照片墙、足迹、恋爱纪实、时间胶囊、成就、鱼塘、主题系统" width="100%" />
</p>

| 模块 | 说明 | 状态 |
| --- | --- | --- |
| **文章** | 列表、分类、归档、搜索与 Markdown 阅读 | ✅ 可用 |
| **照片墙** | 瀑布流画廊，灯箱与分类浏览 | ✅ 可用 |
| **足迹** | 地图标记与行程回顾 | ✅ 可用 |
| **恋爱纪实** | 共同时间线、愿望清单与记忆轨 | ✅ 可用 |
| **时间胶囊** | 写给未来的信，到期揭晓 | ✅ 可用 |
| **成就** | 个人里程碑与收集徽章 | ✅ 可用 |
| **鱼塘** | 访客留言、点赞与回复 | ✅ 可用 |
| **主题系统** | 五套预设：`life` / `swiss` / `minimalist` / `glass` / `brutalist` | ✅ 可用 |
| **响应式壳层** | 自适应布局与暗色友好 token | ✅ 可用 |
| **动效** | Lenis 平滑滚动 + GSAP ScrollTrigger | ✅ 可用 |

> **边界**：v0.1 面向单人站点。Admin 负责内容管理；多租户与团队协作不在当前范围。

## 效果展示

以下为 Playwright 在 `1600×900` 视口下的真机截图。完成本地 [快速开始](#快速开始) 后，可按推荐路径自行走查。

### 推荐演示路径

1. 打开首页，观察首屏、导航与滚动动效  
2. 进入 `/writing`，浏览文章列表与归档分组  
3. 点开任意文章，查看 Markdown 正文、提示块与代码高亮  
4. 访问 `/gallery` 与 `/about`，感受照片墙与关于页氛围  

### 页面相册

| 页面 | 截图 |
| --- | --- |
| **首页** | <img src="assets/images/readme/showcase-home.png" alt="首页" width="100%" /> |
| **文章列表** | <img src="assets/images/readme/showcase-writing.png" alt="文章列表" width="100%" /> |
| **文章详情** | <img src="assets/images/readme/showcase-article-detail.png" alt="文章详情" width="100%" /> |
| **照片墙** | <img src="assets/images/readme/showcase-gallery.png" alt="照片墙" width="100%" /> |
| **关于** | <img src="assets/images/readme/showcase-about.png" alt="关于页" width="100%" /> |

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
  <img src="assets/images/readme/architecture.png" alt="系统架构：访客/编辑 → Blog/Admin → Spring Boot API → MySQL 与对象存储" width="100%" />
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
  <img src="assets/images/readme/tech-stack.png" alt="前端技术栈分层：框架、样式、动效、数据、内容" width="100%" />
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
  <img src="assets/images/readme/workflow.png" alt="访客主链路：首页 → 文章列表 → 阅读 → 生活面 → 互动" width="100%" />
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
  <img src="assets/images/readme/structure.png" alt="仓库目录结构：src/ 树与 Server/Client/Theme 约定" width="100%" />
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
└─ data/             # 轻量静态内容
```

**约定**

- 新接口优先放进 `src/api/*`，不要写在组件里
- 新页面遵循 `src/app/{route}/page.tsx`
- 首屏优先服务端拉取并带本地回退；需要交互时再用客户端 Hook

## 路线图

| 阶段 | 目标 | 状态 |
| --- | --- | --- |
| MVP | 文章、照片墙、关于、主题切换 | ✅ 完成 |
| 生活档案 | 足迹、恋爱、时间胶囊、成就、鱼塘 | ✅ 完成 |
| 体验打磨 | 动效、加载性能、SEO | 🟡 进行中 |
| 内容运营 | Admin 与 Server 管理能力补齐 | 🟡 进行中 |
| 分发能力 | i18n、RSS、Open Graph 出图 | ⬜ 规划中 |

## 文档

| 文档 | 路径 | 说明 |
| --- | --- | --- |
| 开发约定 | [`CLAUDE.md`](./CLAUDE.md) | 架构、命令、环境变量与编码规范 |
| 英文 README | [`README.en.md`](./README.en.md) | English documentation |
| README 配图 brief | [`docs/output/prd/readme-diagrams/readme-diagram-brief.md`](./docs/output/prd/readme-diagrams/readme-diagram-brief.md) | 章节与配图契约 |
| GPT 出图说明 | [`docs/output/prd/readme-diagrams/readme-image-prompts.md`](./docs/output/prd/readme-diagrams/readme-image-prompts.md) | 元素、参照与 Prompt |
| 本地预览页 | [`readme-preview.html`](./readme-preview.html) | 静态渲染 README 与资源自检 |
| README 资源目录 | [`assets/images/readme/`](./assets/images/readme/) | banner / 信息图 / showcase |
| 资源说明 | [`assets/README.md`](./assets/README.md) | 媒体约定 |

> **Preview 声明**：本仓是单产品站点，没有独立组件 Gallery / demo 墙；产品界面由 **效果展示（Showcase）** 覆盖。

## 开源说明

当前未附带开源许可证。在补充根目录 `LICENSE` 之前，**代码保留全部权利**。

公开部署前请检查：

- `.env*` 不得包含令牌、数据库密码或云存储密钥  
- `public/`、`assets/` 与 mock 数据中不要留下不打算公开的照片或个人信息  
- 地图坐标、恋爱记录、时间信件等应由部署者替换为自己的数据  

---

<p align="center">
  <strong>Threetwoa Digital Garden</strong> · 有意的归档 · 克制的动效 · 可回退的数据层
</p>
