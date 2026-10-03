#!/usr/bin/env node
/**
 * Lists elements that still transition or animate movement (transform, scale,
 * translate, rotate) under prefers-reduced-motion: reduce, plus smooth scroll.
 *
 *   node scripts/motion.mjs [path=/] [siteUrl=http://localhost:4400]
 */
import { chromium } from "playwright";

const [path = "/", site = "http://localhost:4400"] = process.argv.slice(2);
const browser = await chromium.launch();
for (const reducedMotion of ["no-preference", "reduce"]) {
  const page = await (
    await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion,
    })
  ).newPage();
  await page.goto(site + path, { waitUntil: "networkidle" });
  const found = await page.evaluate(() => {
    const moves = /transform|translate|scale|rotate|all/;
    const out = new Map();
    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      const durations = cs.transitionDuration.split(",").map(parseFloat);
      const props = cs.transitionProperty.split(",").map((p) => p.trim());
      const moving = props.some(
        (p, i) =>
          moves.test(p) && (durations[i % durations.length] ?? 0) > 0.01,
      );
      const animated =
        cs.animationName !== "none" && parseFloat(cs.animationDuration) > 0.01;
      if (moving || animated) {
        const key = `${el.tagName.toLowerCase()}.${String(el.className).split(" ").slice(0, 4).join(".")}`;
        out.set(key, (out.get(key) ?? 0) + 1);
      }
    }
    return {
      smooth: getComputedStyle(document.documentElement).scrollBehavior,
      list: [...out].map(([k, n]) => `${k} x${n}`),
    };
  });
  console.log(
    `== ${reducedMotion}: scroll-behavior=${found.smooth}, ${found.list.length} moving element kinds`,
  );
  if (reducedMotion === "reduce")
    found.list.forEach((l) => console.log("  ", l));
  await page.close();
}
await browser.close();
