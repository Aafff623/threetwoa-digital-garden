# XinghuisamaBlogs 项目接管分析报告

> 生成时间: 2026-05-26
> 目标: 将 XHBlogs 二次开发为 threetwoa-digital-garden
> 策略: 先体验流程，再替换身份，再整改命名，最后部署

---

## 1. 项目架构

```
XinghuisamaBlogs/
├── XHBlogs/              ← 前端博客站点 (Next.js 16 + React 19)
├── my-blog-manager/      ← 本地管理控制台 (Next.js + Python FastAPI)
├── picture/              ← README 配图
├── scripts/              ← 配置检查脚本
└── README.md             ← 部署文档
```

**关系**: 管理端编辑内容 → 同步覆盖到 XHBlogs → git push → Vercel 部署

---

## 2. 当前 Git 状态

- `git status`: clean
- `git remote`: 绑定 `github.com/heiehiehi/XinghuisamaBlogs.git`
- 分支: 仅 main
- stash: 无
- 运行产物: node_modules(760M) + .next(691M) = 1.4G 可清理

---

## 3. 原项目完整流程

### 3.1 管理端启动
```
Start.bat → 检测 Python 3.10+ → run_me.py → 检查依赖 → launcher.py
                                                            ├── 启动 FastAPI 后端 (随机端口)
                                                            ├── 启动 Next.js 前端 (随机端口)
                                                            └── pywebview 桌面窗口
                                                                标题: '星辉云端·控制台'
```

### 3.2 同步 Blog 机制
管理端 `posts/` `chatters/` `moments/` + 配置 → **覆盖** → XHBlogs 对应目录
- siteConfig.ts 同步时会过滤掉 picBedToken（防泄露）
- 单向同步，管理端是源，XHBlogs 是目标

### 3.3 部署机制
- **A线**: 静态导出 → gh-pages
- **B线**: 源码推送 → GitHub → Vercel 自动构建
- B线使用 SSH Deploy Key 推送

### 3.4 XHBlogs 独立运行
```bash
cd XHBlogs
npm install
npm run dev    # localhost:3000
npm run build  # 生产构建
```

---

## 4. 身份标识扫描汇总

共 **25 个文件**含原作者身份标识，主要集中在:

| 类型 | 数量 | 核心文件 |
|------|------|---------|
| siteConfig.ts 显示信息 | 30+ 字段 | XHBlogs/siteConfig.ts, my-blog-manager/siteConfig.ts |
| About 页面 | 1 | app/about/about.md |
| 控制台标题 | 3 | launcher.py, run_me.py, cms_core/main.py |
| 页面标题 | 3 | app/projects/friends/chatter/page.tsx |
| 数据文件注释 | 5 | data/friends.ts, data/albums.ts, data/projects.ts |
| README | 全文 | README.md, README_en.md |
| 部署配置 | 1 | data/deploy_config.json |
| IDE配置 | 1 | .idea/modules.xml |

**好消息**: siteConfig.ts 是"单点配置"，改一处影响全站 70% 的显示信息。

---

## 5. 命名整改方案

### 5.1 建议当前阶段修改（低风险）
- ✅ siteConfig.ts 中的所有显示文本
- ✅ About 页面内容
- ✅ package.json name
- ✅ 控制台窗口标题 (launcher.py)
- ✅ 启动文案 (run_me.py)
- ✅ API 标题 (cms_core/main.py)
- ✅ 页面标题 (projects/friends/chatter page.tsx)
- ✅ 数据文件中的作者注释
- ✅ README 顶部项目名
- ✅ .idea/ 模块名

### 5.2 不建议当前阶段修改（高风险）
- ❌ 重命名 `XHBlogs/` 文件夹（scripts/checkConfig.mjs、deploy_config.json 硬编码路径）
- ❌ 重命名 `my-blog-manager/` 文件夹（README 大量引用）
- ❌ 修改 import 路径（不需要，因为不改文件夹名）

---

## 6. 任务切片（Issues）

| Issue | 目标 | 风险 | 依赖 |
|-------|------|------|------|
| #1 流程体检 | 跑通原项目，验证能运行 | 低 | 无 |
| #2 身份替换 | 替换所有身份标识为 threetwoa | 中 | 需提供 Bio/头像等 |
| #3 命名分析 | 扫描目录名引用影响 | 低 | 无 |
| #4 最小命名整改 | 改显示层命名，不动结构 | 中 | #2 完成后 |
| #5 目录重命名 | 改 XHBlogs/my-blog-manager 文件夹名 | 高 | 放到后期 |
| #6 内容替换 | 清理原作者内容，导入你的 | 低 | 你提供内容 |
| #7 部署准备 | 确认构建配置 | 低 | #6 完成后 |
| #8 Vercel 部署 | 部署上线 | 中 | 最后阶段 |

---

## 7. 验证清单

### 身份替换后
- [ ] grep "XingHuiSama" 无残留（Credits 除外）
- [ ] grep "1124533793" 无残留
- [ ] grep "xinghuisama.top" 无残留
- [ ] 首页显示 threetwoa 信息
- [ ] About 页面正确

### 命名整改后
- [ ] grep "星辉" 无残留
- [ ] 启动管理端窗口标题正确
- [ ] API /api/status 返回正确 title

### 运行验证
- [ ] npm install 成功
- [ ] npm run dev 启动成功
- [ ] npm run build 构建成功
- [ ] 首页/文章页/About 页正常

---

## 8. 待确认问题

执行 Issue #2（身份替换）前，需要你提供:

1. **Bio（个人简介）**: 50字以内
2. **"宝藏之地" 替换为**: A) threetwoa-digital-garden / B) digital-garden / C) 数字花园 / D) 自定义
3. **"云端杂谈" 是否改名**: 保留 / 改为?
4. **AI 猫猫"煤球"**: 保留 / 改名?

后续还需要（可晚点回答）:
5. 头像 URL
6. 背景图 URL
7. 网易云歌单 ID
8. ICP 备案号（或删除）
9. 第一篇关于文章内容
