# 前端界面术语库 · Frontend UI Glossary

> **用途**：补齐「人 ⇄ Agent」之间的**认知债**。当你说"导航栏那个会跟着鼠标滑的小块"，Agent 要能秒定位到 `Navbar.tsx` 里的 *Magic Pill Tracker*；当 Agent 报告"`SpotlightCard` 的聚光半径"，你也要知道它在说哪种卡片。
> **性质**：`docs/knowledge/project-init.md` 的补充——project-init 解决"文件放哪 / 流程怎么走"，本库解决"界面里的东西叫什么、长在哪"。
> **读者**：人（写 prompt / 描述需求时查词）+ Agent（理解口语描述 / 报告改动时用标准词）。
> **语言**：中文叙述为主，**每个术语强制带英文标准词**（行业标准词才是 Agent 的稳定锚点）。

---

## 0. 它解决什么问题

前端组件的命名有三层"不一致"，是认知债的来源：

| 层 | 例子 | 问题 |
|---|---|---|
| 用户口语 | "那个会跑的字" | 模糊，多个组件都"会跑" |
| 设计/产品术语 | marquee / typewriter | 行业标准，但人未必知道 |
| 代码实现 | `RotatingText.tsx` / `TextType.tsx` | 代码名 ≠ 术语，且可能重名 |

**本库做两件事**：
1. 把**口语 ↔ 术语 ↔ 代码**三层对齐（见 §12、§13）。
2. 给每个术语一个**一句话定义**，消除"大概知道但说不清"。

---

## 1. 如何使用

- **写 Prompt 时**：用 §12「口语 → 术语」把自己的日常叫法翻成标准词，再配 §14 的代码反查定位文件。
- **Agent 报告时**：要求 Agent 用本库的英文术语（如 *Magnetic Button*、*Sticky Two-Column*），而不是"那个会吸过去的按钮"。
- **新增组件时**：在 §13 反查表补一行，保持三层对齐不漂移。

**命名粒度**（从大到小，定位时逐级缩小）：

```
界面区域 (Region: Navbar / Footer / Floating)
  └─ 模块 (Module: Home / About / Love)
      └─ 组件 (Component: HomeHero / SkillsBento)
          └─ 子元素 (Sub-element: pill tracker / hover card)
```

定位一个东西，至少要到 **组件级**；改交互细节要到 **子元素级**。

---

## 2. 全局壳层 · App Shell / Chrome

整站固定结构（`SiteChrome.tsx` + `app/layout.tsx`）。

| 术语 EN | 中文 | 代码 | 说明 |
|---|---|---|---|
| **App Shell / Layout Chrome** | 应用外壳 | `SiteChrome.tsx` | 包裹整站的固定容器，统一挂载 Navbar + `<main>` + Footer + 浮层。 |
| **Smooth Scrolling** | 丝滑滚动 | `SmoothScroll.tsx` | Lenis 接管原生滚动，并与 GSAP ScrollTrigger 同步；所有滚动动效的基底。 |
| **Runtime Theme Injector** | 运行时主题注入 | `ThemeApplier.tsx` | 拉后端配置后动态 `<style>` 注入，覆盖五套主题调色板。 |
| **Route Transition / Scroll Reset** | 路由过渡 + 滚动重置 | `RouteTransition.tsx` | 切路由时重置 Lenis 滚动位置；`SiteChrome` 另用 framer-motion 给 `<main>` 加入场动画。 |

---

## 3. 顶部导航 · Navbar（`Navbar.tsx`）

整体是 **fixed top navigation bar**（顶部固定导航），呈 **pill / capsule nav**（胶囊造型），分左右两胶囊。

| 子元素术语 EN | 中文 | 说明 |
|---|---|---|
| **Brand Pill / Logo Lockup** | 品牌胶囊 | 左胶囊，站点标识 + hover 磁性反馈。 |
| **Magic Pill / Sliding Highlight** | 滑动高亮指示器 | GSAP 驱动的背景滑块，鼠标 hover 时平滑滑到目标项（业界俗称 *magic line / tab indicator*）。 |
| **Nav Items / Inline Nav Links** | 内联导航项 | 桌面端平铺的栏目链接，配 lucide 图标。 |
| **Hover Card / Preview Popover** | 悬停预览卡 | hover 某项弹出的大图预览（tooltip / popover 变体）。 |
| **Condensed Nav** | 精简导航 | 平板端只平铺前 4 项。 |
| **Overflow Trigger / Hamburger Button** | 溢出触发器 / 汉堡按钮 | "More"（平板）/ 三横线（手机）触发折叠面板。 |
| **Dropdown Menu Panel / Mega Menu** | 下拉菜单面板 | GSAP 控制展开收起，2 列网格列出全部栏目。 |
| **Theme Toggle / Dark Mode Switch** | 明暗主题切换 | 太阳/月亮按钮，切 `.dark` class。 |

> ⚠️ 本项目**没有 Sidebar（侧边栏）**。所有悬浮件都是 `fixed` 定位的 *floating widget*，不要混用"侧边栏"。

---

## 4. 底部 · Footer（`Footer.tsx`）

**Site Footer / Colophon**（页脚 + 版权信息区）。

| 子元素术语 EN | 中文 | 说明 |
|---|---|---|
| **Footer Peekers** | 页脚探头卡 | 滚到底部时从 footer 上沿"探出"的小卡片（peeking cards）。 |
| **Tagline / Hero Copy** | 品牌标语 | 禅意短句。 |
| **Copyright / Powered-by Line** | 版权 + 驱动声明 | © 信息 + 技术栈。 |
| **Compliance / ICP Beian** | 备案合规信息 | ICP + 公安备案链接（国内站点专属）。 |
| **Disclaimer** | 免责声明 | 法律性底注。 |

---

## 5. 浮动控件 · Floating Widgets（脱离文档流的 `fixed` 交互件）

| 术语 EN | 中文 | 代码 | 说明 |
|---|---|---|---|
| **FAB / Scroll-to-Top** | 回到顶部悬浮按钮 | `BackToTop.tsx` | 滚动超阈值出现的火箭按钮。 |
| **Style Switcher / Theme Picker** | 风格切换控制台 | `StyleConsole.tsx` | 浮层 UI，手动 / 按时段 / 按滚动自动切换 5 套视觉风格。 |
| **Mini Player / Dock Widget** | 迷你播放器停靠条 | `TapeStation.tsx` | 播放/暂停/音量/上下切控件（磁带站意象）。 |
| **Social Dock / Icon Stack** | 社交图标停靠栏 | `home/SocialDock.tsx` | 悬浮社交入口图标栈。 |
| **Floating Peekers** | 浮层探头卡 | `FloatingFooterPeekers.tsx` | `FooterPeekers` 的浮层版本（现仅在 footer 停靠）。 |

---

## 6. 首页模块 · Home（`home/*`）

| 术语 EN | 中文 | 代码 | 说明 |
|---|---|---|---|
| **Hero Section** | 首屏主视觉区 | `HomeHero.tsx` | 首屏大标题（站酷小薇书法字）+ 副信息。 |
| **Rotating / Cycling Text** | 轮播切换文字 | `RotatingText.tsx` | 一组词循环替换。 |
| **Typewriter Effect** | 打字机效果 | `TextType.tsx` | 逐字打出文本。 |
| **Status Cards / Bento-style Grid** | 状态卡片网格 | `StatusGrid.tsx` | "正在读/在看/在听"类状态卡。 |
| **Marquee Rail / Infinite Carousel** | 无限跑马灯轨道 | `ArticleRail.tsx` `GalleryRail.tsx` | 卡片自驱无限横向滚动。 |
| **Section Header / Eyebrow + Title** | 区块标题引导 | `SectionIntro.tsx` | 区块开头"小图标 + 标题 + 描述 + 跳转"。 |
| **Pull Quote / Featured Quote** | 引文区 | `HomeQuote.tsx` | 突出展示的一句话引言。 |

---

## 7. 内容页模块（About / Gallery / Love …）

| 术语 EN | 中文 | 代码 | 说明 |
|---|---|---|---|
| **Bento Grid** | 便当盒网格 | `about/SkillsBento.tsx` | 大小不一的卡片拼合布局（仿 Apple 便当盒）。 |
| **Sticky Two-Column / Scroll-pinned Stack** | 左 sticky + 右滚动堆叠 | `about/StoryStickyStack.tsx` | 左列钉住、右列随滚动切换。 |
| **Horizontal Scroll Section** | 横向滚动区 | `about/HorizontalTrack.tsx` | ScrollTrigger pin 后横向推进。 |
| **Vertical Timeline** | 垂直时间线 | `about/Timeline.tsx` `love/LoveTimeline.tsx` | 纵向时间轴节点。 |
| **Masonry / Grid Card** | 瀑布流 / 网格卡片 | `gallery/GalleryCard.tsx` | 图廊卡片。 |
| **Lightbox / Image Zoom Overlay** | 灯箱图片放大 | `gallery/Lightbox.tsx` | 点图后全屏遮罩放大查看。 |
| **Polaroid / Tilt Card** | 拍立得倾斜卡 | `love/PolaroidCard.tsx` | 仿拍立得相片 + 倾斜手写感。 |
| **Bucket List / Checklist** | 愿望清单 | `love/LoveBucketList.tsx` | 可勾选清单。 |
| **Time Capsule** | 时间胶囊 | `love/LoveTimeCapsule.tsx` | 定时解锁的内容卡。 |
| **SVG Line Draw / Path Animation** | SVG 描边动画 | `love/hero/EcgLine.tsx` | 心电图式路径描边。 |

---

## 8. 通用 UI 原子组件（`ui/*`，可复用动效件）

写 prompt 时这些是"高频可复用动效件"，**术语含金量最高**。

| 术语 EN | 中文 | 代码 | 说明 |
|---|---|---|---|
| **Magnetic Button / Cursor Magnetism** | 磁性吸附按钮 | `Magnetic.tsx` | 鼠标靠近时元素被"吸引"偏移（GSAP quickTo）。 |
| **Spotlight / Glow Card** | 聚光跟随卡片 | `SpotlightCard.tsx` | 光晕跟随光标移动。 |
| **Scroll Parallax Image** | 视差滚动图片 | `ParallaxImage.tsx` | 滚动时图片以不同速度位移造深度。 |
| **Scroll Text Reveal / Split-text** | 滚动逐行/逐字揭示 | `TextReveal.tsx` | 文字随滚动入场（split + stagger）。 |
| **Custom Markdown Renderer** | 自研 MD 渲染器 | `Markdown.tsx` | 含 callout / 代码高亮 / 表格 / 任务列表 / 灯箱图片。 |
| **Passcode Gate / Auth Wall** | 密码门禁 | `PasscodeGate.tsx` | 私密页前的访问码校验。 |

---

## 9. 背景层与视觉风格

背景是 `fixed` 全屏多层叠加（`app/layout.tsx`），非组件但常被提到：

| 术语 EN | 中文 | 说明 |
|---|---|---|
| **Background Layers (z-stacked)** | 分层背景 | 多层 `fixed` 按 z 轴叠加。 |
| **Glassmorphism Glows** | 毛玻璃霓虹光斑 | 模糊光晕，仅 glass 风格显示。 |
| **Film Grain Overlay** | 电影颗粒噪点 | 最上层极弱噪点，胶片质感。 |

**五套可切换视觉风格**（CSS class on `<html>`，默认 `life`）：
`life` · `swiss` · `minimalist` · `glass` · `brutalist` —— 配色/背景/glow 不同，由 `StyleConsole` 切换、`ThemeApplier` 注入覆盖。

---

## 10. 动效术语速查（Motion Glossary）

滚动 / 动效相关词最容易混，单列：

| 术语 EN | 中文 | 区别 |
|---|---|---|
| **Smooth Scrolling** | 丝滑滚动 | Lenis 接管滚动本身（基底）。 |
| **Parallax** | 视差 | 不同层滚动速度不同 → 深度感。 |
| **Scroll-triggered Reveal** | 入场揭示 | 进入视口才出现的动画。 |
| **Pin & Scrub** | 钉住 + 滚动驱动 | 元素钉住、动画进度绑定滚动距离（horizontal scroll 常用）。 |
| **Stagger** | 错峰 | 一组元素依次延迟入场。 |
| **Magnetic** | 磁吸 | 元素被光标吸引偏移。 |
| **Spotlight** | 聚光 | 光晕跟随光标。 |
| **Marquee** | 跑马灯 | 自驱无限横向滚动（非滚动驱动）。 |
| **Typewriter** | 打字机 | 逐字出现。 |
| **Easing** | 缓动 | 动画速度曲线（如 `power2.out`、`back.out`）。 |
| **`prefers-reduced-motion`** | 减少动效偏好 | 系统级无障碍开关，动效须尊重。 |

---

## 11. 措辞 / 文案术语 · Copywriting Glossary

界面**文案层面**的术语（与组件术语并列的另一个维度）。

| 术语 EN | 中文 | 例子 |
|---|---|---|
| **CTA (Call to Action)** | 行动号召 | "开始阅读 / Read more" 按钮。 |
| **Microcopy** | 微文案 | 输入框下/按钮上的小字提示。 |
| **Eyebrow** | 小眉头标签 | 标题上方的小标签（如 "01 / ARCHIVE"）。 |
| **Tagline / Slogan** | 标语 | "少写几行，多筑一境。" |
| **Hero Copy** | 主视觉文案 | 首屏主标题 + 副标题。 |
| **Placeholder** | 占位符 | 输入框里 `请输入...`。 |
| **Helper Text / Hint** | 帮助文字 | 表单字段的补充说明。 |
| **Label** | 标签 | 字段名称。 |
| **Caption** | 图注 | 图片下方说明。 |
| **Toast** | 通知提示 | 短暂浮现的操作反馈。 |
| **Snackbar** | 小吃栏通知 | 底部带操作的 toast 变体。 |
| **Empty State** | 空状态 | 列表无数据时的占位图文。 |
| **Skeleton** | 骨架屏 | 数据加载中的灰块占位。 |
| **Tooltip** | 工具提示 | hover 出现的补充说明。 |
| **Breadcrumb** | 面包屑 | 层级路径导航。 |
| **Alt Text / ARIA Label** | 替代文本 / 无障碍标签 | 给屏幕阅读器用的描述。 |
| **Disclaimer** | 免责声明 | 法律性底注。 |
| **Beian / ICP** | 备案 | 国内站点合规信息。 |

---

## 12. ★ 口语 → 专业术语 映射（认知债核心）

左边是你可能顺嘴说的词，右边是 Agent 能稳定定位的标准词。

| 口语 / 模糊说法 | → | 标准术语 | 代码定位 |
|---|---|---|---|
| "导航栏那个会跟着滑的高亮" | → | Magic Pill / Sliding Highlight | `Navbar.tsx` `pillRef` |
| "鼠标放上去弹出来的预览图" | → | Hover Card / Preview Popover | `Navbar.tsx` nav item `HoverCard` |
| "汉堡菜单 / 展开那个面板" | → | Hamburger → Dropdown Menu Panel | `Navbar.tsx` `menuRef` |
| "会跑的字 / 滚动的字" | → | Marquee（横向）/ Typewriter（打字）/ Rotating Text（轮播） | `*Rail.tsx` / `TextType` / `RotatingText` |
| "回到顶部那个小火箭" | → | FAB / Scroll-to-Top | `BackToTop.tsx` |
| "换风格那个浮窗" | → | Style Switcher | `StyleConsole.tsx` |
| "鼠标靠近会被吸过去的按钮" | → | Magnetic Button | `Magnetic.tsx` |
| "鼠标移动会跟着发光的卡片" | → | Spotlight Card | `SpotlightCard.tsx` |
| "滚下来图片慢慢出来的效果" | → | Scroll-triggered Reveal | `TextReveal.tsx` |
| "图片滚动时有深度的、错开的" | → | Scroll Parallax | `ParallaxImage.tsx` |
| "左边钉住、右边滚的内容" | → | Sticky Two-Column | `StoryStickyStack.tsx` |
| "横向滚动的那个区域" | → | Horizontal Scroll Section (pin) | `HorizontalTrack.tsx` |
| "便当盒那种大小不一的格子" | → | Bento Grid | `SkillsBento.tsx` |
| "点图放大全屏看" | → | Lightbox | `Lightbox.tsx` |
| "拍立得那种倾斜照片" | → | Polaroid / Tilt Card | `PolaroidCard.tsx` |
| "胶片那种颗粒感" | → | Film Grain Overlay | `layout.tsx` `.film-grain` |
| "毛玻璃那种发光" | → | Glassmorphism Glows | `layout.tsx` `.glass-glows` |
| "侧边栏" | ⚠️ | 本项目**没有 Sidebar**，你可能指的是 Floating Widget / Social Dock | `BackToTop` / `SocialDock` 等 |

---

## 13. ★ 本项目组件 → 术语 反查表

Agent 看到代码文件名时反查"这到底是啥"。

| 代码文件 | → | 标准术语 | 所属区域 |
|---|---|---|---|
| `SiteChrome.tsx` | → | App Shell | Shell |
| `SmoothScroll.tsx` | → | Smooth Scrolling | Shell |
| `ThemeApplier.tsx` | → | Runtime Theme Injector | Shell |
| `RouteTransition.tsx` | → | Route Transition / Scroll Reset | Shell |
| `Navbar.tsx` | → | Top Navigation Bar (pill nav) | Navbar |
| `Footer.tsx` | → | Site Footer / Colophon | Footer |
| `FooterPeekers.tsx` / `FloatingFooterPeekers.tsx` | → | Peekers (peeking cards) | Footer / Floating |
| `BackToTop.tsx` | → | FAB / Scroll-to-Top | Floating |
| `StyleConsole.tsx` | → | Style Switcher | Floating |
| `TapeStation.tsx` | → | Mini Player Dock | Floating |
| `home/SocialDock.tsx` | → | Social Dock | Floating |
| `home/HomeHero.tsx` | → | Hero Section | Home |
| `home/StatusGrid.tsx` | → | Status Cards Grid | Home |
| `home/ArticleRail.tsx` / `GalleryRail.tsx` | → | Marquee Rail | Home |
| `home/SectionIntro.tsx` | → | Section Header (eyebrow + title) | Home |
| `home/HomeQuote.tsx` | → | Pull Quote | Home |
| `ui/Magnetic.tsx` | → | Magnetic Button | 原子组件 |
| `ui/SpotlightCard.tsx` | → | Spotlight Card | 原子组件 |
| `ui/ParallaxImage.tsx` | → | Scroll Parallax Image | 原子组件 |
| `ui/TextReveal.tsx` | → | Scroll Text Reveal | 原子组件 |
| `ui/TextType.tsx` | → | Typewriter Effect | 原子组件 |
| `ui/RotatingText.tsx` | → | Rotating Text | 原子组件 |
| `ui/Lightbox.tsx`（gallery/） | → | Lightbox | 原子组件 |
| `ui/Markdown.tsx` | → | Custom Markdown Renderer | 原子组件 |
| `ui/PasscodeGate.tsx` | → | Passcode Gate | 原子组件 |
| `about/SkillsBento.tsx` | → | Bento Grid | About |
| `about/StoryStickyStack.tsx` | → | Sticky Two-Column | About |
| `about/HorizontalTrack.tsx` | → | Horizontal Scroll Section | About |
| `about/Timeline.tsx` | → | Vertical Timeline | About |
| `love/PolaroidCard.tsx` | → | Polaroid / Tilt Card | Love |
| `love/LoveBucketList.tsx` | → | Bucket List | Love |
| `love/LoveTimeCapsule.tsx` | → | Time Capsule | Love |
| `love/hero/EcgLine.tsx` | → | SVG Line Draw | Love |

---

## 14. 写 Prompt 的模板

描述一个界面改动时，建议按这个结构给 Agent，定位最快：

```
【区域】Navbar / Footer / Home / About …
【组件】<标准术语 EN>  （反查 §12 / §13）
【子元素】<若改交互细节，精确到子元素>
【改动】<想做什么>
【参考】<已有的同类组件，或某个网站的某个效果>
【约束】<性能 / 无障碍 / 暗色模式 / prefers-reduced-motion>
```

**示例**：

> 【区域】Navbar  
> 【组件】Magic Pill Tracker  
> 【改动】hover 切换时加上轻微的弹性回弹（当前是 `power2.out`），并把激活态的高亮从灰色改成 gold 半透明。  
> 【约束】保留 `prefers-reduced-motion` 兼容。

---

## 15. 维护约定

- **新增组件**：在 §13 反查表补一行（代码文件 → 术语），术语首次出现时在对应章节加定义。
- **新增口语别名**：在 §12 补一行，左边的"模糊说法"越口语化越好——那正是认知债的入口。
- **术语冲突**：以**英文标准词**为准（Agent 的稳定锚点），中文别名允许多个。
- **不重复造词**：术语的行业标准词优先（如 *Lightbox*、*Bento Grid*、*Magnetic*），不自造。
- 与根 `CONTEXT.md`（领域术语）/ `LANGUAGES.md`（共享用词）的边界：本库只管**前端界面组件与文案术语**，业务领域词归 `CONTEXT.md`。
