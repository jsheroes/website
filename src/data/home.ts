/**
 * Copy for the homepage sections. Facts (year, dates, venue, edition) come from
 * event.ts; everything editorial lives here so a wording pass is a one-file change.
 */
import { editions } from "./editions";
import { event } from "./event";
import { TICKETS_ON_SALE, WAITLIST_OPEN } from "./flags";

const words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];
export const numberWord = (n: number) => words[n] ?? String(n);
const capitalise = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const previousYear = event.year - 1;
const previousEdition = editions.find((e) => e.year === previousYear);

export const hero = {
  eyebrow: `${capitalise(numberWord(event.anniversary))} years · edition ${numberWord(event.edition)}`,
  titleLead: "Ten years of all things",
  titleHighlight: "JavaScript.",
  intro:
    "JSHeroes turns ten. Join us in the heart of Transylvania for two days of talks on one stage, and the community that has been learning, teaching and sharing together all along.",
  secondaryCta: "Meet the speakers",
  facts: [
    { label: "When", value: event.dates },
    { label: "Where", value: `${event.venue.city}, Transylvania` },
    { label: "Format", value: "Single track, two days" },
    {
      label: "Tickets",
      value: TICKETS_ON_SALE
        ? "On sale"
        : WAITLIST_OPEN
          ? "Waitlist open"
          : "Announced soon",
    },
  ],
};

export const speakers = {
  eyebrow: "Speakers",
  titleLead: "Meet the",
  titleHighlight: "heroes",
  /** Shown while the lineup is not announced: last year's speakers stand in as a sample. */
  sampleIntro: (count: number) =>
    `${capitalise(numberWord(count))} speakers took the stage in ${previousYear}. ${event.year} lands in waves.`,
  announcedIntro: `The lineup for ${event.year}, on one stage over two days.`,
  sampleNote: (shown: number, total: number) =>
    `Showing ${shown} of ${total} speakers from the ${previousYear} lineup, as sample data.`,
  seeAll: "See all speakers",
  seeFullLineup: "See the full lineup",
  /** Where the sample lineup lives until this year's is announced. */
  sampleUrl: previousEdition?.archiveUrl
    ? `${previousEdition.archiveUrl}/#speakers`
    : undefined,
};

export const hosts = {
  eyebrow: "On stage with them",
  title: "Hosts, and the one who draws the day.",
};

export const flipWall = {
  eyebrow: `${capitalise(numberWord(event.anniversary))} years, ${numberWord(editions.length)} editions so far`,
  titleLead: "One motif for",
  titleHighlight: "every",
  titleTail: "edition.",
  intro:
    "Every year the whole room lines up in front of the stage for the same photo. Flip a tile to see who was there.",
  revealAll: "Reveal all",
  hideAll: "Hide all",
  noPhoto: "Group photo coming soon",
  footerLead: `Edition ${numberWord(event.edition)} is next.`,
  footerHighlight: `Be in the ${event.year} photo.`,
};
