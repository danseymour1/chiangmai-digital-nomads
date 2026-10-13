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
- Lead with the answer, then the detail. Costs in Thai baht with an approx £/$ conversion in brackets. Name specific places with a brief reason.
- Short bullet lists for scannable things (places, pros/cons, quick costs); prose for the rest.
- Link to other relevant posts where it genuinely helps.
- NEVER invent specific facts (prices, visa rules, hours, stats). If unsure, research the current figure or give a clearly-flagged range for me to verify. Never state a guess as fact.
- Visa/legal details: add a short line telling readers to check official sources.

## Images
- Images live in public/images/. Use one or two suitable ones per post: a cover (image + a descriptive imageAlt), optionally one inline.
- If no suitable image exists yet, DO NOT invent a filename. Leave image fields out and add an HTML comment at the top listing the images to source, e.g. <!-- IMAGES TO ADD: cover of a Nimman café; a coworking desk -->. I'll upload them later.

## Publishing
- After writing, show me the file, then commit and push. If I say I'm unsure, set draft: true so it stays hidden until I approve.
