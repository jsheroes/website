#!/usr/bin/env node
// Writes a draft speaker entry from a speaker-portal submission.
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
requireText("talk.title", talk?.title, 150);
requireText("talk.abstract", talk?.abstract, 2500);

const LINK_KEYS = ["website", "linkedin", "github", "bluesky", "twitter"];
const links = {};
for (const key of LINK_KEYS) {
  const value = speaker.links?.[key];
  if (!value) continue;
  let url;
  try {
    url = new URL(value);
  } catch {
    fail(`invalid ${key} link`);
  }
  if (url.protocol !== "https:") fail(`${key} link must be https`);
  links[key] = url.toString();
}

// ---- never overwrite someone who isn't a draft speaker ----
// The people collection is shared by speakers, hosts, organizers, volunteers…,
// so a clash can also be an organizer or a returning speaker with the same slug.
const personFile = `src/content/people/${slug}.md`;
const talkFile = `src/content/speaker-talks/${slug}.md`;
const photoFile = `src/images/people/${slug}.jpg`;
if (await exists(personFile)) {
  const current = await readFile(personFile, "utf8");
  const isDraftSpeaker =
    /^draft:\s*true\s*$/m.test(current) &&
    /^role:\s*"?speaker"?\s*$/m.test(current);
  if (!isDraftSpeaker) {
    fail(
      `${personFile} already exists and is not a draft speaker. ` +
        `Re-issue the invite with a different slug, or update the existing entry by hand.`,
    );
  }
}

// ---- write files ----
const q = (s) => JSON.stringify(s.trim()); // JSON strings are valid YAML double-quoted scalars

const front = [
  "---",
  `name: ${q(speaker.name)}`,
  `role: "speaker"`,
  `title: ${q(speaker.title)}`,
  speaker.company?.trim() && `company: ${q(speaker.company)}`,
  speaker.tag?.trim() && `tag: ${q(speaker.tag)}`,
  `photo: ${q(`../../images/people/${slug}.jpg`)}`,
  Object.keys(links).length &&
    [
      "links:",
      ...Object.entries(links).map(([k, v]) => `  ${k}: ${q(v)}`),
    ].join("\n"),
  "draft: true",
  "---",
]
  .filter(Boolean)
  .join("\n");

await writeFile(personFile, `${front}\n\n${normalizeBody(speaker.bio)}\n`);
await writeFile(
  talkFile,
  `---\ntitle: ${q(talk.title)}\n---\n\n${normalizeBody(talk.abstract)}\n`,
);

await mkdir("src/images/people", { recursive: true });
await sharp(photoPath)
  .rotate() // honour EXIF orientation
  .resize(800, 800, { fit: "cover", position: sharp.strategy.attention })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(photoFile);

if (process.env.GITHUB_OUTPUT) {
  await appendFile(
    process.env.GITHUB_OUTPUT,
    `slug=${slug}\nname=${speaker.name.replace(/[\r\n]/g, " ")}\n`,
  );
}
console.log(`Wrote ${personFile}, ${talkFile}, ${photoFile}`);

// ---- helpers ----
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
