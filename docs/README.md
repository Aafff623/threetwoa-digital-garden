# docs/

> 项目文档、Agent 流程、架构决策与输出产物。

## 目录约定

| 路径 | 用途 |
|---|---|
| `agents/` | Agent 流程件：workflow、deliver、archive、domain、issue-tracker、triage-labels |
| `adr/` | 架构决策记录：`000N-kebab-title.md` |
| `contexts/` | 多 CONTEXT 时分端目录（可选） |
| `knowledge/` | 可迁移知识规范，如 `project-init.md` |
| `commit-history/` | commit 攒批记录 |
| `output/prd/{theme}/` | PRD / 调研报告 |
| `output/handoff/{theme}/` | 任务 handoff 文档 |
| `output/ppt/` | 演示文稿 |

## 当前状态

- `docs/knowledge/project-init.md`：项目初始化规范（已同步自 agentic-workbench）。
- `docs/agents/`：已就位 workflow、deliver、archive、domain、issue-tracker、triage-labels。
- `docs/adr/0000-use-adr.md`：ADR 采用记录。
- `docs/output/prd/readme-diagrams/readme-diagram-brief.md`：README Polish 阶段的章节、配图节点与出图 Prompt。
- `docs/output/handoff/`、`docs/output/ppt/`、`docs/commit-history/`：目录已就位，待业务 theme 产生内容。
- `.scratch/{feature}.md`：本地 Issue tracker 入口（见 `docs/agents/issue-tracker.md`）。
