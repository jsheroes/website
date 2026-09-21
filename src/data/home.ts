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

export const hero = {
  eyebrow: `Anniversary edition`,
  titleLead: "Ten years of all things",
  titleHighlight: "JavaScript.",
  intro:
    "JSHeroes turns ten. Join us in the heart of Transylvania for two days of talks, quality networking and good vibes.",
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
  cfp: "Submit a proposal",
};

export const hosts = {
  eyebrow: "The support crew",
  title: "Our wonderful hosts and sketch artist.",
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
  watchHighlights: "Watch the highlights",
  footerLead: `Edition ${numberWord(event.edition)} is next.`,
  footerHighlight: `Be in the ${event.year} photo.`,
};

export const agenda = {
  eyebrow: "Agenda",
  title: "Two days, one stage.",
  intro:
    "All the talks run on the main stage. Longer breaks between them allow for ample networking and discussions",
  alternativeStage: "Alternative stage",
  bubble: "Can't wait!",
};

export const venue = {
  eyebrow: "Venue",
  title: `Back at the ${event.venue.name}.`,
  intro:
    "Cluj-Napoca is the heart of Transylvania, and the room where every edition of JSHeroes has come together.",
  mapsCta: "View on Google Maps",
};

export const community = {
  eyebrow: "Community",
  titleLead: "By the community,",
  titleHighlight: "for the community.",
  intro:
    "Learning, teaching and knowledge sharing. That is the whole mission, and it is why the stage is only half of what we do.",
  communitiesTitle: "Partner communities",
  partnersTitle: "Event partners",
  bubble: "Bine ai venit!",
};

export const sponsors = {
  eyebrow: "Sponsors",
  title: "The companies that support our mission.",
  cta: "Become a sponsor",
  transparency:
    "JSHeroes is non-profit and open by default: the budget, income and expenses of every edition are public.",
  transparencyCta: "Read the transparency report",
};

export const team = {
  eyebrow: "Team",
  title: "The people behind it.",
  ambassadors: "Ambassadors",
};
