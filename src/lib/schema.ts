/**
 * Schema.org JSON-LD helpers for FRAM School.
 * Each function returns a single JSON-LD object that can be passed to Layout's `schema` prop.
 */

import { SITE } from './site';

const ROOT_ID = `${SITE.url}/#school`;

interface Crumb {
  label: string;
  href: string;
}

export function breadcrumb(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: new URL(c.href, SITE.url).toString(),
    })),
  };
}

interface PersonInput {
  name: string;
  role: string;
  url: string;
  image?: string;
  qualifications?: string[];
  email?: string;
}

export function person(input: PersonInput) {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input.name,
    jobTitle: input.role,
    url: new URL(input.url, SITE.url).toString(),
    worksFor: { '@id': ROOT_ID },
  };
  if (input.image) node.image = new URL(input.image, SITE.url).toString();
  if (input.qualifications && input.qualifications.length > 0) {
    node.knowsAbout = input.qualifications;
  }
  if (input.email) node.email = input.email;
  return node;
}

interface CourseInput {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  inLanguage?: string[];
}

export function course(input: CourseInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: input.name,
    description: input.description,
    url: new URL(input.url, SITE.url).toString(),
    provider: { '@id': ROOT_ID },
    educationalLevel: input.educationalLevel ?? 'Primary education',
    inLanguage: input.inLanguage ?? ['en', 'ro'],
  };
}

interface EventInput {
  name: string;
  startDate: string; // ISO 8601
  endDate?: string;
  url: string;
  location?: string;
  description?: string;
}

export function event(input: EventInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: input.name,
    startDate: input.startDate,
    endDate: input.endDate ?? input.startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: new URL(input.url, SITE.url).toString(),
    location: {
      '@type': 'Place',
      name: input.location ?? `${SITE.address.line1}, ${SITE.address.city}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.line2,
        addressLocality: SITE.address.city,
        addressCountry: 'RO',
      },
    },
    organizer: { '@id': ROOT_ID },
    ...(input.description ? { description: input.description } : {}),
  };
}

export function faq(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
