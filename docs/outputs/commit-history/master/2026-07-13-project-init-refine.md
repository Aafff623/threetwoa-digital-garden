# project-init-refine · 2026-07-13

## Status

shipped

## Commits

- `docs(project-init): narrow output, extend handoff, add glossary/voice and commit-history spec`
  （short hash 见 `git log -1`——本条 commit-history 与被记录改动同批入库，故不内嵌自指 hash）

## 做了什么

project-init 规范的结构性补强：

1. `docs/outputs/` 收窄为 **report / prd / handoff** 三类；演示文稿移 `assets/decks/`（原 `output/ppt/` 删除）。
2. 新增 `docs/agents/deliver.md`——handoff 扩展为五种交接场景（项目内 / 跨 agent / 跨工具 / 跨项目 / 跨小组）。
3. 新增 `docs/agents/voice.md`——项目级输出语气与格式规范（对标全局 caveman / 规划中的 humanizer）。
4. project-init **§5.1** 立commit-history 维护规范（命名 / 字段 / 反模式）；**§2.1** 对齐项扩至 9 项（加项目预期、handoff 形式、输出语气）。
5. **glossary** 术语库挂进单一事实源（project-init 三处 + AGENTS §1.1/§2）。
6. project-init **§3.7** 固化配图出图规范 MD 流程（`readme-image-prompts.md` 作为标准产物）。
7. **ADR-0002** 记录本次决策；research 报告从 `prd/` 迁入 `report/`。
8. 新建 `docs/glossary/frontend-ui.md`（人 ⇄ Agent 认知对齐术语库）。

## 关联

- 决策记录：`docs/adr/0002-narrow-output-and-extend-handoff.md`
- 主要涉及：`docs/knowledge/project-init.md` · `AGENTS.md` · `docs/agents/{handoff,voice,workflow,deliver,archive}.md` · `docs/glossary/frontend-ui.md` · `docs/README.md`

## 回滚

- `git revert <本 commit>`；目录结构恢复需手动重建 `docs/outputs/ppt/`、回移 research 文件至 `prd/`。
