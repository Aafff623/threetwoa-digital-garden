# deliver.md

> 交付物标准、Review 口径，以及 Handoff 模板（原独立 `handoff.md` 已并入本文件，避免与根入口重复漂移）。

## 1. 代码交付物

- 功能实现完整，且只改必要文件。
- 新增 / 修改的代码与仓库现有风格一致。
- 不引入未使用的依赖或死代码。
- 关键路径有适当回退（如 API 失败时使用 static fallback）。
- 无密钥、无本机绝对路径、无隐私数据入库。

## 2. 文档交付物

- 涉及新领域术语时更新 `CONTEXT.md`。
- 涉及新共享用词时更新 `LANGUAGES.md`。
- PRD / handoff 路径见 `workflow.md`；模板见下文 §5。

## 3. Review 检查单

- [ ] 功能符合 handoff 验收标准
- [ ] 改动最小化，无无关重构
- [ ] `npm run lint` 通过
- [ ] `npm run build` 通过（如适用）
- [ ] 无密钥、无本机绝对路径、无隐私数据入库
- [ ] 文档与代码一致

## 4. 交付状态

| 状态 | 含义 |
|---|---|
| `draft` | 进行中，未提交 Review |
| `awaiting-review` | 已完成，等待 Review |
| `approved` | Review 通过，可 commit |
| `archived` | 已归档 |

## 5. Handoff 场景与模板

一句话：**把一件事的上下文完整交给下一个执行者**。

### 5.1 五种场景

| 场景 | 跨什么 | 默认启用 |
|---|---|:---:|
| **A · 项目内任务交付** | 任务 → 任务 | ✅ |
| **B · 跨 Agent** | Agent → Agent | 按需 |
| **C · 跨工具** | 工具 → 工具 | 按需 |
| **D · 跨项目** | 项目 → 项目 | 按需 |
| **E · 跨小组** | 人/组 → 人/组 | 按需 |

本仓按全局默认：**仅启用 A**。

### 5.2 统一路径

所有场景：`docs/outputs/handoff/{theme}/{task}.md`（不按场景分目录）。覆盖式更新。

### 5.3 通用骨架

```markdown
# {task} · Handoff

## Status
draft | awaiting-review | approved | archived

## 背景
为什么做、关联的 PRD / Issue / 上游 handoff。

## 改动点
- 文件 / 模块清单，每项一句话说改了什么。

## 验收步骤
1. 可复现的检验步骤。

## 回滚
- revert 哪些 hash / 配置开关。

## 已知风险与未决项
- 遗留问题、假设、待确认项。
```

跨边界（B/C/D/E）追加「给下一个执行者」：目标执行者、必读上下文、工具/环境差异、验收方。

### 5.4 门禁

- 无 handoff → 不开工。
- 跨边界 handoff 必须有「必读上下文」。
