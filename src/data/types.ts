import type { MarkdownInstance } from "astro";

export type PersonalDetails = {
  name: string;
  title: string;
  company?: string;
  imgName: string;
};

export type TalkDetails = {
  title: string;
};

/**
 * The speaker type is a combination of two md files
 * the /speakers/*.md and /speaker-talks/*.md
 */
export type Speaker = {
  type: "speaker";
  id: string;
  bio: PersonalDetails;
  BioMdContent: MarkdownInstance<PersonalDetails>["Content"];
  talk: TalkDetails | null;
  TalkMdContent: MarkdownInstance<TalkDetails>["Content"] | null;
};

/**
 * The following 3 types are a bit duplicate,
 * but better from explicit typing
 */
export type Ambassador = {
  type: "ambassador";
  id: string;
  bio: PersonalDetails;
  BioMdContent: MarkdownInstance<PersonalDetails>["Content"];
};

export type Support = {
  type: "support";
  id: string;
  bio: PersonalDetails;
  BioMdContent: MarkdownInstance<PersonalDetails>["Content"];
};

export type Organizer = {
  type: "organizer";
  id: string;
  bio: PersonalDetails;
  BioMdContent: MarkdownInstance<PersonalDetails>["Content"];
};

export type Person = Speaker | Ambassador | Support | Organizer;

export type Organization = {
  name: string;
  url: string;
  imgName: string;
};

export type AgendaItem =
  | {
      type: "placeholder";
      imgName: string;
      timeSlot: string;
      content: string;
    }
  | {
      type: "talk";
      timeSlot: string;
      speakers: string[];
    };
