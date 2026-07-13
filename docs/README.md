# docs/

> 项目文档、Agent 流程、架构决策与输出产物。

## 目录约定

| 路径 | 用途 |
|---|---|
| `agents/` | Agent 流程件：workflow、deliver、archive、domain、issue-tracker、triage-labels |
| `adr/` | 架构决策记录：`000N-kebab-title.md` |
| `contexts/` | 多 CONTEXT 时分端目录（可选） |
| `glossary/` | 人 ⇄ Agent 认知对齐术语库，如 `frontend-ui.md` |
| `knowledge/` | 可迁移知识规范，如 `project-init.md` |
| `commit-history/` | commit 攒批记录 |
| `output/report/{theme}/` | 调研分析报告 |
| `output/prd/{theme}/` | PRD（产品需求文档） |
| `output/handoff/{theme}/` | 任务 handoff 文档（见 `agents/handoff.md`） |

## 当前状态

- `docs/glossary/frontend-ui.md`：前端界面术语库（`project-init.md` 的补充，补齐人 ⇄ Agent 认知债）。
- `docs/knowledge/project-init.md`：项目初始化规范（已同步自 agentic-workbench）。
- `docs/agents/`：已就位 workflow、deliver、archive、domain、issue-tracker、triage-labels。
- `docs/adr/0000-use-adr.md`：ADR 采用记录。
- `docs/output/prd/readme-diagrams/readme-diagram-brief.md`：README Polish 阶段的章节、配图节点与出图 Prompt。
- `docs/output/` 收窄为 `report/` · `prd/` · `handoff/` 三类；演示文稿移至 `assets/decks/`（原 `output/ppt/` 已移除）。待业务 theme 产生内容。
- `.scratch/{feature}.md`：本地 Issue tracker 入口（见 `docs/agents/issue-tracker.md`）。
