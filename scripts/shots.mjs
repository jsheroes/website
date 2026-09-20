#!/usr/bin/env node
/**
 * Screenshots a running page, full page plus one image per [data-section],
 * for comparing against design/v1/reference/sections.
 *
 *   pnpm dev            # in another terminal
 *   node scripts/shots.mjs [path=/] [width=1440] [outDir=.shots]
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [path = "/", width = "1440", outDir = ".shots"] = process.argv.slice(2);
const base = process.env.SITE_URL ?? "http://localhost:4321";

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: 900 },
});
await page.goto(base + path, { waitUntil: "networkidle" });
// Lazy images and reveal animations: load everything, scroll through once, then back to the top.
await page.evaluate(() =>
  document
    .querySelectorAll("img[loading=lazy]")
    .forEach((img) => (img.loading = "eager")),
);
await page.waitForLoadState("networkidle");
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(400);

const tag = `${width}`;
await page.screenshot({ path: `${outDir}/page-${tag}.png`, fullPage: true });
const sections = await page.locator("[data-section]").all();
for (const section of sections) {
  const name = await section.getAttribute("data-section");
  await section.screenshot({ path: `${outDir}/${name}-${tag}.png` });
}
console.log(`saved page + ${sections.length} sections to ${outDir}`);
await browser.close();
