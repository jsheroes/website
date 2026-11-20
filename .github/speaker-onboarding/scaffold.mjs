#!/usr/bin/env node
// Writes a draft speaker entry from a speaker-portal submission, or updates
// the entry of a speaker who is already published.
// Usage: node .github/speaker-onboarding/scaffold.mjs <submission.json> <photo-file>
// Deterministic on purpose: the AI step afterwards only polishes the text.
import {
  access,
  appendFile,
  mkdir,
  readFile,
  writeFile,
} from "node:fs/promises";
import sharp from "sharp";

const [submissionPath, photoPath] = process.argv.slice(2);
if (!submissionPath || !photoPath)
  fail("usage: scaffold.mjs <submission.json> <photo>");

const sub = JSON.parse(await readFile(submissionPath, "utf8"));
const { slug, speaker, talk } = sub;

// ---- validation (the portal validates too; this is the safety net) ----
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug ?? "") || slug.length > 60)
  fail(`invalid slug: ${slug}`);
requireText("speaker.name", speaker?.name, 80);
requireText("speaker.title", speaker?.title, 120);
optionalText("speaker.company", speaker?.company, 80);
optionalText("speaker.tag", speaker?.tag, 40);
requireText("speaker.bio", speaker?.bio, 1500);
// The portal leaves the talk out until the speaker marks it as ready to publish.
if (talk != null) {
  requireText("talk.title", talk.title, 150);
  requireText("talk.abstract", talk.abstract, 2500);
}

// A list of URLs. Object.values also reads the older shape, keyed by platform.
const links = [];
for (const value of Object.values(speaker.links ?? {})) {
  if (!value) continue;
  let url;
  try {
    url = new URL(value);
  } catch {
    fail(`invalid link: ${value}`);
  }
  if (url.protocol !== "https:") fail(`link must be https: ${value}`);
  links.push(url.toString());
}

// ---- create a draft, or update a published speaker ----
// The people collection is shared by speakers, hosts, organizers, volunteers…,
// so a clash can also be an organizer or a host with the same slug: never touch those.
// A published speaker (role "speaker", no draft flag) gets an update instead: only the
// fields the portal owns are rewritten, in place; order, portrait and the rest stay.
const personFile = `src/content/people/${slug}.md`;
const talkFile = `src/content/speaker-talks/${slug}.md`;
const photoFile = `src/images/people/${slug}.jpg`;
let mode = "create";
let current = null;
if (await exists(personFile)) {
  current = await readFile(personFile, "utf8");
  const isSpeaker = /^role:\s*"?speaker"?\s*$/m.test(current);
  const isDraft = /^draft:\s*true\s*$/m.test(current);
  if (!isSpeaker) {
    fail(
      `${personFile} already exists and is not a speaker. ` +
        `Re-issue the invite with a different slug, or update the existing entry by hand.`,
    );
  }
  if (!isDraft) mode = "update";
}

// ---- write files ----
const q = (s) => JSON.stringify(s.trim()); // JSON strings are valid YAML double-quoted scalars

// Frontmatter blocks the portal owns, in the order a new entry gets them.
const managed = [
  ["name", `name: ${q(speaker.name)}`],
  ["role", `role: "speaker"`],
  ["title", `title: ${q(speaker.title)}`],
  ["company", speaker.company?.trim() && `company: ${q(speaker.company)}`],
  ["tag", speaker.tag?.trim() && `tag: ${q(speaker.tag)}`],
  ["photo", `photo: ${q(`../../images/people/${slug}.jpg`)}`],
  [
    "links",
    links.length &&
      ["links:", ...links.map((link) => `  - ${q(link)}`)].join("\n"),
  ],
];

let front;
if (mode === "update") {
  front = updateFrontmatter(current, managed);
} else {
  front = [
    "---",
    ...managed.map(([, block]) => block),
    "draft: true",
    "---",
  ]
    .filter(Boolean)
    .join("\n");
}

await writeFile(personFile, `${front}\n\n${normalizeBody(speaker.bio)}\n`);
if (talk) {
  await writeFile(
    talkFile,
    `---\ntitle: ${q(talk.title)}\n---\n\n${normalizeBody(talk.abstract)}\n`,
  );
}

await mkdir("src/images/people", { recursive: true });
await sharp(photoPath)
  .rotate() // honour EXIF orientation
  .resize(800, 800, { fit: "cover", position: sharp.strategy.attention })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(photoFile);

if (process.env.GITHUB_OUTPUT) {
  await appendFile(
    process.env.GITHUB_OUTPUT,
    `slug=${slug}\nname=${speaker.name.replace(/[\r\n]/g, " ")}\nhas_talk=${!!talk}\nmode=${mode}\n`,
  );
}
console.log(`${mode === "update" ? "Updated" : "Wrote"} ${[personFile, talk && talkFile, photoFile].filter(Boolean).join(", ")}`);

// ---- helpers ----
// Rewrites the managed top-level keys of an existing entry where they are, adds
// missing ones after `photo`, drops ones the submission left empty, and keeps
// every other block (order, portrait, …) verbatim.
function updateFrontmatter(text, managedBlocks) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!match) fail(`${personFile} has no frontmatter`);
  const blocks = [];
  for (const line of match[1].split(/\r?\n/)) {
    const key = /^([A-Za-z_][\w-]*):/.exec(line)?.[1];
    if (key || !blocks.length) blocks.push({ key, lines: [line] });
    else blocks.at(-1).lines.push(line); // list items, folded text, …
  }
  const replacements = new Map(managedBlocks);
  const out = [];
  const seen = new Set();
  for (const block of blocks) {
    if (block.key && replacements.has(block.key)) {
      seen.add(block.key);
      const next = replacements.get(block.key);
      if (next) out.push(next);
    } else {
      out.push(block.lines.join("\n"));
    }
  }
  const missing = managedBlocks
    .filter(([key, value]) => value && !seen.has(key))
    .map(([, value]) => value);
  if (missing.length) {
    const photoAt = out.findIndex((block) => block.startsWith("photo:"));
    out.splice(photoAt === -1 ? out.length : photoAt + 1, 0, ...missing);
  }
  return ["---", ...out, "---"].join("\n");
}
function normalizeBody(text) {
  return text
    .replace(/\r\n?/g, "\n")
    .replace(/<[^>]*>/g, "") // no raw HTML in content
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
function requireText(name, value, max) {
  if (typeof value !== "string" || !value.trim()) fail(`${name} is required`);
  optionalText(name, value, max);
}
function optionalText(name, value, max) {
  if (value == null || value === "") return;
  if (typeof value !== "string" || value.length > max)
    fail(`${name} must be a string of at most ${max} chars`);
}
async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
function fail(message) {
  console.error(`scaffold: ${message}`);
  process.exit(1);
}
