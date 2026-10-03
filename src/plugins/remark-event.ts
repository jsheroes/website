import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import { event } from "../data/event";

/** Values available to markdown as {{event.<key>}}. */
const values: Record<string, string> = {
  year: String(event.year),
  edition: event.editionOrdinal,
  dates: event.dates,
  datesShort: event.datesShort,
  venue: event.venue.name,
  venueMapsUrl: event.venue.mapsUrl,
  city: event.venue.city,
  ticketsUrl: event.ticketsUrl,
};

const replaceTokens = (text: string) =>
  text.replace(/\{\{event\.(\w+)\}\}/g, (match, key: string) => {
    if (!(key in values)) throw new Error(`Unknown markdown token ${match}`);
    return values[key];
  });

/** Lets markdown content use {{event.year}} etc. so dates live in src/data/event.ts only. */
export default function remarkEvent() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if ("value" in node && typeof node.value === "string") {
        node.value = replaceTokens(node.value);
      }
      if ("url" in node && typeof node.url === "string") {
        node.url = replaceTokens(node.url);
      }
    });
  };
}
