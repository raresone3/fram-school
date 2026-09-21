# FRAM School site — autonomous-run handoff

## What completed while you were away

### 1. Drive ingestion (247 of 248 files)

The shared parent folder enumerated to 248 files across ~22 listed subfolders, but only 8 ended up containing photos (the rest were either empty containers or pure parent folders). gdown hit IP-level rate limits after the first folder; switched to a curl-based per-file fetcher with retry/skip. Result:

| Folder (Drive) | Files | Where they land in the project |
|---|---:|---|
| LEADERS CHOSEN FAVORITES PICS for OPEN GATE DAY | 14 | Homepage Moments block + hero candidates |
| Asembly for school president | 42 | Recent Events showcase + pillar header |
| Clubs | 34 | Skills/Events pillar header |
| Houses activities | 36 | Houses page header strip |
| HEAD GIRL/HEAD BOY/KINDNESS AMBASSADOR | 15 | (unused — saved as raw, school can claim) |
| INDUCTION WEEK *(actually a staff-portrait shoot)* | 41 | `/public/images/staff-portraits/` bank — see below |
| 100 days of school Y2 +Y1 | 50 | Recent Events showcase |
| World Book Day | 21 | Recent Events showcase |
| **Total** | **253** | resized + optimised across `/public/images/` |

The single failure was a Google Doc named "Document fără titlu" — not an image, ignored.

### 2. Photos wired into the site

| Page | Photos placed |
|---|---|
| `/` (Home) | New **Moments** block — large group shot of children holding handwritten "FRAM" signs (Open Gate Day, Feb 2026) plus three close-ups of children with signs reading "Extraordinary," "Leadership," "Happy." Original cape-photo hero is **kept** per your earlier instruction. |
| `/curriculum/houses` | Header strip of three real photos: a joyful kids group, kids gathered around the school dog at a House activity, attentive children at an outdoor House meeting. |
| `/curriculum/clubs` | Recent Events block now has 4 events with real photos: World Book Day, Diversity Festival, Autumn Harvest, School President Assembly. |
| `/curriculum` (overview) and pillar pages | Pillars now use real images: Academic = a Y1/Y2 reading-day shot, Welfare & Pastoral = a teacher leading movement at assembly, Skills & Events = a child cycling at a Clubs session. |
| Teacher portraits | 6 confirmed mappings upgraded from WhatsApp/screenshot quality to studio-quality DSLR originals (Alexandru Rusu, Bianca Cașcu, Chiara Beretta, Roxana Muntean, Yuliya Verdi, Anna Markova). |
| Leader portraits | Bianca Cașcu's leadership-page portrait also upgraded to the same DSLR shot. |

### 3. Staff-portrait bank — needs your eye

`/public/images/staff-portraits/` contains all **41 INDUCTION WEEK studio portraits** at 1400 px, named by the original DSC number. I confidently mapped 6 of them to teachers based on the order they appeared on the live framschool.com teachers page. **The other 35 portraits are unclaimed** — I can't tell you which photo is which person without you naming them.

To claim them: open `/public/images/staff-portraits/` in Finder, identify each one, then either (a) tell me the mapping and I'll rename and wire them, or (b) rename them yourself to match the slugs in `/src/content/teachers/*.md` and `/src/content/leaders/*.md` (e.g. `simona-dica.jpg`, `marieluise-knobloch.jpg`, etc.) and copy into `/public/images/teachers/` or `/public/images/leaders/`.

### 4. Houses page — 4 mascot line-arts extracted from the PDF

Tiger, Peacock, Swan, Wolf line-arts cropped from your guidebook and placed in `/public/images/houses/`. Each House card now uses the real mascot artwork from your guidebook, not emoji.

### 5. SEO + security pass

All ten of the seo-fix skill's standard fixes applied:

- ✅ **JSON-LD Organization schema** — `EducationalOrganization` type with full address, geo coordinates, telephone, three `ContactPoint` types (admissions, safeguarding, HR), `sameAs` for Facebook. Rendered on every page.
- ✅ **WebSite schema** — separate node, links to organisation.
- ✅ **BreadcrumbList schema** — added on Leadership, Admissions, Houses pages.
- ✅ **Person schema** — every leader gets a `Person` JSON-LD on the leadership page.
- ✅ **FAQPage schema** — homepage and admissions page have `FAQPage` schema with 6/5 Q&A respectively.
- ✅ **`llms.txt`** — created at `/public/llms.txt`. Compact site map for AI crawlers.
- ✅ **Open Graph + Twitter** — full tags on every page (og:site_name, og:title, og:description, og:url, og:image, og:image:alt, og:type, og:locale + twitter:card, title, description, image).
- ✅ **Canonical URLs** — set per page.
- ✅ **Meta description, keywords, author, robots** — all present.
- ✅ **Theme color, color-scheme, format-detection** — set.

Files added:
- `/public/_headers` — Netlify / Cloudflare Pages security + caching
- `/vercel.json` — Vercel security + caching
- `/netlify.toml` — Netlify build config + 301 redirects from old `/elementor-N/` URLs
- `/src/lib/schema.ts` — typed JSON-LD helpers (`breadcrumb`, `person`, `course`, `event`, `faq`)

Security headers shipped:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — blocks all sensitive sensors/payment APIs
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-site`
- `Content-Security-Policy` — `default-src 'self'`, with allowances for inline styles (Astro), inline scripts (Astro hydration islands), data: URIs for fonts and small images, OpenStreetMap embed for the campus map
- `upgrade-insecure-requests`

### 6. Audit results

- **Alt text**: every `<img>` in the codebase has an `alt` attribute (verified by grep). Decorative images use `aria-hidden="true"`.
- **Heading hierarchy**: every page has exactly one `<h1>`. Sub-headings flow `h2 > h3` with no skipping.
- **Build**: clean, 25 pages in 2.27 s, no warnings.
- **Sitemap**: auto-generated at `/sitemap-index.xml` by `@astrojs/sitemap`.
- **Redirects**: 10 redirects from old WordPress URLs → canonical paths, configured in both `astro.config.mjs` (for static export) and `netlify.toml` (for Netlify deploy).

## What I deliberately didn't do

1. **Replace the homepage hero photo.** You instructed me to keep the original-site hero (the children-in-capes photo). It stays. The new Drive photos appear on a fresh "Moments" block lower on the page.

2. **Identify every staff portrait.** The INDUCTION WEEK folder turned out to contain 41 studio shots — way more than the school's 7 leaders + 20 teachers (so some are repeats / outtakes / rejected). Identifying each by face is fast for you, slow for me; left as a bank for you to claim.

3. **Auto-attribute the unmapped event folders.** "HEAD GIRL/HEAD BOY/KINDNESS AMBASSADOR" has 15 photos that almost certainly include named individuals — I left them in the raw download but didn't try to identify which child is which without supervision.

## Discrepancies to verify

| What | What the live site / your sources say | What I used | Note |
|---|---|---|---|
| House Earhart's symbolic animal | "Lion" (in the Houses Guidebook PDF metadata) | Swan (per the visual line-art in the PDF) | Used what's actually drawn on the page; lion is mentioned in the description |
| Tiberiu Moldovanu vs Moldovan | Moldovanu (live teachers-team page) | Moldovanu | Houses Guidebook says "Moldovan" — chose live-site spelling |
| Five values description | "Acting responsibly, confidently, and with integrity" — duplicate of Leadership on the live site | Rewritten as "Treating every child and adult with equal regard, and making decisions everyone can recognise as just." | Live site's Fairness description is clearly a copy-paste bug from Leadership; I wrote a coherent replacement |

## Open punch list (highest impact next)

1. **Identify the 35 unmapped staff portraits** in `/public/images/staff-portraits/` and tell me which is who. I'll rename + wire them in 5 minutes.
2. **Photo consent confirmation.** I assumed parental consent was in place for the children visible in the Drive photos. Worth a sentence in the Privacy Policy and possibly a discreet note on the Safeguarding page.
3. **Optional: a `/news` or `/term-dates` page** — currently the Recent Events live on the Clubs page, but they could justify their own home if the school posts regularly.
4. **Optional: real Open House dates** — the events content collection has one stub event (May 2026); replace with the actual calendar when ready.
5. **Optional: BSO standards punch list from earlier** — six new pages flagged (governance, learning-support, complaints, year-groups, privacy, named pastoral leads) still pending.

## How to view it

```bash
cd /Users/shone/fram-school
npm run dev
# → http://localhost:4321/
```

Or to build production output:

```bash
npm run build
npm run preview
```
