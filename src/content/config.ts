import { defineCollection, z } from "astro:content";

const personSchema = {
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    title: z.string(),
    imgName: z.string(),
    links: z
      .object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        website: z.string().optional(),
        linkedin: z.string().optional(),
      })
      .optional(),
  }),
};

export const collections = {
  organizers: defineCollection(personSchema),
  support: defineCollection(personSchema),
  ambassadors: defineCollection(personSchema),
  speakers: defineCollection(personSchema),
  "speaker-talks": defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),
};
