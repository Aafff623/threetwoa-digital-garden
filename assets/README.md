# assets/

> 本目录存放 README / 文档 / 演示用的非代码媒体资产。  
> 应用自身的静态资源仍放在 `public/`。

## 目录约定

| 路径 | 用途 |
|---|---|
| `backup/` | 上游 zip / 原版源码只读备份 |
| `images/readme/` | README 配图：banner、features、architecture、tech-stack、workflow、structure、preview-*、showcase-* |
| `images/avatar/` | 文档或演示槽位头像 |
| `images/icon/` | 文档或演示槽位图标 |
| `video/` | 演示视频 |

## 当前状态

- `assets/images/readme/showcase-*.png` 已用 Playwright 从本地 dev server 截取。
- `assets/images/readme/` 已包含 banner、features、architecture、tech-stack、workflow、structure 等契约图（含对应 `_svg/` 可编辑源）。
- `assets/images/avatar/avtor-boy.jpg` 与 `avtor-girl.jpg` 已归位为文档/演示头像。
- 原散落在 `assets/` 根目录的产品 UI 资源（`anime-dock.png`、`footer-peekers.png`）已迁至 `public/assets/`，组件引用已同步更新。
- 原 `assets/` 根目录下与 `public/assets/` 重复的演示媒体文件与未引用文件已清理。

出图 brief、Prompt 与验收清单见 `docs/output/prd/readme-diagrams/readme-diagram-brief.md`。
