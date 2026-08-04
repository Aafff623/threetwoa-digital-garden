import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Code,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
  useHostTheme,
} from "cursor/canvas";

const SECTIONS = [
  { id: "overview", label: "概览" },
  { id: "stack", label: "技术栈" },
  { id: "dirs", label: "目录" },
  { id: "modules", label: "核心模块" },
  { id: "arch", label: "架构" },
  { id: "run", label: "如何运行" },
  { id: "highlights", label: "亮点" },
  { id: "risks", label: "风险 / 改进" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

function SectionNav({
  active,
  onChange,
}: {
  active: SectionId;
  onChange: (id: SectionId) => void;
}) {
  const theme = useHostTheme();
  return (
    <Row gap={6} wrap>
      {SECTIONS.map((s) => {
        const selected = s.id === active;
        return (
          <span key={s.id}>
            <Pill
              active={selected}
              tone={selected ? "info" : "neutral"}
              onClick={() => onChange(s.id)}
            >
              {s.label}
            </Pill>
          </span>
        );
      })}
      <Text size="small" style={{ color: theme.text.tertiary, marginLeft: 4 }}>
        点击切换章节
      </Text>
    </Row>
  );
}

function OverviewSection() {
  return (
    <Stack gap={14}>
      <Grid columns={4} gap={12}>
        <Stat value="13" label="App Router 页面" />
        <Stat value="63" label="React 组件" />
        <Stat value="~18k" label="TS/TSX 行数" />
        <Stat value="5" label="视觉主题预设" />
      </Grid>

      <Callout tone="info" title="定位：三件套中的公开展示层">
        三两园（Sanliang Garden / threetwoa-digital-garden）是个人博客与生活数字档案前端。
        与 spring_admin（Vue 运营后台）、spring_server（Java API）组成三端：本仓只负责访客侧展示与交互，不承担持久化与内容管理。
      </Callout>

      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>产品边界</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text>
                将文章、笔记、照片墙、足迹、恋爱纪实、时间胶囊、成就、鱼塘收敛为统一「数字花园」，而非通用 CMS 皮囊。
              </Text>
              <Text tone="secondary" size="small">
                v0.1 面向单人站点；多租户 / 团队协作不在范围。后端不可用时可降级到本地静态与 mock 数据，便于纯前端预览。
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>与 spring_server 的关系（耦合说明）</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text>
                本仓通过 Axios + Next rewrites 消费 spring_server 的公开 REST API（默认 localhost:8080/api）。耦合点是 HTTP 契约与字段映射，而非代码依赖或共享包。
              </Text>
              <Text tone="secondary" size="small">
                Admin 写数据 → Server 持久化 → Blog 读公开接口。本报告只深入 spring_blogs；Server 细节不展开。
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Table
        headers={["能力面", "状态", "说明"]}
        rows={[
          ["文章 / 笔记 / 归档", <Pill tone="success" size="sm">完成</Pill>, "列表、详情 Markdown、搜索与归档"],
          ["影像 / 足迹", <Pill tone="success" size="sm">完成</Pill>, "瀑布流、Lightbox、地图足迹"],
          ["生活档案", <Pill tone="success" size="sm">完成</Pill>, "恋爱、信件、成就、Now、鱼塘"],
          ["主题系统", <Pill tone="success" size="sm">完成</Pill>, "life / swiss / minimalist / glass / brutalist"],
          ["体验与 SEO", <Pill tone="warning" size="sm">进行中</Pill>, "动效与导航性能持续打磨"],
          ["i18n / RSS / OG", <Pill size="sm">规划</Pill>, "多平台分发尚未落地"],
        ]}
      />
    </Stack>
  );
}

function StackSection() {
  return (
    <Stack gap={14}>
      <Table
        headers={["分层", "选型", "备注"]}
        rows={[
          ["框架", "Next.js 16.2 · App Router · React 19 · TypeScript 5", "output: standalone；images.unoptimized"],
          ["样式", "Tailwind CSS 4 · CSS 变量主题", "globals.css + themes/*.css"],
          ["动效", "GSAP + ScrollTrigger · Lenis · Framer Motion · OGL", "叙事向滚动与过渡"],
          ["数据", "Axios · isomorphic src/api · hooks", "失败回退 data/mock"],
          ["内容", "自定义 Markdown · Highlight.js · Leaflet", "文章高亮与地图"],
          ["图标", "自研 src/icon · Phosphor · Lucide", "导航与 UI 混用"],
          ["测试 / 度量", "Vitest · Playwright（度量脚本）", "单元测试偏少，有导航延迟脚本"],
          ["部署", "Vercel Demo · standalone 自托管", "Vercel 无 Java 时跳过 rewrite"],
        ]}
      />
      <Grid columns={3} gap={12}>
        <Card>
          <CardHeader trailing={<Pill size="sm">运行时</Pill>}>环境变量</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">
                <Code>NEXT_PUBLIC_API_BASE_URL</Code> = <Code>/api</Code>（浏览器同源）
              </Text>
              <Text size="small">
                <Code>SERVER_API_BASE_URL</Code> → RSC / SSR / rewrites 目标
              </Text>
              <Text size="small" tone="secondary">
                可选：高德 <Code>NEXT_PUBLIC_AMAP_*</Code>（足迹页）
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader trailing={<Pill size="sm">构建</Pill>}>next.config</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">rewrites：/api/* → SERVER_API_BASE_URL</Text>
              <Text size="small">VERCEL 且未配置 Server URL 时禁用 rewrite</Text>
              <Text size="small">远程图：Unsplash + localhost:8080</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader trailing={<Pill size="sm">Node</Pill>}>要求</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">Node.js ≥ 20.9</Text>
              <Text size="small">包管理：npm（lock 齐全）</Text>
              <Text size="small">spring_server 可选，缺省可走静态回退</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Stack>
  );
}

function DirsSection() {
  return (
    <Stack gap={14}>
      <Grid columns="1.2fr 1fr" gap={12}>
        <Card>
          <CardHeader>仓库顶层</CardHeader>
          <CardBody>
            <Table
              headers={["路径", "职责"]}
              rows={[
                [<Code>src/</Code>, "全部应用代码（api / app / components / hooks…）"],
                [<Code>public/</Code>, "运行时静态资源"],
                [<Code>assets/</Code>, "README / 文档媒体（非应用运行时）"],
                [<Code>docs/</Code>, "Agent 流程、ADR、PRD、handoff、度量报告"],
                [<Code>scripts/</Code>, "导航延迟等度量脚本"],
                [<Code>CONTEXT.md / AGENTS.md</Code>, "领域硬约束与 Agent 门禁"],
              ]}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>src/ 约定</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text size="small">
                <Code>api/</Code> — Axios 与领域接口（唯一请求入口）
              </Text>
              <Text size="small">
                <Code>app/</Code> — 路由页面 + themes CSS
              </Text>
              <Text size="small">
                <Code>components/</Code> — 按页面域分包 + ui 壳层
              </Text>
              <Text size="small">
                <Code>hooks/</Code> — 客户端数据 Hook
              </Text>
              <Text size="small">
                <Code>data/</Code> + <Code>mock/</Code> — 品牌身份与离线兜底
              </Text>
              <Text size="small">
                <Code>interface/</Code> — 共享类型（覆盖面仍偏薄）
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      <Callout tone="neutral" title="文档体系成熟度高">
        docs/agents 任务流、docs/outputs 的 PRD/handoff/性能报告、docs/adr 决策记录齐全——这是「可维护的个人产品」而非一次性落地页仓库。
      </Callout>
    </Stack>
  );
}

function ModulesSection() {
  return (
    <Stack gap={14}>
      <H3>路由与页面域</H3>
      <Table
        headers={["模块", "路由", "数据入口", "职责"]}
        rows={[
          ["Home", "/", "RSC: blogs/gallery/config", "Hero、Rail、状态聚合"],
          ["Writing", "/writing · /[slug]", "hooks + RSC detail", "列表 / Markdown 详情"],
          ["Notes", "/notes", "api/notes", "短内容流"],
          ["Archive", "/archive", "文章聚合", "年份归档"],
          ["Gallery", "/gallery", "hooks/useGallery", "瀑布流 + Lightbox"],
          ["Footprints", "/footprints", "gallery + 高德", "地图标点与行程"],
          ["Love", "/love", "api/love + PasscodeGate", "时间线 / 愿望 / 胶囊"],
          ["Letter", "/letter", "api/letter", "时间胶囊信件"],
          ["Achievements", "/achievements", "api/achievements", "徽章与证书"],
          ["Pond", "/pond", "api/pond CRUD", "留言 / 点赞 / 回复"],
          ["About / Now", "/about · /now", "config + mock", "作者切片与当前状态"],
        ]}
      />

      <H3>对接 spring_server 的 API 面</H3>
      <Table
        headers={["本仓模块", "HTTP 路径", "耦合强度"]}
        rows={[
          ["blogs", "/blogs/list · /blogs/detail/by-slug/:slug", "高 — 首页与阅读主路径"],
          ["config", "/config/public", "高 — 主题、favicon、页面开关、口令"],
          ["gallery / footprints", "/gallery/list · /footprint-category/list", "中高"],
          ["love / letter", "/love/* · /time-letter/list", "中"],
          ["achievements", "/achievements/list · /achievement-metas/list", "中"],
          ["pond", "/pond/feedback* （含 POST）", "高 — 唯一写路径之一"],
          ["notes", "/notes/list · /notes/create", "中"],
        ]}
        rowTone={[
          "info",
          "info",
          "neutral",
          "neutral",
          "neutral",
          "warning",
          "neutral",
        ]}
      />

      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>壳层与横切能力</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">
                <Code>SiteChrome</Code>：Navbar / Footer / SmoothScroll / StyleConsole / TapeStation
              </Text>
              <Text size="small">
                <Code>ThemeApplier</Code>：注入后台自定义主题（ID: custom-theme-style）
              </Text>
              <Text size="small">
                <Code>PasscodeGate</Code>：私密区会话解锁（默认可被 config 覆盖）
              </Text>
              <Text size="small">
                导航四组：Words / Visual / Life / About，受 <Code>page.*.enable</Code> 过滤
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>品牌与身份</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">
                品牌单一事实源：<Code>src/data/identity.ts</Code>
              </Text>
              <Text size="small">
                首页会主动剥离后端遗留的 site.logo / site.title，避免旧作者名泄漏
              </Text>
              <Text size="small" tone="secondary">
                风格选择存 localStorage：atlas_style / atlas_style_mode
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Stack>
  );
}

function ArchSection() {
  const theme = useHostTheme();
  return (
    <Stack gap={14}>
      <Card>
        <CardHeader>三端职责与数据流</CardHeader>
        <CardBody>
          <Stack gap={10}>
            <Text
              size="small"
              style={{
                fontFamily: "ui-monospace, monospace",
                whiteSpace: "pre-wrap",
                color: theme.text.secondary,
              }}
            >
{`访客浏览器
  ├─ RSC / SSR  ──Axios──►  SERVER_API_BASE_URL  ──►  spring_server
  │                         失败 → src/data · src/mock
  └─ Client Hook ──/api──►  Next rewrites ──► spring_server
                            （Vercel 无 Java 时无 rewrite，直接回退）

spring_admin (Vue) ──管理 API──► spring_server ──MySQL / 对象存储
本仓不直接依赖 Admin；只读公开配置与内容接口。`}
            </Text>
            <Divider />
            <Grid columns={3} gap={10}>
              <Stack gap={4}>
                <Text weight="semibold">Blog（本仓）</Text>
                <Text size="small" tone="secondary">
                  展示、动效、主题、客户端交互；可独立降级运行
                </Text>
              </Stack>
              <Stack gap={4}>
                <Text weight="semibold">Server</Text>
                <Text size="small" tone="secondary">
                  API、鉴权、持久化、文件；本仓契约消费者
                </Text>
              </Stack>
              <Stack gap={4}>
                <Text weight="semibold">Admin</Text>
                <Text size="small" tone="secondary">
                  内容与站点配置写入；影响 Blog 的 config/public
                </Text>
              </Stack>
            </Grid>
          </Stack>
        </CardBody>
      </Card>

      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>同构请求层设计</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text size="small">
                <Code>getApiBaseURL()</Code>：浏览器用 /api；服务端用 SERVER_API_BASE_URL
              </Text>
              <Text size="small">
                环回地址禁用 Axios HTTP_PROXY，避免本机代理劫持
              </Text>
              <Text size="small">
                无 Server URL 时拦截器直接 reject，配合 Vercel 静态模式
              </Text>
              <Text size="small">
                config 模块：正/负缓存 + in-flight 去重（60s / 5s TTL）
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>渲染模式习惯</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text size="small">
                首页等关键路径：Server Component 预取 + Client 交互壳
              </Text>
              <Text size="small">
                大量页面标记 use client（约 60+ 文件）——动效驱动，SSR 收益集中在首屏数据
              </Text>
              <Text size="small">
                实体映射分散在 page / hooks 内（any → Post），契约未集中类型化
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Callout tone="warning" title="耦合风险面（本仓视角）">
        字段名（slug、createTime、summary、visibility 等）与响应包装 code===200 被多处硬编码。
        Server 改契约会静默触发静态回退，用户可能看到过期 mock 而非错误页——这是有意降级，也是联调时最容易误判的点。
      </Callout>
    </Stack>
  );
}

function RunSection() {
  return (
    <Stack gap={14}>
      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>本地开发</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text size="small">1. <Code>npm ci</Code>（Node ≥ 20.9）</Text>
              <Text size="small">
                2. 配置 <Code>.env.development</Code>：
              </Text>
              <Text
                size="small"
                style={{ fontFamily: "ui-monospace, monospace", whiteSpace: "pre-wrap" }}
              >
                {`NEXT_PUBLIC_API_BASE_URL=/api\nSERVER_API_BASE_URL=http://localhost:8080/api`}
              </Text>
              <Text size="small">3. （可选）启动 spring_server :8080</Text>
              <Text size="small">4. <Code>npm run dev</Code> → http://localhost:3000</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>常用命令</CardHeader>
          <CardBody>
            <Table
              headers={["命令", "用途"]}
              rows={[
                [<Code>npm run dev</Code>, "开发服务器"],
                [<Code>npm run lint</Code>, "ESLint"],
                [<Code>npm run build</Code>, "生产构建 standalone"],
                [<Code>npm run start</Code>, "启动生产服务"],
                [<Code>npm test</Code>, "Vitest"],
                [<Code>npm run measure:nav</Code>, "导航延迟度量"],
              ]}
            />
          </CardBody>
        </Card>
      </Grid>
      <Callout tone="info" title="部署提示">
        生产 .env.production 默认不设 SERVER_API_BASE_URL，避免 Vercel 狂打 127.0.0.1。
        自托管（OpenResty 同机）可设 http://127.0.0.1:8080/api。Demo：threetwoa-digital-garden.vercel.app
      </Callout>
    </Stack>
  );
}

function HighlightsSection() {
  return (
    <Stack gap={12}>
      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader trailing={<Pill tone="info" size="sm">核心</Pill>}>
            可降级数据层
          </CardHeader>
          <CardBody>
            <Text size="small">
              API 失败自动回退 writingData / galleryData / mock，配合 Vercel 无后端模式——前端可独立展示与迭代。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>五套视觉语言 + 后台主题注入</CardHeader>
          <CardBody>
            <Text size="small">
              预设主题与 ThemeApplier 并存；StyleConsole 即时切换，品牌 identity 与配置解耦。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>编辑级动效叙事</CardHeader>
          <CardBody>
            <Text size="small">
              Lenis 平滑滚动 + GSAP ScrollTrigger + Framer 路由过渡，页面域组件（Hero / Rail / Tape）形成统一气质。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>工程文档与 Agent 门禁</CardHeader>
          <CardBody>
            <Text size="small">
              CONTEXT / AGENTS / PRD / handoff / 性能诊断报告齐全；导航性能有可复现度量脚本。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>公共配置缓存</CardHeader>
          <CardBody>
            <Text size="small">
              config/public 的 TTL、负缓存与 in-flight 去重，降低导航时重复请求（已有 P0 加固 handoff）。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>私密内容门禁</CardHeader>
          <CardBody>
            <Text size="small">
              PasscodeGate + sessionStorage，口令可走公开配置——适合个人站点「软隔离」场景。
            </Text>
          </CardBody>
        </Card>
      </Grid>
    </Stack>
  );
}

function RisksSection() {
  return (
    <Stack gap={14}>
      <Table
        headers={["优先级", "问题", "影响", "建议"]}
        rows={[
          [
            <Pill tone="deleted" size="sm">P0</Pill>,
            "PasscodeGate 默认口令硬编码（2026）且口令经公开 config 下发",
            "私密区仅为 UX 屏障，非安全边界",
            "口令勿当真安全；敏感内容应服务端鉴权或不上公开站",
          ],
          [
            <Pill tone="deleted" size="sm">P0</Pill>,
            "API 契约靠 any 映射，分散在 hooks/pages",
            "Server 字段变更难发现，易静默回退 mock",
            "集中 DTO + zod/类型守卫；契约测试对接 Server OpenAPI",
          ],
          [
            <Pill tone="warning" size="sm">P1</Pill>,
            "测试覆盖极薄（约 2 个 *.test.ts）",
            "重构与联调回归成本高",
            "优先覆盖 request/config 与关键 mapper；补页面烟雾测试",
          ],
          [
            <Pill tone="warning" size="sm">P1</Pill>,
            "Client Component 占比高 + 多字体 Google Fonts",
            "首包与 CLS/字体加载压力",
            "按主题按需加载字体；非首屏动效动态 import",
          ],
          [
            <Pill tone="warning" size="sm">P1</Pill>,
            "images.unoptimized: true",
            "带宽与 LCP 不占优",
            "自托管时可开优化或接 CDN 变换",
          ],
          [
            <Pill size="sm">P2</Pill>,
            "axios@^1.18.1 锁定偏旧",
            "安全补丁滞后风险",
            "定期 npm audit / 升到当前 1.x",
          ],
          [
            <Pill size="sm">P2</Pill>,
            "静默 fallback 掩盖后端故障",
            "运营侧以为内容已更新",
            "开发/预发显示「离线数据」角标；生产可采样上报",
          ],
          [
            <Pill size="sm">P2</Pill>,
            "interface/ 类型覆盖不全",
            "组件 props 与 API 漂移",
            "按领域补齐 Article/Gallery/Pond 等共享类型",
          ],
        ]}
        rowTone={[
          "danger",
          "danger",
          "warning",
          "warning",
          "warning",
          "neutral",
          "neutral",
          "neutral",
        ]}
      />

      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>短期改进（本仓可独立做）</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">1. 抽出 API → 视图模型 mapper，消灭重复 any</Text>
              <Text size="small">2. 扩展 Vitest：config 缓存、fallback 路径</Text>
              <Text size="small">3. 开发环境 fallback 可视化提示</Text>
              <Text size="small">4. 字体与重型组件按路由拆分</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>需与 spring_server 协同</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text size="small">1. 冻结/版本化公开 API 契约（OpenAPI）</Text>
              <Text size="small">2. 真正私密内容改为鉴权资源，而非前端口令</Text>
              <Text size="small">3. 统一错误码与空列表语义，避免误回退</Text>
              <Text size="small">4. 远程图片域名纳入 remotePatterns 白名单流程</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Stack>
  );
}

export default function SpringBlogsDeepAnalysis() {
  const theme = useHostTheme();
  const [section, setSection] = useCanvasState<SectionId>("section", "overview");

  return (
    <Stack gap={20} style={{ padding: 20 }}>
      <Stack gap={8}>
        <Row gap={8} align="center" justify="space-between" wrap>
          <H1>spring_blogs 深度分析</H1>
          <Pill tone="info">只读分析 · 未改业务代码</Pill>
        </Row>
        <Text tone="secondary">
          三两园前端仓库架构与耦合审查 · 路径 D:\OneDrive\Desktop\project\spring_blogs · 分析日 2026-08-04
        </Text>
        <SectionNav active={section} onChange={setSection} />
      </Stack>

      <Divider />

      {section === "overview" && (
        <Stack gap={12}>
          <H2>概览</H2>
          <OverviewSection />
        </Stack>
      )}
      {section === "stack" && (
        <Stack gap={12}>
          <H2>技术栈</H2>
          <StackSection />
        </Stack>
      )}
      {section === "dirs" && (
        <Stack gap={12}>
          <H2>目录结构</H2>
          <DirsSection />
        </Stack>
      )}
      {section === "modules" && (
        <Stack gap={12}>
          <H2>核心模块</H2>
          <ModulesSection />
        </Stack>
      )}
      {section === "arch" && (
        <Stack gap={12}>
          <H2>架构与耦合</H2>
          <ArchSection />
        </Stack>
      )}
      {section === "run" && (
        <Stack gap={12}>
          <H2>如何运行</H2>
          <RunSection />
        </Stack>
      )}
      {section === "highlights" && (
        <Stack gap={12}>
          <H2>亮点</H2>
          <HighlightsSection />
        </Stack>
      )}
      {section === "risks" && (
        <Stack gap={12}>
          <H2>风险与改进</H2>
          <RisksSection />
        </Stack>
      )}

      <Divider />
      <Text size="small" style={{ color: theme.text.tertiary }}>
        数据来源：仓库源码、README / CONTEXT / AGENTS、next.config、src/api 与页面实现。spring_server / spring_admin 仅描述接口耦合，未深入其仓库。
      </Text>
    </Stack>
  );
}
