# 首页艺术字 Kiro 排版复现 · Handoff

## Status

draft

## 背景

用户希望在首页艺术字中复现 Kiro Powers 标题的字体气质。线上源码确认 Kiro 使用 AWS Diatype Rounded Semi Mono `700`，而不是此前推测的 Spline Sans Mono `500`。

关联文档：

- `docs/outputs/prd/home-hero-kiro-type/prd.md`
- `docs/outputs/report/home-hero-kiro-type/kiro-powers-type-research.md`

## 改动点

- `src/app/layout.tsx`：加载 Spline Sans Mono 与 ZCOOL QingKe HuangYou 字体变量。
- `src/app/styles/themes/life.css`：为 `life` Style 的 Hero 标题配置中英文字体栈。
- `src/components/home/HomeHero.tsx`：应用 Kiro 的响应式字号、行高、字距、均衡换行和最大宽度。
- 不修改 TextType 行为，不复制 AWS 字体文件，不覆盖其他 Style。

## 验收步骤

1. 运行 `npm run lint`。
2. 运行 `npm run build`。
3. 打开默认 `life` Style 首页，在 `375px`、`768px`、`1024px`、`1440px` 检查标题无溢出。
4. 在 DevTools Rendered Fonts 中确认中文命中 ZCOOL QingKe HuangYou，Latin 命中 Spline Sans Mono。
5. 切换四种其他 Style，确认其标题字体保持原行为。
6. 修改后台 Hero 三段文案，确认 TextType 动画、换行和光标正常。

## 回滚

- 回退本任务对 `layout.tsx`、`life.css`、`HomeHero.tsx` 的改动。
- 删除本任务新增的字体变量后，首页会恢复现有 Jost 与 CJK fallback。

## 已知风险与未决项

- 中文候选字体只有 `400`，笔画比 Kiro 的 Latin `700` 更轻。
- 视觉验收需要用户确认标题从当前最大 `96px` 缩小到 Kiro 的最大 `60px` 是否符合首页气质。
- 工作区已有其他未提交改动。本任务不修改、不回滚、不纳入这些文件。
