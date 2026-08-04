# 页面跳转性能诊断报告

> 日期：2026-07-14  
> 范围：本地 Next.js App Router 页面跳转、Server Component 数据请求、全局壳层与页面首次挂载  
> 结论状态：主因已通过差分实验确认；次因已定位到页面级主线程工作，精确函数占比仍需 Performance trace

## 1. 结论先行

当前“点击后数秒无响应”的首要原因不是 Lenis、图片、音频，也不只是 Next.js 开发模式编译，而是：

1. 本机设置了 `HTTP_PROXY/HTTPS_PROXY=127.0.0.1:7892`，但没有设置 `NO_PROXY`；
2. Server Component 使用 Axios 请求 `http://localhost:8080/api/*`，Axios 继承代理环境变量，把 loopback 请求发给了 HTTP 代理；
3. 后端离线时，代理约 2.6 秒后才返回 502；
4. 首页、Footprints、About 等页面又存在串行或重复请求，把一次代理等待放大成 7–11 秒；
5. 页面没有 `loading.tsx`，等待期间也没有即时的路由级反馈，因此体感接近“点击失效”。

这是已证实的因果链，不是相关性猜测。临时设置 `NO_PROXY=localhost,127.0.0.1` 后，同一批 warm HTML 请求从 7–11 秒下降到约 0.45 秒。

主因消除后仍有第二层问题：About、Pond、Love 首次挂载的客户端工作偏重。production 基准中，它们分别出现 427ms、247ms、226ms 的最大 long task。这会造成数百毫秒的点击冻结和动效卡顿，但解释不了原来的数秒等待。

## 2. 测量方法与口径

导航脚本：`scripts/measure-nav-latency.mjs`

本轮为适配当前 mega-menu，脚本会先 hover 对应导航组，再点击可见子链接；新增 `--block-media` 和 `--reduced-motion` 诊断开关。每次记录：

- `clickToPathMs`：点击到 pathname 更新；
- `clickToContentMs`：点击到目标内容可识别；
- `clickToQuietMs`：点击到网络和主线程进入相对安静状态；
- Long Task API：点击后 2.5 秒窗口中的主线程长任务。

开发模式与 production 分开测量；冷编译和 warm runtime 不混在同一结论中。

原始数据：

- `docs/outputs/prd/nav-perf/latest-diagnostic-no-proxy-dev-warm.json`
- `docs/outputs/prd/nav-perf/latest-diagnostic-production-no-proxy.json`
- 同目录下 `measure-diagnostic-*` 原始记录

## 3. 主因：localhost Server Axios 被代理接管

### 3.1 直接差分证据

对同一个本地配置接口做 Axios 对照：

| 请求方式 | 结果 | 耗时 |
|---|---:|---:|
| Axios 默认配置 | HTTP 502 / `ERR_BAD_RESPONSE` | 2635ms |
| Axios `proxy: false` | `ECONNREFUSED` | 46ms |

默认请求的日志请求行是绝对 URL：`GET http://localhost:8080/...`，符合向 HTTP 代理发送请求的形态。当前环境同时满足：

- `HTTP_PROXY=127.0.0.1:7892`
- `HTTPS_PROXY=127.0.0.1:7892`
- `NO_PROXY` 未设置

因此后端离线时，本应几十毫秒得到的 loopback 拒绝连接，被改写为约 2.6 秒后的代理 502。

### 3.2 页面级差分

warm HTML 请求对照：

| 路由 | 原环境 | 加 `NO_PROXY` | 变化 |
|---|---:|---:|---:|
| `/` | 10.70s | 0.45s | 约 24 倍改善 |
| `/about` | 7.17s | 0.48s | 约 15 倍改善 |
| `/footprints` | 10.89s | 0.47s | 约 23 倍改善 |
| `/writing` | 0.22s | 0.27s | 基本无变化，属测量波动 |
| `/gallery` | 0.33s | 0.16s | 无数秒级等待 |

如果主因是 Lenis、全局 React 壳层或媒体解码，单独改变 Node 代理绕过规则不会让首页、About、Footprints 同时下降一个数量级。差分结果与这些路由的 Server Component 请求数量也一致。

### 3.3 串行与重复请求放大等待

- `src/app/page.tsx`：featured posts、featured photos、public configs 串行 `await`；
- `src/app/footprints/page.tsx`：map config、gallery footprints、love footprints、categories 四次串行请求；
- `src/app/about/page.tsx`：`generateMetadata()`、页面开关判断、profile 加载重复读取 public config，并使用 `connection()` 强制动态渲染；
- `src/app/achievements/page.tsx`：achievements 与 metas 串行；
- `src/app/love/page.tsx`：先等待 Server config，再返回客户端页面。

一次失败约 2.6 秒，三到四次串行后自然进入 7–11 秒区间。Axios 的 15 秒 timeout 还意味着：如果代理不快速返回 502，而是静默等待，最坏情况会更长。

## 4. 数据获取层的其他问题

### 4.1 Server config 缓存策略不统一

`src/api/config.ts` 的浏览器路径已有 60 秒缓存、5 秒 negative cache、in-flight 去重和 4 秒 timeout；但服务端 `getPublicConfig()` 仍会直接走 Axios 网络请求，没有同等的共享缓存与同一请求内去重。

`fetchPublicConfigForServer()` 使用原生 fetch、`AbortSignal.timeout(2500)` 和 Next revalidate，行为更稳健，但页面没有统一使用它。结果是同一份 public config 在 Server metadata、页面开关和页面内容之间重复获取。

### 4.2 fallback 只能保证有内容，不能消除等待

当前静态 mock/fallback 都在请求抛错后才启用。它能避免页面彻底报错，却不会缩短代理、timeout 或串行请求造成的等待。换言之，“有 fallback”不等于“离线快速”。

### 4.3 错误日志过重

多个 catch 直接 `console.warn(..., err)`，会打印完整 AxiosError、request、headers 和 config。build/dev 中大量失败请求会产生明显日志 I/O 和噪声，也掩盖真正异常。应只输出 `message`、`code`、`status` 和目标 endpoint。

### 4.4 客户端 hooks 缺少共享生命周期

`useArticles`、`useGallery`、`useLove*` 等在 mount 时立即请求，缺少跨组件共享缓存和 AbortController。Love 页面一次挂载并发四组请求，其中 stats 又读取一次 public config，和 Server 已取到的 configs 重复。

浏览器侧经 Next rewrite 的 `/api/*` 在本次后端离线环境中只需 18–31ms 返回 500，所以它不是原始 8–14 秒卡顿的来源；但重复请求和多次 setState 会增加挂载阶段的主线程工作。

## 5. 次因：About、Pond、Love 首次挂载过重

### 5.1 Production 基准

在 `NO_PROXY` 生效、production build 下：

| 路由 | click→path | click→content | click→quiet | 最大 long task |
|---|---:|---:|---:|---:|
| Writing | 176ms | 179ms | 798ms | 119ms |
| Gallery | 205ms | 231ms | 827ms | 104ms |
| About | **714ms** | **743ms** | **1321ms** | **427ms** |
| Love | 355ms | 433ms | 1045ms | 226ms |
| Footprints | 238ms | 247ms | 867ms | 129ms |
| Pond | 349ms | 472ms | 1092ms | 247ms（总计 323ms） |
| Home | 218ms | 253ms | 871ms | 122ms |

七条路径平均 `clickToPath` 约 322ms，平均 `clickToQuiet` 约 974ms。About 明显脱离其余路由；Pond 和 Love 次之。

这些主要 long task 都在 pathname 更新前开始：About 约在点击后 232ms 开始、持续 427ms；Pond 在 65ms 开始、持续 247ms；Love 在 112ms 开始、持续 226ms。因此，pathname 更新后才运行的 `RouteTransition` 120ms refresh 不可能是这些主 long task 的起点。

### 5.2 About

当前实际挂载的是 `AboutPageClient.tsx` 内联页面；目录中的 `AboutHero`、`HorizontalTrack`、`StoryStickyStack`、`SkillsBento`、`Timeline` 没有被当前页面导入，已从本次归因中排除。

当前页面本身仍然较重：

- 一个大型 Client Component 一次性渲染整页，而不是只水合首屏交互；
- 标题按字符创建 Framer Motion 节点，并动画 `filter: blur()`；
- mount effect 同步扫描 coordinate、belief、bento、reveal 元素并创建多组 ScrollTrigger；
- 400ms 后再次调用全局 `ScrollTrigger.refresh()`；
- `window.mousemove` 每次通过 `setSpotlightOffset()` 更新 React state，可能让整页 Client Component 高频重渲染；
- 多个无限 CSS 动画和多个 SpotlightCard 同时存在；
- About Server 页面还因 `connection()` 和重复 config 请求失去静态/缓存优势。

427ms long task 与这组“首屏大树水合 + 动画注册 + DOM 扫描”相符。Long Task API 不提供调用栈，所以目前不能声称其中某一行独占 427ms；需要 Chrome Performance trace 才能做函数级占比。

### 5.3 Pond

`src/app/pond/page.tsx` 的客户端组件在首次挂载同时执行：

- feedback types 与 feedback list 两组请求及后续 state 回填；
- 三个 400–550px blob 的无限 GSAP transform 动画；
- `feGaussianBlur stdDeviation="22"` 液体 SVG filter；
- 全屏 `backdrop-blur-[60px]`；
- header/form/tabs 首屏 GSAP 入场；
- 数据回填后，对 feedback cards 同时使用 GSAP stagger 和 Framer Motion layout/enter 动画。

这解释了 production 中首次 247ms long task，以及 pathname 更新后又出现的 76ms 次级任务。API 本身在当前环境很快失败，因此主要成本更可能在渲染、样式计算、filter/composite 和动画初始化，而不是网络等待。

### 5.4 Love

Love 首次挂载包含：

- 四个 `useLove*` hook 并发请求并分别 setState；
- Server 已获取 configs 后，客户端 stats 再请求 public config；
- Hero 背景视频 `autoPlay + preload="auto"`，进入页面即加载和解码；
- 日期 state 更新后注册数字滚动、头像、文本、滚动箭头和两组 ScrollTrigger；
- 全局 mousemove 视差；
- loading 状态变化后 600ms 安排 `ScrollTrigger.refresh()`；
- RouteTransition 另在 pathname 后 120ms refresh。

媒体阻断对照没有改善导航，反而受失败事件和单样本波动影响更差，因此不能把视频/音频预加载定为严重跳转主因。但它仍是可清理的首屏流量和解码成本。

## 6. 已排除或降级的嫌疑

### 6.1 Lenis 不是数秒卡顿主因

`SmoothScroll` 位于根壳层，只挂载一次，路由变化不会重复初始化 Lenis 和 GSAP ticker，cleanup 也完整。它可能增加持续滚动成本，但不符合“特定 Server 路由等待 7–11 秒、NO_PROXY 后立即恢复”的证据。

### 6.2 RouteTransition 不是主 long task 来源

它在 pathname 变化后停止 Lenis、回到顶部，并于 120ms 后 refresh。主要 long task 在 pathname 更新前已经发生，所以它不是点击冻结的起点；它只可能增加导航完成后的 quiet 尾巴。

### 6.3 音频预加载不是本轮主因

音乐组件会在用户未播放时请求 archive.org MP3，属于无效首屏流量；但 `--block-media` 对照没有改善 soft navigation，不能用它解释严重卡顿。建议清理，但优先级低于 Server 请求和页面挂载。

### 6.4 不是单纯 dev cold compile

开发模式 warm 状态仍曾出现 7–11 秒 HTML 响应；设置 NO_PROXY 后，同一 dev server 降到约 0.45 秒。production 中 About 仍有 714ms path 和 427ms long task，说明开发编译只是额外成本，不是唯一原因。

## 7. 路由与资产层观察

- 项目没有任何 `loading.tsx`。动态/Server 路由等待 RSC 时没有即时 pending UI；
- About 使用 `connection()` 强制动态，production 也不能完全依赖静态预渲染；
- 没有发现显式 `prefetch` 覆盖。Next production 默认 Link 预取可以帮助静态路径，但开发模式不会以同样方式掩盖等待；动态路由又缺少 loading 边界；
- `next.config.ts` 全局设置 `images.unoptimized: true`，`next/image` 不做服务端尺寸/格式优化；
- 根布局一次挂载 9 个 `next/font/google` 字体家族及多组 weights。它们由 Next 自托管，不是运行时直连 Google，但会扩大字体/CSS 资产和首次解析范围；
- `SiteChrome` 每次 pathname 变化固定执行约 0.4 秒 entrance，视觉上会让已经完成的导航仍显得“没有稳定”；
- About 400ms、Gallery 250ms、Love 600ms、RouteTransition 120ms 各自 refresh，缺少统一调度，容易延长 quiet 时间。

图片、字体和 prefetch 都值得后续优化，但现有差分证据不足以把它们提升为 P0 根因。

## 8. 修复顺序

### P0：先消灭数秒等待

1. **在代码层阻止 loopback Server Axios 使用环境代理。** 对 `localhost`、`127.0.0.1`、`::1` 的服务端实例设置 `proxy: false`，或统一改用明确超时的原生 fetch。不要只依赖每台开发机手工设置环境变量。
2. **同时补环境兜底。** 本地和部署环境设置 `NO_PROXY=localhost,127.0.0.1,::1`。代码防御是主方案，环境变量是第二道保险。
3. **并行化独立 Server 请求。** 首页、Footprints、Achievements 等改为 `Promise.all`，避免单次网络波动相加。
4. **统一 Server public config 获取。** 使用 request cache/revalidate/in-flight dedupe；About 单次读取后复用给 metadata、开关和 profile。若没有请求时依赖，移除 `connection()`。
5. **压缩错误日志。** 只记录 endpoint、message、code、status，禁止打印完整 AxiosError。

### P1：处理点击冻结与无反馈

1. 为动态和重数据路由增加 `loading.tsx`，点击后立即出现稳定的 pending shell；
2. About 首屏之外的内容按 section 延迟水合或动态加载；mouse spotlight 改为 ref/CSS variable + `requestAnimationFrame`，不再每个 mousemove setState；
3. About 避免在首帧批量注册整页 ScrollTrigger，非首屏 section 在接近视口时再初始化；
4. Pond 降低或移除全屏 blur/filter，暂停不可见动画，并在 GSAP 与 Framer Motion 之间保留一套卡片入场；
5. Love 复用 Server configs，减少四组独立 state 回填；Hero 视频改为更保守的 preload，并把非关键动效推迟到首帧之后；
6. 把页面各自的 `ScrollTrigger.refresh()` 收敛到一个统一调度点，避免 120/250/400/600ms 多次全局刷新。

### P2：资源与长期治理

1. 音频使用 `preload="none"`，用户点击播放后再设置 src/load；
2. 为客户端数据 hooks 增加共享缓存、请求去重和 AbortController；
3. 重新评估 `images.unoptimized`，为大图生成合理尺寸与现代格式；
4. 审计 9 个字体家族和 weights，只保留真实使用组合；
5. 评估 SiteChrome 是否需要每次导航都播放 0.4 秒 entrance；
6. 把 performance benchmark 改成每路由至少 5 次 warm sample，报告 median/P95，而不是只看单次值。

## 9. 建议验收指标

修复不能只以“感觉顺了”为准。建议在代理开启、后端离线、且故意不设置 NO_PROXY 的环境中验证代码防御：

- loopback API 失败应在 100ms 量级返回，不经过 `127.0.0.1:7892`；
- Home、About、Footprints warm HTML 不再随请求数量线性增长，目标均低于 800ms；
- production warm soft navigation：普通页面 median `clickToPath <= 250ms`，重页面 `<= 400ms`；
- 所有路由最大 long task `< 100ms`，About 至少先从 427ms 降到 150ms 以下；
- `clickToQuiet` median `< 800ms`；
- 同一 Server render 中 public config 只请求一次；
- 页面离开后无未取消请求和遗留动画；
- 日志中不再出现完整 AxiosError/request 对象。

## 10. 限制与后续测量

- 最终 production 表格目前每条路由是一轮样本，适合定位数量级和异常路由，不适合宣称精确百分比；
- reduced-motion 对照单样本波动较大，只能作为“动画参与次因”的辅助证据；
- Long Task API 只有起始时间和持续时间，没有 JS 调用栈。About/Pond/Love 的函数级归因需用 Chrome Performance trace、Bottom-Up 和 Event Log 再确认；
- 本轮后端处于离线状态，定位的是离线 fallback 与本地开发路径；在线后端的真实 TTFB、连接复用和数据库耗时不在本报告范围；
- build 的 TypeScript 阶段约 3.2 分钟，属于独立的构建性能问题，不应与页面 soft navigation 混为一谈。

## 11. 最终判断

**严重卡顿主因：Server Axios 的 localhost 请求被系统 HTTP 代理劫持，并被页面串行/重复 await 放大。**

**次因：About、Pond、Love 的首次客户端渲染与动效初始化过重；多处 ScrollTrigger refresh、全屏 filter、视频和重复 state 回填延长了导航稳定时间。**

修复时必须先处理代理与数据依赖，再优化动画。反过来先删 Lenis、关音频或微调图片，只会改善边角，无法解决原来的 7–11 秒等待。