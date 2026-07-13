# AGENTS.md

> Agent 硬约束、任务流摘要与路径速查表。  
> 与 `docs/agents/workflow.md` 共同构成任务流门禁。
> **Output Style**: `humanizer-output-style` skill — 统一语气与去 AI 味。详见 `skills/humanizer-output-style/SKILL.md`

## 1. 硬约束

### 1.1 单一事实源

| 事实类型 | 唯一入口 |
|---|---|
| 领域术语 / 硬约束 | `CONTEXT.md` |
| 共享用词 | `LANGUAGES.md` |
| Agent 流程 / 门禁 | `AGENTS.md` + `docs/agents/workflow.md` |
| 界面组件术语 | `docs/glossary/frontend-ui.md` |
| 人读摘要 / 运行说明 | `README.md` |

禁止在 `docs/agents/` 下维护 `language.md` 或 `context.md`。

### 1.2 PRD 门禁

- PRD 未批准不写功能代码。
- 一任务一 handoff，写入 `docs/output/handoff/{theme}/{task}.md`。
- Review 先于 commit。

### 1.3 目录规范

- 媒体资产入 `assets/`，禁止 `docs/images/`。
- 调研报告入 `docs/output/report/{theme}/`。
- PRD 入 `docs/output/prd/{theme}/`。
- Handoff 入 `docs/output/handoff/{theme}/`（职责见 `docs/agents/handoff.md`）。
- 演示文稿入 `assets/decks/`。
- Commit 攒批入 `docs/commit-history/`（维护见 `docs/knowledge/project-init.md` §5.1）。
- ADR 入 `docs/adr/000N-kebab-title.md`。
- 可迁移知识入 `docs/knowledge/`。

### 1.4 Git 门禁

- 每次功能改动结束原子 commit。
- 使用 Conventional Commits：`type(scope): subject`。
- Commit 前跑 `npm run lint` 与 `npm run build`（如适用）。

## 2. 路径速查

| 资源 | 路径 |
|---|---|
| 项目初始化规范 | `docs/knowledge/project-init.md` |
| 任务流 | `docs/agents/workflow.md` |
| 交付规范 | `docs/agents/deliver.md` |
| 归档规范 | `docs/agents/archive.md` |
| 领域定义 | `docs/agents/domain.md` |
| Issue tracker | `docs/agents/issue-tracker.md` |
| Triage 标签 | `docs/agents/triage-labels.md` |
| 界面术语库 | `docs/glossary/frontend-ui.md` |
| 输出语气规范 | `docs/agents/voice.md` |
| 调研报告 | `docs/output/report/{theme}/` |
| PRD | `docs/output/prd/{theme}/prd.md` |
| Handoff | `docs/output/handoff/{theme}/{task}.md` |
| Handoff 规范 | `docs/agents/handoff.md` |
| Commit 历史 | `docs/commit-history/` |
| ADR | `docs/adr/` |
| README 配图 | `assets/images/readme/` |
| 文档头像 | `assets/images/avatar/` |
| 文档图标 | `assets/images/icon/` |
| 演示视频 | `assets/video/` |
| 演示文稿 | `assets/decks/` |

## 3. 日常业务流

```text
Issue(Epic)
  → docs/output/report/{theme}/        # 调研（可选，先于 PRD）
  → docs/output/prd/{theme}/prd.md (draft)
  → 用户 approved
  → 拆解为子任务
  → docs/output/handoff/{theme}/{task}.md
  → 实施
  → awaiting-review【停】
  → 用户通过
  → commit / docs/commit-history / archive
```

详见 `docs/agents/workflow.md`。
