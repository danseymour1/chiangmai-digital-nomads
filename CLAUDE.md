# Chiang Mai Digital Nomads — working notes
This is an Astro site. Blog posts are Markdown files in src/content/posts/. Pushing to GitHub auto-deploys to Cloudflare, so a push = publishing.

## URLs
- Posts live at the site root with a trailing slash: chiangmaidigitalnomads.com/best-coworking-spaces-in-chiang-mai/
- The FILENAME sets the URL. Use only the core keywords, lowercase, hyphenated — no years, no fluff ("in-2026", "ultimate", "you-have-to-see"). Title "The Best Coworking Spaces in Chiang Mai (2026)" -> file best-coworking-spaces-in-chiang-mai.md
- /blog stays as the page listing all posts.

## Writing a new post
Given a title, create ONE file in src/content/posts/ with frontmatter: title (the full headline), description (~150 chars, the Google snippet), pubDate (today), tags (one or two), image/imageAlt (see Images), keyAnswer (a direct 2–3 sentence TL;DR answer that Google and AI tools quote), faqs (3–5 real questions people Google, each answered in 1–3 sentences). Then write the body with ## headings phrased as the questions people search, answered right underneath.

## Voice and style
- Formal but friendly: professional, clear and warm — not chatty. No emojis, no diary asides, no self-deprecation. A knowledgeable local writing a proper guide.
- British English throughout.
- Grounded and credible, written as if from direct experience of Chiang Mai.
- Honest and independent — no hype.
- 800–1,200 words.
- Lead with the answer, then the detail. Name specific places with a brief reason.
- Prices: THB as the main figure, with approximate GBP, USD and EUR equivalents in brackets, e.g. "12,000–22,000 THB (≈ £270–£495 · $355–$655 · €315–€580)". Use current rates and state them once per post with the month and year, noting that rates move.
- Short bullet lists for scannable things (places, pros/cons, quick costs); prose for the rest.
- Round-up / "best X" posts (areas, cafés, coworking, etc.) use a light numbered listicle: each item an H2 "## 1. Name — short tag", always giving BOTH upsides and downsides plus the key practical labels (e.g. Rent, Coworking nearby, Who it suits), and one specific lived-in detail per item (a named soi, market, landmark or building type). Keep normal prose for narrative/single-topic posts.
- Link to other relevant posts where it genuinely helps. Links must read naturally inside a sentence, anchored on a natural phrase ("...a short walk from [plenty of coworking spaces](/best-cafes-work-chiang-mai/)") — never bolt-on "see our guide to X" lines. Always use relative links (/slug/), never a full or workers.dev URL.
- NEVER invent specific facts (prices, visa rules, hours, stats). If unsure, research the current figure or give a clearly-flagged range for me to verify. Never state a guess as fact.
- Visa/legal details: add a short line telling readers to check official sources.

## Images
- Images live in public/images/. Use one or two suitable ones per post: a cover (image + a descriptive imageAlt), optionally one inline.
- If no suitable image exists yet, DO NOT invent a filename. Leave image fields out and add an HTML comment at the top listing the images to source, e.g. <!-- IMAGES TO ADD: cover of a Nimman café; a coworking desk -->. I'll upload them later.

## Publishing
- After writing, show me the file, then commit and push. If I say I'm unsure, set draft: true so it stays hidden until I approve.
