import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const md = (name: string) =>
  glob({ pattern: "**/*.{md,mdx}", base: `./src/content/${name}` });

const personSchema = {
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    title: z.string(),
    tag: z.string().optional(),
    imgName: z.string(),
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
};

const blog = defineCollection({
  loader: md("blog"),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    summary: z.string().optional(),
    author: z.string(),
    author_category: z
      .enum(["organizers", "guest-writers", "ambassadors"])
      .optional()
      .default("organizers"),
    tags: z.array(reference("tags")).default(["general"]),
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
  organizers: defineCollection({ loader: md("organizers"), ...personSchema }),
  support: defineCollection({ loader: md("support"), ...personSchema }),
  ambassadors: defineCollection({ loader: md("ambassadors"), ...personSchema }),
  speakers: defineCollection({ loader: md("speakers"), ...personSchema }),
  volunteers: defineCollection({ loader: md("volunteers"), ...personSchema }),
  "guest-writers": defineCollection({ loader: md("guest-writers"), ...personSchema }),
  "speaker-talks": defineCollection({
    loader: md("speaker-talks"),
    schema: z.object({
      title: z.string(),
    }),
  }),
  blog,
  tags,
};
