# AGENTS.md

> Agent 硬约束、任务流摘要与路径速查。  
> 与 `docs/agents/workflow.md` 共同构成任务流门禁。

> **Output Style**: `humanizer-output-style` skill — 统一语气与去 AI 味。加载路径：`skills/humanizer-output-style/SKILL.md`  
> **Windows Rules**: `.cursor/rules/windows-path-discipline.mdc` · `windows-shell-discipline.mdc`（alwaysApply）  
> **Answer Format**: `.cursor/rules/answer-format.mdc`（Dual-Track + 白话 Mermaid）  
> **Global mirror**: `.cursor/rules/AGENTS.mdc` · **commit-history**: `.cursor/rules/commit-history.mdc`  
> **项目语气覆盖**: `docs/agents/voice.md`

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
- 一任务一 handoff，写入 `docs/outputs/handoff/{theme}/{task}.md`（覆盖式更新，旧文件直接删除）。
- Handoff 模板与场景说明见 `docs/agents/deliver.md`（默认仅场景 A）。
- Review 先于 commit。

### 1.3 目录规范

- 媒体资产入 `assets/`，禁止 `docs/images/`。
- 调研报告入 `docs/outputs/report/{theme}/`。
- PRD 入 `docs/outputs/prd/{theme}/`。
- Handoff 入 `docs/outputs/handoff/{theme}/`。
- Commit 攒批入 `docs/outputs/commit-history/{branch}/YYYY-MM-DD.md`。
- 演示文稿按需入 `assets/ppt/`；逐字稿按需入 `assets/speeches/`（空槽不预建）。
- ADR 入 `docs/adr/000N-kebab-title.md`。
- 可迁移知识入 `docs/knowledge/`。

### 1.4 Git 门禁

- 功能改动结束原子 commit；Conventional Commits：`type(scope): subject`。
- Commit 前跑 `npm run lint` 与 `npm run build`（如适用）。
- 不把 `.env*`、密钥、隐私影像当唯一说明入库。

## 2. Agent skills

本仓消费 Matt Pocock 系 skill 时读取：

| Skill 消费点 | 路径 |
|---|---|
| Issue tracker | `docs/agents/issue-tracker.md` |
| Triage labels | `docs/agents/triage-labels.md` |
| Domain | `docs/agents/domain.md` |

本地 Issue：`.scratch/<feature>/` 或 `.scratch/{feature}.md`（见 issue-tracker）。

## 3. 路径速查

| 资源 | 路径 |
|---|---|
| 项目初始化规范 | `docs/knowledge/project-init.md` |
| 任务流 | `docs/agents/workflow.md` |
| 交付 / Handoff 模板 | `docs/agents/deliver.md` |
| 归档规范 | `docs/agents/archive.md` |
| 领域定义 | `docs/agents/domain.md` |
| Issue tracker | `docs/agents/issue-tracker.md` |
| Triage 标签 | `docs/agents/triage-labels.md` |
| 输出语气 | `docs/agents/voice.md` |
| 界面术语库 | `docs/glossary/frontend-ui.md` |
| 调研报告 | `docs/outputs/report/{theme}/` |
| PRD | `docs/outputs/prd/{theme}/prd.md` |
| Handoff | `docs/outputs/handoff/{theme}/{task}.md` |
| Commit 历史 | `docs/outputs/commit-history/{branch}/` |
| ADR | `docs/adr/` |
| README 配图 | `assets/images/readme/` |
| README 预览壳 | `preview-readme.html`（端口 8095） |

## 4. 日常业务流

```text
Issue(Epic)
  → docs/outputs/report/{theme}/        # 调研（可选）
  → docs/outputs/prd/{theme}/prd.md (draft)
  → 用户 approved
  → docs/outputs/handoff/{theme}/{task}.md
  → 实施
  → awaiting-review【停】
  → 用户通过
  → commit / docs/outputs/commit-history/{branch}/ / archive
```

详见 `docs/agents/workflow.md`。
