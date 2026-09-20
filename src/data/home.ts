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
  intro: `The lineup for ${event.year}, on one stage over two days.`,
  cfp: "Submit a proposal",
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

export const agenda = {
  eyebrow: "Agenda",
  title: "Two days, one stage.",
  intro:
    "Talks run on the main stage. Between them, short sessions on the alternative stage keep the conversation going.",
  sampleNote: `Sample: the ${previousYear} schedule, shown on ${event.year} dates.`,
  alternativeStage: "Alternative stage",
  bubble: "Pick a talk!",
};

export const venue = {
  eyebrow: "Venue",
  title: `Back at the ${event.venue.name}.`,
  intro:
    "Cluj-Napoca is the heart of Transylvania, and the room where every edition of JSHeroes has come together.",
  mapsCta: "Open in Google Maps",
};

export const community = {
  eyebrow: "Community",
  titleLead: "By the community,",
  titleHighlight: "for the community.",
  intro:
    "Learning, teaching and knowledge sharing. That is the whole mission, and it is why the stage is only half of what we do.",
  communitiesTitle: "Partner communities",
  partnersTitle: "Event partners",
  more: "and more",
  bubble: "Bine ai venit!",
};

export const sponsors = {
  eyebrow: "Sponsors",
  title: "Backed by teams who love JavaScript",
  cta: "Become a sponsor",
};

export const team = {
  eyebrow: "Team",
  title: "The people behind it.",
  intro: `A volunteer-run crew that has made the same room feel like home for ${numberWord(event.anniversary)} years.`,
  volunteers: (n: number) => `${n} ${n === 1 ? "Volunteer" : "Volunteers"}`,
  ambassadors: (n: number) =>
    `${n} Brand ${n === 1 ? "ambassador" : "ambassadors"}`,
};
