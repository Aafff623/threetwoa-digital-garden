# archive.md

> 过时产物归档规则。

## 1. 归档范围

- 已完成的调研报告（report）/ PRD
- 已关闭的 handoff 文档
- 已合并特性分支的 commit-history（移入 `archive/`）

## 2. 归档路径

| 来源 | 目标 |
|---|---|
| `docs/outputs/report/{theme}/` | `docs/outputs/report/archive/{theme}/` |
| `docs/outputs/prd/{theme}/` | `docs/outputs/prd/archive/{theme}/` |
| `docs/outputs/handoff/{theme}/{task}.md` | `docs/outputs/handoff/archive/{theme}/{task}.md` |
| `docs/outputs/commit-history/{branch}/`（已合并特性分支） | `docs/outputs/commit-history/archive/{branch}/` |

主分支（`master` / `main`）的 commit-history **永不**归档删除。

## 3. 归档命名

- 保留原文件名；目录按 `{theme}` 或分支名分组。

## 4. 何时归档

- PRD 对应功能已上线且无后续迭代。
- Handoff 对应任务已 Review 通过并 commit。
- 特性分支已合并到主分支。
- 用户明确要求清理历史产物。
