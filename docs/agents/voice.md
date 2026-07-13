# voice.md — 项目输出语气与格式规范

> 本仓 Agent 对外输出（README / commit / handoff / 文档 / 面向用户的回复）默认遵循的语气与格式。
> **与全局的关系**：全局有 `humanizer-output-style` skill（路径 `~/.config/opencode/skills/humanizer-output-style/SKILL.md`）负责统一输出语气与去 AI 味；本文件是**项目级覆盖**——项目内冲突时以本文件为准。
> **初始化时**：按 `project-init.md` §2.1 #9 与用户确认后填写；每项目语气不同，**勿照抄**。

---

## 1. 语气（Tone）

| 维度 | 本仓规定 |
|---|---|
| 整体气质 | 编辑式数字花园：克制、安静、有质感（"少写几行，多筑一境"） |
| 情绪 | 温暖、真诚，不煽情、不营销腔 |
| 人称 | 可用第一人称（"我 / 本站"），避免过度自夸 |
| 中英混排 | 中文为主；界面 / 技术术语保留英文（Hero / Marquee / Lightbox / App Router） |
| 信息密度 | 高但要呼吸感——能用表格 / 列表说清的不用大段散文 |

## 2. 格式（Format）

- **结构化优先**：对比用表格，步骤用有序列表，枚举用无序列表。
- **emoji 克制**：每节至多 1–2 个，承担锚点或分隔作用，不堆砌、不连续使用。
- **术语统一**：界面组件词用 `docs/glossary/frontend-ui.md` 的标准词（如 *Magic Pill Tracker*、*Bento Grid*）。
- **commit**：Conventional Commits（`type(scope): subject`），见 `AGENTS.md` §1.4。
- **路径**：遵循 project-init 目录规范；禁止 `docs/images/`；媒体入 `assets/`。
- **文档交叉引用**：用相对路径（`docs/agents/handoff.md`），不用绝对 URL 指本仓内部。

## 3. 禁忌（Anti-voice）

- ❌ 赛博朋克 / 霓虹 / 科技炫酷腔（本仓是编辑式花园，不是 cyber）。
- ❌ 营销话术："最强 / 颠覆 / 革命性 / 史诗级"。
- ❌ 照抄他仓文案（project-init §3.7 已禁）。
- ❌ 过度装饰：花哨徽章堆叠、彩虹分隔线、满屏 emoji、夸张标题。
- ❌ 模糊措辞："大概 / 可能 / 应该"当结论用——要么验证、要么标注为假设。

## 4. 示例对照

| ❌ 不要 | ✅ 要 |
|---|---|
| "本站采用最前沿的 Next.js 16 黑科技" | "用 Next.js 16 App Router 做服务端优先渲染" |
| "🔥💥 超强功能大放送 💥🔥" | "## 功能（配 `features.png`）" |
| "那个会跟着鼠标滑的小块" | "Navbar 的 Magic Pill Tracker（见 glossary）" |

## 5. 何时修订本文件

- 项目定位变化（如从博客转工具站）→ 重写 §1。
- 新增视觉风格（如 brutalist 主题落地）→ 更新 §3 禁忌。
- 用户明确要求换语气 → 以用户为准，并同步更新本文件。
