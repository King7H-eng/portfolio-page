Read CLAUDE.md fully before doing anything. Then work through these steps one at a time,
stopping for my approval after each.

Step 1, Design directions (no code yet)
Read everything in /source. Propose 3 distinct visual directions for a professional quant/tech
portfolio. For each, give: a name, palette (hex), type pairing, layout sketch (ASCII) for the
home page and a project page, the one signature moment, and 2–3 real-world sites it draws from.
Recommend one. Tell me where (if anywhere) a Higgsfield-generated abstract visual would help,
with a draft generation prompt, but don't generate anything yet.

Step 2, Content model
Draft the four project content files (frontmatter + body) strictly from /source: 2-line card
summary (≤ 280 characters), 2–3 headline metrics each with the source line it came from,
tags, and detail-page body. List every TODO where the source is silent.

Step 3, Figures
Extract candidate figures from /source reports (render PDF pages at high DPI, crop the figures).
Propose one cover image and 2–4 detail figures per project, with captions taken from the
reports. Show me a contact sheet.

Step 4, Scaffold and design build
Scaffold Astro with pinned versions, the content collection schema, the base layout and
design tokens. Build the home page and ONE project page (the dissertation) in the approved
direction. Run the dev server for me to review.

Step 5, Remaining pages
Build the other three project pages from the same template.

Step 6, QA
Check 375px/768px/1440px layouts, keyboard navigation, contrast, Lighthouse scores, broken
links, base-path links, OG tags and image weights. Re-verify every number on the site against
/source and report any mismatch.

Step 7, Deploy
Add the withastro/action GitHub Pages workflow, commit and push to main, and tell me exactly
which repo settings to change (Settings → Pages → Source: GitHub Actions). Confirm the live
URL loads correctly.

Start with Step 1.
