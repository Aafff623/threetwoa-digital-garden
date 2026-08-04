# docs/

> 项目文档、Agent 流程、架构决策与输出产物。

## 目录约定

| 路径 | 用途 |
|---|---|
| `agents/` | workflow · deliver · archive · domain · issue-tracker · triage-labels · voice（**无** language.md / context.md） |
| `adr/` | 架构决策记录：`000N-kebab-title.md` |
| `glossary/` | 人 ⇄ Agent 术语库（如 `frontend-ui.md`） |
| `knowledge/` | 可迁移知识（如 `project-init.md`） |
| `outputs/report/{theme}/` | 调研分析报告 |
| `outputs/prd/{theme}/` | PRD |
| `outputs/handoff/{theme}/` | 任务 handoff（覆盖式；模板见 `agents/deliver.md`） |
| `outputs/commit-history/{branch}/` | commit 攒批（按分支） |

## 当前状态

- 2026-08-04：Full init 迁移完成（ADR-0003）；`docs/output` → `docs/outputs`。
- 2026-08-05：细致 Review 抽检补缺（清单/brief 对齐；删空 `assets/backup/`）→ `outputs/report/project-init-refine-2026-08-05/`。
- 调研报告：`outputs/report/project-init-full-2026-08-04/`。
- README 配图 brief：`outputs/prd/readme-diagrams/`。
- 本地 Issue：`.scratch/`（见 `agents/issue-tracker.md`）。
