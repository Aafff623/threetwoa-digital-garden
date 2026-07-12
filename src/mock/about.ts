import type { AboutProfile } from "@/interface/about";
import { siteIdentity } from "@/data/identity";

export const aboutProfile: AboutProfile = {
  name: siteIdentity.name,
  role: siteIdentity.role,
  headline: siteIdentity.headline,
  introduction:
    "这里不是一份冰冷的简历，而是一些关于我的切片：正在炼的工作流、已经上线的产品、黑客松留下的证据，以及一些还在生长的想法。",
  tags: [
    "# Agentic Coding",
    "# Full-stack",
    "# Web3 & AI",
    "# Workflow Builder",
    "# Spec-driven",
  ],
  avatar: siteIdentity.avatar,
  rotatingTexts: [...siteIdentity.rotatingTexts],
  currentStatus: {
    title: "现在的我",
    items: [
      {
        label: "正在构建",
        desc: "搭建 Threetwoa Digital Garden 与更多可复用的 AI 工程工作流，让「从灵感到上线」变成可重复的流程。",
      },
      {
        label: "正在探索",
        desc: "Agentic Coding、MCP / Skills、Smart Accounts 与黑客松级全栈交付——用可验证的结果证明能力。",
      },
      {
        label: "正在学习",
        desc: "把 Claude Code / Codex / GPT 的分工固化成 Skills 与规范（CONTEXT / ADR），让协作与交付更稳。",
      },
    ],
  },
  coordinates: {
    title: "我的坐标",
    items: [
      {
        label: "我从哪里来",
        desc: `${siteIdentity.school}。从一个把功能堆出来的人，慢慢变成在意结构、证据与体验的 builder。`,
      },
      {
        label: "我正在做什么",
        desc: "把 AI 编码工具当成工程系统来用：规划、执行、审查闭环，同时交付前端视觉与后端业务。",
      },
      {
        label: "我在意什么",
        desc: "清晰、可复用、可验证。Proof, not slides——要留下能点开的 Demo、Tx Hash 与仓库痕迹。",
      },
      {
        label: "我想去哪里",
        desc: "开源更多工作流能力，参加更多 Web3 / AI 黑客松，做出真正有人用的产品。",
      },
    ],
  },
  fragments: {
    title: "Fragments of Me",
    subtitle: "自我切片",
    items: [
      {
        category: "技术",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Vue",
          "Java",
          "Spring Boot",
          "Python",
          "FastAPI",
        ],
        desc: "从前端交互到后端业务全链路交付",
        image: "",
      },
      {
        category: "工作流",
        tags: ["Claude Code", "Codex", "MCP", "Skills", "Spec-driven", "ADR"],
        desc: "把 AI 工具炼成可复用的工程资产",
        image: "",
      },
      {
        category: "Web3 & AI",
        tags: ["Ethers", "Smart Accounts", "Hackathon", "AgentCFO", "Testnet"],
        desc: "黑客松里用链上证据说话",
        image: "",
      },
      {
        category: "生活",
        tags: ["数字花园", "学习轨迹", "项目复盘", "开源", "纪录片式记录"],
        desc: "收藏不会被算法冲走的痕迹",
        image: "/assets/life_snapshot.png",
      },
    ],
  },
  beliefs: {
    title: "我相信",
    subtitle: "Some Things I Believe",
    items: [
      "我相信「Code less, Architect more.」——少堆代码，多搭可复用的结构。",
      "我相信个人站点的意义，是保存一个正在变化的 builder，而不是一张完美海报。",
      "我相信真正高级的东西，往往不是复杂，而是克制、准确和可验证。",
      "我相信证据优于口号：Demo、仓库、测试网交易，比 PPT 更诚实。",
    ],
  },
  explore: {
    title: "继续探索",
    desc: "想再多认识一点，可以去翻文章、看相册，也可以去鱼塘留一条消息——或者直接打开 GitHub。",
    links: [
      { label: "翻开随笔", href: "/writing", icon: "notes" },
      { label: "看看影像", href: "/gallery", icon: "code" },
      { label: "去鱼塘冒泡", href: "/pond", icon: "travel" },
      {
        label: "GitHub",
        href: siteIdentity.githubUrl,
        icon: "code",
        external: true,
      },
    ],
    closing: "这个花园还在生长。我也是。",
    footerSubtitle: "About threetwoa — the one behind this garden.",
  },
};
