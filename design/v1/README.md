# JSHeroes 10 — redesign handoff

This folder is a design handoff for the 2027 (tenth anniversary, edition nine) redesign of jsheroes.io. It was prepared from a design canvas built in a Claude session. Read this file first, then `reference/`.

Nothing here is committed. Start a `redesign-2027` branch off `main` and move `redesign/` into it (or keep it as a sibling folder of the repo, your call).

## What to build

A new homepage, then the same look applied to the interior pages (`MarkdownLayout`, `BlogLayout`, `BlogListLayout`, `sponsor`, `why-attend`, `hall-of-fame`, `media`, `meetups`, `partners`, `transparency`, `404`) and the blog. Astro app, content driven by markdown and collections. The UI can be rewritten entirely. Do not treat existing components, styles or sections as authoritative: audit and reset (see "Codebase reset").

Look: neutral paper background, navy ink, splashes of colour, traditional Romanian pixel motifs (kilim / embroidery style), the two Ecma bear mascots in folk costume. Sora typeface. Hard offset shadows on buttons, hand-drawn coral underline on a key word per heading.

## Reference material (`reference/`)

- `sections/01-hero.png` … `10-footer.png`: one screenshot per homepage section at 1440px wide. Fonts in these shots are a fallback (DejaVu Sans), so real Sora will be slightly narrower. Treat spacing as approximate, hierarchy and composition as exact.
- `homepage-1-of-2.png`, `homepage-2-of-2.png`: full-page shots.
- `Main.dc.html` and `Home2.dc.html`: the design sources. They are plain HTML with inline styles and `{{holes}}` for the interactive bits, so they are the most exact reference for sizes, colours, gaps and copy. Image `src` values point to a blob store that will not resolve; use the files in `assets/` instead (names match, see "Assets").

## Tokens

Keep the existing tailwind colour names where they exist.

| Role | Value | Existing tailwind name |
|---|---|---|
| Ink (text, dark sections) | `#001C2B` | `black-pearl` |
| Blue | `#0098FF` | `dodger-blue` |
| Coral | `#FF6078` | `accent-pink` |
| Yellow | `#FFCC67` | `accent-orange` |
| Mint | `#65D3BB` (design used `#65D4BB`, keep the repo value) | `accent-green` |
| Paper (page background) | `#FBFAF7` | new |
| Band (neutral section) | `#F1EFE9` | new |
| Soft text | `#33495A` | new |
| Muted text | `#6B7C88` (on paper, use `#4A5B68` for small text to keep 4.5:1) | new |
| Rule | `#CFD6DB` | new |
| Blue on dark (motifs only) | `#1AA6FF` | new |
| Photo-tint fills | `#CDEAFF` `#FFD9DF` `#FFF0CC` `#D3F1EA` | new (used behind initials until photos exist, and as portrait plate tints if wanted) |

The purple gradient dark sections (`brand-darknavy` to `brand-purple`) are gone. Dark sections are flat ink `#001C2B`.

Type: Sora 400–800 (self-host via `@fontsource-variable/sora` or load weights 400/500/600/700/800). Scale used at 1440:

- H1 84px / 0.98 / 800 / -0.035em (hero only)
- H2 52–60px / 1.06 / 800 / -0.03em
- Eyebrow 13px / 700 / +0.16em / uppercase, preceded by a 15px coral pixel marker (`pd_coral.svg`)
- Body 18–19px / 1.6, soft text colour
- Small 14–15px; buttons 16px / 700

Layout: 1440 design width, 1160 content width (140px side padding). Design mobile-first in code; only desktop is designed so far (see "Not designed yet").

Components:

- Primary button: ink background, white text, padding 18/30, hard shadow `6px 6px 0 #0098FF`. In the nav: padding 13/20, shadow `4px 4px 0` coral. On dark sections: yellow background, ink text, blue shadow.
- Ghost button: 2px ink border, ink text, padding 16/28.
- Scribble: a hand-drawn coral SVG stroke under one word of a heading (see `scribble()` shape in the source: absolutely positioned SVG under the word, 5–6px stroke, round caps).
- Speaker plate: two merged diamonds, `clip-path: polygon(0 42%,25% 6%,50% 34%,75% 6%,100% 42%,100% 60%,75% 100%,50% 72%,25% 100%,0 60%)`. The greyscale cutout portrait overlaps the top of the plate; name centred in the plate, company in caps and talk title below.

## Sections (homepage, top to bottom)

Heights are at 1440 wide, for orientation only.

1. **Hero** (900). Eyebrow "Ten years · edition nine", H1 "Ten years of all things JavaScript." with scribble under "JavaScript.", intro paragraph, CTAs "Join the waitlist" and "Meet the speakers". Right side: large pixel star (`m4_brand`) surrounded by small motifs. Bottom band in ink with four facts (When, Where, Format, Tickets) and a night frieze on its bottom edge. Checker stair corners top left and right (`st_brand`). No bear here.
2. **Speakers** (1290). "Meet the heroes", 4×2 grid of cutout portraits on coloured plates (blue, coral, yellow, mint cycling), talk titles under each. Footer row "See the full lineup". Shows 8 of 16 as sample; the social card shows all 16 in 4×4, worth deciding.
3. **Hosts** (290). Neutral band, motif strip on top, MCs (Sara Vieira, Tejas Kumar) and sketch artist (Oana Zăuleț).
4. **Flip wall** (1110). Ink background, kilim "10" numeral, "One motif for every edition.", 4×2 grid of tiles, one motif per past edition. Each tile flips (3D, 0.7s) to reveal the year, venue and the group photo in front of the stage. "Reveal all" toggle. Footer row "Edition nine is next. Be in the 2027 photo." plus CTA. Zigzag frieze at the bottom. Tile size 320×240, gap 8.
5. **Agenda** (~1140). Left column: eyebrow, "Two days, one stage.", intro, Day 1 / Day 2 tab buttons. Right column: rows (time, title, speaker), breaks in muted grey, alternative-stage sessions on a yellow row with a tag. Male bear waves at the bottom left with a "Pick a talk!" bubble, standing on a motif strip.
6. **Venue** (700). Grand Hotel Italia, address, "Open in Google Maps". Two overlapping venue photos (use `src/images/event/venue*.jpg`). Diamond frieze at the bottom.
7. **Community** (800). "By the community, for the community." Partner-community chips and event-partner chips (dark). Female bear stands bottom left on a motif strip with a "Bine ai venit!" bubble.
8. **Sponsors** (800). Tier rows (Gold, Silver, Bronze) with the real logos (`src/data/sponsors.ts`). The design shows names as type because logos were unavailable; use the logos, contained in white boxes.
9. **Team** (940). Ten organizers in a 5×2 grid, then volunteers and brand ambassadors as name lists. Photos exist in `src/images/organizers`.
10. **Footer** (700). Ink, "See you in Transylvania.", dates, waitlist email field, link columns, both bears on the frieze in front of a big night-blue star.

Copy is in the reference sources. Where the source says "sample", the 2026 data is standing in for 2027.

## Data mapping to the existing repo

- Speakers: `src/content/speakers` (`order`, `imgName`) plus `speaker-talks`. Add an optional `portrait` field to the schema for the cutout image; fall back to a tinted initials tile when missing.
- Agenda: `src/data/agenda.ts`. Alternative-stage sessions are currently `placeholder` items; give them an explicit `stage: "alternative"`.
- Sponsors, communities, partners: `src/data/sponsors.ts`, `communities.ts`, `partners.ts`.
- Team: `src/content/organizers`, `ambassadors`, `volunteers`; hosts and sketch artist from `support`.
- New `src/data/event.ts`: year, edition number, dates, venue name and address, maps link, tagline. Replace every hardcoded "2026", dates and venue string in markdown sections, `BaseLayout` (title, description, og image), `news.astro`, `speakers.astro`, `theme.md`, `event.md`.
- New `src/data/editions.ts` for the flip wall: `{ n, year, venue, motif, photo }` for eight editions.
- Flags (same idea as the existing `CFP_OPEN`): `LINEUP_ANNOUNCED`, `WAITLIST_OPEN`, `TICKETS_ON_SALE`. Design covers the pre-lineup state (waitlist CTA, speakers section as sample or hidden). The full-lineup state uses the same components.

Flip wall years used in the design: 2017, 2018, 2019, 2022, 2023, 2024, 2025, 2026. Those are inferred, confirm with the team. Group photos already in `public/img/gallery`: 2018, 2019, 2022, 2023, 2024. Missing: 2017 (if that is an edition), 2025, 2026.

## Assets (`assets/`)

- `motifs/`: pixel motifs as crisp SVGs (`shape-rendering="crispEdges"`, one unit = one pixel cell). Naming: `m0`–`m14` (`_brand` for light backgrounds, `_night` for dark), friezes `bd*` (diamond), `bz*` (zigzag), stair corner `st_*`, numeral `ten_*`. Simple families rebuilt from the motif sheet: `dr_*` (diamond ring), `dx_*` (solid cross), `pr_*` (pixel ring), `pd_*` (pixel plus), and `strip_brand` / `strip_night` (a row of them, used as ground and dividers).
- Render motifs at an integer number of CSS pixels per cell so edges stay sharp (a 23-cell motif at 8px per cell is 184px). Friezes: the source files are 357 cells wide, sized for 1440. For production, make one tileable repeat unit and tile it with `background-repeat: repeat-x` so it fits any width.
- Motion, second step: slight rotation or drift on the motifs (not the bears, which stay static), and hover states. CSS transforms only, wrapped in `prefers-reduced-motion`.
- `speakers/`: eight greyscale transparent-PNG cutouts (520px wide), made with a human-segmentation model (`cutout.py`, needs `u2net_human_seg.onnx` from the rembg releases). The script crops around the head and normalises contrast. It needs a manual pass for a few images (arms and hair edges) and must be run for the other eight 2026 speakers. Keep originals; ship optimised WebP or AVIF plus PNG fallback.
- `bears/`: `bear-male.svg` and `bear-female.svg`, vectors from the illustrator (`urs-popular-hello`, `dna-urs-hello`). The male bear's ground-shadow circle is removed and its viewBox cropped to the artwork; the female bear is used as delivered. The bears stay static (no ambient animation); only the simple motifs animate. Both were sized against the old rasters, so `ui/Bear.astro` scales the given width slightly to keep their height.

## Behaviour to implement

- Flip tile: real `<button>` with `aria-pressed`, keyboard operable, 3D flip on `transform`, `backface-visibility: hidden`. Two tiles start flipped in the design (2nd and 7th); in production start all unflipped or reveal the latest. "Reveal all / Hide all" toggle. Must re-initialise on `astro:page-load` (the site uses View Transitions). Reduced motion: cross-fade instead of flip. Without JS the year and photo should still be reachable.
- Agenda day tabs: progressive enhancement, ideally a real tablist; without JS both days are visible stacked.
- Speaker and person profiles: replace the inline `onclick="window[...]"` modal wiring with a single delegated handler (or `popover` / `<dialog>` with a proper invoker) and fix the landmark and heading issues in `Modal.astro`.

## Not designed yet (decide in code, bring to the design session when stuck)

- Every mobile and tablet layout. Suggested: flip wall 2×4 then 1×8, speakers 2 across then 1, agenda tabs full width, hero star behind or below the text, bears scaled down.
- Hover, focus and pressed states beyond the button shadows. Focus rings must be visible on paper and ink.
- Interior pages and blog: reuse tokens, eyebrow, buttons, strip dividers and the bears; article measure about 65ch.
- The navigation drawer and the mobile menu.
- All 16 speakers.

## Codebase reset (do this on the branch before or with the first commits)

Findings from the audit; nothing is grandfathered.

1. `src/pages/sponsor.astro` has `<h1>…</h2>`: fix the mismatched tags.
2. Skip link: it is `hidden` below the `sm` breakpoint and 0×0 until focus; make it a real first-focusable link at every width.
3. `Modal.astro`: a `<main>` inside each `<dialog>` (many main landmarks), `div role="heading"` without a level, close button icon repeats its label in `alt`. Also `aria-hidden="true"` on a nav that contains focusable controls in `Navbar.astro`.
4. Images: add `alt` to every `<img>` (agenda, banner, blog layouts, `why-attend`, etc.); decorative ones get `alt=""`. Only the first screen loads eagerly; the speaker grid must be lazy. Review `getImage()` (it globs all of `src/images`).
5. Hardcoded years, dates, venue and og image in about 15 files: move to `src/data/event.ts`.
6. SEO: add `@astrojs/sitemap`, canonical URLs, per-page og images.
7. Styling: Tailwind only, plus a small set of component classes in `base.css`. Update the README (it still describes Astro 2 and scoped CSS). Remove unused dependencies after checking (`chart.js` is only used by `transparency`, `astro-tooltips` only in `BaseLayout`).
8. Add TypeScript and `@astrojs/check` (tsconfig is strict but nothing checks it), `npm run check`, prettier check, and a CI workflow that runs build and check on pull requests.
9. Emoji in headings (`news.astro`) replaced with the pixel marker.
10. Repo hygiene: turn the `snap-*` branches into tags; prune stale branches later; remove `.codesandbox` if unused.

Keep Astro 4 and Tailwind 3 for the prototype. Upgrade (Astro 5, Tailwind 4) as a separate reviewed step once the redesign renders.

## Suggested order of work

1. Branch, tokens (`tailwind.config.mjs`), fonts, `event.ts` and flags, layout shell (nav, footer, section wrapper).
2. Motif assets and a small `<Motif>` and `<Frieze>` component pair.
3. Hero, speakers, flip wall (they carry the look). Screenshot each at 1440 and compare with `reference/sections/`.
4. Agenda, venue, community, sponsors, team, footer, bears.
5. Responsive pass, focus states, reduced motion, Lighthouse and axe checks.
6. Interior pages and blog restyle through the layouts.
7. Audit fixes that were not done along the way, CI.

Definition of done for the prototype: `npm run build` and `npm run check` pass, homepage matches the reference at 1440 and is usable at 390, keyboard-only walk-through works, no hardcoded year strings remain.

## Open questions for the team

- Keep current URLs? (Assumed yes, no redirects needed.)
- Launch in pre-lineup state (waitlist) and switch later? (Designed for it.)
- Real dates for 2027 (the design assumes 27–28 May 2027) and the real list of past editions.
- Sora, or a different face? Sora was kept for continuity.
- Sourcing the missing photos.
