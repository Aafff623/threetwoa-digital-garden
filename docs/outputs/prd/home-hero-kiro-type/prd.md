# PRD: 首页艺术字复现 Kiro Powers 排版气质

> Status: approved  
> Approved by: user, 2026-07-15 (`继续推进`)  
> Research: `docs/outputs/report/home-hero-kiro-type/kiro-powers-type-research.md`

## 目标

让默认 `life` Style 的首页艺术字呈现 Kiro Powers 标题的圆润 semi-mono 气质，同时保留现有中文文案、TextType 动画、后台配置和首页构图。

## 范围

- Latin、数字和受支持标点优先使用 Spline Sans Mono `700`。
- 中文优先使用 ZCOOL QingKe HuangYou `400`。
- 标题使用 `44px` 到 `60px` 的响应式字号、`1.1` 行高、`-0.03em` 字距、均衡换行与约 `738px` 最大宽度。
- 新字体只作用于默认 `life` Style。
- 保留三段动态内容、光标动画与后台文案配置。

不复制或 hotlink Kiro 的 AWS Diatype 字体文件，不重做 Hero 背景、按钮和信息架构，不改变其他四种 Style。

## 验收标准

1. `life` Style 首页汉字命中 ZCOOL QingKe HuangYou，不回退到系统默认字体。
2. Latin 测试内容命中 Spline Sans Mono，使用原生 `700`。
3. 标题字号为 `clamp(2.75rem, ..., 3.75rem)`，行高 `1.1`，字距 `-0.03em`，最大宽度 `738px`。
4. `375px` 宽度无横向溢出，长文案可均衡换行。
5. 三段 TextType 内容与后台配置继续生效。
6. `swiss`、`minimalist`、`glass`、`brutalist` 字体行为不变。
7. 不新增指向 `kiro.dev/styles/fonts/*` 的请求或 AWS 字体资产。
8. `npm run lint` 与 `npm run build` 通过。

## 关键决策

- 使用 `next/font/google` 自托管构建产物。
- Spline Sans Mono 负责 Latin，ZCOOL QingKe HuangYou 负责简体中文。
- ZCOOL QingKe HuangYou 只有 `400`，不伪称原生 `700`，也不使用文字描边制造假粗体。
- 只复现标题排版，不照搬 Kiro 的黑色 Hero 布局。

## 风险

- 中英文字体笔画厚度不同。首页当前以中文为主，visual review 同时覆盖纯中文与混排。
- 新字号最大 `60px`，比当前桌面 `96px` 小，会改变主视觉层级。这是源码级复现的一部分。
- 字体增加首屏资源。只加载必要字重，使用 `display: swap`，并检查构建结果。

## 验收步骤

1. 在 `375px`、`768px`、`1024px`、`1440px` 查看默认 `life` Style 首页。
2. 用 DevTools Rendered Fonts 检查中文与 Latin 命中字体。
3. 切换其余四种 Style，确认原行为不变。
4. 检查后台三项 Hero 文案和 TextType 动画。
5. 运行 `npm run lint` 与 `npm run build`。
