---
register: brand
---

# FRAM School — Product context

A new website for **FRAM School**, an independent primary + preschool in Sibiu, Romania, replacing a half-finished WordPress build at framschool.com. The new site is the school's primary admissions and trust-building surface for families considering enrolment, plus a working reference for current parents.

## Users

**Primary — Considering parents (decision-makers).** Affluent professionals in Sibiu and the surrounding region, aged roughly 30–45. Most have a child aged 3–10. Mix of:
- **Romanian middle/upper-middle class** who want a serious academic education in English plus character formation. They are comparing FRAM to International School of Bucharest, the public Liceul Teoretic, and a handful of other Sibiu privates.
- **Expats and returnees** posted to Sibiu for industrial / engineering work (Continental, Bosch, Marquardt, Faurecia). They need a school that actually delivers a recognisable English curriculum so their child can transfer at any point.
- **Bilingual / mixed-language households** for whom a Romanian-only school is a non-starter and a 100%-English school feels disconnected from their daughter or son's lived life.

What they're trying to figure out, in order:
1. Is this a real school with real qualified teachers, or a glorified daycare with a foreign-sounding name?
2. Will my child actually be safe — physically, emotionally, online?
3. Is there an academic spine I can name to my own parents (Cambridge, IB, etc.)?
4. What does a normal Tuesday look like — at 9am, at lunch, at 3:30?
5. What will it cost and how do I apply?
6. Who actually runs this place and do I trust them?

They visit the site mostly on phones, often Sunday morning or weekday evenings. They will not read long paragraphs. They will read a name, a face, a number, a list. They will absolutely click through to a teacher's bio if it exists.

**Secondary — Current parents.** Already enrolled. Visit for: term dates, policy lookups, contact details, news, the welfare contact when something goes wrong. They need fast access, not pitching.

**Tertiary — Prospective staff.** Vacancies surface here. The school competes for international teachers; the site has to read as a place a good teacher would want to work.

## Product purpose

Convert serious enquirers into a booked tour or admissions form, and let current families self-serve operational questions. Secondary: surface safeguarding seriously enough that a parent who asks "who is the DSL" gets the name on the first page they look at.

The current site fails at this on every level — broken IA, "Fees" links to a page with no fees, "Admissions" is a stub, the Designated Safeguarding Lead is buried, the house system is mentioned in values copy and nowhere else, six leaders are scattered across orphan `/elementor-N/` URLs, the Romanian language switch is `href="#"`, the testimonials are uncredited fragments, the campus photography is a generic gallery.

## Brand

**Tone**: Calm, precise, parental. The founder Ileana Vrânceanu's question — *"What kind of school would I want for my own child?"* — is the master tone. Confident without boasting. Specific over abstract — name names, show faces, surface the policies, give the actual time the school day ends. Slightly old-world: this is Sibiu, a Saxon-Transylvanian medieval city, and the campus is named Habermann (a German Saxon family name). The school can lean into that heritage without becoming a costume.

**Voice rules**:
- No "We are excited to announce."
- No "leaders of tomorrow," "future-ready," "innovative learning," "21st-century skills," or any phrase that could appear in any other school's brochure.
- No exclamation marks (the current site has them; the new site does not).
- No "Welcome to FRAM!" homepage hero.
- Numbers are concrete: "3:15 PM" not "afternoon," "20 teachers" not "many," "2014" not "for years."
- The headmaster Tiberiu Popescu is named with his title; the founder is named with hers; the DSL is named. People over institutions.

**Anti-references** (designs we are explicitly not making):
- Generic IB/private-school websites: navy + gold + crest, "tradition since…" pomp.
- US K-12 marketing: hero photo of three smiling kids of curated diversity high-fiving.
- WordPress + Elementor template look (which is exactly what's being replaced).
- Education-SaaS gradients with rounded mascot illustrations and a primary blue/green palette.
- Mint-and-cream "wellness" school sites that look like a yoga studio.
- Anything that could be a coding bootcamp.

**Reference territory** (mood, not copy):
- Sibiu's painted Saxon façades — limewash plaster, mustard, oxblood, deep olive shutters, terracotta roof tiles.
- The Romanian textile tradition — madder red dye, muted natural tones.
- Editorial print education writing (think *The Atlantic* on schooling, not glossy parent magazine).
- The Strothotte Foundation / Brockwood Park-style independent-school sites that lead with philosophy and people, not infographics.

## Strategic principles

1. **People before positioning.** The first page must show real human beings — Tiberiu, Ileana, Marieluise — not a hero stock photo. Every named role is also a face.
2. **Surface the policies.** Twenty policy PDFs are an asset, not an embarrassment. They prove the school is serious about safeguarding. Make them findable, name the DSL on the contact page and in the footer, list a safeguarding email.
3. **Fix the IA the old site broke.** Fees lives under Admissions. Leadership exists as one consolidated page. The house system has its own home. Romanian is either real or not promised.
4. **English only, by client direction.** The site ships in English. The current site's broken `href="#"` Romanian toggle is removed entirely rather than scaffolded — no implied promise the school can't keep.
5. **Trust on mobile.** Most parents read this on a phone. Type sized for thumbs and reading distance, no horizontal scroll, no carousel-only content, photos that load on Romanian rural 4G in under 2 seconds.
6. **The day-in-the-life is the secret weapon.** No competitor school in Sibiu shows a parent what 9:00 vs 11:30 vs 3:30 actually looks like. Show it.
7. **Don't manufacture testimonials.** Three short ones from Silvia, Laura, Dana exist — use them, full first names, no fabricated last initials, no fake schools.
8. **The seven values are on-brand. Keep them.** They're well-written and specific. Do not paraphrase.

## Success criteria

- A parent opening the site for the first time on a phone can, in under 60 seconds, find: who runs the school, what curriculum they teach, what time the day ends, and the form to book a tour.
- A current parent looking for the safeguarding policy reaches it in two taps from the homepage.
- The DSL's name and a safeguarding email appear in the footer of every page.
- The site validates as accessible (axe clean), loads under 2 s LCP on a mid-tier Android, and scores 95+ on Lighthouse for Performance, Accessibility, and Best Practices.
- A teacher in the UK reading the Vacancies page can tell within 30 seconds whether they want to apply.

## What we are not doing in v1

- A login portal, parent dashboard, or fee-payment flow. (Those live in the school's existing admin tools.)
- News blog as a regular publication — a Stories page exists as a stub, content can flow in later.
- A live calendar — term dates as a static list is enough.
- A learning-management system.
