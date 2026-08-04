# voice.md — 项目输出语气与格式规范

> 本仓 Agent 对外输出（README / commit / handoff / 文档 / 面向用户的回复）默认遵循的语气与格式。  
> **与全局的关系**：全局 `humanizer-output-style` 负责去 AI 味；本文件是**项目级覆盖**。  
> **回答格式**：Dual-Track + 白话 Mermaid → `.cursor/rules/answer-format.mdc`（与用户级 `AGENTS.md` §16 对齐）。

---

## 1. 语气（Tone）

| 维度 | 本仓规定 |
|---|---|
| 整体气质 | 编辑式数字花园：克制、安静、有质感（「少写几行，多筑一境」） |
| 情绪 | 温暖、真诚，不煽情、不营销腔 |
| 人称 | 可用第一人称（「我 / 本站」），避免过度自夸 |
| 中英混排 | 中文为主；界面 / 技术术语保留英文（Hero / Marquee / Lightbox / App Router） |
| 信息密度 | 高但要呼吸感——能用表格 / 列表说清的不用大段散文 |

## 2. 格式（Format）

- **结构化优先**：对比用表格，步骤用有序列表，枚举用无序列表。
- **emoji 克制**：每节至多 1–2 个，承担锚点或分隔作用。
- **术语统一**：界面组件词用 `docs/glossary/frontend-ui.md`；流程词用根 `LANGUAGES.md`。
- **commit**：Conventional Commits（`type(scope): subject`）。
- **路径**：`docs/outputs/`（复数）；媒体入 `assets/`；禁止 `docs/images/`。
- **交叉引用**：相对路径；不要指向已删除的 `docs/agents/handoff.md`（模板在 `deliver.md`）。
- **回答格式**：遵循 `answer-format.mdc`（需要图示时用白话 Mermaid）。

## 3. 禁忌（Anti-voice）

- ❌ 赛博朋克 / 霓虹 / 科技炫酷腔。
- ❌ 营销话术：「最强 / 颠覆 / 革命性 / 史诗级」。
- ❌ 照抄他仓业务文案。
- ❌ 过度装饰：花哨徽章堆叠、彩虹分隔线、满屏 emoji。
- ❌ 用 Preview Gallery 文案描述本仓（本仓仅 Showcase + README 预览壳）。

## 4. 示例对照

| ❌ 不要 | ✅ 要 |
|---|---|
| 「本站采用最前沿的 Next.js 16 黑科技」 | 「用 Next.js 16 App Router 做服务端优先渲染」 |
| 「超强功能大放送」 | 「## 功能（配 `features.png`）」 |
| 「那个会跟着鼠标滑的小块」 | 「Navbar 的 Magic Pill Tracker（见 glossary）」 |

## 5. 何时修订

- 项目定位变化 → 重写 §1。
- 用户明确要求换语气 → 以用户为准并更新本文件。
