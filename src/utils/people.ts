import { getCollection, type CollectionEntry } from "astro:content";

export type Person = CollectionEntry<"people">;
export type PersonRole = Person["data"]["role"];

/**
 * Draft people are only rendered on Vercel preview deployments, or locally
 * with SHOW_DRAFTS=true. Production builds never include them.
 */
export const showDrafts =
  process.env.VERCEL_ENV === "preview" || process.env.SHOW_DRAFTS === "true";

export const getPeople = (role: PersonRole) =>
  getCollection(
    "people",
    ({ data }) => data.role === role && (showDrafts || !data.draft),
  );

/** Id shared by the profile dialog and the buttons that open it. */
export const personDialogId = (person: Person) => `person-${person.id}`;
