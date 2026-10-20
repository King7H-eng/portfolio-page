# Portfolio site: project brief for Claude Code

## Who this is for
Nicholas Mommsen. BEng (Hons) Mechanical Engineering, Durham University; now MSc Advanced
Computational Methods for Aeronautics, Imperial College London. Applying for finance roles
(equity research first; also consulting, trading, PE, VC). The site must read as polished,
professional and quantitative to recruiters at those firms: closer to a quant fund or a
top fintech product site than a student blog.

## Goal (v1)
One home page listing 4 projects as cards. Each card: title, 2-line executive summary,
2–3 headline metrics, tags. Clicking a card opens that project's own detail page.
No About/Contact pages in v1.

Projects (in this order):
1. Passive cooling coatings for EV battery packs (BEng dissertation, Durham, Apr 2026)
2. Where does the AI revolution leave US energy utilities? (market note)
3. eVTOL tail-sitter drone for anti-poaching patrol (Durham group project, 5 people)
4. Probability & statistics for engineering data (Durham coursework, ENGI2211)

## Sources of truth
- /source/*.md: the written-up project pages (executive summary, methodology, results,
  transferable skills, visuals notes). Exported from Notion. If the Notion MCP is connected,
  the live pages are in Careers HQ → Portfolio → Portfolio Projects.
- /source/*.pdf and /source/*.docx: the original reports, for figures only.
- The whole /source folder is gitignored and must NEVER be committed or published: it holds
  the full reports and `private_notes` that are not for the site.
- Frontmatter fields marked TODO and anything in `private_notes` or HTML comments are
  instructions to you, not site content.

## Hard rules
1. No extrapolation. Every claim, number, method and date on the site must appear in /source.
   If something is missing, render a visible TODO and list it in your step report. Never fill
   the gap yourself.
2. Ignore grey placeholder text in the source pages ("Add your part", "Not stated").
3. The dissertation and statistics report are "Summary only": summaries and selected figures,
   no full PDFs and no code.
4. Credit teams on group work. eVTOL team: Henry Allen, Nicholas Mommsen, George Lythgoe,
   Frederick Bicknell, Jack Pitman.
5. Keep the plain-English wording for the battery-coating chemistry; maths and numerical-methods
   terms are fine.
6. No AI-generated images. All visuals are either real figures from the source reports or built
   in code (CSS/SVG).

## Tech stack
- Astro (latest stable; pin exact versions in package.json). Use the astro-docs MCP for
  current APIs; don't rely on memory.
- Content collections: one Markdown/MDX file per project in src/content/projects/ with a typed
  schema (title, slug, summary, metrics[], tags[], date?, institution?, category, type,
  visibility, team?, cover, figures[]).
- Styling: plain CSS with design tokens (CSS custom properties), or Tailwind if you justify it.
  No UI kit or template.
- Maths: KaTeX via remark-math/rehype-katex, only where equations appear.
- Images: Astro <Image>/<Picture> for responsive WebP/AVIF output.
- Deploy: GitHub Pages via the official withastro/action GitHub Actions workflow.
  site: "https://king7h-eng.github.io", base: "/portfolio-page". All internal links must
  respect `base`.
- Repo: https://github.com/King7H-eng/portfolio-page (branch main).

## Quality bar
- Distinctive, professional, quant/tech aesthetic. Not a template look, and not a gimmicky
  "hacker terminal".
- Considered typography (max two families), a real type scale, a restrained palette with one
  accent, dark-first with a proper light mode.
- One signature interaction or motion moment; everything else calm. Respect
  prefers-reduced-motion.
- Responsive down to 375px with no horizontal scroll. Visible keyboard focus. WCAG AA contrast.
- Lighthouse 95+ on Performance, Accessibility, Best Practices and SEO.
- <title>, meta description and Open Graph/Twitter tags on every page.

## Working method
Work in the numbered steps of the kickoff prompt. After EACH step: stop, summarise what you
did, list any TODOs, and wait for my approval. Run `npm run dev` and give me the local URL
whenever there is something to look at. Commit after each approved step with a clear message.
