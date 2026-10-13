import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* -------------------------------------------------------------
   POSTS COLLECTION
   Each post is one Markdown file in src/content/posts/.
   The bits at the top of each file (between the --- lines) are
   filled in per post. The schema below just checks you haven't
   forgotten anything.
   ------------------------------------------------------------- */
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    keyAnswer: z.string().optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
