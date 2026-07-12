# Admin 管理台 MVP

## 目标

在没有 spring_admin / spring_server 的前提下，提供可登录的配置编辑入口，为后续完整 CMS 铺路。

## 当前交付（v0）

| 项 | 说明 |
|---|---|
| 路由 | `/admin` |
| 鉴权 | 会话口令 `sanliang`（`sessionStorage`） |
| 存储 | `localStorage` key `sanliang_admin_settings_v1` |
| 字段 | logo / 标题 / 标语 / 关于姓名角色引言 |
| 壳层 | `SiteChrome` 在 `/admin` 隐藏 Navbar/Footer/动效壳 |

## 非目标（v0）

- 文章 / 相册 / 恋爱 CRUD
- 服务端持久化
- 多用户权限

## 下一阶段

1. 对接 `spring_server` 配置 API（若恢复后端）
2. 或 Git-based CMS / JSON 文件写入 CI
3. 口令改为环境变量 `ADMIN_PASSCODE` + 可选 Edge middleware

## 验证

- 打开 `/admin` → 输入 `sanliang` → 保存字段 → localStorage 有数据
- 前台品牌默认仍来自 `src/data/identity.ts`（v0 未做运行时覆盖）
