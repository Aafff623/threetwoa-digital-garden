# assets/

> 本目录存放 README / 文档 / 演示用的非代码媒体资产。  
> 应用自身的静态资源仍放在 `public/`。

## 目录约定

| 路径 | 用途 | 何时建 |
|---|---|---|
| `backup/` | 上游 zip / 原版只读备份 | 有上游原版时 |
| `images/readme/` | README 契约图 + Showcase | 默认 |
| `images/avatar/` | 文档/演示头像 | 有图时 |
| `images/icon/` | 文档/演示图标 | 有图时 |
| `video/` | 演示视频 | 有视频时 |
| `ppt/` | 演示文稿源文件 | 做演示时 |
| `speeches/` | 逐字稿 / 介绍稿 | 有稿件时 |

空槽**不**用 `.gitkeep` 占位。已移除空的 `theme/`、`video/`、`images/icon/`、`backup/`。

## 当前状态

- `images/readme/`：6 张契约图（banner · features · architecture · tech-stack · workflow · structure）齐全；`showcase-*.png` 共 13 张（Playwright 真机截图）。
- `images/avatar/`：`avtor-boy.jpg` · `avtor-girl.jpg`。
- 本仓**无** Preview Gallery 壳图（单产品，Showcase 为主）；README 本地预览壳见根 `preview-readme.html`（端口 8095）。
- 出图 brief / Prompt：`docs/outputs/prd/readme-diagrams/`。
- `_svg/` 可编辑源已随升级 PNG 移除；改图走 Prompt 重生。

完整清单见 [`ASSET-MANIFEST.md`](./ASSET-MANIFEST.md)。
