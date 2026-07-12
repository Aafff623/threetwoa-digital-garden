import fs from "node:fs";

const files = [
  "src/components/Navbar.tsx",
  "src/components/home/HomeHero.tsx",
  "src/components/about/AboutPageClient.tsx",
  "src/app/about/page.tsx",
  "src/app/layout.tsx",
  "src/components/about/StoryStickyStack.tsx",
  "src/components/letter/EnvelopeCard.tsx",
  "src/components/letter/LetterModal.tsx",
  "src/components/achievements/CertificateCard.tsx",
  "src/components/love/hero/LoveHero.tsx",
  "src/components/home/StatusGrid.tsx",
  "src/components/now/FocusCard.tsx",
  "src/app/letter/page.tsx",
  "src/components/love/LoveStats.tsx",
  "src/components/love/LoveQuote.tsx",
  "src/app/writing/[slug]/page.tsx",
  "src/app/pond/page.tsx",
  "src/components/ui/PasscodeGate.tsx",
  "src/data/writing.ts",
  "src/components/Footer.tsx",
];

const pairs = [
  ['getConfigValue("site.logo.text", "threetwoa")', 'getConfigValue("site.logo.text", "三两园")'],
  ['logoText || "threetwoa"', 'logoText || "三两园"'],
  ['welcomeText || "Code less, Architect more."', 'welcomeText || "少写几行，多筑一境"'],
  ['welcomeSubtitle || "数字花园主人"', 'welcomeSubtitle || "守园人"'],
  ['alt="threetwoa"', 'alt="三两园"'],
  ['["threetwoa", "architect", "builder", "hacker"]', '["三两园", "守园人", "architect", "builder"]'],
  ['let title = "threetwoa · About"', 'let title = "三两园 · 关于"'],
  ['let title = "threetwoa · Digital Garden"', 'let title = "三两园 · Sanliang Garden"'],
  ["description: \"threetwoa 的数字花园：Agentic Coding、全栈交付与可验证的工程证据。Code less, Architect more.\"", "description: \"三两园：技术随笔、项目痕迹与生活切片。少写几行，多筑一境。\""],
  ['description: "threetwoa 的数字花园：技术随笔、项目痕迹、生活切片与可运行的工程证据。Code less, Architect more."', 'description: "三两园：技术随笔、项目痕迹与生活切片。少写几行，多筑一境。"'],
  ["To: 未来的 threetwoa", "To: 未来的守园人"],
  ['<span className="italic">threetwoa</span>', '<span className="italic">守园人</span>'],
  ["threetwoa (博主)", "守园人"],
  ['value: "threetwoa garden"', 'value: "三两园"'],
  ["threetwoa · Digital Garden", "三两园 · Sanliang Garden"],
  ["陪伴档案馆 · threetwoa", "陪伴档案馆 · 三两园"],
  ["threetwoa & Sweetheart · 《数字花园》", "守园人 & Sweetheart · 《三两园》"],
  ["加油 threetwoa", "加油守园人"],
  ["Threetwoa Digital Garden", "三两园"],
  ["Digital Garden · threetwoa", "三两园 · 守园人"],
  ["数字花园新的一页", "三两园新的一页"],
  ["数字花园·摄影记录", "三两园·摄影记录"],
  ["数字花园加密区", "三两园加密区"],
  ['md:text-sm">threetwoa</span>', 'md:text-sm">三两园</span>'],
  ['dark:text-cream">threetwoa</p>', 'dark:text-cream">守园人</p>'],
  [
    "Code less, Architect more. 把 AI 工作流、全栈交付与生活切片，种进这座数字花园。",
    "少写几行，多筑一境。把工作流、交付与生活切片，种进这座三两园。",
  ],
  ["              threetwoa\n", "              三两园\n"],
  ["Digital Garden", "三两园"],
  ["items: [\"想你\", \"threetwoa\",", "items: [\"想你\", \"三两园\","],
];

for (const f of files) {
  if (!fs.existsSync(f)) {
    console.log("missing", f);
    continue;
  }
  let s = fs.readFileSync(f, "utf8");
  const orig = s;
  for (const [a, b] of pairs) s = s.split(a).join(b);
  if (s !== orig) {
    fs.writeFileSync(f, s);
    console.log("updated", f);
  } else {
    console.log("unchanged", f);
  }
}
