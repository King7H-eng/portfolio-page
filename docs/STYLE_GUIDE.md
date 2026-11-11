# Portfolio style guide: language and tone

Internal reference for all writing on the site. Follows the project brief (CLAUDE.md); where they
overlap, the brief's hard rules win.

**Reader:** a recruiter or interviewer in finance or consulting (equity research, trading, PE, VC),
skimming for under a minute per page. Some are technical, most are not.
**Goal:** sound like a concise research note: clear, factual, confident and quantified. Not a
student blog, not a sales page.

---

## 1. Voice and person

| Where | Person | Example |
|---|---|---|
| About section | **First person singular (I)** | "I am currently completing my MSc…" |
| "My role" line on a project | **I** | "**My role:** team leader and drone pilot." |
| Anything describing my own decision or contribution | **I** | "I wrote this as the headline article for…" |
| Project description ("About this project") | **Neutral, no pronoun** | "A final-year BEng dissertation… The project covered…" |
| Group work, what the team did together | **"the team"**, or "we" sparingly | "The team built and flew two prototypes." |
| Quoted source text (abstract, executive summary) | **As written in the source** | Keep the report's own voice |

- **Never write about myself in the third person** ("Nicholas led…", "Nic built…").
- **Use I only for what I did.** In group work, never claim a team result as mine.
- **Keep project descriptions impersonal.** They read like an abstract and keep the focus on the
  work; the "My role" line is where personal credit goes.

## 2. Tense

- **Past tense for completed work:** built, modelled, validated, wrote, led.
- **Present tense for what a document is or does:** "It examines…", "The report sets out…".
- Don't mix tenses within one paragraph ("includes… then involved… included").

## 3. Tone

- **Plain and specific.** Name the method, tool and number rather than an adjective.
  "Validated against experimental data to under 1 °C" beats "rigorously validated".
- **Confident, not inflated.** Say what was done and found. No hype words: *passionate,
  cutting-edge, innovative, revolutionary, world-class, leverage, synergy, journey*.
- **Honest about limits.** If something failed or was only planned, say so plainly ("planned",
  "tested in simulation"). Recruiters trust candour more than polish.
- **Engineering terms are fine; define them once.** Write the abbreviation in full on first use on
  each page: "battery thermal management system (BTMS)". Keep chemistry in plain English (brief rule 5).
- **One idea per sentence.** Aim for under 25 words per sentence.

## 4. Length by element

| Element | Length | Notes |
|---|---|---|
| Card summary (home page) | 1 sentence, ≤ 35 words | Starts with what it is: "A market commentary…", "A group project…" |
| Project description | 2–3 sentences | What it was, what it covered, how it ended |
| My role | 1–2 sentences | Starts "**My role:**" |
| Figure caption | 1–2 sentences | What it shows, then the takeaway. Ends with a full stop |
| Headline number label | ≤ 6 words | Sentence case, no full stop |

## 5. Spelling and formatting conventions

- **British English throughout:** modelling, optimisation, centre, programme, behaviour, analyse.
- **Sentence case for all titles and headings:** "Passive cooling coatings for EV battery packs".
  Write "and" rather than "&" in titles.
- **Degrees and grades:**
  - In prose: "MSc Advanced Computational Methods for Aeronautics, Imperial College London" and
    "BEng Mechanical Engineering (First Class), Durham University".
  - In a headline number: "1st".
- **Dates:** "June 2025" or "28 November 2025". No numeric dates (no 28/11/2025).
- **Numbers:**
  - Numerals for all measurements and money.
  - Words for one to nine in prose ("two internships", "five-person team"), except with units.
  - Units take a space: 1.7 °C, 0.25 m/s, 1,200 followers, £512.28, $2tn.
  - Ranges take an en dash with no spaces: 7–10 years, 2023–2026.
- **Quotation marks:** double quotes for quoted terms ("phantom" data centres).
- **Lists:** use bullets only for genuinely parallel items; descriptions stay as prose.

## 6. Accuracy rules (from the brief, restated for writing)

- Every claim, number and date must come from a source document or from Nic directly.
- A number I calculated (for example a total) is labelled "calculated".
- Verbatim excerpts (abstracts, executive summaries) are copied word for word; only clear typos
  are fixed. Report any fix to Nic.
- Group projects say they were group work and how big the team was; never present team results as mine alone.

## 7. Page template (so every project reads the same way)

1. Header: category tags, type, date, title, original document title as subtitle
2. Cover image (real photo or code-drawn; no AI images)
3. **About this project**: neutral description (2–3 sentences), then **My role** (I), then supervisor credits where relevant
4. Full document card (PDF link, or "available on request")
5. Abstract or executive summary from the source, verbatim
6. Optional: technical methods table, data table
7. Figures, each with a caption

---

## Current inconsistencies to fix

Found in an audit on 11 November 2026. Items 1–5 and 9 fixed on 11 November 2026; items 6–8 (statistics) deliberately left for now.

| # | Where | Issue | Suggested fix |
|---|---|---|---|
| 1 | Hero and About | Course called "Advanced Computational Aeronautics"; the official name is "Advanced Computational Methods for Aeronautics" | Use the official name, or agree one short form and use it everywhere |
| 2 | About | "Master's" in one place, "MSc" elsewhere | "MSc" |
| 3 | Hero | "\|" separators; the rest of the site uses "·" | Use "·" |
| 4 | Dissertation description | Mixed tenses: "includes… then involved… included" | Past tense throughout |
| 5 | Dissertation card summary | Colon fragment ("A final-year BEng dissertation: a computational study…") | Full sentence |
| 6 | Statistics card summary | Fragment ("Three applied MATLAB problems: …") | Full sentence starting "A coursework project…" |
| 7 | Statistics page | Still uses the old layout (methodology, results, transferable skills) | Restructure to the page template in section 7 |
| 8 | Statistics title | Uses "&" | "Probability and statistics for engineering data" |
| 9 | Market commentary card summary | Two sentences | Trim to one |
