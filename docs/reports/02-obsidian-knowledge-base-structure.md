# Obsidian Knowledge Base Structure Report

**Vault Path:** `D:\OneDrive\Desktop\Notes\threetwoa_ob`
**Total Directory Depth:** Up to 5 levels
**Vault Uses:** Git version control (`.git/`), Obsidian plugins, Daily Notes, Excalidraw

---

## 1. Full Directory Structure

### Top-Level Directories (Content)

```
threetwoa_ob/
├── 00_Inbox/                      # Draft entry /待分类
├── 01_Code/                       # Programming tech / interview fundamentals / Agent dev
│   ├── agent-dev/
│   │   ├── agent/
│   │   ├── holis-agent/
│   │   ├── python/fastapi/
│   │   ├── rag/
│   │   └── xiaolin-camp/
│   ├── algorithm/
│   ├── interview/
│   ├── llm/fundamentals/
│   ├── 编程语言/
│   └── 大模型原理/
├── 02_AI_Coding&Agents/          # AI coding methodology / workflows / Skills
│   ├── Agent工程化/
│   ├── methodology/
│   │   ├── agentic-bestpractice/
│   │   ├── graph-bestpractice/
│   │   ├── matt-pocock/
│   │   ├── my-dev/
│   │   └── rag-bestpractice/
│   └── skills/
│       ├── commands/coach/
│       ├── domains/
│       │   ├── backend/
│       │   ├── content-creation/
│       │   ├── database/
│       │   ├── design/
│       │   ├── devops/
│       │   ├── frontend/
│       │   ├── learning-system/
│       │   ├── mobile/
│       │   ├── others/
│       │   ├── workflows/
│       │   └── writing-office/
│       ├── hooks/
│       ├── mcps/
│       └── subagents/
├── 03_Tools&Configs/              # Tool configs / tutorials / productivity
│   ├── api-services/
│   ├── configs/
│   ├── dev-tools/
│   │   ├── chrome/github/n8n/network-tools/obsidian/pwa/server/xmind/
│   ├── heroui-components/
│   ├── image-prompts/
│   ├── llm-tools/
│   │   ├── claude-code/ecc/
│   │   ├── codex/gemini/google-ai-pro/
│   │   ├── minimax/openclaw/trae/vscode/xiaomi-mimo/
│   ├── recommendations/bilibili-up/
│   ├── vibe-design/website/
│   └── 自动化脚本/
├── 04_Courses&VideoNotes/         # Course notes / bootcamps / video annotations
│   ├── ai-native-dev/
│   ├── claude-code-refactor/
│   ├── geektime-robert/
│   ├── labuladong/
│   ├── multi-agent-design/
│   ├── muyu/
│   ├── opc-yihui/notes/
│   ├── openclaw/notes/
│   ├── vibecoding/
│   ├── xiaolin-llm/
│   └── yihui/
├── 05_Projects&Labs/              # Project实战 / competitions / complete docs
│   ├── ai-web3-bootcamp/
│   ├── byte-ai-hackathon/
│   ├── trae-friends/solo/
│   ├── vibe-manage-vm/
│   ├── yupi-projects/
│   │   ├── cloud-gallery/deep-processing/module-analysis/
│   │   ├── hotspot-monitor/
│   │   ├── learning-miniapp/
│   │   └── super-agent/
│   └── 出海产品/
├── 06_Me&Growth/                 # Personal plans / reviews / subscriptions / interviews
│   ├── about/subscriptions/
│   ├── bonuses/business/
│   ├── interview-prep/experiences/
│   │   ├── alibaba/jd/llm/meituan/yupi-pdf/
│   ├── plans/
│   │   ├── course-plan/course-list/
│   │   │   ├── agent-dev/java-ai/openclaw/pm/
│   │   │   ├── real-projects/sales-camp/
│   │   │   └── vibecoding/vibedesign/
│   │   ├── internship-daily/
│   │   └── nuc-tasks/
│   └── share/activity-archive/share-archive/simple_tasks/
├── 07_Reading&Thinking/           # Article excerpts /泛知识 / design inspiration
│   ├── AI产业观察/
│   ├── AI行业分析/
│   └── Fun/
├── 09_Meta&Rules/                # KB rules / templates / audit reports
│   └── reports/
├── 90_Meta&Rules/                 # Alternate meta rules folder
│   └── reports/
├── Agentic Coding/                # Top-level topic folder
├── ASSETS/                        # Images, templates, fonts, attachments
│   ├── aiindustry/coding/devtools/fork/llmtools/methodology/picture/skills/
├── Excalidraw/                    # Excalidraw canvas files
└── WEEKLOG/                       # Weekly logs + TODOs
```

### System/Configuration Directories (Hidden)

```
.atomcode/ .backup/ .baoyu-skills/ .claude/skills/ .git/ .obsidian/ .playwright-mcp/
```

---

## 2. Content Types Identified

| Directory | Content Type | Examples |
|-----------|--------------|---------|
| `00_Inbox/` | Draft inbox / unclassified | Video summary notes, quick captures |
| `01_Code/` | Technical knowledge | Algorithms, interview prep, Agent dev, LLM fundamentals |
| `02_AI_Coding&Agents/` | AI methodology | Skills, workflows, agent frameworks, prompts |
| `03_Tools&Configs/` | Tool configs & tutorials | Chrome extensions, dev tools, LLM tool configs |
| `04_Courses&VideoNotes/` | Course notes | Video annotations, bootcamp materials, learning notes |
| `05_Projects&Labs/` | Projects & labs | Hackathons, project实战, competition records |
| `06_Me&Growth/` | Personal | Plans, reviews, subscriptions, interview prep |
| `07_Reading&Thinking/` | Articles & insights | Industry analysis, observations, design inspiration |
| `09_Meta&Rules/` | Meta/rules | Templates, routing rules, format specs, audit reports |
| `WEEKLOG/` | Weekly logs | Daily work logs with timestamps and task tracking |

---

## 3. Naming Conventions

### Directory Naming
- English kebab-case: `agent-dev/`, `llm-tools/`
- Max 3 levels deep
- No special characters (spaces, `&`, Chinese in paths)
- Numbers only for files not directories

### File Naming
- Chinese primary: `MiniMax Token Plan.md`
- Spaces become hyphens: `AI早报-2026-05-28.md`
- Column notes: `{两位序号}-{标题}.md` like `01-架构入门.md`
- Date-stamped: `主题-YYYY-MM-DD.md`

### Special Filename Patterns
| Pattern | Purpose |
|---------|---------|
| `__index__*.md` | Topic index/overview |
| `__link__*.md` | External link collection |
| `__todo__*.md` | Task list |
| `__log__*.md` | Activity log |
| `*.skill.md` | Skill definitions |

---

## 4. Frontmatter Schema

### Standard Frontmatter Template

```yaml
---
title: ""                    # Required - note title
created: ""                  # Required - creation date YYYY-MM-DD
updated: ""                  # Required - update date YYYY-MM-DD
status: pending-review       # Required - status machine value
visibility: private          # Optional - private/public
publish_ready: false         # Optional - publish readiness
tags: []                     # Required - tag array
source: ""                  # Optional - content source (URL, video)
type: 工具笔记|概念笔记|项目笔记|读书笔记|元文件  # Optional
---
```

### Status Machine Values

| Status | Meaning |
|--------|---------|
| `draft` | Draft, can be modified freely |
| `pending-classification` | Needs classification |
| `pending-review` | Agent organized, awaiting human confirmation |
| `approved` | Approved, normal access |
| `published` | Published (blog, public share) |
| `archived` | Archived, no longer maintained |

### Complete Extended Frontmatter

```yaml
---
title: ""
created: ""
updated: ""
source_type: ""
content_type: ""
primary_topic: ""
category_hint: ""
related_project: []
status: pending-review
visibility: private
publish_ready: false
tags: []
routed_by: claude-code
suggested_path: ""
confidence: 0.00
reviewed_by: ""
reviewed_at: ""
---
```

---

## 5. Key Plugins (18 installed)

| Plugin | Purpose |
|--------|---------|
| `obsidian-git` | Git integration |
| `dataview` | Data queries |
| `obsidian-local-rest-api` | Local REST API server |
| `obsidian-tasks-plugin` | Task management |
| `obsidian-excalidraw-plugin` | Excalidraw integration |
| `templater-obsidian` | Template engine |
| `oz-clear-unused-images` | Clean unused images |
| `homepage` | Custom home page |
| `mcp-tools` | MCP integration |
| `apex-dashboard` | Dashboard |

---

## 6. Special Conventions

### Callout Annotations

| Symbol | Purpose | Example |
|--------|---------|---------|
| `> *📌 ...*` | Key conclusion | `> *📌 核心结论是...*` |
| `> *🐱 ...*` | Analogy | `> *🐱 就像...*` |
| `> *💡 ...*` | Practical tip | `> *💡 实操时注意...*` |
| `> *🔧 ...*` | Technical data | `> *🔧 延迟约 200ms*` |

### Wiki Links

```markdown
![[filename]]           # Internal link
[[filename|alias]]      # Link with alias
```

### Highlighting

- `==highlight==` - core conclusions, max 1-2 per document

---

## 7. Stats

- **Content directories:** 9 main directories (00-09, plus Agentic Coding)
- **Plugin count:** 18 community plugins
- **Skill definitions:** 4 Claude Code skills + multiple .skill.md files
- **Attachment location:** `ASSETS/picture/`
- **Daily notes:** Enabled via Templater with custom template
- **Git integration:** Active with obsidian-git plugin