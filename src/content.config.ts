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

/* -------------------------------------------------------------
   COMMUNITY STORIES COLLECTION
   Reader-submitted stories, one Markdown file each in
   src/content/community/. Kept separate from the guides: they
   live at /community/<file-name>/ and never appear in /blog.
   The Community page builds its tag filter from the tags used here.
   ------------------------------------------------------------- */
const community = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/community" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorUrl: z.string().url().optional(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string().trim()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, community };
