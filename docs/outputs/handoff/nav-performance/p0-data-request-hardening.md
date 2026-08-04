# P0 数据请求加固 · Handoff

## Status

awaiting-review

## 背景

本任务承接 `docs/outputs/prd/PRD-nav-performance.md` 与 `docs/outputs/report/nav-performance/diagnosis-2026-07-14.md`。

诊断已确认：服务端 Axios 请求 `http://localhost:8080/api/*` 时继承本机 `HTTP_PROXY/HTTPS_PROXY`，在缺少 `NO_PROXY` 的环境中被代理接管；后端离线时单次失败从约 46ms 放大到约 2635ms。首页、Footprints 等页面的串行请求进一步把等待累加到 7–11 秒。

用户于 2026-07-14 明确要求开始修复。本切片只处理 P0 数据请求路径，不调整页面视觉与动画。

## 改动点

- `src/api/request.ts`
  - 服务端 API base URL 是 `localhost`、`*.localhost`、`127.0.0.0/8` 或 `::1` 时，为 Axios 设置 `proxy: false`。
  - 浏览器 `/api` 与远程 `SERVER_API_BASE_URL` 保持原有代理及 AxiosError 契约。
  - 提供 `summarizeApiError()`，只输出 code、HTTP status 与 message。
- `src/api/config.ts`
  - public config 在浏览器与服务端分别使用 60 秒成功缓存、5 秒失败缓存、4 秒 timeout 和 in-flight 去重。
  - 只有 `code === 200` 且 `data` 为数组的业务成功响应使用成功 TTL。
  - cache generation 防止 invalidate 后旧请求回填缓存或清空新请求引用。
- `src/app/page.tsx`
  - featured posts、photos、public config 改为 `Promise.all` 并行等待。
  - fallback 日志只打印 message，不再展开 Axios request/config/stack。
- `src/app/footprints/page.tsx`
  - map config、gallery、love、categories 四组请求改为 `Promise.all`。
  - fallback 日志压缩为单行 message。
- `src/app/achievements/page.tsx`
  - achievements 与 metas 改为并行等待；fallback 日志压缩为单行 message。
- `src/app/about/page.tsx`
  - 页面 enable 与 profile 合并为一次配置读取；metadata 通过共享 cache/in-flight 复用。
  - profile JSON 单独容错，坏 JSON 不会把 `page.about.enable=false` 改回启用。
- `src/app/love/page.tsx`
  - 服务端配置 fallback 日志压缩为单行 message。
- `scripts/measure-nav-latency.mjs`
  - 沿用诊断阶段已适配 mega-menu 的脚本；不属于本切片新增业务改动。

## 验收结果

1. 环境保持 `HTTP_PROXY/HTTPS_PROXY=127.0.0.1:7892`，构建与运行命令显式移除 `NO_PROXY`，后端保持离线。
2. `npx vitest run src/api/request.test.ts --maxWorkers=1`：通过，2/2 tests。
3. `npm run lint`：通过。
4. 最终 `npm run build`：通过；compiled 21.5s，TypeScript 16.0s。
5. 构建期服务端请求直接返回 `ECONNREFUSED 127.0.0.1:8080`，未再出现约 2.6 秒后的代理 502；fallback 日志为单行摘要。
6. 最终 production warm HTML，3 次样本平均：
   - `/`：10.7ms
   - `/about`：18.2ms
   - `/footprints`：6.1ms
   - `/achievements`：6.3ms
7. production soft-nav 第二轮预热样本：
   - Writing path 154ms / quiet 780ms
   - About path 741ms / quiet 1360ms
   - Footprints path 407ms / quiet 1036ms
   - Home path 273ms / quiet 912ms
   - 原始结果：`docs/outputs/prd/nav-perf/latest-after-p0-data-hardening-warm2.md`
8. 行为级审查最终结论：`APPROVE`。已修复 About disable fail-open、远程 AxiosError 契约变化、业务失败正缓存、invalidate 竞态和 `127.example.com` loopback 误判。
9. 非阻塞测试缺口：本轮未新增 loopback 分类、缓存竞态和 About 坏 JSON 的回归测试；项目要求未获明确授权时不自动增加测试。

## 回滚

- Review 前可逐文件恢复本 handoff“改动点”中的代码文件。
- Review 后如已提交，revert 对应原子 commit；无需数据迁移。
- 环境级 `NO_PROXY` 仍可作为临时兜底，但不再是唯一修复。

## 已知风险与未决项

- public config 是公开、非用户数据；进程内成功缓存最多带来 60 秒配置更新延迟。
- About、Gallery、Pond、Love 的 200–500ms 客户端 long task 仍存在，属于下一阶段 P1，不影响本切片“消除数秒服务端等待”的结论。
- 浏览器 `/api/*` 走 Next rewrite，后端离线时 Next 自身仍会输出 proxy failure；当前失败在几十毫秒内完成，不是原始 7–11 秒根因。
- `next start` 对 `output: standalone` 给出警告，但本地 production 测量可用；正式 standalone 启动应改用 `.next/standalone/server.js`。
- 当前工作树已有 TapeStation、writing 数据和 useTapeRadio 等无关改动，本任务未覆盖，也不得与本切片一起提交。
