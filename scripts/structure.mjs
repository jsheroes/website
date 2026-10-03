#!/usr/bin/env node
/**
 * Page structure report: heading outline, landmarks, small touch targets.
 *
 *   node scripts/structure.mjs [path=/] [siteUrl=http://localhost:4400] [width=1440]
 */
import { chromium } from "playwright";

const [path = "/", site = "http://localhost:4400", width = "1440"] =
  process.argv.slice(2);
const browser = await chromium.launch();
const page = await (
  await browser.newContext({ viewport: { width: Number(width), height: 900 } })
).newPage();
await page.goto(site + path, { waitUntil: "networkidle" });

const report = await page.evaluate(() => {
  const text = (el) =>
    (el.getAttribute("aria-label") || el.textContent || "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 50);
  const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")]
    .filter((h) => !h.closest("dialog"))
    .map((h) => ({ level: Number(h.tagName[1]), text: text(h) }));
  const skips = headings
    .filter((h, i) => i > 0 && h.level > headings[i - 1].level + 1)
    .map((h) => h.text);
  const landmarks = [
    ...document.querySelectorAll(
      "header,nav,main,footer,aside,[role=region],section[aria-label],form",
    ),
  ].map(
    (el) =>
      `${el.tagName.toLowerCase()}${el.getAttribute("aria-label") ? ` "${el.getAttribute("aria-label")}"` : ""}`,
  );
  const dialogHeadings = [...document.querySelectorAll("dialog")].filter(
    (d) => d.querySelectorAll("h1").length || d.querySelectorAll("main").length,
  ).length;
  const small = [
    ...document.querySelectorAll(
      "a[href],button,[role=tab],input,select,summary",
    ),
  ]
    .filter(
      (el) =>
        !el.closest("dialog:not([open])") &&
        !el.closest("[popover]:not(:popover-open)"),
    )
    .filter((el) => getComputedStyle(el).display !== "inline")
    .map((el) => ({ el, r: el.getBoundingClientRect() }))
    .filter(({ r }) => r.width > 0 && (r.width < 24 || r.height < 24))
    .map(
      ({ el, r }) =>
        `${el.tagName.toLowerCase()} "${text(el)}" ${Math.round(r.width)}x${Math.round(r.height)}`,
    );
  const external = [...document.querySelectorAll('a[target="_blank"]')].length;
  const noRel = [...document.querySelectorAll('a[target="_blank"]')].filter(
    (a) => !/noopener|noreferrer/.test(a.rel),
  ).length;
  const imgsNoAlt = [...document.querySelectorAll("img")].filter(
    (i) => !i.hasAttribute("alt"),
  ).length;
  const dupIds = (() => {
    const seen = new Set(),
      dup = [];
    document
      .querySelectorAll("[id]")
      .forEach((e) => (seen.has(e.id) ? dup.push(e.id) : seen.add(e.id)));
    return dup;
  })();
  return {
    headings,
    skips,
    landmarks,
    dialogHeadings,
    small,
    external,
    noRel,
    imgsNoAlt,
    dupIds,
    lang: document.documentElement.lang,
    title: document.title,
  };
});

console.log("title:", report.title, "| lang:", report.lang);
console.log("== headings");
report.headings.forEach((h) =>
  console.log(`${"  ".repeat(h.level - 1)}h${h.level} ${h.text}`),
);
console.log("level skips:", report.skips.length ? report.skips : "none");
console.log("h1 count:", report.headings.filter((h) => h.level === 1).length);
console.log("== landmarks:", report.landmarks.join(", "));
console.log("main/h1 inside dialogs:", report.dialogHeadings);
console.log(
  "== targets under 24px:",
  report.small.length ? report.small : "none",
);
console.log(
  `external links: ${report.external}, without rel: ${report.noRel}; images without alt: ${report.imgsNoAlt}; duplicate ids: ${report.dupIds.length ? report.dupIds : "none"}`,
);
await browser.close();
