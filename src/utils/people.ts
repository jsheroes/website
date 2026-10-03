import { getCollection, type CollectionEntry } from "astro:content";

export type Person = CollectionEntry<"people">;
export type PersonRole = Person["data"]["role"];

export const getPeople = (role: PersonRole) =>
  getCollection("people", ({ data }) => data.role === role);

/** Id shared by the profile dialog and the buttons that open it. */
export const personDialogId = (person: Person) => `person-${person.id}`;
