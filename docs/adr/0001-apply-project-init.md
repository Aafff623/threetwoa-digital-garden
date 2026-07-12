# ADR-0001: 应用 project-init 规范完成仓库初始化

## 状态

Accepted

## 背景

本仓库从 `RRTiamo/spring_blogs` fork 为 `Aafff623/threetwoa-digital-garden` 后，缺少统一的 Agent 流程、文档入口与资产规范。根目录与 `docs/` 骨架不完整，`assets/` 根目录存在大量散落/重复文件，`main` 与 `master` 分支历史分叉、目录结构不同，导致后续业务开发难以按统一流程推进。

## 决策

1. **按 `docs/knowledge/project-init.md` 执行 Phase A（资产初始化）与 Phase B（README Polish）**
   - 建立根入口文件：`AGENTS.md`、`CONTEXT.md`、`LANGUAGES.md`
   - 建立 `docs/agents/` 流程件：`workflow.md`、`deliver.md`、`archive.md`、`domain.md`、`issue-tracker.md`、`triage-labels.md`
   - 建立 `docs/adr/` 决策记录目录与 `docs/commit-history/`、`docs/output/handoff/`、`docs/output/ppt/` 业务目录
   - 建立本地 Issue tracker 目录 `.scratch/`

2. **按 project-init 规范重组 `assets/` 目录**
   - 文档/ README 媒体：`assets/images/readme/`、`assets/images/avatar/`、`assets/images/icon/`、`assets/video/`
   - 将产品中使用的 UI 资源（`anime-dock.png`、`footer-peekers.png`）迁入 `public/assets/`
   - 清理 `assets/` 根目录下与 `public/assets/` 重复的演示媒体及未引用文件

3. **README 配图按契约文件名落盘并维护可编辑源**
   - 6 张契约图 PNG 放入 `assets/images/readme/`
   - 对应 SVG 源文件放入 `assets/images/readme/_svg/`
   - Showcase 截图仍由 Playwright 从真实运行应用截取

4. **统一默认分支为 `main`**
   - 用 `master` 分支当前内容强制覆盖 `origin/main`
   - `origin/HEAD` 指向 `origin/main`
   - 删除本地旧的 `main` 分支引用

## 后果

- `main` 分支原内容（含中文部署指南、`threetwoa-blog-manager` 目录结构）被覆盖，历史仍可通过 reflog 在垃圾回收前恢复。
- `assets/` 根目录仅保留 `backup/`、`images/`、`video/`、`README.md` 及 `ASSET-MANIFEST.md`。
- 后续业务开发必须遵循 `docs/agents/workflow.md`：Issue → PRD → handoff → 实施 → Review → commit。
- 新增 README 配图或修改 Showcase 截图时，需同步更新 `assets/ASSET-MANIFEST.md` 与 `docs/output/prd/readme-diagrams/readme-diagram-brief.md`。

## 相关 ADR

- [ADR-0000: 采用 ADR 记录架构决策](./0000-use-adr.md)
