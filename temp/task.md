# Gitalk 评论系统配置任务

## 背景
博客的音乐页和关于页底部嵌入了 Gitalk 评论组件，因配置留空导致 `Error: Network Error` 报错。本文件记录后续完整配置流程。

---

## 前置条件
- GitHub 账号（用户：Aafff623）
- 博客已部署到公网（有固定域名或 Vercel 地址）

---

## 步骤

### Step 1：创建 GitHub OAuth App
1. 登录 GitHub → 右上角头像 → **Settings**
2. 左侧最下方 → **Developer settings** → **OAuth Apps** → **New OAuth App**
3. 填写：
   - **Application name**：`threetwoa-blog-comments`（任意）
   - **Homepage URL**：博客首页地址（如 `https://www.threetwoa-digital-garden.vercel.app`）
   - **Application description**：可选
   - **Authorization callback URL**：`https://www.threetwoa-digital-garden.vercel.app`（与 Homepage URL 相同）
4. 点击 **Register application**
5. 记录页面上的 **Client ID**
6. 点击 **Generate a new client secret** → 记录 **Client Secret**（只显示一次）

### Step 2：创建评论存储仓库
1. GitHub 首页 → **New repository**
2. 仓库名：`threetwoa-blog-comments`（任意，建议与 OAuth App 同名）
3. 设为 **Public**（Gitalk 必须 public 才能读取 Issues）
4. 点击 **Create repository**
5. 记录仓库全名：`Aafff623/threetwoa-blog-comments`

### Step 3：修改博客配置
文件位置：`XHBlogs/siteConfig.ts`

修改 `gitalkConfig` 字段：

```typescript
gitalkConfig: {
  clientID: "你的 Client ID",
  clientSecret: "你的 Client Secret",
  repo: "threetwoa-blog-comments",
  owner: "Aafff623",
  admin: ["Aafff623"],
},
```

### Step 4：验证
1. 重启博客 dev 服务器
2. 打开音乐页 / 关于页
3. 评论区域应显示 Gitalk 登录框，不再报错

---

## 注意事项
- Client Secret 只显示一次，务必保存好
- 仓库必须是 **Public**，否则访客无法读取评论
- 如果博客地址变更，需要回 GitHub OAuth App 修改回调 URL
- 评论数据存储在 GitHub Issues 中，按页面路径自动创建 Issue

---

## 替代方案（如不想配置 Gitalk）
直接删除/注释掉音乐页和关于页的 Gitalk 组件引用，报错即消失。agent 可代为操作。
