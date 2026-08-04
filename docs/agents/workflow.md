# workflow.md

> 本仓库任务流：从 Issue 到实施再到归档。

## 1. 流程概览

```text
Issue (GitHub 或 .scratch/{feature}.md)
  → docs/outputs/report/{theme}/        # 调研分析（可选，先于 PRD）
  → docs/outputs/prd/{theme}/prd.md (draft)
  → 用户 approved
  → 拆解为子任务
  → docs/outputs/handoff/{theme}/{task}.md
  → 实施
  → awaiting-review【停】
  → 用户通过
  → commit / docs/outputs/commit-history/{branch}/ / archive
```

## 2. 阶段说明

### 2.1 Issue / Triage

- 新需求先经 triage 标签分类。
- 完全明确后再进入 PRD。
- Issue tracker 规则见 `issue-tracker.md`。

### 2.2 PRD

- 路径：`docs/outputs/prd/{theme}/prd.md`
- 必须包含：目标、范围、验收标准、关键决策、风险。
- PRD 未批准不写功能代码。

### 2.3 Handoff

- 路径：`docs/outputs/handoff/{theme}/{task}.md`
- 一任务一 handoff；覆盖式更新（旧文件直接删除）。
- 模板与场景（默认仅 A）见 `deliver.md`。
- 至少包含：背景、改动点、验收步骤、回滚方式；跨边界时加「给下一个执行者」段。

### 2.4 实施

- 遵循 `AGENTS.md` 与 `CONTEXT.md` 硬约束。
- 优先跑测试 / lint / build 验证。
- 保持改动最小化，不重构无关代码。

### 2.5 Review

- 实施完成后标记为 `awaiting-review`。
- Review 维度：正确性、性能、可维护性、与规范一致性。
- Review 通过后再 commit。

### 2.6 Commit / Archive

- 原子 commit，一条逻辑改动一次 commit。
- commit 后按 `docs/knowledge/project-init.md` §5.1 维护  
  `docs/outputs/commit-history/{branch}/YYYY-MM-DD.md`。
- 过时 report / PRD / handoff 移入对应 `archive/`（见 `archive.md`）。

## 3. 门禁

- PRD 未批准 → 不写功能代码。
- 无 handoff → 不开工。
- Review 未通过 → 不 commit。
