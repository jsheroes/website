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
  /** Wide screens break the title after each entry. */
  titleLines: ["Ten years of", "all things"],
  titleHighlight: "JavaScript.",
  intro:
    "JSHeroes turns ten. Join us in the heart of Transylvania for two days of talks, quality networking and good vibes.",
  secondaryCta: "Meet the speakers",
  facts: [
    { label: "When", value: event.dates },
    { label: "Where", value: `${event.venue.city}, Romania` },
    { label: "Format", value: "Two days, one stage" },
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
  titleLead: "JSHeroes",
  titleHighlight: "across",
  titleTail: "the years.",
  intro:
    "Every year our community got together to experience the magic of JSHeroes. Flip a tile to go back in time.",
  revealAll: "Reveal all",
  hideAll: "Hide all",
  watchHighlights: "Watch the highlights",
  footerLead: `Edition #${event.edition} is next.`,
  footerHighlight: `Be in the ${event.year} photo.`,
};

export const agenda = {
  eyebrow: "Agenda",
  title: "The industry is shifting.",
  intro:
    "AI is changing how we plan, write, review and ship software. Our speakers will guide us through the uncertainties our community is facing right now. We're excited to see you join the conversation as we figure out together what the future of our industry looks like.",
  alternativeStage: "Alternative stage",
  bubble: "Can't wait!",
  /** Shown until AGENDA_ANNOUNCED, under the same title and intro: no slots, no times, just what the talks will be about. */
  teaser: {
    note: "The full schedule will be published here as the lineup comes together.",
    themesTitle: "What to expect",
    themes: [
      {
        title: "Building with AI, beyond the hype",
        text: "Tools, workflows and frameworks teams and individuals can leverage today to ship better software.",
      },
      {
        title: "Navigating the changes",
        text: "How our roles, productivity and collaboration are impacted by automation and AI.",
      },
      {
        title: "The state of the web platform",
        text: "What's new in the browsers, web standards and in JavaScript across the stack, from frontend to backend.",
      },
      {
        title: "Deep expertise that matters",
        text: "Performance, security, accessibility and UX become even more important as code gets cheaper.",
      },
    ],
    format: "Two days · one main stage · long breaks for the hallway track",
  },
};

export const venue = {
  eyebrow: "Venue",
  title: `Back at the ${event.venue.name}.`,
  intro: `We're hosting JSHeroes ${event.year} at ${event.venue.name}, our home since the very first edition.`,
  mapsCta: "View on Google Maps",
};

export const community = {
  eyebrow: "Community",
  titleLead: "By the community,",
  titleHighlight: "for the community.",
  intro:
    "This event is organized by a group of volunteers from the local community in Cluj-Napoca, Romania.",
  communitiesTitle: "Partner communities",
  partnersTitle: "Event partners",
  bubble: "Welcome!",
};

export const sponsors = {
  eyebrow: "Sponsors",
  title: "The companies that support our mission.",
  cta: "Become a sponsor",
  transparency:
    "JSHeroes is a non-profit, fully transparent organization: the budget, income and expenses of every edition are public and available in our transparency report.",
  transparencyCta: "Read the transparency report",
};

export const team = {
  eyebrow: "Team",
  title: "The people behind JSHeroes.",
  ambassadors: "Ambassadors",
};
