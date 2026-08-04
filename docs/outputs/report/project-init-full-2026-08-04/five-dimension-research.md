# 五维调研报告 · project-init Full（老项目）

> 日期：2026-08-04  
> 仓库：`spring_blogs`（远端 `threetwoa-digital-garden`）  
> 模式：Full · 策略：**迁移**（非轻量化重建）  
> 参考：`canvases/spring-blogs-deep-analysis.canvas.tsx`（只读）

## 轻量化判定

| 项 | 结论 |
|---|---|
| 是否轻量化 | **否** — 用户授权非轻量化完整资产 |
| 已有 Agent 资产 | 有根入口、docs/agents、ADR、README 配图与 Showcase |
| 与最新规范差距 | 路径单数 `output`、缺 MDC、handoff 冗余、theme 空槽、预览壳命名 |
| 策略 | **迁移**：改治理层 + 路径；保留产品代码与已有配图 |

## Agent 1 · 项目结构

```text
spring_blogs/
├── src/                 # 产品层根（App Router + api/hooks/components）
│   ├── app/             # ~13 页面路由（writing/gallery/love/…）
│   ├── api/ · hooks/ · components/ · data/ · mock/ · icon/ · interface/
├── public/              # 应用静态资源
├── assets/images/readme # README 契约图 + showcase-*
├── docs/{agents,adr,glossary,knowledge,outputs}
├── canvases/            # Cursor Canvas 深度分析
├── scripts/             # 测量 / 复现脚本
└── 根入口 AGENTS/CLAUDE/CONTEXT/LANGUAGES/README
```

入口：`src/app/layout.tsx` + `src/app/page.tsx`；包管理 npm（`package-lock.json`）。

## Agent 2 · 技术栈

| 层 | 事实 |
|---|---|
| Framework | Next.js 16.2.9 · React 19.2 · TypeScript 5 |
| Style | Tailwind 4 · 五套 CSS 主题 |
| Motion | GSAP · Lenis · Framer Motion |
| Data | Axios · isomorphic API · Vitest |
| Backend 对接 | spring_server（rewrite `/api`）；本轮**不改** server |
| Deploy | Vercel demo；`output: "standalone"` |

## Agent 3 · 资产现状

| 资产 | 状态 |
|---|---|
| 根入口四件套 | 有，路径需对齐 `outputs` |
| `.cursor/rules` 五 MDC | **缺失 → 已同步** |
| `docs/agents` | 有；`handoff.md` 冗余 → 并入 deliver |
| `docs/output` | 有内容 → **迁至 `docs/outputs`** |
| README 契约图 6 张 | **齐全**（banner/features/architecture/tech-stack/workflow/structure） |
| Showcase 13 张 | **齐全** |
| Preview Gallery | 不需要（单产品） |
| `preview-readme.*` | 旧名 `readme-preview.html` → 标准化三文件 |
| `assets/theme` 空槽 | 删除 |
| language.md / context.md | 不存在（合规） |

## Agent 4 · 业务领域

个人数字花园：文章 / 笔记 / 画廊 / 足迹 / 恋爱归档 / 时间胶囊 / 成就 / 鱼塘 / Now / About；五套 Style；数据可降级。  
用户主链路：首页 → Writing → 详情 → Gallery / Love / About → Pond。  
术语见根 `CONTEXT.md` / `LANGUAGES.md`。

## Agent 5 · 规范差距与修复

| 差距 | 修复 |
|---|---|
| `docs/output` 单数 | 迁 `docs/outputs` |
| commit-history 扁平 | 迁 `docs/outputs/commit-history/master/` |
| 无项目 MDC | 同步用户级五文件 |
| handoff.md 独立 | 并入 deliver，删除独立文件 |
| AGENTS 旧路径 / theme 路径 | 覆盖更新 |
| CLAUDE「无测试」过时 | 更正为 Vitest |
| README 无 Preview 声明 | Phase B 声明省略 + Showcase 为主 |
| 预览壳命名 | `preview-readme.{html,css,js}` · 端口 8095 |
| 生图 | **跳过**（配图完整） |

## 结论

按全局默认（本地 `.scratch` Issue、五标签 triage、单 CONTEXT、handoff 仅 A、建 voice）。  
Phase A 迁移完成后进入 Phase B：README 路径与 Preview/Showcase 文案对齐，不重生图。
