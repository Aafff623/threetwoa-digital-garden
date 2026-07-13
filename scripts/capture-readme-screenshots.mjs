/**
 * README showcase screenshot capture — Playwright, 1600×900, local dev server.
 * Usage: node scripts/capture-readme-screenshots.mjs [--base http://localhost:3000]
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "assets", "images", "readme");

const base = process.argv.includes("--base")
  ? process.argv[process.argv.indexOf("--base") + 1]
  : "http://localhost:3000";

const PAGES = [
  { name: "showcase-home",            route: "/" },
  { name: "showcase-writing",         route: "/writing" },
  { name: "showcase-article-detail",  route: "/writing/tokyo-rainy-night" },
  { name: "showcase-gallery",         route: "/gallery" },
  { name: "showcase-about",           route: "/about" },
  { name: "showcase-letter",          route: "/letter" },
  { name: "showcase-archive",         route: "/archive" },
  { name: "showcase-notes",           route: "/notes" },
  { name: "showcase-now",             route: "/now" },
  { name: "showcase-pond",            route: "/pond" },
  { name: "showcase-footprints",      route: "/footprints" },
  { name: "showcase-love",            route: "/love" },
  { name: "showcase-achievements",    route: "/achievements" },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

async function capture(page, name, route) {
  const url = `${base}${route}`;
  console.log(`  → ${name}  ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(800);
  const filePath = path.join(OUT_DIR, `${name}.png`);
  await page.screenshot({ path: filePath, fullPage: false });
  const stat = fs.statSync(filePath);
  console.log(`    saved  ${(stat.size / 1024).toFixed(1)} KB`);
}

async function main() {
  console.log(`Base: ${base}\n`);

  const browser = await chromium.launch({ headless: true, args: ["--disable-dev-shm-usage"] });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 900 },
  });
  const page = await context.newPage();

  let ok = 0;
  for (const { name, route } of PAGES) {
    try {
      await capture(page, name, route);
      ok++;
    } catch (err) {
      console.error(`    FAIL ${name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\nDone: ${ok}/${PAGES.length} captured → ${OUT_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
