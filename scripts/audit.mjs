#!/usr/bin/env node
/**
 * Responsive and accessibility audit of a running site (use a production
 * preview for real numbers):
 *
 *   pnpm build && pnpm preview --port 4400
 *   node scripts/audit.mjs [path=/] [siteUrl=http://localhost:4400]
 *
 * Reports horizontal overflow at common widths and axe violations at a
 * desktop and a phone width.
 */
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const [path = "/", site = "http://localhost:4400"] = process.argv.slice(2);
const widths = [320, 360, 390, 768, 1024, 1280, 1440, 1920];
const browser = await chromium.launch();

async function load(width) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
  });
  const page = await context.newPage();
  await page.goto(site + path, { waitUntil: "networkidle" });
  await page.evaluate(() =>
    document
      .querySelectorAll("img[loading=lazy]")
      .forEach((i) => (i.loading = "eager")),
  );
  await page.waitForLoadState("networkidle");
  return page;
}

console.log("== overflow");
for (const width of widths) {
  const page = await load(width);
  const result = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const wide = [...document.querySelectorAll("body *")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.right <= vw + 1) return false;
        // ignore anything clipped by an overflow-hidden ancestor
        for (
          let p = el.parentElement;
          p && p !== document.body;
          p = p.parentElement
        ) {
          const o = getComputedStyle(p).overflowX;
          if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll")
            return false;
        }
        return getComputedStyle(el).position !== "fixed";
      })
      .slice(0, 5)
      .map(
        (el) =>
          `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)} right=${Math.round(el.getBoundingClientRect().right)}`,
      );
    return { scrollWidth: document.documentElement.scrollWidth, vw, wide };
  });
  const ok = result.scrollWidth <= result.vw;
  console.log(
    `${width}px  ${ok ? "ok" : "OVERFLOW"}  scroll=${result.scrollWidth}`,
    result.wide.length ? result.wide : "",
  );
  await page.close();
}

for (const width of [1440, 390]) {
  const page = await load(width);
  const { violations } = await new AxeBuilder({ page })
    .withTags([
      "wcag2a",
      "wcag2aa",
      "wcag21a",
      "wcag21aa",
      "wcag22aa",
      "best-practice",
    ])
    .analyze();
  console.log(`== axe @${width}: ${violations.length} rule(s) violated`);
  for (const v of violations) {
    console.log(`- [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length})`);
    for (const n of v.nodes.slice(0, 3))
      console.log(
        `    ${n.target.join(" ")}  ${n.failureSummary?.split("\n")[1] ?? ""}`,
      );
  }
  await page.close();
}
await browser.close();
