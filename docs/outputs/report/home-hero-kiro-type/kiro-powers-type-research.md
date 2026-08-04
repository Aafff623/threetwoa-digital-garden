# Kiro Powers 标题字体调研

> Date: 2026-07-15  
> Status: verified from live HTML and CSS  
> Source: [Kiro Powers](https://kiro.dev/powers/)

## 结论

官网标题 `Empower Kiro agents with expertise` 的真实字体是 `AWS Diatype Rounded Semi Mono`，不是 Spline Sans Mono。标题继承官网全局 `h1` 规则，实际参数为：

```css
font-family: "AWS Diatype Rounded Semi Mono", "AWS Diatype", ui-sans-serif, system-ui, sans-serif;
font-weight: 700;
font-size: clamp(2.75rem, calc(2.75rem + 1 * (100vi - 23.4375rem) / 56.5625), 3.75rem);
line-height: 1.1;
letter-spacing: -0.03em;
text-wrap: balance;
max-width: 738px;
```

字号从 `44px` 平滑增长到 `60px`。官网样式表只为这套字体声明 `400` 与 `700`，标题使用 `700`，不是此前视觉推测的 `500`。

证据来源：

- [官网字体声明 CSS](https://kiro.dev/_next/static/css/9d5581a7a0101811.css)
- [官网排版 CSS](https://kiro.dev/_next/static/css/20e99a53a22e9a5e.css)

构建哈希可能随官网发布变化。以上结果是 2026-07-15 对线上资源的直接检查。

## 项目适配限制

首页艺术字内容是 `三两园`、`少写几行，多筑一境`、`守园人`。AWS Diatype Rounded Semi Mono 与 Spline Sans Mono 都不能渲染这些中文字形。只替换 Latin 字体时，汉字会静默回退，视觉几乎不变。

官网公开加载 WOFF2 不代表允许其他项目重新分发。因此本项目不复制、不改名、不 hotlink Kiro 的 AWS 字体文件。需要字体文件级 1:1 时，必须由用户提供合法授权文件。

## 推荐实现

默认 `life` Style 使用互补字体栈：

```css
var(--font-spline-sans-mono),
var(--font-zcool-qingke-huangyou),
ui-monospace,
monospace
```

- Spline Sans Mono 负责 Latin、数字和受支持标点，提供接近官网的圆润 mono 气质。Google Fonts 提供 `400` 到 `700`：[字体 CSS](https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@400;500;600;700&display=swap)。
- ZCOOL QingKe HuangYou 负责简体中文，Google Fonts 当前提供 `400`：[字体 CSS](https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap)。
- 复现官网的字号、行高、字距、宽度和均衡换行，不复制其品牌字体。

这不是字形文件级 1:1，而是对中文真正生效、可维护且不越过字体授权边界的视觉复现。

## 项目落点

- `src/app/layout.tsx`：通过 `next/font/google` 加载字体并暴露 CSS variables。
- `src/app/styles/themes/life.css`：只覆盖 `life` Style 的首页标题字体栈。
- `src/components/home/HomeHero.tsx`：复现 Kiro 的响应式字号与排版参数。
- `src/components/ui/TextType.tsx`：保持现有动画逻辑，不修改。
