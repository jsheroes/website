/** Single source of truth for the current edition. Nothing else hardcodes a year, date or venue. */

const start = "2027-05-27";
const end = "2027-05-28";

const utc = (iso: string) => new Date(`${iso}T00:00:00Z`);
const fmt = (iso: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...options }).format(
    utc(iso),
  );

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

const year = utc(start).getUTCFullYear();
const month = fmt(start, { month: "long" });
const dayOf = (iso: string) => utc(iso).getUTCDate();

const venue = {
  name: "Grand Hotel Italia",
  address: "Strada Trifoiului 2, Cluj-Napoca 400478, Romania",
  city: "Cluj-Napoca",
  country: "Romania",
  mapsUrl:
    "https://www.google.com/maps?saddr&daddr=Grand%20Hotel%20Italia,%20Strada%20Trifoiului%202,%20Cluj-Napoca%20400478,%20Romania",
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
  dates: `${dayOf(start)}–${dayOf(end)} ${month} ${year}`,
  /** "27–28 May" */
  datesShort: `${dayOf(start)}–${dayOf(end)} ${month}`,
  days: [start, end].map((date, i) => ({
    n: i + 1,
    date,
    /** "Thursday, May 27" */
    label: fmt(date, { weekday: "long" }) + `, ${month} ${dayOf(date)}`,
  })),
  venue,
  tagline: "Community Organized JS Conference",
  ticketsUrl: `https://ti.to/jsheroes/${year}`,
  ogImage: "/img/social/new-2026.png",
  cfpEndDate: "December 31st",
  editionOrdinal: ordinal(9),
} as const;

export type EventData = typeof event;
