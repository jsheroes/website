import { defineCollection, reference, z } from "astro:content";

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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    summary: z.string().optional(),
    author: z.string(),
    author_category: z
      .enum(["organizers", "guest-writers"])
      .optional()
      .default("organizers"),
    tags: z.array(reference("tags")).default(["general"]),
  }),
});

const tags = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  organizers: defineCollection(personSchema),
  support: defineCollection(personSchema),
  ambassadors: defineCollection(personSchema),
  speakers: defineCollection(personSchema),
  "guest-writers": defineCollection(personSchema),
  "speaker-talks": defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),
  blog,
};
