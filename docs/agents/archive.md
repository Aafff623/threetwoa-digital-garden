# archive.md

> 过时产物归档规则。

## 1. 归档范围

- 已完成的调研报告（report）/ PRD
- 已关闭的 handoff 文档
- 过时的 commit-history 摘要

## 2. 归档路径

| 来源 | 目标 |
|---|---|
| `docs/output/report/{theme}/` | `docs/output/report/archive/{theme}/` |
| `docs/output/prd/{theme}/prd.md` | `docs/output/prd/archive/{theme}/prd.md` |
| `docs/output/prd/{theme}/` 下其他文件 | `docs/output/prd/archive/{theme}/` |
| `docs/output/handoff/{theme}/{task}.md` | `docs/output/handoff/archive/{theme}/{task}.md` |
| `docs/commit-history/{date}-{theme}.md` | 保留原路径或移入 `docs/commit-history/archive/` |

## 3. 归档命名

- 保留原文件名。
- 目录按 `{theme}` 或 `{date}` 分组。

## 4. 何时归档

- PRD 对应功能已上线且无后续迭代。
- Handoff 对应任务已 Review 通过并 commit。
- 用户明确要求清理历史产物。
