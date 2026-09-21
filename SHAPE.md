# FRAM School — Shape brief

## Information architecture

Top-level (8 items, plus utility):

```
/                                    Home
/about                               About FRAM
  /about/leadership                  Senior Leadership Team
  /about/teachers                    Teaching Staff
  /about/values                      Vision & Values
  /about/campus                      Habermann Campus
/curriculum                          Curriculum (overview + 3 pillars)
  /curriculum/academic               Academic Pillar
  /curriculum/welfare-pastoral       Welfare & Pastoral
  /curriculum/skills-events          Skills, Events & Houses
  /curriculum/day                    A day at FRAM
/admissions                          Admissions (process)
  /admissions/fees                   Fees
  /admissions/visit                  Open Days & Tours
/policies                            Policies
/vacancies                           Work at FRAM
/contact                             Contact

Utility:
/safeguarding                        Direct deep-link surfaced in footer
```

Site is English-only by client direction. The old site's `href="#"` Romanian toggle is dropped rather than reproduced.

What this fixes from the current site:
- "Fees" no longer in primary nav (goes under Admissions where it belongs).
- "Admissions" is a real funnel page, not a stub.
- Six leaders consolidated under one Leadership page (Founder, Headmaster, Head of Academics, Head of Primary, Head of Kindergarten, Head of Welfare & Pastoral / DSL).
- House system has its own home under Skills, Events & Houses.
- DSL surfaced in footer of every page + dedicated `/safeguarding` shortcut.
- The orphan `/elementor-N/` URLs are gone; redirects mapped to canonical pages.
- The broken `href="#"` Romanian language switch is removed (per client: English-only site).

## Page-by-page intent

### / (Home)

Single-purpose: convince a Sunday-morning parent to either book a tour or read the curriculum. No carousel. No cluttered "stats" row. Six blocks, in order:

1. **Hero** — full-width photograph of a real Habermann classroom or a child working at a table. Display headline, set in italic Fraunces at 88px clamp, taken directly from the founder's own voice: *"What kind of school would you want for your child?"* Subhead, body-lg, answers it: *"FRAM is a Romanian primary and preschool taught alongside the Cambridge international curriculum, in Sibiu, for children aged 3–11."* Two CTAs: "Book a tour" (primary), "Meet the team" (secondary). Single discreet line below: *"Founded 2014. Habermann Campus, Berăriei 4, Sibiu."*
2. **Founder voice** — a 60-word excerpt from Ileana Vrânceanu's letter, italic Fraunces, with her portrait, name, role, and a "Read her full message" link.
3. **The three pillars, side-by-side** — Academic / Welfare & Pastoral / Skills, Events & Houses. Each: photo, one-sentence definition, named lead with portrait thumbnail, link to pillar page.
4. **Day in the life teaser** — three timeline stops (9:00, 12:30, 3:30) with photos, link to full timeline.
5. **Voices** — three testimonials (Silvia, Laura, Dana), as named editorial pull-quotes, no avatars, no carousel, no rotating.
6. **Closing CTA band** — `--brand-red` block: "Visit FRAM. The Open Day is the easiest way to see if it fits." Two CTAs: book a tour, request the prospectus.

### /about

Single page, scrollable, with anchored sections: history (founded 2014, primary opened 2022), philosophy (the founder's question), the school in numbers (concrete: 20 teachers, 6 leadership roles, 7 values, 1000 m² campus, ages 3–11). Internal links to Leadership, Values, Campus.

### /about/leadership

Six profiles. Each: 4:5 portrait, name in h2, role, qualifications as a 2–4 line list, body-lg bio (200–400 words). Order: Founder → Headmaster → Heads of Academics, Primary, Kindergarten → Head of Welfare & Pastoral / DSL. The DSL profile has a callout: *"For any safeguarding concern, contact safeguarding@framschool.com."*

### /about/teachers

The 20-teacher grid. 4-column on desktop, 2 on tablet, 1 on mobile. Tile = portrait + name + role + year-group tag. Optional grouping: filter chips for *Primary teachers / Kindergarten / Subject specialists / Teacher assistants* (a small JS island, falls back to all-shown). Each tile is keyboard-focusable; if a teacher has a longer bio later, a `/about/teachers/<slug>` page can be added — for v1, name + role is enough and honest.

### /about/values

The seven values, exactly as written on the current site (do not paraphrase — the brief said this is the strongest content). Editorial spread: each value gets its own row — large numeral in Fraunces 88px, value name in h2, description in body-lg, hairline below. Not a card grid. The school's vision sits at the top: *"Our vision is to inspire meaningful learning, personal growth, and responsible citizenship."*

### /about/campus

Habermann Campus story. Address, photographs (the 6 from the existing site, re-cropped and tone-unified), facilities list (sports hall, cafeteria, library, outdoor playground, 1000 m²). One paragraph on Sibiu and the Saxon-Transylvanian context — the school is *of* this place. Map embed at bottom (static image, not iframe — privacy + perf).

### /curriculum

Overview page that explains the three-pillar model in two paragraphs and links into each pillar. Anchored side-nav on desktop.

### /curriculum/academic

Cambridge Primary Curriculum: what it is, what subjects (10), how assessment works, how the bilingual line works (English-medium with Romanian and French alongside). One quote from Simona Dică (Head of Academics).

### /curriculum/welfare-pastoral

The pillar's full description: safeguarding framework, DSL role, reporting routes, training, GDPR-compliant record keeping, partnerships with external agencies. The DSL Marieluise Knobloch is named with portrait. The safeguarding email is shown twice (top callout + closing). Link to the FRAM Safeguarding Policy and FRAM Child Protection Policy PDFs.

### /curriculum/skills-events

The third pillar. Houses get their own subsection here (since they were mentioned in values copy but had no home before): how the house system works, what the four (?) houses are if known, what happens 3:30–4:15. Plus the trips, community service, and service learning programs.

### /curriculum/day

The full *Day in the life* timeline, 8:30 → 4:15. Vertical, mobile-first, 8 stops. Each: time, one-line action, photograph. This is the conversion-secret page.

### /admissions

A real funnel. Five sections: who can apply, the process (4 steps: enquiry → school visit → assessment day → offer), what we look for, term dates, the application form (or a link to it if hosted externally). At top, two CTAs: "Book a visit" and "Start an application."

### /admissions/fees

Actual fees if the school will publish them; if not, an honest "Fees are issued on enquiry — book a tour and we'll send the schedule" with a contact form. Either way, an honest answer, not a stub. Includes what's covered (lunch, uniform, summer school July, Houses & Clubs).

### /admissions/visit

Open Days + private tours. List of upcoming dates (data-driven from a content collection so the school can update without touching code). Registration form, what to expect, who you'll meet (Headmaster + Head of relevant year). Replaces the broken `/fram-open-house/` page.

### /policies

The 20-policy index, grouped by Academic / Wellbeing & Pastoral / Skills & Events. Plain list, not cards. Each row: title, last-updated date, file size, download icon. Search box (small JS island) for parents looking for a specific one.

### /vacancies

Pitch FRAM as a place to teach (the brief flagged this as a tertiary user). Why Sibiu. Why FRAM. Current openings as a list (data-driven), with a clean application email or form per role.

### /contact

Three columns on desktop:
1. **General** — phone, email, address, opening hours, map.
2. **Admissions** — direct admissions contact + book-a-tour CTA.
3. **Safeguarding** — DSL name, photo, safeguarding email, line on what to do if you have a concern.

### /safeguarding

Short deep-link page (one screen): DSL name + photo + email, the school's safeguarding statement (50 words), links to the two relevant policies. Surfaced in the footer of every page.

## Component plan (build order)

1. Tokens + global CSS (color, type scale, motion)
2. `Layout.astro` (head, fonts, nav, footer, lang toggle)
3. `Nav` + mobile drawer island
4. `Footer` with safeguarding contact baked in
5. `Hero` (photo + display + CTAs)
6. `Button`
7. `LeaderProfile`
8. `TeacherTile` + `TeacherGrid` + filter island
9. `ValuesBlock`
10. `PillarSection` + three pillar pages
11. `DayInTheLife` timeline
12. `Voices` (testimonials)
13. `PolicyIndex` + search island
14. `ContactBlock`
15. `MapStatic`
16. `Prose` (markdown content wrapper, for letters and longer copy)
## Content collections

```
src/content/
  leaders/         (6 entries — Founder, Headmaster, 4 Heads)
  teachers/        (20 entries)
  values/          (7 entries)
  policies/        (20 entries — pdf path + metadata)
  pillars/         (3 entries)
  testimonials/    (3 entries)
  events/          (open days, term dates)
  vacancies/       (0–N — empty initially)
```

## Tech stack

- **Astro 5** (latest) with `@astrojs/sitemap`, `@astrojs/mdx`, native i18n.
- **Tailwind 4** via `@tailwindcss/vite`, with the design tokens above as CSS custom properties (not Tailwind config — keep raw CSS for token clarity).
- **Sharp** for image optimization (Astro built-in).
- **Fontsource variable** for self-hosted Fraunces and Mona Sans.
- **TypeScript** strict.
- No React, no Vue, no client framework. The 2 or 3 islands needed (mobile nav drawer, teacher filter, policy search) are vanilla JS or `astro:scripts`.
- Static output (`output: 'static'`), deployable to Netlify / Cloudflare Pages / Vercel — no server runtime needed.

## What v1 ships with

- All pages built and styled per DESIGN.md.
- All English content from harvested live site, plus expanded admissions and safeguarding copy.
- Romanian mirror of: home, about, leadership, values, curriculum overview, admissions, contact, safeguarding (8 pages).
- Placeholder images where the live site's photos don't fit (clearly marked in code).
- Term dates and Open Days as editable content collections, not hardcoded.

## What v1 explicitly does not ship

- Real photography commission. The site uses re-cropped existing photos plus marked placeholders. The school will need to commission a half-day shoot post-launch — flagged in handoff.
- Full RO translation of every page. Stub pages with "Această pagină este în curs de traducere" linking to the EN canonical.
- A CMS. Content is in the repo as Markdown / MDX. The school can be onboarded to Decap CMS or Sanity in v2 if they don't want to edit Markdown directly.
- Online tour booking. v1 uses a form that posts to the school's existing email (or to Formspree as a stopgap).
- Online fee payment, parent portal, LMS — out of scope.

## Image generation gate

Skip. We are using existing Habermann Campus photography from the live site, plus marked placeholders for missing assets (e.g. SLT portraits we don't have rights to download from the existing site). No AI-generated imagery — a school marketing site cannot have made-up children or staff in it. This is an explicit decision, not a gap.
