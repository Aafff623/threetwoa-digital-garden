/**
 * Soft-nav latency + main-thread jank harness (Next.js App Router).
 *
 * Protocol per route:
 * 1. Hard reload start page with Network cache disabled (Ctrl+F5 analogue)
 * 2. Install longtask observer
 * 3. Click in-app link
 * 4. Record:
 *    - click → pathname change
 *    - click → main content marker change / first contentful quiet
 *    - longtask count / max / total in a 2.5s window after click
 *    - click → quiet (300ms with no longtask after path change)
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base = process.argv.includes("--base")
  ? process.argv[process.argv.indexOf("--base") + 1]
  : "http://localhost:3000";

const label = process.argv.includes("--label")
  ? process.argv[process.argv.indexOf("--label") + 1]
  : "baseline";

const ROUTES = [
  { name: "writing", href: "/writing", path: "/writing", click: 'header a[href="/writing"], a[href="/writing"]' },
  { name: "gallery", href: "/gallery", path: "/gallery", click: 'header a[href="/gallery"], a[href="/gallery"]' },
  { name: "about", href: "/about", path: "/about", click: 'header a[href="/about"], a[href="/about"]' },
  { name: "love", href: "/love", path: "/love", click: 'header a[href="/love"], a[href="/love"]' },
  { name: "footprints", href: "/footprints", path: "/footprints", click: 'header a[href="/footprints"], a[href="/footprints"]' },
  { name: "pond", href: "/pond", path: "/pond", click: 'header a[href="/pond"], a[href="/pond"]' },
  { name: "home-from-writing", href: "/", path: "/", from: "/writing", click: 'header a[href="/"]' },
];

async function hardReload(page, url) {
  const client = await page.context().newCDPSession(page);
  await client.send("Network.setCacheDisabled", { cacheDisabled: true });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120_000 });
  await page.reload({ waitUntil: "load", timeout: 120_000 });
  // Wait for client hydration shell
  await page.waitForSelector("main", { timeout: 60_000 });
  await page.waitForTimeout(1200);
}

async function installObservers(page) {
  await page.evaluate(() => {
    window.__navProbe = {
      longTasks: [],
      marks: [],
    };
    try {
      const po = new PerformanceObserver((list) => {
        for (const e of list.getEntries()) {
          window.__navProbe.longTasks.push({
            start: e.startTime,
            duration: e.duration,
            name: e.name,
          });
        }
      });
      po.observe({ type: "longtask", buffered: true });
      window.__navProbe.po = po;
    } catch {
      /* ignore */
    }
    performance.clearMarks?.();
    performance.clearMeasures?.();
  });
}

async function measureClick(page, selector, expectedPath) {
  const loc = page.locator(selector).first();
  await loc.waitFor({ state: "visible", timeout: 30_000 });

  await installObservers(page);

  const t0 = await page.evaluate(() => {
    const t = performance.now();
    performance.mark("nav-click");
    window.__navProbe.clickPerf = t;
    window.__navProbe.longTasks = [];
    return t;
  });

  // Click without waiting for full navigation (soft nav)
  await loc.click({ timeout: 15_000, noWaitAfter: true });

  // Pathname change
  await page.waitForFunction(
    (p) => {
      const path = location.pathname.replace(/\/$/, "") || "/";
      const want = p.replace(/\/$/, "") || "/";
      return path === want;
    },
    expectedPath,
    { timeout: 60_000 }
  );
  const tPath = await page.evaluate(() => performance.now());

  // Wait until main has some content and document is relatively stable
  await page.waitForFunction(() => {
    const main = document.querySelector("main");
    return main && (main.innerText?.trim().length || 0) > 20;
  }, null, { timeout: 60_000 });
  const tContent = await page.evaluate(() => performance.now());

  // Observe 2.5s of post-nav activity for long tasks / quiet window
  const observeUntil = Date.now() + 2500;
  let quietStart = null;
  let quietAt = null;
  while (Date.now() < observeUntil) {
    await page.waitForTimeout(50);
    const lastTaskEnd = await page.evaluate(() => {
      const tasks = window.__navProbe?.longTasks || [];
      if (!tasks.length) return 0;
      const last = tasks[tasks.length - 1];
      return last.start + last.duration;
    });
    const nowPerf = await page.evaluate(() => performance.now());
    // quiet if no longtask in last 300ms of performance timeline
    if (nowPerf - lastTaskEnd >= 300 || lastTaskEnd === 0) {
      if (quietStart == null) quietStart = nowPerf;
      if (nowPerf - quietStart >= 300 && quietAt == null) {
        quietAt = nowPerf;
        // keep sampling to end of window for total longtasks
      }
    } else {
      quietStart = null;
    }
  }

  const probe = await page.evaluate(() => {
    const click = window.__navProbe.clickPerf || 0;
    const tasks = (window.__navProbe.longTasks || []).filter((t) => t.start >= click - 16);
    const durations = tasks.map((t) => t.duration);
    return {
      longTaskCount: tasks.length,
      longTaskMaxMs: durations.length ? Math.round(Math.max(...durations)) : 0,
      longTaskTotalMs: Math.round(durations.reduce((a, b) => a + b, 0)),
      tasks: tasks.map((t) => ({
        start: Math.round(t.start - click),
        duration: Math.round(t.duration),
      })),
    };
  });

  const tQuiet = quietAt ?? (await page.evaluate(() => performance.now()));

  return {
    clickToPathMs: Math.round(tPath - t0),
    clickToContentMs: Math.round(tContent - t0),
    clickToQuietMs: Math.round(tQuiet - t0),
    ...probe,
  };
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const results = [];

  console.log(`Measuring against ${base} (${label})`);

  for (const route of ROUTES) {
    const startUrl = route.from ? `${base}${route.from}` : `${base}/`;
    console.log(`\n→ ${route.name}: hard reload ${startUrl} then click → ${route.path}`);
    try {
      await hardReload(page, startUrl);
      const metrics = await measureClick(page, route.click, route.path);
      const row = { route: route.name, href: route.href, ...metrics, finalUrl: page.url() };
      results.push(row);
      console.log(
        `  path ${row.clickToPathMs}ms | content ${row.clickToContentMs}ms | quiet ${row.clickToQuietMs}ms | longtasks ${row.longTaskCount} max ${row.longTaskMaxMs}ms total ${row.longTaskTotalMs}ms`
      );
    } catch (err) {
      console.error(`  FAIL ${route.name}:`, err.message);
      results.push({ route: route.name, href: route.href, error: String(err.message) });
    }
  }

  await browser.close();

  const outDir = path.join(process.cwd(), "docs", "output", "prd", "nav-perf");
  fs.mkdirSync(outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const summary = {
    label,
    base,
    measuredAt: new Date().toISOString(),
    protocol:
      "Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window",
    results,
  };
  const outFile = path.join(outDir, `measure-${label}-${stamp}.json`);
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2), "utf8");

  const ok = results.filter((r) => !r.error);
  const avg = (key) =>
    ok.length ? Math.round(ok.reduce((s, r) => s + (r[key] || 0), 0) / ok.length) : null;

  const md = [
    `# Nav latency — ${label}`,
    "",
    `- Base: \`${base}\``,
    `- Measured: ${summary.measuredAt}`,
    `- Protocol: ${summary.protocol}`,
    "",
    "## Averages (successful routes)",
    "",
    `| Metric | ms |`,
    `| --- | ---: |`,
    `| avg click→path | ${avg("clickToPathMs")} |`,
    `| avg click→content | ${avg("clickToContentMs")} |`,
    `| avg click→quiet | ${avg("clickToQuietMs")} |`,
    `| avg longtask total | ${avg("longTaskTotalMs")} |`,
    `| avg longtask max | ${avg("longTaskMaxMs")} |`,
    "",
    "## Per route",
    "",
    "| Route | path | content | quiet | LT count | LT max | LT total | Error |",
    "| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |",
    ...results.map((r) =>
      r.error
        ? `| ${r.route} | - | - | - | - | - | - | ${r.error.replace(/\|/g, "/")} |`
        : `| ${r.route} | ${r.clickToPathMs} | ${r.clickToContentMs} | ${r.clickToQuietMs} | ${r.longTaskCount} | ${r.longTaskMaxMs} | ${r.longTaskTotalMs} | |`
    ),
    "",
  ].join("\n");
  const mdFile = path.join(outDir, `measure-${label}-${stamp}.md`);
  fs.writeFileSync(mdFile, md, "utf8");

  // also write latest pointer
  fs.writeFileSync(path.join(outDir, `latest-${label}.json`), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(outDir, `latest-${label}.md`), md);

  console.log(`\nWrote ${outFile}`);
  console.log(`Wrote ${mdFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
