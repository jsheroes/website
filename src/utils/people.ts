import { getCollection, type CollectionEntry } from "astro:content";

export type Person = CollectionEntry<"people">;
export type PersonRole = Person["data"]["role"];

/**
 * Draft people are rendered everywhere except Vercel production builds:
 * locally, in CI and on Vercel previews. Production never includes them.
 */
export const showDrafts = process.env.VERCEL_ENV !== "production";

export const getPeople = (role: PersonRole) =>
  getCollection(
    "people",
    ({ data }) => data.role === role && (showDrafts || !data.draft),
  );

/** Id shared by the profile dialog and the buttons that open it. */
export const personDialogId = (person: Person) => `person-${person.id}`;
