# navbar-hover-deadzone · 2026-07-13

## Status
shipped

## Commits
- `6f2df56` fix(navbar): eliminate hover dropdown dead-zone

## 做了什么
桌面端导航 mega-menu 的二级下拉面板在鼠标从一级按钮移向子项途中消失，无法点击。根因是 `Navbar.tsx` 下拉包装层的 `mt-2` 在按钮与 absolute 面板间留了 8px 死区——面板不撑开 `group/nav` 的 hover 盒，穿间隙时 `group-hover/nav` 失效。把 `mt-2 pt-1` 改为 `pt-3`，margin 死区转为 padding 桥接，视觉间距不变（12px），整段桥接区纳入 hover 命中范围。Playwright 实测 gap 8→0、到达子项后 opacity 保持 1。

## 关联
- Issue #9 — https://github.com/Aafff623/threetwoa-digital-garden/issues/9（已关闭，completed）
- 关键文件：`src/components/Navbar.tsx:392`
- 复现脚本：`scripts/repro-navbar-bug.mjs`
- 范式：`docs/knowledge/project-init.md` §5.2

## 回滚
- `git revert 6f2df56`（单行改动），或手动将 `pt-3` 改回 `mt-2 pt-1`。
