import { describeDates } from "../utils/event-dates";

/** Single source of truth for the current edition. Nothing else hardcodes a year, date or venue. */

const start = "2027-05-27";
const end = "2027-05-28";

const ordinal = (n: number) => {
  const rule = new Intl.PluralRules("en", { type: "ordinal" }).select(n);
  const suffixes: Record<string, string> = {
    one: "st",
    two: "nd",
    few: "rd",
  };
  const suffix = suffixes[rule] ?? "th";
  return `${n}${suffix}`;
};

const { year, dates, datesShort, days } = describeDates(start, end);

const venue = {
  name: "Grand Hotel Italia",
  address: "Strada Trifoiului 2, Cluj-Napoca 400478, Romania",
  city: "Cluj-Napoca",
  country: "Romania",
  mapsUrl: "https://maps.app.goo.gl/9ZoxaEJuiKwEmnTVA",
};

export const event = {
  name: "JSHeroes",
  siteUrl: "https://jsheroes.io",
  year,
  /** Editions held so far including this one; the 2017 launch counts as the 1st. */
  edition: 9,
  anniversary: 10,
  start,
  end,
  /** "27–28 May 2027" */
  dates,
  /** "27–28 May" */
  datesShort,
  /** One entry per day, e.g. label "Thursday, May 27". */
  days,
  venue,
  tagline: "Community Organized JS Conference",
  ticketsUrl: `https://ti.to/jsheroes/${year}`,
  ogImage: "/img/social/new-2026.png",
  cfpEndDate: "December 31st",
  editionOrdinal: ordinal(9),
} as const;

export type EventData = typeof event;
