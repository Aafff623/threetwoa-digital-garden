/**
 * Bug reproduction: Navbar hover dropdown disappears before reaching sub-items.
 * This script confirms the dead-zone gap between the trigger button and the dropdown panel.
 */
import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

  // domcontentloaded: dev 模式下 HMR websocket 长连，networkidle 永不触发会 30s 超时。
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);

  // Find the Words category button
  const wordsBtn = page.locator('button').filter({ hasText: "Words" }).first();
  const box = await wordsBtn.boundingBox();
  console.log("1. WORDS button boundingBox:", JSON.stringify(box));

  // Hover the button to open dropdown
  await wordsBtn.hover();
  await page.waitForTimeout(500);

  // Check dropdown after initial hover
  const dropdown = page.locator(".group\\/nav .absolute.top-full").first();
  let ddBox = await dropdown.boundingBox();
  console.log("2. Dropdown boundingBox after hover:", JSON.stringify(ddBox));

  if (ddBox && box) {
    const gap = ddBox.y - (box.y + box.height);
    console.log(`   GAP between button bottom and dropdown top: ${gap.toFixed(1)}px`);
  }

  // Check opacity
  let opacity = await dropdown.evaluate((el) => window.getComputedStyle(el).opacity);
  console.log(`   Dropdown opacity: ${opacity}`);

  // Now simulate mouse moving from button downward into the dropdown
  // by stepping through the gap slowly
  const firstItem = page.locator('a[href="/writing"]').first();
  const itemBox = await firstItem.boundingBox();
  console.log("3. 'Writing' sub-item boundingBox:", JSON.stringify(itemBox));

  if (itemBox && box) {
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height - 2;
    const endX = itemBox.x + itemBox.width / 2;
    const endY = itemBox.y + itemBox.height / 2;

    console.log(`   Moving mouse from (${startX.toFixed(0)}, ${startY.toFixed(0)}) to (${endX.toFixed(0)}, ${endY.toFixed(0)})`);

    const steps = 10;
    for (let i = 1; i <= steps; i++) {
      const x = startX + (endX - startX) * (i / steps);
      const y = startY + (endY - startY) * (i / steps);
      await page.mouse.move(x, y);
      await page.waitForTimeout(60);
    }
    await page.waitForTimeout(500);

    // Re-check dropdown state after reaching sub-item area
    ddBox = await dropdown.boundingBox();
    opacity = await dropdown.evaluate((el) => window.getComputedStyle(el).opacity);
    console.log("4. After mouse moved to sub-item area:");
    console.log(`   Dropdown boundingBox: ${JSON.stringify(ddBox)}`);
    console.log(`   Dropdown opacity: ${opacity}`);
  }

  await page.screenshot({ path: "bug-repro-navbar.png", fullPage: false });
  console.log("5. Screenshot saved → bug-repro-navbar.png");

  await browser.close();

  // Final verdict
  if (opacity === "0") {
    console.log("\nVERDICT: BUG CONFIRMED — dropdown vanishes before mouse can reach sub-items.");
    console.log("ROOT CAUSE: 8px margin gap between button and dropdown creates a dead zone.");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
