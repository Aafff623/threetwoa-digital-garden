# deliver.md

> 交付物标准与 Review 口径。

## 1. 代码交付物

- 功能实现完整，且只改必要文件。
- 新增 / 修改的代码与仓库现有风格一致。
- 不引入未使用的依赖或死代码。
- 关键路径有适当回退（如 API 失败时使用 static fallback）。
- 无密钥、无本机绝对路径、无隐私数据入库。

## 2. 文档交付物

- 涉及新领域术语时更新 `CONTEXT.md`。
- 涉及新共享用词时更新 `LANGUAGES.md`。
- PRD 按 `workflow.md` 路径存放；handoff 按场景套 `docs/agents/handoff.md` 模板。

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
