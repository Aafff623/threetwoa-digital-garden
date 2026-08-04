# project-init 细致 Review · 抽检补缺

> 日期：2026-08-05  
> 仓库：`spring_blogs`（远端 `threetwoa-digital-garden`）  
> 前置：Full 已 push（`6fb2f20` / commit-history `9068b81`）  
> 参考：`canvases/spring-blogs-deep-analysis.canvas.tsx`（只读）  
> 对照：`~/.agents/skills/project-init/SKILL.md`

## 范围

- 抽检 Phase A / B / Gate 清单；**查缺补齐**治理与文档资产。
- **不**提交 `src/*` / 业务 WIP。
- MiniMax → GenerateImage：**仅补缺图**；本轮契约图与 Showcase 齐全 → **跳过生图**。

## 抽检结果（摘要）

| 验收项 | 结果 |
|---|---|
| `.cursor/rules/` 五 MDC · `alwaysApply` | ✅ 与用户级 SHA256 **MATCH** |
| 根 `AGENTS` / `CLAUDE` / `CONTEXT` / `LANGUAGES` | ✅；单端无 `CONTEXT-MAP`（合规） |
| humanizer + Windows Rules + Answer Format 引用 | ✅ |
| `docs/agents` 六件 + `voice`；无 language/context/handoff | ✅ |
| `docs/outputs/{report,prd,handoff,commit-history}` | ✅ |
| ADR-0000…0003 · glossary · knowledge（与 skill 同 hash） | ✅ |
| README Polish：Preview 省略声明 · Showcase 13 · 无 `<details>` | ✅ |
| `preview-readme.{html,css,js}` · 端口 8095 | ✅ |
| 6 契约图 + 13 Showcase + avatar | ✅ 磁盘齐全；**不重生图** |
| 空槽 `backup/` | ❌ 空目录 → **已删除** |
| `ASSET-MANIFEST` / brief | ❌ 清单过时（仅列 5 Showcase、误称 `_svg/`）→ **已对齐** |

## 本轮改动

| 路径 | 动作 |
|---|---|
| `assets/ASSET-MANIFEST.md` | 覆盖：13 Showcase、真实尺寸、去掉 `_svg` |
| `assets/README.md` | 同步当前状态 |
| `docs/outputs/prd/readme-diagrams/readme-diagram-brief.md` | 补 Preview 章、完整 Showcase、验收修正 |
| `assets/backup/` | 删除空目录 |
| `docs/outputs/report/project-init-refine-2026-08-05/` | 本报告 |
| `docs/outputs/commit-history/master/2026-08-05.md` | 攒批记录 |
| `docs/README.md` | 状态行追加本轮 |

## 明确未纳入

- `src/**`、`scripts/measure-nav-latency.mjs`、`scripts/_verify-hero-font.mjs` 等业务 WIP（工作区仍脏，留给业务 theme）。
- 不新建 `CONTEXT-MAP.md`（单端）。
- 不预建 `ppt/` / `speeches/` / `icon/` / `video/`。

## 结论

Full 迁移后治理层基本达标；本轮为**清单与空槽漂移**的抽检补缺。Gate 产物可 Review；业务编码仍走 PRD 门禁。
