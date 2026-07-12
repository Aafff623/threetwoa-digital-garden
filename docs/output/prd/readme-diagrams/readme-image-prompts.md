# Threetwoa Digital Garden — README 配图 GPT 出图说明

> 用途：按 **README Polish** 契约，给 GPT Image / ChatGPT 逐张生成专业 README 配图。  
> 落盘目录：`assets/images/readme/`  
> 关联：`README.md` · `docs/output/prd/readme-diagrams/readme-diagram-brief.md`

---

## 0. 全局统一规范（每张图都遵守）

### 0.1 项目定位（一句话）

**Threetwoa Digital Garden** — 个人博客 + 生活档案馆前端：长文、照片、足迹、恋爱纪实、时间胶囊等汇聚在同一套可切换视觉风格的展示站。

### 0.2 视觉总调（Digital Garden · Editorial）

| 维度 | 规定 |
|---|---|
| **气质** | 编辑部杂志 × 数字花园 × 温暖档案室；专业、安静、有质感，不要科技霓虹/赛博朋克 |
| **主色** | Warm cream `#F7F4EE` · Parchment `#EDE8DF` · Sage green `#8FAF96` · Dusty rose `#C99B9B` · Charcoal `#2F3437` |
| **辅色** | Soft sky `#A8C5D4` · Muted violet `#9B8FB8` · Amber paper `#D4B483` · Soft ink `#4A5568` |
| **材质** | 网格纸、宣纸/牛皮纸、polaroid 边框、蜡封、细藤蔓、轻微胶片颗粒 |
| **光影** | 柔和自然侧光、浅景深、轻微阴影；整体偏 high-key 明亮 |
| **字体策略** | **Banner 禁止可读大字**；架构/技术栈/流程/结构图允许清晰英文标签（Inter / 简洁无衬线），字要大、少、准 |
| **禁止** | 真人正脸、可识别 logo 商标、霓虹、密密麻麻 UI 截图、股票商务握手图、过曝 3D 塑料感 |

### 0.3 与「壁纸」的关系

你说「按壁纸生成」时，建议：

1. **把壁纸当风格/氛围参考**（光、色、材质、情绪），不要整图复刻壁纸构图。  
2. **每张 README 图仍要完成自己的信息任务**（Banner 氛围、Architecture 讲清三端……）。  
3. 若有多张壁纸，可轮换参考，但 **全套 6 张必须同一色板与同一材质语言**。

### 0.4 出图优先级（建议顺序）

| 顺序 | 文件名 | 是否给 GPT | 说明 |
|---:|---|:---:|---|
| 1 | `banner.png` | ✅ | 氛围横幅，最适合壁纸风格 |
| 2 | `features.png` | ✅ | 功能模块信息图 |
| 3 | `architecture.png` | ✅ | 三端系统架构 |
| 4 | `tech-stack.png` | ✅ | 前端技术分层 |
| 5 | `workflow.png` | ✅ | 访客主链路 |
| 6 | `structure.png` | ✅ | 仓库目录结构 |
| — | `showcase-*.png` | ❌ | **真机 Playwright 截图**，不要用 GPT 假截图替代 |

### 0.5 导出与命名契约

| 文件 | 建议像素 | 宽高比 | README 引用路径 |
|---|---|---|---|
| `banner.png` | **1440×480** 或 2400×800 | **3:1**（无 3:1 则 16:9 再中心裁切） | `assets/images/readme/banner.png` |
| `features.png` | **1600×900** | 16:9 | `assets/images/readme/features.png` |
| `architecture.png` | **1600×900** | 16:9 | `assets/images/readme/architecture.png` |
| `tech-stack.png` | **1600×900** | 16:9 | `assets/images/readme/tech-stack.png` |
| `workflow.png` | **1600×900** | 16:9 | `assets/images/readme/workflow.png` |
| `structure.png` | **1400×933** 或 1600×1067 | **3:2** | `assets/images/readme/structure.png` |

生成后覆盖同名文件即可；`README.md` 路径已写好，无需改代码。

### 0.6 给 GPT 的「系统指令」模板（可粘贴到对话开头）

```text
You are generating professional GitHub README illustrations for "Threetwoa Digital Garden",
a personal blog & life-archive frontend (Next.js).

Global style: soft editorial digital garden — warm cream, sage green, dusty rose, charcoal,
parchment textures, polaroid frames, wax seals, subtle vines, grid paper. Calm, premium, bright.
NOT cyberpunk, NOT neon, NOT corporate stock photo, NOT cluttered product UI mockups.

Keep a consistent palette and material language across the full set.
Prefer clean composition, generous margins, and readable structure.
When labels are required, use short English only, large high-contrast sans-serif text.
```

---

## 1. `banner.png` — README 页首横幅

### 1.1 基本信息

| 项 | 内容 |
|---|---|
| **文件名** | `banner.png` |
| **用途** | GitHub README 最顶部的品牌氛围图 |
| **回答的问题** | 「这个项目给人什么感觉？」 |
| **信息密度** | 极低（几乎纯氛围，**不要当信息图**） |
| **建议尺寸** | 1440×480（3:1） |
| **风格偏向** | 壁纸级静物 / 编辑部桌面俯拍 |

### 1.2 一句话描述

温暖的数字花园桌面：polaroid、蜡封信、地球仪图钉、藤蔓与淡淡的代码光，像一本实体杂志的封面静物。

### 1.3 详细描述

俯视或 45° 斜俯的桌面场景。桌面是网格笔记本纸或浅色木纹。散落：2–3 张无清晰人脸的 polaroid（风景/植物即可）、带 dusty-rose 蜡封的信封、一本打开的笔记本、一枚地图图钉、小型复古地球仪或折叠地图一角、几片尤加利/鼠尾草叶片。中间可有一台偏虚化的平板/小屏幕，屏幕上是抽象代码高亮（**不可读成真实商标或完整代码**）。整体像「写作 + 旅行 + 档案」的仪式感，而不是办公室。

### 1.4 参照信息

| 类型 | 参照 |
|---|---|
| **产品语义** | 博客 + 生活档案 + 可切换主题的个人站 |
| **情绪参照** | Kinfolk / 日系文具桌面 / 轻胶片旅行日记 |
| **现有资产** | 可对照当前 `assets/images/readme/banner.png` 的构图密度（桌面静物） |
| **壁纸用法** | 只借光色与颗粒感；构图按「横幅安全区」重排，左右可放负空间 |
| **README 位置** | 标题与副标题下方、徽章上方 |

### 1.5 元素清单

| 元素 | 是否必须 | 备注 |
|---|:---:|---|
| Polaroid 相框 2–3 张 | ✅ | 无清晰人脸 |
| 蜡封信封 / 折叠信纸 | ✅ | dusty rose 蜡封 |
| 藤蔓 / 叶片 | ✅ | sage green |
| 网格纸 / 笔记本纹理 | ✅ | 背景材质 |
| 地球仪或地图 + 图钉 | 推荐 | 对应「足迹」模块 |
| 抽象代码屏（轻微虚化） | 推荐 | 对应「开发者博客」 |
| 大号项目标题字 | ❌ | **禁止**可读品牌字压图 |
| 完整 UI 浏览器窗口 | ❌ | 禁止 |

### 1.6 构图建议

```
[ 左：polaroid + 叶片 ]   [ 中：信封 / 虚化屏幕 ]   [ 右：地球仪 + 负空间 ]
横向 3:1 安全区，上下留白，适合 GitHub 窄栏缩放
```

### 1.7 英文 Prompt（直接喂 GPT）

```text
A wide cinematic GitHub README banner, aspect ratio 3:1 (or 16:9 for later center-crop to 1440x480).
Project mood: Threetwoa Digital Garden — personal blog and life archive.

Top-down / soft 45-degree still life on warm cream grid-paper desk.
Elements: 2–3 polaroid frames (landscapes/plants only, no faces), dusty-rose wax-sealed envelopes,
folded letters, a muted globe with map pins, eucalyptus or sage leaves, faint film grain,
one slightly blurred tablet showing abstract code glow (not readable text, no logos).

Palette: warm cream, parchment, sage green, dusty rose, charcoal gray.
Soft natural side light, shallow depth of field, premium editorial photography.
Clean composition with breathing room left/right for a header.

Avoid: faces, readable titles/logos, neon cyberpunk, corporate stock handshake, cluttered UI mockups, watermark.
```

### 1.8 中文补充提示（可选）

> 横版壁纸质感的桌面静物，数字花园博客气质，奶油色网格纸，蜡封信和拍立得，不要人脸和文字。

---

## 2. `features.png` — 核心功能一览

### 2.1 基本信息

| 项 | 内容 |
|---|---|
| **文件名** | `features.png` |
| **用途** | Features 章节配图，概括产品能力面 |
| **回答的问题** | 「这个站有哪些内容模块？」 |
| **信息密度** | 中高（卡片网格 + 少量英文标签） |
| **建议尺寸** | 1600×900（16:9） |

### 2.2 一句话描述

编辑部风格的「功能花园地图」：8–10 张圆角卡片排布成模块墙，藤蔓做弱连接，像展柜而不是流程图。

### 2.3 详细描述

浅色奶油底 + 大白卡片画板。上方小标题区（可写 `Feature Map` 或不要字，二选一，**有字则只这一处大标题**）。主体为 **2×4 或 2 行网格** 的模块卡：

1. Articles  
2. Gallery  
3. Footprints  
4. Love Archive  
5. Time Capsule  
6. Achievements  
7. Pond (Guestbook)  
8. Themes / Motion  

每张卡：圆角、柔阴影、一个极简线性图标（书、相框、地图钉、心、沙漏、奖章、鱼/涟漪、调色板）、英文短标签、一行极短副文案（可选）。底部可有一条「Cross-cutting」横条：`5 Styles · Lenis+GSAP · API Fallback`。

### 2.4 参照信息

| 类型 | 参照 |
|---|---|
| **产品模块** | README Features 表（文章/照片墙/足迹/恋爱/胶囊/成就/鱼塘/主题/动效） |
| **布局参照** | Notion 功能墙 / Linear marketing card grid / 博物馆展签 |
| **旧 SVG 语义** | `assets/images/readme/_svg/features.svg`（卡片分区与 READY 语义） |
| **不要参照** | 真实产品 UI 截图拼贴 |

### 2.5 元素清单

| 元素 | 必须 | 说明 |
|---|:---:|---|
| 8 张功能卡片 | ✅ | 名称用英文，字号够大 |
| 每卡 1 个极简图标 | ✅ | 线描/剪影，非写实 |
| 统一圆角与阴影 | ✅ | 同一组件语言 |
| 藤蔓弱连接线 | 可选 | 点缀，不抢层级 |
| `READY` 小标 | 可选 | 全绿一致即可 |
| 真人 / 假截图 | ❌ | 禁止 |

### 2.6 标签文案（精确可用）

| 卡片标题 | 副文案（可选） |
|---|---|
| Articles | List · Markdown |
| Gallery | Masonry · Lightbox |
| Footprints | Map · Trips |
| Love Archive | Timeline · Memory |
| Time Capsule | Future letters |
| Achievements | Medals · Milestones |
| Pond | Guestbook |
| Style System | 5 presets · Motion |

### 2.7 英文 Prompt

```text
Infographic-style 16:9 image for GitHub README section "Features".
Project: Threetwoa Digital Garden.

Clean editorial feature map on warm cream / parchment background with a large soft white canvas.
Layout: 2-row card grid (8 rounded cards) with soft shadows, sage/sky/violet/amber/rose tinted fills
(subtle, not neon). Each card has one minimal line icon + large English title + short subtitle.

Cards:
1) Articles — List · Markdown
2) Gallery — Masonry · Lightbox
3) Footprints — Map · Trips
4) Love Archive — Timeline · Memory
5) Time Capsule — Future letters
6) Achievements — Medals · Milestones
7) Pond — Guestbook
8) Style System — 5 presets · Motion

Optional bottom strip: "Cross-cutting: 5 Styles · Lenis+GSAP · API Fallback".
Optional soft vine lines connecting cards lightly.

Style: premium product marketing diagram, digital garden palette, high readability.
Avoid: faces, real UI screenshots, tiny unreadable text, cyberpunk, 3D plastic icons, logos of brands.
```

---

## 3. `architecture.png` — 三端系统架构

### 3.1 基本信息

| 项 | 内容 |
|---|---|
| **文件名** | `architecture.png` |
| **用途** | Architecture 章节：讲清 Blog / Admin / Server 分工 |
| **回答的问题** | 「系统怎么拆？数据往哪走？」 |
| **信息密度** | 高（节点 + 箭头 + 短标签） |
| **建议尺寸** | 1600×900 |

### 3.2 一句话描述

从左到右的分层架构：访客/编辑 → Blog/Admin 前端 → Spring Boot API → MySQL + 对象存储。

### 3.3 详细描述

浅色画板，标题 `System Architecture`，副标题 `Threetwoa · Blog · Admin · Server`。

**左栏（角色）**

- Visitor（Public traffic）  
- Editor（Content ops）

**中左（应用）**

- Blog Frontend：Next.js 16 · React 19 · SSR/RSC · Tailwind 4  
- Admin Dashboard：Vue · Config · Media · Posts  

**中右（服务）**

- API Server：Java · Spring Boot · Auth · REST · Files  

**右栏（存储）**

- MySQL（Primary store）  
- Object Storage（Media assets）  

箭头标签：`HTTPS`、`/api proxy`、`REST`。  
底部浅色说明条：`Data contract` — Blog 与 Admin 共用 API；API 不可用时 Blog 回退 `src/data/*` 与 `src/mock/*`。

### 3.4 参照信息

| 类型 | 参照 |
|---|---|
| **真实系统** | Blog 本仓 · Admin `spring_admin` · Server `spring_server` |
| **环境变量** | `NEXT_PUBLIC_API_BASE_URL=/api` · `SERVER_API_BASE_URL` |
| **布局范式** | C4 container 简化版 / 经典三层 + 双前端 |
| **旧图语义** | `_svg/architecture.svg` |
| **壁纸用法** | 仅继承色板与纸张质感；**结构必须清晰可读** |

### 3.5 元素清单

| 元素 | 必须 | 颜色建议 |
|---|:---:|---|
| Visitor 节点 | ✅ | mint/sage |
| Editor 节点 | ✅ | warm orange/cream |
| Blog Frontend 大卡 | ✅ | sky blue |
| Admin Dashboard 大卡 | ✅ | soft violet |
| API Server 大卡 | ✅ | emerald |
| MySQL | ✅ | amber |
| Object Storage | ✅ | soft rose |
| 箭头 + 短标签 | ✅ | charcoal/gray |
| 底部 Data contract 条 | 推荐 | slate 浅底 |
| 云厂 logo | ❌ | 禁止商标 |

### 3.6 布局草图

```
Visitor ──HTTPS──► Blog Frontend ──/api proxy──► API Server ──► MySQL
Editor  ──HTTPS──► Admin Dashboard ──REST───────►     │
                                                      └──► Object Storage
```

### 3.7 英文 Prompt

```text
Clean system architecture diagram, 16:9, for GitHub README.
Title: "System Architecture". Subtitle: "Threetwoa · Blog · Admin · Server".

Left actors:
- Visitor (Public traffic)
- Editor (Content ops)

Middle apps:
- Blog Frontend — Next.js 16 · React 19 · SSR/RSC · Tailwind 4
- Admin Dashboard — Vue · Content console · Config · Media · Posts

Right services/storage:
- API Server — Java · Spring Boot · Auth · REST · Files
- MySQL — Primary store
- Object Storage — Media assets

Connections with short labels: HTTPS, /api proxy, REST.
Soft rounded cards, subtle pastel fills, cream parchment background, editorial digital-garden palette
(sage, sky, violet, amber, rose). Large readable English labels. Soft drop shadows. Professional product doc style.

Bottom note bar: "Data contract — Blog & Admin share the Spring Boot API; Blog falls back to local static data if API is down."

Avoid: brand logos, 3D isometric clutter, neon, faces, tiny text, dense network spaghetti.
```

---

## 4. `tech-stack.png` — 前端技术栈分层

### 4.1 基本信息

| 项 | 内容 |
|---|---|
| **文件名** | `tech-stack.png` |
| **用途** | 展示前端分层，不是全家桶 logo 墙 |
| **回答的问题** | 「前端从上到下用什么？」 |
| **信息密度** | 中（5 层横条） |
| **建议尺寸** | 1600×900 |

### 4.2 一句话描述

五层蛋糕式技术栈：Framework → Styling → Motion → Data → Content，每层一条宽卡片。

### 4.3 详细描述

自上而下 5 条圆角横带，层级清晰：

| 层 | 名称 | 内容 |
|---|---|---|
| 1 | FRAMEWORK | Next.js 16 App Router · React 19 · TypeScript 5 |
| 2 | STYLING & THEME | Tailwind CSS 4 · CSS Variables · life / swiss / minimalist / glass / brutalist |
| 3 | MOTION | GSAP + ScrollTrigger · Lenis · Framer Motion |
| 4 | DATA | Axios · Server/Client API modules · Hooks · Local fallback |
| 5 | CONTENT | Custom Markdown · Highlight.js · Leaflet · Lightbox |

第一层可用深色（slate）强调「地基」，其余层用淡彩区分。页脚小字：`Versions match package.json`。

### 4.4 参照信息

| 类型 | 参照 |
|---|---|
| **版本来源** | `package.json`：next 16.2.9 · react 19.2.4 · tailwind 4 · gsap · lenis · framer-motion 等 |
| **主题事实** | 5 套主题 CSS 在 `src/app/styles/themes/` |
| **布局参照** | Stripe / Vercel 技术栈条带图、OSI 分层示意 |
| **旧图** | `_svg/tech-stack.svg` |

### 4.5 元素清单

| 元素 | 必须 |
|---|:---:|
| 5 条水平 layer | ✅ |
| 每层 CATEGORY 小标签 + 主文案 | ✅ |
| 层间视觉间距一致 | ✅ |
| 官方品牌 logo 墙 | ❌ 用文字代替 |
| 过多图标 | ❌ 每层最多 1–2 个抽象符号 |

### 4.6 英文 Prompt

```text
Layered frontend tech-stack diagram, 16:9, GitHub README style.
Title: "Frontend Tech Stack".

Five horizontal rounded layers from top to bottom on cream parchment background:

1) FRAMEWORK (dark slate bar): Next.js 16 App Router · React 19 · TypeScript 5
2) STYLING & THEME (cyan-tint): Tailwind CSS 4 · CSS Variables · life / swiss / minimalist / glass / brutalist
3) MOTION (violet-tint): GSAP + ScrollTrigger · Lenis · Framer Motion
4) DATA (emerald-tint): Axios · Server/Client API modules · Hooks · Local fallback
5) CONTENT (amber-tint): Custom Markdown · Highlight.js · Leaflet · Lightbox

Large high-contrast English labels, modern sans-serif, soft shadows, digital-garden editorial palette.
Footer note: "Stack versions match package.json".
Avoid: official brand logos, neon, 3D, dense icon salad, faces, screenshots.
```

---

## 5. `workflow.png` — 访客主链路

### 5.1 基本信息

| 项 | 内容 |
|---|---|
| **文件名** | `workflow.png` |
| **用途** | 典型访客路径 + 技术侧发生的事 |
| **回答的问题** | 「用户怎么逛？系统怎么响应？」 |
| **信息密度** | 中（5 步时间线） |
| **建议尺寸** | 1600×900 |

### 5.2 一句话描述

从左到右 5 步旅程：Landing → Writing → Article → Life surfaces → Engage。

### 5.3 详细描述

标题 `Visitor Journey`。5 个编号步骤卡（1–5），柔和箭头串联：

| # | 标题 | 用户侧 | 技术侧（副文案） |
|---|---|---|---|
| 1 | Landing | 打开首页 | RSC prefetch config + posts |
| 2 | Browse Writing | `/writing` 列表 | Hook + local fallback |
| 3 | Read Article | 进入文章 | `[slug]` SSR Markdown |
| 4 | Explore Life | gallery / footprints / love / about | 多页面探索 |
| 5 | Engage | 主题切换 / 鱼塘留言 | localStorage · `/api` rewrite |

底部说明条：`StyleConsole + CSS variables`；写路径优先 RSC，互动走 `/api` rewrite。

### 5.4 参照信息

| 类型 | 参照 |
|---|---|
| **真实路由** | `/` · `/writing` · `/writing/[slug]` · `/gallery` · `/about` · `/pond` 等 |
| **主题机制** | `StyleConsole` · `localStorage` keys `atlas_style` / `atlas_style_mode` |
| **数据韧性** | API 失败 → `src/data/*` / `src/mock/*` |
| **旧图** | `_svg/workflow.svg` |
| **情绪** | 像导览折页，不是复杂 BPMN |

### 5.5 元素清单

| 元素 | 必须 |
|---|:---:|
| 5 步编号圆点 | ✅ |
| 每步标题 + 2 行内说明 | ✅ |
| 水平箭头 | ✅ |
| polaroid 装饰框 | 可选（勿盖住文字） |
| 决策菱形 / 复杂分支 | ❌ 保持单主路径 |

### 5.6 英文 Prompt

```text
User journey diagram, 16:9, editorial timeline for GitHub README.
Title: "Visitor Journey" — typical path from first paint to engagement.

Five numbered rounded steps left-to-right with soft arrows:

1 Landing — RSC prefetch config + latest posts
2 Browse Writing — /writing list · hooks + fallback
3 Read Article — [slug] SSR Markdown
4 Explore Life — gallery · footprints · love · about
5 Engage — theme switch · pond guestbook · /api rewrite

Warm cream background, soft pastel step cards (sage, sky, violet, amber, rose), large English labels.
Bottom note: "StyleConsole writes localStorage; CSS variables update themes. Reads prefer RSC; mutations go through /api rewrites."

Style: clean product documentation journey map, digital garden palette.
Avoid: faces, screenshots, BPMN complexity, neon, tiny text.
```

---

## 6. `structure.png` — 仓库目录结构

### 6.1 基本信息

| 项 | 内容 |
|---|---|
| **文件名** | `structure.png` |
| **用途** | 新人 30 秒看懂 `src/` 放什么 |
| **回答的问题** | 「代码目录怎么组织？」 |
| **信息密度** | 中（树 + 右侧说明卡） |
| **建议尺寸** | 3:2 或 16:9 |

### 6.2 一句话描述

左侧深色「终端/文件树」面板展示 `src/`，右侧三张说明卡：Server Components / Client Components / Themes。

### 6.3 详细描述

**左：文件树（可用深 slate 面板 + 等宽字体）**

```text
src/
├─ api/              HTTP clients
├─ app/              routes + themes
│  └─ styles/themes/
├─ components/       page sections + UI
├─ hooks/            client data hooks
├─ interface/        TypeScript types
├─ mock/             API fallback data
├─ data/             static content
└─ icon/             icon maps
```

**右：三张卡片**

1. **Server Components** — `SERVER_API_BASE_URL` · fallback `src/data` · `src/mock` · first paint / SEO  
2. **Client Components** — hooks · browser `/api` proxy · interactive surfaces  
3. **Themes** — life · swiss · minimalist · glass · brutalist · class on `<html>` + StyleConsole  

底部约定：`New endpoints → src/api/*` · `New pages → src/app/{route}/page.tsx`

### 6.4 参照信息

| 类型 | 参照 |
|---|---|
| **真实目录** | 仓库 `src/` 实际结构 |
| **开发约定** | `CLAUDE.md`（Server vs Client 数据获取） |
| **旧图** | `_svg/structure.svg` |
| **风格** | 文件管理器美学 + 编辑部卡片，不是真实 IDE 截图 |

### 6.5 元素清单

| 元素 | 必须 |
|---|:---:|
| `src/` 树形文本 | ✅ 等宽、高对比 |
| 右侧 3 说明卡 | ✅ |
| 约定脚注 | 推荐 |
| 真实 VS Code 截图 | ❌ |
| 展示 `node_modules` | ❌ |

### 6.6 英文 Prompt

```text
Repository structure diagram, aspect 3:2 or 16:9, GitHub README.
Title: "Repository Structure" — src/ layout of the Blog frontend.

Left panel: dark slate file-tree card with monospace labels:
src/
api/ — HTTP clients
app/ — routes + themes (styles/themes/)
components/ — page sections + UI
hooks/ — client data hooks
interface/ — TypeScript types
mock/ — API fallback data
data/ — static content
icon/ — icon maps

Right side three soft cards:
1) Server Components — SERVER_API_BASE_URL · fallback src/data · src/mock · first paint / SEO
2) Client Components — hooks · browser /api proxy · interactive surfaces
3) Themes — life · swiss · minimalist · glass · brutalist · StyleConsole

Footer conventions: "New endpoints → src/api/*" and "New pages → src/app/{route}/page.tsx".
Cream parchment outer background, digital-garden palette, large readable English text.
Avoid: real IDE screenshots, node_modules clutter, neon, faces, brand logos.
```

---

## 7. Showcase 截图（**不要用 GPT 生成**）

| 文件 | 场景 | 来源 |
|---|---|---|
| `showcase-home.png` | 首页 | Playwright `1600×900` @ `/` |
| `showcase-writing.png` | 文章列表 | Playwright @ `/writing` |
| `showcase-article-detail.png` | 文章详情 | Playwright @ `/writing/[slug]` |
| `showcase-gallery.png` | 照片墙 | Playwright @ `/gallery` |
| `showcase-about.png` | 关于 | Playwright @ `/about` |

**原因**：Showcase 必须是真机 UI；AI 假截图会损害可信度。  
若只想「美化」截图边框，可在外层加设备框，但 **画面内容必须是真实页面**。

---

## 8. 批量生成工作流（推荐）

### 8.1 对话节奏

1. 粘贴 **§0.6 系统指令**  
2. 附上 1 张你喜欢的壁纸作 **style reference**（可选）  
3. **一次只生成 1 张**，确认色板后，再说 “same style system as previous”  
4. 顺序：banner → features → architecture → tech-stack → workflow → structure  

### 8.2 验收 Checklist（每张）

- [ ] 文件名与路径符合契约  
- [ ] 与全套色板一致（cream / sage / dusty rose / charcoal）  
- [ ] 无清晰人脸、无假 logo、无霓虹赛博风  
- [ ] 信息图类：英文标签大且少，关键词正确  
- [ ] Banner：无大字压图  
- [ ] 导出 PNG，体积建议单张 < 1.5MB（可用 WebP 再转 PNG 或压缩）  
- [ ] 放入 `assets/images/readme/` 后在 GitHub 预览 README  

### 8.3 与现有文件关系

| 现状 | 建议 |
|---|---|
| 已有 AI `banner.png` + SVG 栅格化信息图 | 可用 GPT 整套重出后 **同名覆盖** |
| `_svg/*.svg` | 保留作语义底稿；出图不满意时可对照改 Prompt |
| Showcase | 保持 Playwright，不覆盖 |

### 8.4 覆盖后是否改 README

**通常不用。** 路径已是：

```markdown
assets/images/readme/banner.png
assets/images/readme/features.png
assets/images/readme/architecture.png
assets/images/readme/tech-stack.png
assets/images/readme/workflow.png
assets/images/readme/structure.png
```

---

## 9. 一页速查表

| 文件 | 类型 | 核心元素（最少集） | 关键文字（若有） |
|---|---|---|---|
| `banner.png` | 氛围壁纸静物 | polaroid、蜡封信、叶片、网格纸、地球仪/图钉 | 无 |
| `features.png` | 功能卡片墙 | 8 模块卡 + 图标 | Articles / Gallery / Footprints / … |
| `architecture.png` | 架构 | Visitor·Editor·Blog·Admin·API·MySQL·Storage | System Architecture |
| `tech-stack.png` | 五层条带 | Framework→…→Content | Next.js 16 / React 19 / … |
| `workflow.png` | 五步旅程 | 1–5 步骤卡 + 箭头 | Landing → … → Engage |
| `structure.png` | 目录树 | `src/` tree + 3 说明卡 | api/app/components/… |
| `showcase-*.png` | 真机 | 真实页面 | —（不生成） |

---

## 10. 壁纸参考时的附加句（可贴在任意 Prompt 末尾）

```text
Use the attached wallpaper only as a color, lighting, and material reference.
Do not copy the wallpaper composition or subjects.
Rebuild the composition to fulfill this README asset's information job.
Keep the digital-garden editorial palette: warm cream, sage green, dusty rose, charcoal, parchment.
```

---

*文档版本：与 README Polish 契约对齐 · 供 GPT Image / ChatGPT 出图专用*
