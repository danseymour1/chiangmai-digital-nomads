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
- Em-dashes only in headings, e.g. "## 1. Nimman — best for nomads". Never in body text, lists, frontmatter or FAQs (use commas, brackets or full stops instead).
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

## Prices
- Thai baht only, shown with the ฿ symbol, e.g. ฿12,000–22,000. Never write "THB", and do not add other currencies.

## Round-up posts ("best X": areas, cafés, coworking, etc.)
- Light numbered listicle: each item an H2 like "## 1. Nimman — best for first stays".
- For each item always give Rent, Coworking nearby, Who it suits, and BOTH Upsides and Downsides.
- Add one specific, real, lived-in detail per item so sections do not feel interchangeable.
- Keep normal prose for narrative / single-topic posts.

## Recommending specific places
- When recommending specific places (cafés, coworking, restaurants, etc.) in any post, FIRST check the community stories in src/content/community/ for relevant real mentions and prioritise those, crediting the contributor where it fits.
- THEN supplement with web research for anything missing.
- Never invent places. Flag anything uncertain (possibly closed, moved, or unverified details) for me to verify.

## Internal links
- Link to other relevant posts where it genuinely helps. Anchor the link on a natural phrase inside a sentence, with no added commentary. Use relative links (/slug/), never a full or workers.dev URL.

## Images
- Images live in public/images/. Use one or two suitable ones per post: a cover (image + a descriptive imageAlt), optionally one inline.
- If no suitable image exists yet, DO NOT invent a filename. Leave image fields out and add an HTML comment at the top listing the images to source, e.g. <!-- IMAGES TO ADD: cover of a Nimman café; a coworking desk -->. I'll upload them later.

## Community stories
- Reader-submitted stories are NOT guides. Each is one file in src/content/community/ (not src/content/posts/), live at /community/<filename>/ and in the Community page grid only.
- Frontmatter: title, author (the reader's name/credit), pubDate, description, tags, optional image/imageAlt, draft.
- The Community page's tag filter is built from the tags used on published stories. Reuse existing tags with the exact same spelling and capitalisation (check the other files in src/content/community/) so they group under one filter; only add a new tag when none fits.
- Keep the reader's own first-person voice, lightly tidied (British English, no em-dashes in body text). Don't add facts they didn't give.
- src/content/community/example-story.md is a placeholder to delete once real stories exist. If deleting the last story, run rm -rf node_modules/.astro .astro before building, or Astro keeps serving the cached entry.

## Publishing
- After writing, show me the file, then commit and push. If I say I'm unsure, set draft: true so it stays hidden until I approve.
