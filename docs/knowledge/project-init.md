# project-init — 接手 / 新建仓库的体系化初始化

> **用途**：无论从零开仓，还是接手客户/同学的现有仓库，先完成本文件规定的初始化，再进入业务 theme。  
> **性质**：可迁移操作规范（knowledge），不是某个产品的 PRD。  
> **演进说明**：吸收 Campus Explorer 落地经验：媒体进 **`assets/`**；根 **`LANGUAGES.md`**；流程目录 **`prd/`** · **`commit-history/`**；去掉与根文件重复的 agents 冗余件。  
> **任务流细则**：目标仓 `docs/agents/workflow.md` · 根 `AGENTS.md`  
> **README 打磨**：全局 skill **`readme-polish`**（结构 · 样式 · 配图 · **Preview** · Showcase）

---

## 0. 适用范围与目标

| 场景 | 是否跑 project-init |
|---|---|
| 新接单、仓库尚无 Agent 资产 | **必须** |
| 自己从零开项目 | **必须** |
| 已规范仓库上开业务功能 | 不必重复；只跑业务 PRD/handoff |
| 仅改一行文案 | 不必 |

**完成定义（Definition of Done）**

1. 根入口与 `docs/` + `assets/` 骨架就位；Issue tracker / triage / domain 已写入且可被 Matt Pocock 系 skill 消费。  
2. 根 `README.md` 经 **README Polish** 达到可对外展示的结构、样式与视觉基线（配图 / **Preview** / Showcase 可先占位后补齐）。  
3. 后续业务开发可直接走：`Issue → PRD → handoff → Review`，无需再争论「文件放哪」。

**单一事实源原则**

| 事实类型 | 唯一入口 |
|---|---|
| 领域术语与硬约束 | 根 `CONTEXT.md`（多端则 + `CONTEXT-MAP` / `docs/contexts/*`） |
| 共享用词（Agent 输出必须用的词） | 根 `LANGUAGES.md` |
| Agent 硬约束 / 任务流门禁 | 根 `AGENTS.md` |
| 人读摘要与运行说明 | 根 `README.md` |

禁止同一事实在多处各写一版且互相漂移。  
**禁止**再维护 `docs/agents/language.md` / `docs/agents/context.md`（与根 `LANGUAGES.md` / `CONTEXT.md` 重复）。

---

## 1. 阶段总览

```text
Phase A          资产初始化 + 外部资产融合 + 需求对齐确认
    ↓
Phase B          README Polish（结构 · 样式 · 配图 · Preview · Showcase）
    ↓
Gate             你 Review 本轮 init 产物 → 再开第一个业务 theme
```

两阶段可在同一会话内连续做，但 **Gate 前不开启大规模业务编码**（与 `AGENTS.md` PRD 门禁一致）。

| Phase | 一句话 |
|---|---|
| **A · 资产** | 骨架落盘；外来包/图/文按规范归位；与用户确认需求与目录决策 |
| **B · README Polish** | 用 `readme-polish` 打磨 README：章节结构、版式、配图契约、**Preview 展示**与 Showcase（可占位） |

---

## 2. Phase A — 资产初始化 · 融合 · 需求对齐

### 2.1 与用户对齐（写盘前必做）

一次只确认一项（可与 `setup-matt-pocock-skills` 穿插）：

| # | 确认项 | 说明 |
|---|---|---|
| 1 | Issue tracker | GitHub Issues / 本地 `.scratch/` markdown |
| 2 | Triage 标签词汇 | 五种 canonical 角色映射 |
| 3 | 单 CONTEXT / 多 CONTEXT | 是否需要 `CONTEXT-MAP` + `docs/contexts/*` |
| 4 | 外部资产清单 | zip、旧 docs/images、原型图、品牌包…从哪来、迁到哪 |
| 5 | 产品层根 | 如 `src/` / `frontend/` / 多包 monorepo 边界 |
| 6 | 首个业务 theme 名 | 可选；未定则 Phase A 只做骨架 |
| 7 | 项目预期 | 规模 / 受众 / 核心产物（网站？库？工具？），决定 README 口吻与资产侧重 |
| 8 | Handoff 形式 | 启用哪些场景（`handoff.md` §2 的 A–E），默认只 A；B–E 按需 |
| 9 | 输出语气与格式 | 是否产出项目级 `docs/agents/voice.md`（覆盖全局 `humanizer-output-style` skill）；默认建 |

确认后再写盘；有冲突先停。

### 2.2 必用 Skill / 命令

| 顺序 | Skill / 动作 | 作用 |
|---:|---|---|
| 1 | **`setup-matt-pocock-skills`** | 探查仓库 → 写入 `issue-tracker.md`、`triage-labels.md`、`domain.md`；在 `AGENTS.md` / `CLAUDE.md` 挂 `## Agent skills` |
| 2 | 对齐 **`docs/agents/`** 流程件 | **仅**：`workflow.md`、`deliver.md`、`archive.md`、`domain.md`、`issue-tracker.md`、`triage-labels.md` |
| 3 | 写入根入口 | `AGENTS.md`、`CLAUDE.md`、`CONTEXT.md`、`LANGUAGES.md`、`CONTEXT-MAP.md`（多端）、`README.md` 初稿 |
| 4 | **引用 `humanizer-output-style` skill** | 在 `AGENTS.md` / `CLAUDE.md` 顶部写入输出语气引用（见 §2.8）；若项目用 opencode，可选复制 SKILL.md 到 `.opencode/skills/` |
| 5 | 骨架目录 | 见 §2.4 `docs/`、§2.5 `assets/` |
| 6 | **外部资产融合** | 见 §2.3 |
| 7 | （可选）**`to-issues`** / **`to-prd`** / **`triage`** | 首个业务 theme 已定时再用 |

### 2.3 外部资产融合

若接手仓或本地已有散落资产，按表归位（先列迁移清单给用户确认）：

| 来源 | 归入 |
|---|---|
| 上游 zip / 原版源码包 | `assets/backup/` |
| 旧 `docs/images/readme/` 或随意 `assets/*.png` | `assets/images/readme/`（改 README 引用） |
| 品牌 Logo / 头像槽 | `assets/images/icon/` · `assets/images/avatar/`（或产品约定的 `assets/brand/`，须写入 `assets/README.md`） |
| 演示视频 | `assets/video/` |
| 已有可跑产品代码 | 对应产品目录（如 `src/` / `frontend/`），**不**塞进 docs |

融合原则：backup 只读；工作副本可编辑；路径写进 `assets/README.md` 与 CONTEXT（必要时）。

### 2.4 根目录职责（L0）

| 文件 | 职责 | 反模式 |
|---|---|---|
| `AGENTS.md` | 跨工具硬约束、路径表、任务流摘要、Review 门禁 | 产品说明书 |
| `CLAUDE.md` | 维护协议、三层加载、偏好归档 | 与 AGENTS 大段矛盾重复 |
| `CONTEXT.md` | 领域术语、硬约束、技术栈事实 | 临时笔记、未裁定猜测 |
| `LANGUAGES.md` | 共享词汇入口（Issue / 任务流 / 领域用词） | 与 CONTEXT 冲突的第二套定义 |
| `CONTEXT-MAP.md` | 多上下文索引 | 单端空壳 |
| `README.md` | 人类入口（Phase B 打磨） | 充当 Issue / 术语真相源 |

### 2.5 `docs/` 目标树

```text
docs/
├── README.md
├── agents/              # workflow · deliver · archive · domain
│                        # · issue-tracker · triage-labels
│                        # · voice（输出语气，可选）
│                        # （不要 language.md / context.md）
├── adr/                 # 000N-kebab-title.md
├── contexts/            # 可选：{weapp,admin,api}/CONTEXT.md
├── knowledge/           # 可迁移知识（可放本文件副本）
├── glossary/            # 人 ⇄ Agent 认知对齐术语库（如 frontend-ui.md）
├── commit-history/      # commit 攒批记录（原 history/）
└── output/                    # 仅三类产物
    ├── report/{theme}/        # 调研分析报告（与 PRD 分离）
    ├── prd/{theme}/           # PRD（产品需求文档）
    ├── handoff/{theme}/{task}.md
    └── */archive/             # 各类过时产物归档（见 docs/agents/archive.md）
```

业务流程对齐：

```text
Issue（GitHub 或 Local Markdown）
  → docs/output/report/{theme}/        # 调研分析（可选，先于 PRD）
  → docs/output/prd/{theme}/prd.md     # PRD（需求）
  → 拆解 To-Do / 子任务
  → docs/output/handoff/{theme}/{task}.md
  → 实施 → Review → archive
```

### 2.6 `assets/` 目标树

```text
assets/
├── README.md
├── backup/                    # 上游 zip / 原版只读备份
├── images/
│   ├── readme/                # README 配图 + Showcase
│   ├── avatar/
│   └── icon/
├── video/
├── theme/
│   ├── ppt/                    # 演示文稿（PPT / Keynote 源文件）
│   └── script/                 # 逐字稿 / 项目介绍稿
```

| 路径 | 职责 |
|---|---|
| `assets/backup/` | 只读收录；日常编辑改产品目录 |
| `assets/images/readme/` | banner / architecture / features / tech-stack / workflow / structure / **preview-*** / showcase-* |
| `assets/images/avatar/` · `icon/` | 文档或演示槽位（业务 `public/` 仍归应用自身） |
| `assets/video/` | 演示视频 |
| `assets/theme/ppt/` | 演示文稿源文件（PPT / Keynote） |
| `assets/theme/script/` | 逐字稿 / 项目介绍稿 / 演讲脚本 |
| `assets/README.md` | 媒体约定与还原说明 |

**禁止**新建 `docs/images/`。

### 2.7 Phase A 验收

- [ ] 与用户的关键确认项已对齐（§2.1）  
- [ ] `setup-matt-pocock-skills` 决策已落盘；`## Agent skills` 路径真实  
- [ ] 根：`AGENTS` / `CLAUDE` / `CONTEXT` / `LANGUAGES` /（`CONTEXT-MAP`）；AGENTS/CLAUDE 已引用 `humanizer-output-style` skill  
- [ ] `docs/agents` **无** `language.md`、`context.md`  
- [ ] `docs/output/{report,prd,handoff}` · `docs/commit-history` · `adr` · `knowledge` · `glossary`  
- [ ] 若 #9 启用：`docs/agents/voice.md` 已产出  
- [ ] `assets/` + `assets/README.md`；外部资产已融合或迁移清单已关闭  
- [ ] ADR-0000（或等价）已说明采用 ADR  
- [ ] 无密钥入库；无本机绝对路径作唯一说明  

---

### 2.8 Humanizer Skill 安装

> 确保项目 Agent 默认使用 `humanizer-output-style` 语气（非 AI 腔）。两种方案：

| 方案 | 做法 | 适用 |
|------|------|------|
| **A · 引用全局** | 在项目 `AGENTS.md` / `CLAUDE.md` 顶部写 `> **Output Style**: humanizer-output-style skill → ~/.config/opencode/skills/...` | 单人单机，无需独立维护 |
| **B · 复制到项目** | 复制 SKILL.md 到 `.opencode/skills/humanizer-output-style/SKILL.md` | 团队共用，或需独立调整语气 |

**AGENTS.md 引用模板**（方案 A）：

```markdown
# AGENTS.md

> **Output Style**: `humanizer-output-style` skill — 统一语气风格与去 AI 味配置。加载路径：`skills/humanizer-output-style/SKILL.md`
```

**CLAUDE.md 引用模板**（方案 A）：

```markdown
# CLAUDE.md

> **Output Style**: `humanizer-output-style` — see `~/.claude/skills/humanizer-output-style/SKILL.md`
```

若项目选了方案 B，Agent 复制后需用 `read` 验证复制件中文可读。

---

> 结构、样式、图片、配图、**Preview**、Showcase **同属本 Phase**。  
> 执行时加载全局 skill：**`readme-polish`**。

### 3.1 必用 Skill 与参照范文

| 项 | 值 |
|---|---|
| Skill | **`readme-polish`** |
| 产品向范文 | [xianghai-yuntu](https://github.com/Aafff623/xianghai-yuntu) · [ResumeWise](https://github.com/Aafff623/ResumeWise) · [civil-service-exam-tracker](https://github.com/Aafff623/civil-service-exam-tracker) · [web3career-study-track](https://github.com/Aafff623/web3career-study-track) |
| 含金量标杆 | [agent-cfo](https://github.com/San-Y108/agent-cfo)（黑客松 README 范式） |
| Preview 落地参照 | Campus Explorer：`website-preview`（静态演示墙）· `component-packs/outputs`（组件 Gallery） |
| 配图 brief（契约层） | `docs/output/prd/readme-diagrams/readme-diagram-brief.md`：章节地图 + 资产清单 + 设计语言 + 验收 |
| 出图 prompt（执行层） | `docs/output/prd/readme-diagrams/readme-image-prompts.md`：每张图详细 prompt，投喂 GPT image-to-image |
| 终稿图目录 | **`assets/images/readme/`** |

### 3.2 README Polish 覆盖范围

| 维度 | 做什么 |
|---|---|
| **结构** | Header（标题 · 一句话 · Banner · 徽章 · 锚点导航）+ 为什么 / 功能 / **Preview** / 演示·Showcase / 快速开始 / 架构 / 主链路 / 目录 / 路线图 / 文档 |
| **样式** | 中英混排、表格密度、`<details>` 折叠、徽章语义色、导航锚点；不过度装饰 |
| **配图** | §3.3 文件名契约；GPT Image 出图由用户执行，Agent 写 brief + Prompt |
| **Preview** | 可本地打开的预览站：入口路径 · 启动命令 · URL · 怎么浏览 · 预览壳截图（见 §3.5） |
| **Showcase** | 产品主链路推荐路径 + 真机界面相册；init 可占位，功能就绪后用 Playwright 替换（见 §3.6） |

### 3.3 标准配图清单（文件名即契约）

| 文件 | 用途 |
|---|---|
| `banner.png` | 页首横幅（建议 3:1） |
| `features.png` | 核心功能一览 |
| `architecture.png` | 系统架构 |
| `tech-stack.png` | 技术栈分层 |
| `workflow.png` | 用户/业务主链路 |
| `structure.png` | 仓库目录结构 |
| `preview-shell.png` | **Preview 站总览**（画廊壳 / 卡片墙 / 侧栏选分区） |
| `preview-*.png` | Preview 代表性分区或条目缩略（可选） |
| `showcase-*.png` | 产品主链路实机界面相册（Playwright） |

引用示例：`assets/images/readme/banner.png` · `assets/images/readme/preview-shell.png`。

### 3.4 Preview 与 Showcase 分工（必读）

| | **Preview** | **Showcase** |
|---|---|---|
| **回答的问题** | 「仓库里有哪些可浏览资产？怎么本地翻一遍？」 | 「产品主链路长什么样？」 |
| **典型对象** | 组件包 Gallery、HTML demo 墙、模板缩略索引、Storybook 类壳 | Landing / 登录 / 核心流程页 |
| **交互** | 本地可跑、可切换分区/条目 | 静态截图举证（可附演示路径文字） |
| **README 重点** | 启动命令 · 入口 URL · 浏览方式 · `preview-*.png` | 推荐路径 · `showcase-*.png` |
| **何时必须** | 资产库 / 多 demo / 多模板主题 **应当有** | 有可运行产品面时 **应当有** |
| **何时可省略** | 单产品应用且无「目录式预览壳」 | 纯文档仓或尚无可截界面 |

二者可同时出现，**不要互相替代**：Preview 不是 Showcase 的别名。

### 3.5 Preview 展示设计（README 模块）

#### 何时建 Preview 站

| 仓类型 | Preview 期望 |
|---|---|
| 组件 / 区块资产库 | Gallery：侧栏分区 + 变体切换 + 实时渲染（或等价） |
| HTML / 静态 demo 集合 | 统一预览站（卡片墙 + iframe / 链接打开） |
| 多套独立模板包 | 模板索引页（缩略图 + 进入各模板 `dev` 的说明） |
| 单产品 Web 应用 | 通常 **不**单独建 Preview 站；用 Showcase 即可 |

Preview 源码落在产品层（如 `src/website-preview/`、`src/.../outputs/`），**不要**塞进 `docs/`。路径与启动方式写入 `CONTEXT.md` / `LANGUAGES.md`（领域词）与 README。

#### README 中的 Preview 章节模板

锚点建议：`#preview`（导航里与「演示 / Showcase」分开）。

```markdown
## Preview

一句话：本仓用本地预览站浏览全部 [组件/演示/模板]，不是业务产品站。

### 启动

`cd` 到预览根 → 安装（若需要）→ 启动命令 → 默认 URL（如 `http://127.0.0.1:8765/...`）。

### 怎么浏览

1. 侧栏 / 卡片选分区（或 Category）
2. 切换变体 / 打开条目
3. （可选）交互门槛：点击启用 iframe、Light/Dark 等

### 预览壳

![Preview shell](assets/images/readme/preview-shell.png)

### 覆盖范围

| 分区 / Category | 数量 | 说明 |
|---|:---:|---|
| … | … | 链到 `ASSETS.md` 或 registry 亦可 |

> Init 阶段可先写启动命令 + 覆盖表，图用占位说明「Preview 壳截图待补」。
```

#### Preview 配图约定

1. **`preview-shell.png`**：整页预览站一帧（含导航结构，证明「能翻」）。  
2. **`preview-*.png`**（可选）：1–3 张代表性分区，避免把 README 做成整库相册。  
3. 截图工具：Playwright 对 **Preview 站本身** 截图；与产品 Showcase 分文件名，禁止混用 `showcase-*` 冒充 Preview。  
4. 若 Preview 尚未落地：README 写清「计划路径 + 启动占位」，并在 Phase B 验收中标明待续作。

#### Preview 验收口径

- [ ] README 有独立 **Preview** 小节（或已书面说明「本仓无 Preview 站、仅用 Showcase」）  
- [ ] 启动命令与 URL 可复制；工作目录真实  
- [ ] 浏览方式 1–3 条；覆盖范围可核对  
- [ ] `preview-shell.png` 已引用或已占位说明  

### 3.6 Showcase（本 Phase 内完成口径）

**Init 时（可占位）**

1. 写清推荐演示路径。  
2. 标明「真机截图待视觉验收后补充」。  
3. 用表格 / HTML 注释预留槽位。

**功能就绪后（仍算 README Polish 续作，不必重开 init）**

1. 本地跑通主链路。  
2. Playwright 截图 → `assets/images/readme/showcase-*.png`。  
3. 更新 README 引用，收窄占位文案。

### 3.7 执行步骤（与 readme-polish 对齐）

1. **读仓 + 确认**：定位、栈、受众、已有 README 优劣；是否需要 Preview 站 → 向用户确认。  
2. **对标范文**：按项目类型选「产品演示向」或「黑客松叙事向」，**禁止照抄他仓业务文案**。  
3. **结构草稿 → brief（契约层）**：列章节与配图节点（含 Preview / Showcase）→ `readme-diagram-brief.md`（章节地图 + 资产清单 + 设计语言 + 验收）。  
4. **出图规范 MD（执行层，关键产物）**：Agent 结合**项目实际 + 主题色 + 主题元素**，为每张契约图产出详细出图说明 → `readme-image-prompts.md`：
   - §0 全局规范：项目定位 · 视觉总调（色板 / 材质 / 光影）· 出图优先级 · 命名契约 · **给 GPT 的系统指令模板**（可粘贴到对话开头）；
   - 每张图：基本信息 · 一句话描述 · 详细描述 · 参照信息 · 元素清单 · 构图建议 · **英文 Prompt（直接喂 GPT image-to-image）** · 中文补充提示。
   - 范例：本仓 `readme-image-prompts.md`。  
5. **出图**：用户把 `readme-image-prompts.md` 投给 GPT image-to-image 生成图 → 落盘 `assets/images/readme/`。**Agent 不直接生图**（多数模型无能力），只产出可投喂的规范 MD。  
6. **组装 README**：结构 + 样式 + 图引用 + **Preview 模块** + Showcase（占位或实图）。  
7. **用户 Review** 文案、图、路径是否与 CONTEXT / LANGUAGES 一致。

### 3.8 Phase B 验收

- [ ] README 章节完整、扫读友好，与范文意图对齐（非照抄）  
- [ ] 配图契约文件名与引用一致（缺失项已占位说明）  
- [ ] **出图规范 MD**（`readme-image-prompts.md`）已产出：全局规范 + 每张图 prompt（可投喂 GPT image-to-image）  
- [ ] **Preview**：独立小节或已声明省略理由；启动 / 浏览 / 壳图或占位齐全（§3.5）  
- [ ] Showcase 路径或占位已写  
- [ ] 快速开始可执行；演示依赖写清  
- [ ] 未与 CONTEXT / LANGUAGES 抢事实源  

---

## 4. 体系化主 Prompt（复制给 Agent 用）

```text
你正在对仓库 {REPO_PATH} 执行 project-init。
严格按 project-init.md：Phase A → Phase B（README Polish）→ Gate。
每阶段结束先停，等我 Review。

## Phase A — 资产 · 融合 · 对齐
1. 先与我确认：Issue tracker、triage、单/多 CONTEXT、外部资产清单、产品层根目录、项目预期、handoff 形式（A–E 场景，见 `docs/agents/handoff.md`）。
2. 运行 setup-matt-pocock-skills（一次只确认一项，确认后再写盘）。
3. 落盘根入口：AGENTS / CLAUDE / CONTEXT / LANGUAGES /（CONTEXT-MAP）/ README 初稿；
    在 AGENTS.md / CLAUDE.md 顶部引用 `humanizer-output-style` skill（见 §2.8）；
    若 §2.1 #9 启用，另产出 `docs/agents/voice.md`（项目级输出语气与格式规范，覆盖全局 humanizer）。
4. docs 骨架：agents（仅 workflow/deliver/archive/domain/issue-tracker/triage-labels）、
   adr、knowledge、glossary、commit-history、output/{report,prd,handoff}。
   不要创建 docs/agents/language.md 或 docs/agents/context.md。
5. assets 骨架：backup · images/{readme,avatar,icon} · video · theme/{ppt,script} · assets/README.md。
   禁止 docs/images/；旧图迁到 assets/images/readme。
6. 外来 zip/图/文按规范融合；迁移清单给我确认。
7. 本阶段不写业务功能代码。

## Phase B — README Polish
1. 加载 readme-polish skill。
2. 范文：xianghai-yuntu / ResumeWise / web3career-study-track / civil-service-exam-tracker；
   含金量标杆：agent-cfo。按本仓领域改写，禁止照抄。
3. 覆盖：结构 · 样式 · 配图 · Preview · Showcase（可占位）。
4. 若为资产库 / 多 demo：README 必须有 Preview 小节（启动 · URL · 浏览方式 · preview-shell 或占位）；
   与 Showcase 分开，不要混用文件名。
5. brief → docs/output/prd/readme-diagrams/；图 → assets/images/readme/。
6. 我负责出图；你负责 Prompt、落盘路径与 README 引用。

## 门禁
- 每阶段说明：做了什么、改了哪些路径、我怎么 Review。
- 未经确认不要 git commit；不要跳过 Gate 直接写业务实现。
```

---

## 5. 日常业务流（init 完成之后）

```text
Issue(Epic) → docs/output/report/{theme}/   # 调研（可选）
  → docs/output/prd/{theme}/prd.md (draft)
  → 你 approved
  → docs/output/handoff/{theme}/{task}.md
  → 实施 → awaiting-review【停】
  → 你通过 → commit / docs/commit-history / archive
```

硬约束：PRD 未批准不写功能代码；一任务一 handoff；Review 先于 commit。详见 `AGENTS.md` / `workflow.md`。

---

## 5.1 commit-history 维护规范

> `docs/commit-history/` 是 commit 攒批的**面向主题的可读摘要**，给"只看代码之外的人"快速了解每个 theme 干了什么。不是 git log 的复制，不逐条翻译 commit。

**何时写**
- 每个 theme 一轮 Review 通过、原子 commit 之后。
- 多个小 commit 可合并为一条主题摘要。

**文件命名**

```text
docs/commit-history/{YYYY-MM-DD}-{theme}.md
```

同日同 theme 多轮 → 追加序号 `-01` `-02`。

**字段模板**

```markdown
# {theme} · {date}

## Status
shipped | partial | reverted

## Commits
- `{hash}` type(scope): subject

## 做了什么
3–5 句主题摘要（不是逐 commit 翻译）。

## 关联
- PRD / handoff / Issue 路径
- 关键文件

## 回滚
- revert 哪几个 hash / 配置开关
```

**谁写**
- 执行 Agent 在 commit 后起草。
- 用户 Review 时校对，可要求 Agent 补全。

**反模式**
- ❌ 只贴 git log，无主题摘要。
- ❌ 记录无关 commit（纯格式化 / chore）。
- ❌ 长期不更新（本仓此前即处于此空壳状态）。

---

## 6. 一页 Checklist

### Phase A

- [ ] 需求 / tracker / CONTEXT 形态 / 外部资产清单已与用户确认  
- [ ] `setup-matt-pocock-skills` 完成并写盘  
- [ ] 根：`AGENTS` / `CLAUDE` / `CONTEXT` / `LANGUAGES` /（`CONTEXT-MAP`）；AGENTS/CLAUDE 已引用 `humanizer-output-style` skill  
- [ ] `docs/agents` 无 language.md、无 context.md  
- [ ] `docs/output/prd` · `handoff` · `docs/commit-history`  
- [ ] `assets/` 就绪；外部资产已融合或迁移关闭  
- [ ] 分端 CONTEXT（若需要）  

### Phase B · README Polish

- [ ] `readme-polish` 已执行  
- [ ] 结构 · 样式达标；范文意图对齐  
- [ ] `assets/images/readme/` 契约图或占位说明  
- [ ] **Preview** 小节（或已声明本仓省略）· `preview-shell` / 启动命令  
- [ ] Showcase 路径 / 占位  
- [ ] 快速开始可跑  

### Gate

- [ ] 你已 Review init 产物  
- [ ] 允许开启第一个业务 theme  

---

## 7. 相关路径速查

| 资源 | 路径 |
|---|---|
| 本规范 | 根或 `docs/knowledge/project-init.md` |
| 共享词汇 | 根 `LANGUAGES.md` |
| 领域事实 | 根 `CONTEXT.md` |
| 界面术语库 | `docs/glossary/frontend-ui.md` |
| 任务流 | `docs/agents/workflow.md` |
| 调研报告 | `docs/output/report/{theme}/` |
| PRD | `docs/output/prd/{theme}/` |
| Handoff | `docs/output/handoff/{theme}/`（多重职责见 `docs/agents/handoff.md`） |
| Commit 攒批 | `docs/commit-history/`（维护规范见本文档 §5.1） |
| 演示文稿 | `assets/theme/ppt/` |
| 逐字稿 | `assets/theme/script/` |
| 配图输出 | `assets/images/readme/`（含 `preview-shell.png` · `showcase-*.png`） |
| 上游备份 | `assets/backup/` |
| README Polish skill | `readme-polish` |
| 范文 | xianghai-yuntu · ResumeWise · web3career-study-track · civil-service-exam-tracker · **agent-cfo** |

---

## 8. 与上一版差异（迁移备忘）

| 旧约定 | 新约定 |
|---|---|
| Phase B + Phase C | 合并为 **Phase B · README Polish** |
| `docs/agents/language.md` · `context.md` | **删除**；只用根 `LANGUAGES.md` · `CONTEXT.md` |
| `docs/history/` | `docs/commit-history/` |
| `docs/output/reports/` | `docs/output/prd/` |
| `docs/images/readme/` | `assets/images/readme/` |
| README 与 Showcase 分两阶段叙述 | 同属 README Polish |
| README 仅 Showcase 截图 | 增加 **Preview** 模块：本地预览站展示设计（与 Showcase 分工） |
