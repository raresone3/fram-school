export const SITE = {
  name: 'FRAM School',
  shortName: 'FRAM',
  tagline: 'A primary school and kindergarten in Sibiu.',
  url: 'https://framschool.com',
  founded: 2014,
  primaryOpened: 2022,
  address: {
    line1: 'Habermann Learning Campus',
    line2: 'Berăriei 4',
    city: 'Sibiu',
    country: 'Romania',
  },
  contact: {
    phone: '+40 724 491 440',
    phoneDisplay: '0724 491 440',
    email: 'office@framschool.com',
    admissionsEmail: 'admissions@framschool.com',
    safeguardingEmail: 'safeguarding@framschool.com',
    vacanciesEmail: 'contact@framschool.com',
  },
  dsl: {
    name: 'Marieluise Knobloch',
    role: 'Head of Welfare & Pastoral, Designated Safeguarding Lead',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string; description?: string }>;
}

export const NAV: ReadonlyArray<NavItem> = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About FRAM', href: '/about', description: 'What the school is for.' },
      { label: "Founder's letter", href: '/about/founder', description: 'Ileana Vrânceanu, on what FRAM was built to be.' },
      { label: 'History & accreditations', href: '/about/history', description: 'Year by year, plus Cambridge and Romanian recognition.' },
      { label: 'Leadership & governance', href: '/about/leadership', description: 'The people who run FRAM and who oversees them.' },
      { label: 'Teachers', href: '/about/teachers', description: 'All twenty teachers and assistants.' },
      { label: 'Vision & values', href: '/about/values', description: 'The seven values, lived daily.' },
      { label: 'Habermann Campus', href: '/about/campus', description: 'Berăriei 4, Sibiu.' },
      { label: 'Academic calendar', href: '/about/calendar', description: 'Three terms, dates emailed each August.' },
      { label: 'Daily schedule', href: '/about/schedule', description: 'Drop-off, pick-up, meals.' },
    ],
  },
  {
    label: 'Curriculum',
    href: '/curriculum',
    children: [
      { label: 'Curriculum overview', href: '/curriculum', description: 'Two lines, six developmental areas.' },
      { label: 'About Cambridge', href: '/curriculum/cambridge', description: 'The Cambridge Pathway, here.' },
      { label: 'Academic Pillar', href: '/curriculum/academic', description: 'How we teach, learning and assessment.' },
      { label: 'Welfare & Pastoral', href: '/curriculum/welfare-pastoral', description: 'Safeguarding, behaviour, wellbeing.' },
      { label: 'Skills, Events & Houses', href: '/curriculum/skills-events', description: 'The Yellow Pillar.' },
      { label: 'Clubs & Events', href: '/curriculum/clubs', description: 'Tuesday and Friday afternoons.' },
      { label: 'The House System', href: '/curriculum/houses', description: 'Four Houses, four explorers.' },
      { label: 'A day at FRAM', href: '/curriculum/day', description: 'From 8:30 to 4:15, hour by hour.' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'How to apply', href: '/admissions', description: 'The four-step process.' },
      { label: 'Application form', href: '/forms/fram-application-form.pdf', description: 'Download the PDF application form.' },
      { label: 'Fees', href: '/admissions/fees', description: 'What is included in the year.' },
      { label: 'Open days & tours', href: '/admissions/visit', description: 'Visit the school.' },
      { label: 'Summer School 2026', href: '/summer-school', description: 'Six weeks of English-language summer programme, ages 6 to 10.' },
    ],
  },
  { label: 'For parents', href: '/parents' },
  { label: 'Policies', href: '/policies' },
  { label: 'Vacancies', href: '/vacancies' },
  { label: 'Contact', href: '/contact' },
] as const;
