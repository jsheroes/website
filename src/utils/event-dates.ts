/**
 * Human-readable strings for an edition's date range. Each end is formatted on
 * its own, so ranges that cross a month or a year read correctly:
 * "27–28 May 2027", "31 May – 1 June 2027", "31 December 2027 – 1 January 2028".
 */

const utc = (iso: string) => new Date(`${iso}T00:00:00Z`);

const format = (iso: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...options }).format(
    utc(iso),
  );

const range = (
  start: string,
  end: string,
  options: Intl.DateTimeFormatOptions,
) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    ...options,
  }).formatRange(utc(start), utc(end));

export function describeDates(start: string, end: string) {
  return {
    year: utc(start).getUTCFullYear(),
    /** "27–28 May 2027" */
    dates: range(start, end, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    /** "27–28 May" */
    datesShort: range(start, end, { day: "numeric", month: "long" }),
    /** One entry per day: "Thursday, May 27" */
    days: [start, end].map((date, i) => ({
      n: i + 1,
      date,
      label: `${format(date, { weekday: "long" })}, ${format(date, { month: "long" })} ${utc(date).getUTCDate()}`,
    })),
  };
}
