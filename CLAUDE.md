# Chiang Mai Digital Nomads — working notes
This is an Astro site. Blog posts are Markdown files in src/content/posts/. Pushing to GitHub auto-deploys to Cloudflare, so a push = publishing.

## URLs
- Posts live at the site root with a trailing slash: chiangmaidigitalnomads.com/best-coworking-spaces-in-chiang-mai/
- The FILENAME sets the URL. Use only the core keywords, lowercase, hyphenated — no years, no fluff ("in-2026", "ultimate", "you-have-to-see"). Title "The Best Coworking Spaces in Chiang Mai (2026)" -> file best-coworking-spaces-in-chiang-mai.md
- /blog stays as the page listing all posts.

## Writing a new post
Given a title, create ONE file in src/content/posts/ with frontmatter: title (the full headline), description (~150 chars, the Google snippet), pubDate (today), tags (one or two), image/imageAlt (see Images), keyAnswer (a direct 2–3 sentence TL;DR answer that Google and AI tools quote), faqs (3–5 real questions people Google, each answered in 1–3 sentences). Then write the body with ## headings phrased as the questions people search, answered right underneath.

## Voice
- Third-person, giving clear direct advice. No "we".
- Em-dashes are fine in headings (e.g. "## 1. Nimman — best for nomads") and in list items (e.g. "- **Fast wifi** — most cafés have fibre"). Never in running sentences: body paragraphs, frontmatter descriptions, keyAnswer or FAQ answers (use commas, colons, brackets or full stops instead).
- Formal but friendly: professional, clear and warm, not chatty. No emojis, no diary asides, no self-deprecation. A knowledgeable local writing a proper guide.
- British English throughout.
- Grounded and credible, written as if from direct experience of Chiang Mai.
- Honest and independent, no hype.

## Style
- 800–1,200 words.
- Lead with the answer, then the detail. Name specific places with a brief reason.
- Short bullet lists for scannable things (places, pros/cons, quick costs); prose for the rest.
- NEVER invent specific facts (prices, visa rules, hours, stats). If unsure, research the current figure or give a clearly-flagged range for me to verify. Never state a guess as fact.
- Visa/legal details: add a short line telling readers to check official sources.

## No dates in guides
- In the BODY TEXT of guides/blog posts (including keyAnswer, FAQ answers and descriptions), never tie time-sensitive facts to a specific calendar date or year. Phrase them as current and changeable instead: not "cut from 60 to 30 days on 15 September 2026" but "currently 30 days, though this changes regularly"; not "the cost as of October 2025 is..." but "the current cost is...". Same for exchange rates: say "current", never date-stamp them.
- Months and seasons are fine where the topic needs them (e.g. "the burning season is roughly March to April"). The rule is about specific dates and year-stamps, not months.
- Exceptions: historical events can keep their date (e.g. "the DTV launched in July 2024"); fixed annual dates such as national holidays (e.g. Songkran on 13 to 15 April) and recurring seasonal policies stated without a year (e.g. "monthly rates from 1 March to 30 September") are fine.
- Never put a year in a post title.
- Dates ARE allowed in community stories (contributors may date their own experiences).
- Keep the pubDate field in post frontmatter: it is metadata for ordering, not body content. Guide pages do not display dates to readers; community stories do.

## Prices
- Thai baht only, shown with the ฿ symbol, e.g. ฿12,000–22,000. Never write "THB", and do not add other currencies.

## Round-up posts ("best X": areas, cafés, coworking, etc.)
- Light numbered listicle: each item an H2 like "## 1. Nimman — best for first stays".
- For each item always give Rent, Coworking nearby, Who it suits, and BOTH Upsides and Downsides.
- Add one specific, real, lived-in detail per item so sections do not feel interchangeable.
- Keep normal prose for narrative / single-topic posts.

## Trusted sources
- When researching facts for a Chiang Mai post, FIRST read the relevant files in the local reference/ folder (my own first-hand articles), THEN the community stories in src/content/community/, THEN supplement with web research.
- reference/ files: cost-of-living.md, coworking.md, digital-nomad-guide.md, why-i-moved.md, malaysia-vs-thailand.md. The folder is local only (excluded from git because the repo is public); never commit it.
- Treat my articles and the community stories as the priority source for local detail and recommendations. Where a changeable fact (prices, visa rules, opening hours) conflicts with current information, use the current, correct information, but always flag the conflict for me rather than overriding silently.
- Use them for facts and local knowledge only, not for writing style (the site stays third person per the Voice rules). Convert any £/$/€ figures to ฿ or leave them out.

## Recommending specific places
- When recommending specific places (cafés, coworking, restaurants, etc.) in any post, follow the Trusted sources order: my reference/ articles first, then real mentions in the community stories (crediting the contributor where it fits), then web research for anything missing.
- Never invent places. Flag anything uncertain (possibly closed, moved, or unverified details) for me to verify.

## Internal links
- Link to other relevant posts where it genuinely helps. Anchor the link on a natural phrase inside a sentence. Never bolt on separate "see our guide to X" lines or added commentary.
- Always point to the MOST relevant existing post for that topic. Don't force a link to a post that doesn't exist or is a poor fit; if there's no good target, leave the phrase unlinked.
- Use relative links (/slug/), never a full or workers.dev URL.

## Images
- Images live in public/images/. Use one or two suitable ones per post: a cover (image + a descriptive imageAlt), optionally one inline.
- If no suitable image exists yet, DO NOT invent a filename. Leave image fields out and list the images to source in your reply to me (not in the post). I'll upload them later.

## Community stories
- Reader-submitted stories are NOT guides. Each is one file in src/content/community/ (not src/content/posts/), live at /community/<filename>/ and in the Community page grid only.
- Frontmatter: title, author (the reader's name/credit), pubDate, description, tags, optional image/imageAlt, draft.
- The Community page's tag filter is built from the tags used on published stories. Use only the valid tags listed under "Valid community tags" below, spelled exactly the same, so they group under one filter. Never invent a new tag.
- Always credit the contributor by name. Where they have given their own website or blog URL, link their name or the "By [name]" byline to it as a normal followed link (no rel="nofollow", "ugc" or "sponsored"), so contributors get a genuine backlink.
- Keep the reader's own first-person voice, lightly tidied (British English, no em-dashes in body text). Don't add facts they didn't give.
- src/content/community/example-story.md is a placeholder to delete once real stories exist. If deleting the last story, run rm -rf node_modules/.astro .astro before building, or Astro keeps serving the cached entry.

## No placeholder notes in published posts
- Never leave placeholder, example or working notes in a published post, e.g. "this is a starter guide", "swap in your own", "images to add". This includes hidden HTML comments such as <!-- IMAGES TO ADD --> or <!-- VERIFY BEFORE PUBLISHING -->, which still show in the page source.
- Put images to source and anything for me to verify in your reply to me instead.

## Publishing
- After writing, show me the file, then commit and push. If I say I'm unsure, set draft: true so it stays hidden until I approve.

## Publishing a community submission

A reader's story arrives as a folder (synced from Google Drive) holding one
`*-story.txt` and their photos — either loose image files or a single `.zip`.
Turn it into a DRAFT community post as follows.

1. Read the text file. It has this shape:

   Title: <story title>
   Name: <contributor name>
   Time in Chiang Mai: <answer>
   Website/socials: <their URL>
   Tags: <comma-separated>

   Bio: <short bio>

   Story: <the story, one or more paragraphs>

2. Prepare the photos.
   - If the folder contains a `.zip`, unzip it first and use the images inside.
     Ignore the zip afterwards.
   - Collect every image (.jpg, .jpeg, .png, .heic, .webp). Convert any HEIC to JPG.
   - Use the HIGHEST-resolution submitted photo as the cover (a small image
     stretched to hero width looks blurry). If the best available cover is under
     ~1200px wide, say so in the report so it can be swapped before publishing.
   - Resize each to max 1600px wide and strip all metadata (EXIF/location).
   - Save them to `public/images/community/<slug>/` named `<slug>-1.jpg`,
     `<slug>-2.jpg`, and so on. The first image is the cover.
   - `<slug>` is the title in lowercase with hyphens, e.g.
     "Why I moved to Chiang Mai" -> `why-i-moved-to-chiang-mai`.
     If a post with that slug already exists, append `-2` (then `-3`, and so
     on) to the slug, and name its image folder and files to match.

3. Create the post at `src/content/community/<slug>.md`, matching the frontmatter
   format of the existing community posts. Set:
   - title: the Story title, as given
   - description: a ~150-character meta summary of the story (site voice, for SEO)
   - pubDate: today
   - tags: the submitted Tags, used verbatim from the valid list below. Never
     invent, rename or remap a tag.
   - image / imageAlt: the cover photo path and a short description of it
   - author: the contributor's name
   - authorUrl: their Website/socials URL. This becomes their byline link and
     must stay a normal followed link, never nofollow.
   - draft: true

4. Write the body.
   - Keep the contributor's own FIRST-PERSON voice. This is their story, not a
     site guide, so the third-person house rule does NOT apply here. Tidy lightly
     only: fix typos, British English spelling, remove em-dashes, use ฿ for any
     baht amounts.
   - Do not add facts, prices or claims the contributor did not write. Their
     experience is theirs; leave it as stated.
   - Credit the contributor near the top (their name, linked to authorUrl).
   - Work the bio in as a short "About <name>" note at the end. The site adds
     "Find out more about me here." (linked to authorUrl) under it
     automatically, so do not write that line in the post.
   - All images (cover and inline) are centred by the site's CSS.
   - Space the remaining photos through the story between paragraphs:
     `![<alt>](/images/community/<slug>/<file>)`.

5. Leave it as a draft. Report the file path and its preview URL
   (`/community/<slug>`) so it can be checked. Publishing is a manual step:
   change `draft: true` to `draft: false` once approved.

### Valid community tags
The only valid community tags are the ones from the Tally form. Use them exactly
as submitted, spelled exactly like this, with no remapping:

My story, Food and restaurants, Where to stay, Drinks, Work, Community,
Coworking, Events, What to do, Accommodation, Day trips, Local experience,
Favourite things, Activity, Hidden gems, Sport, Music, DTV, Visas, Other

### Author backlink (driven by authorUrl)
When authorUrl is set, the contributor's link appears in two places, both as
normal followed links: the byline at the top ("By <name>"), and a line under the
"About <name>" section reading "Find out more about me here." with the link on
"here". Show neither if authorUrl is empty.
