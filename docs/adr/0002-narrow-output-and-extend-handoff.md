# ADR-0002: 收窄 output 目录、扩展 handoff 职责并补强 init 规范

## 状态

Accepted（2026-07-13）

## 背景

ADR-0001 落地的 project-init 初版在运行中暴露若干结构缺口：

- `docs/output/` 混放 PRD、调研报告与演示文稿（ppt），边界模糊；`research-*` 类调研报告挤在 `prd/` 下名不副实。
- `handoff` 仅承担"项目内一任务一交付"，无法覆盖跨 agent / 跨工具 / 跨项目 / 跨小组的上下文交接。
- `docs/commit-history/` 自建立以来一直为空——规范只说"要写"未说"怎么写"，沦为摆设。
- project-init §2.1 与用户对齐项缺少"项目预期"与"handoff 形式"两项，导致 init 后资产边界与交接约定不明确。
- 新增的 `docs/glossary/` 术语库（人 ⇄ Agent 认知对齐）未在 project-init / AGENTS 中挂载，游离于单一事实源之外。

## 决策

1. **收窄 `docs/output/` 为三类产物**：`report/`（调研分析报告）/ `prd/`（产品需求文档）/ `handoff/`（交付与交接）。演示文稿移出 docs，归 `assets/decks/`。
2. **扩展 handoff 为五种场景**（`docs/agents/handoff.md`）：项目内任务交付（A）/ 跨 agent（B）/ 跨工具（C）/ 跨项目（D）/ 跨小组（E）。统一路径，以文档内「给下一个执行者」段区分场景。
3. **新增 commit-history 维护规范**（project-init §5.1）：文件命名 `{date}-{theme}.md`、字段模板（Status / Commits / 做了什么 / 关联 / 回滚）、反模式（只贴 git log / 记录无关 commit / 长期不更新）。
4. **扩充 project-init §2.1 对齐项**：#7 项目预期、#8 handoff 形式（启用 A–E 哪些场景）。
5. **挂载 glossary 进单一事实源**：project-init 三处（目录树 / 验收 / 速查）+ AGENTS §1.1 与 §2 速查。

## 后果

- `docs/output/ppt/` 已删除；新建 `docs/output/report/` 与 `assets/decks/`（含 `.gitkeep`）。
- 现有 `docs/output/prd/research-deferred-workstreams.md` 按新规范迁入 `docs/output/report/`。
- 后续 init 须按 §2.1 八项与用户对齐；每次 commit 后须按 §5.1 维护 commit-history。
- handoff 不再仅限项目内；跨边界交接必须填「给下一个执行者 · 必读上下文」。
- `AGENTS.md` / `project-init.md` / `docs/README.md` / `workflow.md` / `archive.md` / `deliver.md` 全部同步新路径与交叉引用。

## 相关 ADR

- [ADR-0000: 采用 ADR 记录架构决策](./0000-use-adr.md)
- [ADR-0001: 应用 project-init 规范完成仓库初始化](./0001-apply-project-init.md)
