# domain.md

> 领域模型与模块边界。

## 1. 系统边界

```text
┌─────────────────────────────────────────┐
│              Blog (本仓库)               │
│  Next.js 16 · React 19 · TypeScript 5   │
└─────────────────┬───────────────────────┘
                  │ /api/*
┌─────────────────▼───────────────────────┐
│         spring_server (Java API)        │
│         业务数据、文件、配置             │
└─────────────────┬───────────────────────┘
                  │ 管理接口
┌─────────────────▼───────────────────────┐
│         spring_admin (Vue Admin)        │
│         内容运营、站点配置               │
└─────────────────────────────────────────┘
```

## 2. 前端模块

| 模块 | 路由 | 职责 |
|---|---|---|
| Home | `/` | 首屏、聚合 Rail、状态卡片 |
| Writing | `/writing` | 文章列表、归档 |
| Article | `/writing/[slug]` | 文章详情、Markdown 渲染 |
| Notes | `/notes` | 短记流 |
| Gallery | `/gallery` | 图片墙、Lightbox |
| Footprints | `/footprints` | 足迹地图、旅行回顾 |
| Love | `/love` | 爱情时间线、愿望清单 |
| Letter | `/letter` | 时间胶囊信件 |
| Achievements | `/achievements` | 成就与奖章 |
| Pond | `/pond` | 留言板 |
| About | `/about` | 个人简介 |
| Now | `/now` | 当前状态 |

## 3. 核心实体

- **Article**：长文，含 frontmatter、Markdown body、分类、标签
- **Note**：短内容
- **GalleryItem**：图片 / 视频，含分类、元数据
- **Footprint**：地理坐标 + 时间 + 描述
- **LoveEvent**：关系时间线事件
- **Achievement**：成就徽章
- **PondMessage**：留言

## 4. 公共配置

- `page.theme.enabled` 控制自定义主题注入
- 风格预设：`life` / `swiss` / `minimalist` / `glass` / `brutalist`

## 5. 数据流

```text
Server Component
  → src/api/* (SERVER_API_BASE_URL)
  → fallback src/data/* · src/mock/*

Client Component
  → src/hooks/* (useArticles · useSysConfig · …)
  → browser /api (NEXT_PUBLIC_API_BASE_URL)
  → Next.js rewrites → spring_server
```
