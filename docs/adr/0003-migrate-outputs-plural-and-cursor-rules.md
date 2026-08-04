# ADR-0003: 迁移至 docs/outputs 复数路径并同步 Cursor MDC Rules

## 状态

Accepted（2026-08-04）

## 背景

本仓此前已按 ADR-0001 / ADR-0002 完成一轮 project-init，但与最新全局规范存在系统性漂移：

- 任务产物目录仍为 `docs/output/`（单数），规范要求 `docs/outputs/`（复数）。
- commit-history 位于 `docs/commit-history/`，未按分支组织到 `docs/outputs/commit-history/{branch}/`。
- `assets/theme/{ppt,script}/` 仅含空 `.gitkeep`，与「按需建槽、禁止空占位」冲突；规范路径为 `assets/ppt/` · `assets/speeches/`。
- 缺失项目内 `.cursor/rules/` 五份 MDC（Windows 路径/Shell、answer-format、AGENTS、commit-history）。
- `docs/agents/handoff.md` 与 `deliver.md` / 根入口职责重叠；规范要求 agents 不维护 `language.md` / `context.md`，handoff 模板并入 deliver。
- README 已具备完整契约图与 Showcase，但 Preview Gallery 语义未书面声明省略；预览壳文件名为 `readme-preview.html`，与契约 `preview-readme.*` 不一致。

## 决策

1. **迁移**（非重建）：保留业务代码与既有 README 配图 / Showcase，只做治理层对齐。
2. `docs/output/**` → `docs/outputs/**`；历史 commit-history 迁入 `docs/outputs/commit-history/master/`。
3. 删除空的 `assets/theme/`、空 `assets/video/`、空 `assets/images/icon/`；不预建 ppt/speeches。
4. 从用户级同步五份 `.cursor/rules/*.mdc`（`alwaysApply: true`），禁止在项目内改语义。
5. 删除 `docs/agents/handoff.md`，模板并入 `docs/agents/deliver.md`；根 `AGENTS.md` / `CONTEXT.md` / `LANGUAGES.md` 覆盖更新为复数路径。
6. Phase B：跳过说明图重生图（契约图与 Showcase 已齐全）；单产品以 Showcase 为主，书面声明无 Preview Gallery；落地 `preview-readme.{html,css,js}`（端口 8095）。

## 后果

- 所有流程文档、README Key docs、assets README 引用改为 `docs/outputs/`。
- 旧路径 `docs/output/`、`docs/commit-history/`、`docs/agents/handoff.md` 视为废止。
- 工作区若存在未提交业务 WIP（src/*），不纳入本轮 init commit。
- 后续业务 theme 直接走 `Issue → report? → prd → handoff → Review → commit-history`。

## 相关 ADR

- [ADR-0000](./0000-use-adr.md) · [ADR-0001](./0001-apply-project-init.md) · [ADR-0002](./0002-narrow-output-and-extend-handoff.md)
