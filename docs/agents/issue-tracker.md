# issue-tracker.md

> Issue 跟踪方式。

## 1. Tracker 形态

本仓库使用 **本地 Markdown Issue tracker**：

```text
.scratch/<feature>/
# 或兼容单文件：
.scratch/{feature-name}.md
```

## 2. Issue 文件模板

```markdown
# {feature-name}

## Status
needs-triage | needs-info | ready-for-agent | ready-for-human | wontfix

## Description
一句话描述。

## Acceptance Criteria
- [ ] 验收项 1
- [ ] 验收项 2

## Notes
补充信息、链接、决策记录。
```

## 3. 与 PRD / Handoff 的关系

- Issue 是触发点，通常对应一个 Epic。
- 明确后产出 `docs/outputs/prd/{theme}/prd.md`。
- 任务拆解后产出 `docs/outputs/handoff/{theme}/{task}.md`。

## 4. 状态流转

```text
needs-triage → needs-info → ready-for-agent → （实施）→ ready-for-human / closed
                                    ↘ wontfix
```

标签词汇见 `triage-labels.md`。
