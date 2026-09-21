# FRAM School — Design system

A brand register design. The site IS the product. Every choice below is committed against generic-school-website reflexes.

## Scene sentence

*A Sibiu mother on a Sunday morning, in her kitchen, scrolling FRAM's site on her phone while her four-year-old eats yogurt, deciding whether this is the school she'd trust with her child's first decade.*

That sentence forces every downstream choice: light theme (it is morning, not 2 a.m.), warm palette (kitchen, not boardroom), generous mobile type (one-handed), faces above abstractions (a parent looks for people first), specific numbers (a decision is being made), no carousels (her thumb scrolls, it does not swipe-then-pause).

## Color strategy — Committed

One saturated colour carries 35–55% of the surface. Not full-palette (that would feel like a children's brochure). Not restrained (that would feel like a law firm). Committed — confident in one hue.

The hue is **FRAM red** — aligned to the existing FRAM logo and current-site red, true crimson with a touch of warmth (not orange-shifted, not pink-shifted). Avoids every category reflex (school = blue, school = green, school = gold) while keeping continuity with the brand parents already recognise. White paired alongside as instructed by the client — but the white is `--paper`, a very warm cream-white, never `#fff`.

### Tokens (OKLCH)

```
--brand-red-deep:    oklch(0.36 0.14 22)   /* ~#7A1D1F — text-on-light, deep accents */
--brand-red:         oklch(0.52 0.20 25)   /* ~#B62027 — primary surface, hero, CTA */
--brand-red-warm:    oklch(0.62 0.20 28)   /* ~#D14638 — interactive hover */
--brand-red-soft:    oklch(0.93 0.04 25)   /* ~#F6DBD8 — tinted surfaces, blocks */

--ochre:             oklch(0.74 0.13 75)   /* ~#D4A24C — secondary accent, max 8% */
--ochre-soft:        oklch(0.95 0.04 80)   /* ~#F5EAD3 — alt block tint */

--ink:               oklch(0.22 0.012 50)  /* ~#2C2723 — body text, never #000 */
--ink-muted:         oklch(0.46 0.010 50)  /* ~#6B645E — secondary text */
--rule:              oklch(0.86 0.008 50)  /* ~#D9D4CE — hairlines, dividers */

--paper:             oklch(0.985 0.005 80) /* ~#FBF8F2 — page background, warm white */
--paper-deep:        oklch(0.95 0.012 80)  /* ~#F0EBE0 — alt section, tinted */
--paper-pure:        oklch(0.99 0.003 80)  /* ~#FDFBF6 — card surface */
```

Every neutral is tinted toward the red/ochre family. No `#000`, no `#fff`. The `--paper` is the page; `--ink` is the type. Madder red is for hero, primary CTAs, the seven-values block, key navigation states. Ochre is for one or two highlights per page maximum.

### Color rules

- Body text on `--paper` is `--ink`. Body text on `--brand-red` is `--paper-pure`.
- The brand red as a full background appears at most twice on any page (typically: hero, plus a values or CTA block).
- No gradient text. No gradient backgrounds with brand red — solids only. Subtle two-stop gradients are allowed only on photographic overlays for legibility, never as decoration.
- Hover states shift hue toward `--brand-red-warm` and lift via shadow + 1–2% scale, never via opacity.

## Theme

**Light, warm.** The scene sentence makes this non-negotiable. There is no dark mode in v1. The light is `--paper` (warm cream-white), not pure white — pure white reads clinical and the school is not clinical.

## Typography

Two faces. Both free, both Romanian-diacritic-complete (ș ț ă â î).

- **Display: Fraunces** — variable, optical-size axis. Used for H1, H2, hero, and named-quote pull-outs. Optical size pushed to ~96 for huge headlines (warmer terminals, more soul) and ~24 for sub-display. Soft modulation reads literary and human, not corporate. Italic Fraunces is reserved for one specific use: pull-quotes from named people.
- **Body: Mona Sans** — variable, neutral humanist sans. Used for body, nav, captions, UI. Well-cut, free, not Inter (which is tired), not Helvetica (which is everywhere). Carries Romanian diacritics cleanly.

### Type scale (mobile-first, 16px root)

| Token | Size / line-height | Usage |
|---|---|---|
| display | 56/60 → 88/92 (vw clamp) | Hero only, max once per page |
| h1 | 36/42 → 48/54 | Page titles |
| h2 | 28/34 → 32/38 | Section headings |
| h3 | 20/28 → 22/30 | Sub-sections, card titles |
| body-lg | 19/30 | Lead paragraphs, founder/headmaster letters |
| body | 17/28 | Default. Sized for one-handed phone reading |
| body-sm | 15/24 | Captions, metadata, footer |
| micro | 13/18, tracking 0.04em, uppercase | Eyebrows, tags, breadcrumbs |

Body line length capped at 65–72 ch. Headings allowed wider (up to 22 words on display).

### Type rules

- Hierarchy through scale + weight. Weight steps: 400 body, 500 emphasis, 700 headings. Skip 600 — too transitional.
- Display in Fraunces, weight 500–600, optical size variable. Italic only for named pull-quotes ("…", *— Tiberiu Popescu, Headmaster*).
- No ALL CAPS body. Uppercase reserved for the micro/eyebrow style and absolutely nowhere else.
- No letter-spacing on body or headings. Default tracking only. Micro keeps 0.04em.

## Layout

- 12-column responsive grid, but most sections use a 7-column reading column with marginalia in cols 8–10 (named bylines, dates, footnotes). This is editorial, not card-grid SaaS.
- Section vertical rhythm: alternates 96px / 144px / 64px on desktop, halved on mobile. Same padding everywhere = monotony.
- Containers: 1200px max for full-width sections, 720px max for reading columns. Hero and one or two image-led blocks per page break out edge-to-edge.
- Hairline rules (1px, `--rule`) separate sections sparingly — print-style, not boxed cards.

### Component shape

- **Cards exist sparingly.** Teacher tiles are cards (necessary affordance). Policy list is a list, not cards. Values are not cards — they are a numbered editorial spread. Leadership is not cards — it is a profile column with photographs.
- **No nested cards. Ever.**
- **Borders are full or absent.** No left-stripe accents, no bottom-only colored borders, no decorative single-side borders.
- **Corners**: 4px on cards, 2px on inputs, 0 on full-bleed sections and quote blocks. No 12px+ pill-corners — they read SaaS.
- **Shadows** are small and warm: `0 1px 2px oklch(0.22 0.012 50 / 0.06), 0 8px 24px oklch(0.22 0.012 50 / 0.04)`. No glow, no neon, no double drop.

## Imagery

- **Photography over illustration.** Always. Real teachers, real classrooms, real Habermann Campus.
- Aspect ratios: 4:5 portraits for staff, 3:2 horizontal for campus and classroom moments. Avoid 1:1 grid-of-squares which feels Instagram-marketing.
- Captions are encouraged. A photo with a name and a date earns more trust than a photo without.
- A subtle warm tone-curve LUT applied site-wide so a phone snapshot and a commissioned photo coexist without a visible jump. Never sepia, never desaturated — just unified warmth.
- One hand-drawn or hand-stamped element appears site-wide as signature texture: a single ink mark on the values numerals, or a stamp-style date on the founder's letter. Once or twice per page maximum.

## Motion

- Page sections fade-and-rise on scroll: 12px translate, 320ms, `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart). One-shot, never re-fires.
- Hover transitions on links, buttons, image cards: 180ms ease-out-quart on color, 220ms on transform.
- No bounce, no elastic, no spring overshoot. The school is calm.
- No looping decorative animations. No scroll-jacking. No auto-rotating carousels.
- The single delight: when the hero loads, the headline's optical-size axis morphs from 24 to 96 over 600ms — Fraunces opens up. Once, on first paint. Never again on revisits in the same session.
- `prefers-reduced-motion`: disables all transform animations, retains opacity transitions only.

## Components

| Component | Notes |
|---|---|
| `Button` | Primary: `--brand-red` background, `--paper-pure` text, no border, 4px radius, 14px / 28px padding, body weight 500. Secondary: `--ink` text, hairline border in `--rule`, transparent background. Tertiary: text-only with underline-on-hover. No "ghost" button with primary border — too SaaS. |
| `Nav` | Sticky, `--paper-pure` with hairline bottom on scroll. Logo left, primary items center, language toggle + "Book a tour" right. Mobile: full-screen drawer, type at body-lg. |
| `Hero` | Photograph + display headline + 1-line position + 2 CTAs. Always shows a real Sibiu image, never an abstract gradient. |
| `LeaderProfile` | Portrait 4:5, name, role, qualifications as a small list, full prose bio in body-lg. Reserved for SLT — six on the consolidated leadership page. |
| `TeacherTile` | Compact card. Portrait, name, role, year-group tag. Click → modal or `/teachers/<slug>` micro-page if bio exists. |
| `ValuesBlock` | The seven values rendered as a numbered editorial spread. Number in display Fraunces, value name in h3, description in body-lg, hairline rule between. Not a 2×4 card grid. |
| `PillarSection` | Three-up explanation of Academic / Welfare & Pastoral / Skills & Events. Each pillar gets a photo, an h2, body, one named quote from its head, and a "Read more" link to its dedicated page. |
| `PolicyIndex` | Plain list grouped by category. Filename, plain-language title, last-updated date, PDF size, a small download icon. No cards. |
| `DayInTheLife` | Vertical timeline: 8:30 arrival → 9:00 first lesson → 11:00 break → 12:30 lunch → 1:15 → 3:15 end → 3:30–4:15 Houses & Clubs. Each row has a photo and a one-line description. This is the page no competitor has. |
| `ContactBlock` | Address, phone, email, safeguarding email, DSL name, map. Appears on every page in the footer. |
| `LangToggle` | EN / RO. Real, switches to `/ro/...` mirror. Never `href="#"`. |

## Accessibility

- Minimum 4.5:1 contrast for body, 3:1 for large display.
- Visible focus states on every interactive element: 2px `--brand-red-warm` outline with 2px offset.
- All photos have descriptive alt text in EN and RO content collections.
- All form fields have visible labels (no placeholder-only labels).
- Keyboard navigation: skip-to-content link, logical tab order, no tab traps.
- The DSL contact and safeguarding email are reachable without JavaScript.

## Performance budget

- LCP < 2.0 s on Moto G4 / 4G.
- Total page weight < 400 KB on the home route, < 200 KB on text-only routes.
- All images served via Astro's Sharp pipeline as AVIF/WebP with sized `<picture>` sources.
- Zero JS by default. Tiny islands only for the language toggle, mobile nav drawer, and the optional admissions form.
- Self-hosted fonts via `@fontsource-variable/fraunces` and `@fontsource-variable/mona-sans`. No Google Fonts CDN.

## Anti-checklist

If any of these creep in, the design has failed:
- A primary blue button on a white card.
- A four-up "Why Choose Us" icon-and-headline grid.
- A photo of three diverse kids high-fiving in front of a chalkboard.
- A hero gradient.
- The word "innovative."
- A blog with an "Insights" category.
- A pricing-style three-column tier card for the three pillars.
- A floating chat bubble.
- An exit-intent modal.
