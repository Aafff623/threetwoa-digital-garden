import fs from "node:fs";

const patches = [
  {
    file: "src/app/styles/themes/swiss.css",
    needle: ".dark.style-swiss {",
    insert: `  --surface-elevated: #1C1C1C;
  --surface-muted: #161616;
  --surface-glass: rgba(28, 28, 28, 0.88);
`,
  },
  {
    file: "src/app/styles/themes/minimalist.css",
    needle: ".dark.style-minimalist {",
    insert: `  --surface-elevated: #1E293B;
  --surface-muted: #162032;
  --surface-glass: rgba(30, 41, 59, 0.88);
`,
  },
  {
    file: "src/app/styles/themes/glass.css",
    needle: ".dark.style-glass {",
    insert: `  --surface-elevated: #15121F;
  --surface-muted: #100E18;
  --surface-glass: rgba(21, 18, 31, 0.75);
`,
  },
  {
    file: "src/app/styles/themes/brutalist.css",
    needle: ".dark.style-brutalist {",
    insert: `  --surface-elevated: #141414;
  --surface-muted: #0F0F0F;
  --surface-glass: rgba(20, 20, 20, 0.9);
`,
  },
];

for (const p of patches) {
  let s = fs.readFileSync(p.file, "utf8");
  if (s.includes("--surface-elevated")) {
    console.log("skip", p.file);
    continue;
  }
  if (!s.includes(p.needle)) {
    console.log("missing needle", p.file);
    continue;
  }
  s = s.replace(p.needle, `${p.needle}\n${p.insert}`);
  fs.writeFileSync(p.file, s);
  console.log("patched", p.file);
}
