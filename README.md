# JSHeroes website

The [JSHeroes](https://jsheroes.io) conference site: [Astro](https://astro.build/) 7, Tailwind CSS 4, content in markdown and content collections. Fully static, no client framework.

```bash
pnpm install
pnpm dev          # http://localhost:4321, plus a /styleguide route in dev only
```

Requires Node 22.12+ (`.nvmrc`) and pnpm 10 (pinned in `package.json`).

| Script                              | What it does                             |
| ----------------------------------- | ---------------------------------------- |
| `pnpm build` / `pnpm preview`       | Production build and local preview       |
| `pnpm check`                        | `astro check`, TypeScript strict         |
| `pnpm format` / `pnpm format:check` | Prettier (Astro + Tailwind class sorter) |

CI (`.github/workflows/ci.yml`) runs format check, `astro check` and build on every pull request.

## Every year

Edit these, in this order:

1. [`src/data/event.ts`](src/data/event.ts): year, edition, dates, venue, ticket link. Markdown pages read it through `{{event.year}}`, `{{event.dates}}`, `{{event.venue}}` and friends.
2. [`src/data/flags.ts`](src/data/flags.ts): `CFP_OPEN`, `WAITLIST_OPEN`, `TICKETS_ON_SALE`. The call to action in the nav, hero and footer follows them.
3. [`src/data/editions.ts`](src/data/editions.ts): add last edition (motif, tile colour, group photo in `public/img/gallery`).
4. People, talks and agenda: [`src/content/people`](src/content/people), [`src/content/speaker-talks`](src/content/speaker-talks), [`src/data/agenda.ts`](src/data/agenda.ts), sponsors in [`src/data/sponsors.ts`](src/data/sponsors.ts).
5. Homepage wording: [`src/data/home.ts`](src/data/home.ts), one file for all section copy.

## Structure

```
src/
  assets/         base.css (tokens, type, buttons), motion.css, motifs/ (pixel SVGs), bears/
  components/
    ui/           design-system primitives: Section, Button, Motif, Frieze, Bear, PageHeader...
    home/         one component per homepage section
    charts/       server-rendered bar and donut charts (transparency page)
  content/        markdown collections: people, speaker-talks, blog, tags
  data/           typed data: event, flags, editions, agenda, sponsors, communities...
  layouts/        BaseLayout (SEO, shell), PageLayout (interior header), MarkdownLayout, Blog*
  pages/          routes; .md pages use MarkdownLayout, .astro pages compose sections
  plugins/        remark-event: {{event.*}} tokens in markdown
  scripts/        motion.ts: scroll reveals
  dev/            styleguide, injected only under `pnpm dev`
design/           design handoffs (v1) kept for reference
scripts/          audit tooling, see below
```

### Content

- **People** are one collection with a `role` (`speaker`, `host`, `organizer`, `volunteer`, `ambassador`, `guest-writer`). Photos are typed image fields next to the markdown (`src/images/people`). Speakers can have a greyscale `portrait` cutout for the plate; `scripts/cutouts.py` makes them.
- **Blog posts** reference their author (`author: person-id`) and tags; add `.md` to `src/content/blog`.
- **Pages** in `src/pages/*.md` set `layout: ../layouts/MarkdownLayout.astro` and can add `eyebrow`, `intro`, `highlight` (the word scribbled under the title) and `bear`.

### Styling

Tailwind only, plus a small set of component classes in `base.css` (`.btn`, `.h1-hero`, `.h2-section`, `.lede`, `.eyebrow`, `.prose`). Colour tokens live in `@theme` in `base.css`: `black-pearl` is the ink colour, `paper`, `band`, `soft`, `muted-strong` and `rule` are the neutrals, `dodger-blue`, `accent-pink`, `accent-orange`, `accent-green` the brand colours. Motifs are pixel SVGs rendered at a whole number of pixels per cell (`<Motif name="m4_brand" cell={8} />`).

### Motion

All in [`src/assets/motion.css`](src/assets/motion.css): `data-motion="spin|sway|bob|twinkle"` on motifs, `data-reveal="up|fade|pixel|stitch|pop"` for scroll reveals. Everything is behind `prefers-reduced-motion` and `scripting: enabled`, with a CSS failsafe that shows content if the script never runs. See the Motion section of `/styleguide`.

## Audit tooling

Scripts in `scripts/` check a running site (use a production build):

```bash
pnpm build && pnpm preview --port 4400
node scripts/audit.mjs /            # overflow at 320-1920px + axe at 390 and 1440
node scripts/keyboard.mjs /         # tab order, focus rings, menu, dialog, flip tiles
node scripts/structure.mjs /        # headings, landmarks, target sizes
node scripts/motion.mjs /           # nothing moves under prefers-reduced-motion
node scripts/shots.mjs / 1440       # screenshots per [data-section] into .shots/
```

They use Playwright (`pnpm exec playwright install chromium` once).
