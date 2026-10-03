#!/usr/bin/env node
/**
 * Keyboard walk-through of a running page: tabs through every stop, checks
 * each has an accessible name and a visible focus indicator, then exercises
 * the menu, a profile dialog and the flip wall by keyboard only.
 *
 *   node scripts/keyboard.mjs [path=/] [siteUrl=http://localhost:4400] [width=1440]
 */
import { chromium } from "playwright";

const [path = "/", site = "http://localhost:4400", width = "1440"] =
  process.argv.slice(2);
const browser = await chromium.launch();
const page = await (
  await browser.newContext({ viewport: { width: Number(width), height: 900 } })
).newPage();
await page.goto(site + path, { waitUntil: "networkidle" });

const describe = () =>
  page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    const cs = getComputedStyle(el);
    const outline =
      cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0;
    const shadow = cs.boxShadow !== "none";
    const name = (
      el.getAttribute("aria-label") ||
      el.innerText ||
      el.textContent ||
      el.getAttribute("alt") ||
      el.querySelector("img[alt]")?.getAttribute("alt") ||
      el.getAttribute("title") ||
      ""
    )
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 40);
    const r = el.getBoundingClientRect();
    return {
      tag:
        el.tagName.toLowerCase() +
        (el.getAttribute("role") ? `[${el.getAttribute("role")}]` : ""),
      name,
      outline,
      shadow,
      visible: r.width > 0 && r.height > 0,
      inDialog: !!el.closest("dialog"),
    };
  });

const stops = [];
for (let i = 0; i < 400; i++) {
  await page.keyboard.press("Tab");
  const d = await describe();
  if (!d) break;
  if (stops.length && stops[0].key === `${d.tag}|${d.name}` && i > 3) break;
  stops.push({ ...d, key: `${d.tag}|${d.name}` });
}
console.log(`== ${stops.length} tab stops`);
console.log(
  "first 3:",
  stops
    .slice(0, 3)
    .map((s) => `${s.tag} "${s.name}"`)
    .join(" → "),
);
const problems = stops.filter((s) => !s.name || !s.visible || !s.outline);
console.log(
  problems.length
    ? "problems:"
    : "every stop has a name, is visible and shows a focus outline",
);
problems.forEach((p) =>
  console.log(
    "  ",
    p.tag,
    JSON.stringify(p.name),
    `outline=${p.outline} visible=${p.visible}`,
  ),
);
console.log(
  "dialog contents reachable while closed:",
  stops.filter((s) => s.inDialog).length,
);

// menu: open with keyboard, Escape, focus returns
await page.evaluate(() => window.scrollTo(0, 0));
await page.locator("[popovertarget=site-menu]").first().focus();
await page.keyboard.press("Enter");
const inMenu = await page.evaluate(() =>
  document.querySelector("#site-menu").matches(":popover-open"),
);
await page.keyboard.press("Tab");
const menuFocus = await page.evaluate(
  () => !!document.activeElement.closest("#site-menu"),
);
await page.keyboard.press("Escape");
const back = await page.evaluate(() =>
  document.activeElement.getAttribute("popovertarget"),
);
console.log(
  `menu: opens=${inMenu} focus moves inside=${menuFocus} Escape closes=${await page.evaluate(() => !document.querySelector("#site-menu").matches(":popover-open"))} focus returns to trigger=${back === "site-menu"}`,
);

// profile dialog
const trigger = page.locator("[data-person-dialog]").first();
await trigger.focus();
await page.keyboard.press("Enter");
const dlg = await page.evaluate(() => ({
  open: !!document.querySelector("dialog[open]"),
  focus: document.activeElement.getAttribute("aria-label"),
}));
for (let i = 0; i < 30; i++) await page.keyboard.press("Tab");
const trapped = await page.evaluate(
  () => !!document.activeElement.closest("dialog[open]"),
);
await page.keyboard.press("Escape");
const returned = await page.evaluate(() =>
  document.activeElement.hasAttribute("data-person-dialog"),
);
console.log(
  `dialog: opens=${dlg.open} initial focus="${dlg.focus}" focus stays inside=${trapped} returns to trigger=${returned}`,
);

// flip wall by keyboard
const tile = page.locator(".flip-button").nth(3);
await tile.focus();
await page.keyboard.press("Space");
console.log("flip tile via Space:", await tile.getAttribute("aria-pressed"));

// agenda tabs
await page.getByRole("tab", { name: /Day one/ }).focus();
await page.keyboard.press("ArrowDown");
console.log(
  "agenda ArrowDown selects:",
  await page.evaluate(() => document.activeElement.id),
);
await browser.close();
