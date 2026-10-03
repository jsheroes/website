#!/usr/bin/env node
/**
 * Renders the social sharing cards into public/img/social/og, one per page.
 * Crawls the running dev server from the homepage, reads each page's header
 * (eyebrow, title, scribbled word, motif) and screenshots the dev-only /og
 * card with them, so a card always matches its page.
 *
 *   pnpm dev            # in another terminal
 *   node scripts/og.mjs [path ...]    # all pages, or just the ones given
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.env.SITE_URL ?? "http://localhost:4321";
const outDir = "public/img/social/og";
/** Same rule as BaseLayout: "/" is "home", "/blog/foo" is "blog-foo". */
const slug = (path) =>
  path.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  reducedMotion: "reduce",
});

const only = process.argv.slice(2);
const queue = only.length ? [...only] : ["/"];
const seen = new Set(queue);

while (queue.length) {
  const path = queue.shift();
  const response = await page.goto(base + path, { waitUntil: "networkidle" });
  if (!response?.ok()) {
    console.warn(`skip ${path} (${response?.status()})`);
    continue;
  }

  if (!only.length) {
    const links = await page.$$eval("a[href^='/']", (as) =>
      as.map((a) => new URL(a.href).pathname),
    );
    for (const link of links) {
      if (!seen.has(link) && !/\.[a-z0-9]+$/i.test(link)) {
        seen.add(link);
        queue.push(link);
      }
    }
  }

  const header = await page
    .locator("[data-og-title]")
    .first()
    .evaluate((el) => ({ ...el.dataset }))
    .catch(() => null);
  const params = new URLSearchParams();
  if (path === "/") params.set("page", "home");
  else if (header) {
    for (const key of ["title", "eyebrow", "highlight", "motif"]) {
      const value = header[`og${key[0].toUpperCase()}${key.slice(1)}`];
      if (value) params.set(key, value);
    }
  } else {
    console.warn(`skip ${path} (no page header)`);
    continue;
  }

  await page.goto(`${base}/og?${params}`, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "astro-dev-toolbar { display: none }" });
  await page.evaluate(() => document.fonts.ready);
  const file = `${outDir}/${slug(path)}.png`;
  await page.locator("[data-og-card]").screenshot({ path: file });
  console.log(`${path} -> ${file}`);
}

await browser.close();
