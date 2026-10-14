# Chiang Mai Digital Nomads — site

A fast, SEO- and AEO-ready website built with [Astro](https://astro.build) —
**no WordPress**. It produces a plain folder of files, and the whole site is
rebranded for another city by copying the folder and editing one config file.

Plain English throughout. You don't need to be a developer. Where it says "run
a command", type it into the terminal — or just ask Claude Code to do it.

---

## What you get

- Home, About, Guides (blog), Contact and Community pages — ready to go.
- Posts as simple text files — one file per post, no database.
- SEO built in — titles, descriptions, sitemap, social-share tags and
  Google structured data, all automatic.
- AEO built in (being quotable by Google answer boxes and AI tools) — a "short
  answer" box and an FAQ section on posts that generate the right structured data.
- A contact form and a community story-submission flow, both using free outside
  services (no server needed).

---

## One-time setup (~15 minutes)

Install **Node.js** (the engine Astro runs on) — the "LTS" version from
[nodejs.org](https://nodejs.org). Then, in this folder:

```bash
npm install     # downloads what Astro needs (once)
npm run dev     # live preview at http://localhost:4321
```

Leave `npm run dev` running while you work; the preview updates as you save.
Press `Ctrl + C` to stop it.

---

## Make it your site: edit ONE file

Open **`src/site.config.ts`**. Name, web address, colours, menu, forms, footer —
all there, with comments explaining each line. Change the values, save, done.

---

## Add a new post

1. Copy a file in **`src/content/posts/`** and rename it. The file name becomes
   the web address: `nimman-neighbourhood-guide.md` →
   `yoursite.com/blog/nimman-neighbourhood-guide`.

2. Edit the bit at the top (between the `---` lines) — this drives SEO and AEO:

   ```
   ---
   title: "Your headline — also the Google result title"
   description: "The 1–2 sentence Google snippet. Aim for ~150 characters."
   pubDate: 2026-02-01
   tags: ["visas"]
   image: "/images/my-post.jpg"      # optional cover photo (see below)
   imageAlt: "Describe the photo"     # optional, good for SEO + accessibility
   keyAnswer: "A short, direct answer to the main question. The box Google and
               AI tools love to quote. Optional but powerful."
   faqs:
     - q: "A question people actually type into Google?"
       a: "A clear, self-contained answer in 1–3 sentences."
   ---
   ```

3. Write the post below using simple formatting: `## Heading`, `**bold**`,
   `- bullet`, `[link text](/url)`. Phrase `##` headings as the questions people
   search, and answer them right underneath — that's the AEO trick.

**Tip:** ask Claude Code to "write a new post for `src/content/posts/` about X,
following the format of the existing posts, optimised for SEO and AEO."

---

## Adding your own photos

Yes — your own photos can appear anywhere on the site. Here's how.

1. Put your image files in the **`public/images/`** folder (create it if it
   isn't there). Keep names simple and lowercase, e.g. `nimman-cafe.jpg`.

2. **As a post's cover photo:** add `image: "/images/nimman-cafe.jpg"` to the
   bit at the top of the post (see above). It shows at the top of the post and
   as the social-share picture.

3. **Inside a post, between paragraphs:** write
   `![Describe the photo](/images/nimman-cafe.jpg)` on its own line.

4. **A few tips:** resize big phone photos to about 1600px wide before adding
   them (smaller files = faster site), and always write a short description in
   the alt text — Google reads it, and it helps people using screen readers.

Claude Code can do all of this for you — resize a folder of photos, drop them in,
and wire them into the right posts — if you point it at the files.

---

## Put it live (the free, auto-publishing way)

1. Make a free [GitHub](https://github.com) account and put this project in a
   repository (one-time; Claude Code can do this for you).
2. Make a free [Cloudflare Pages](https://pages.cloudflare.com) or
   [Netlify](https://netlify.com) account and connect that repository.
3. From then on, every time you save a change to GitHub, the site rebuilds and
   goes live on its own — no uploading.

It goes live first on a free address like `yoursite.pages.dev`. When you're
happy, point your real domain at it (a one-time DNS change where your domain's
settings live).

> Prefer to keep uploading to SiteGround instead? You still can: run
> `npm run build` and upload the `dist` folder. The free host just saves you
> that step.

---

## Turn the forms on

**Contact** — make a free form at [tally.so](https://tally.so), paste its share
link into `contactFormLink` in `src/site.config.ts`. It appears inline on the
Contact page. Leave it blank and the page shows your email address instead.

**Community** — make a free form at [tally.so](https://tally.so) (allows photo
uploads), set it to email you for review, paste its share link into
`communityFormLink`. It appears inline on the Submit your story page
(/community-submit/). Stories come to you first; when you approve one, it becomes
a community story (see below) — the review step is what keeps spam off the site.

## Community stories

Reader stories are kept separate from the guides. Each one is a Markdown file in
`src/content/community/` and appears at /community/your-file-name/ and in the
filterable grid on the Community page (never in /blog). The top of the file:

```
---
title: "How I found a flat in Nimman"
author: "Sam Lee"
pubDate: 2026-10-14
description: "One or two sentences shown on the card."
tags: ["Where to work", "My story"]
image: "/images/sam-flat.jpg"   # optional
imageAlt: "Sam's desk by the window"   # optional
draft: false
---
```

The filter tags are the `communityTags` list in `src/site.config.ts` — edit it
there. Each story's tags must come from that list (the build tells you if not).

If you delete the very last story, clear Astro's cache before building
(`rm -rf node_modules/.astro .astro`), otherwise the old story can linger.

---

## Make the OTHER site

1. Copy this whole folder, rename it.
2. Edit `src/site.config.ts` — name, place, url, colours.
3. Replace the posts with ones for the other city.
4. `npm install`, then put it live the same way.

---

## Everyday cheat sheet

| I want to… | Do this |
| --- | --- |
| Preview while I work | `npm run dev` |
| Change name/colours/menu | Edit `src/site.config.ts` |
| Add a post | New `.md` file in `src/content/posts/` |
| Add photos | Drop files in `public/images/`, reference them |
| Build to upload manually | `npm run build` → upload the `dist` folder |
| Publish automatically | Save to GitHub (with Cloudflare/Netlify connected) |
