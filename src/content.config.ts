import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const md = (name: string) =>
  glob({ pattern: "**/*.{md,mdx}", base: `./src/content/${name}` });

export const PERSON_ROLES = [
  "speaker",
  "host",
  "organizer",
  "volunteer",
  "ambassador",
  "guest-writer",
] as const;

const people = defineCollection({
  loader: md("people"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.enum(PERSON_ROLES),
      company: z.string().optional(),
      title: z.string(),
      tag: z.string().optional(),
      photo: image(),
      links: z
        .object({
          bluesky: z.string().optional(),
          twitter: z.string().optional(),
          github: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
      order: z.number().optional(),
    }),
});

const blog = defineCollection({
  loader: md("blog"),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    summary: z.string().optional(),
    author: reference("people"),
    tags: z
      .array(reference("tags"))
      .default([{ collection: "tags" as const, id: "general" }]),
  }),
});

const tags = defineCollection({
  loader: md("tags"),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  people,
  "speaker-talks": defineCollection({
    loader: md("speaker-talks"),
    schema: z.object({
      title: z.string(),
    }),
  }),
  blog,
  tags,
};
