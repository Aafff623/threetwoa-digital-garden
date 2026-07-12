# triage-labels.md

> Issue / 任务分类标签词汇。Agent 与用户共用同一套。

## Canonical 标签

| 标签 | 含义 | 使用场景 |
|---|---|---|
| `needs-triage` | 待维护者评估 | 新提交、信息尚不完整 |
| `needs-info` | 等待补充信息 | 需要用户进一步说明 |
| `ready-for-agent` | 已明确，可由 Agent 实施 | PRD / handoff 已批准 |
| `ready-for-human` | 需要人工实施 | 超出当前 Agent 能力或需要设计决策 |
| `wontfix` | 不处理 | 超出范围或已明确不行动 |

## 使用规则

- 一个任务同时只能有一个主要 triage 标签。
- 状态变更时同步更新 `.scratch/{feature}.md` 中的 Status 字段。
- 标签与 `workflow.md` 中的门禁节点对应。
