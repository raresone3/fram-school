import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const leaders = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leaders' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    portrait: z.string().optional(),
    qualifications: z.array(z.string()).default([]),
    email: z.string().optional(),
    isDsl: z.boolean().default(false),
  }),
});

const teachers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teachers' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(['primary', 'kindergarten', 'subject', 'assistant']),
    portrait: z.string().optional(),
    order: z.number().default(99),
  }),
});

const values = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/values' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    description: z.string(),
  }),
});

const pillars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pillars' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    order: z.number(),
    summary: z.string(),
    leadName: z.string().optional(),
    leadRole: z.string().optional(),
    image: z.string().optional(),
  }),
});

const policies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['academic', 'wellbeing', 'skills']),
    file: z.string(),
    sizeKb: z.number().optional(),
    updated: z.string().optional(),
    order: z.number().default(99),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    order: z.number().default(99),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z
      .union([z.string(), z.date()])
      .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v)),
    timeRange: z.string().optional(),
    location: z.string().optional(),
    summary: z.string().optional(),
    registerUrl: z.string().optional(),
  }),
});

const vacancies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vacancies' }),
  schema: z.object({
    title: z.string(),
    contract: z.string(),
    closes: z.string().optional(),
    summary: z.string(),
    applyEmail: z.string(),
  }),
});

export const collections = {
  leaders,
  teachers,
  values,
  pillars,
  policies,
  testimonials,
  events,
  vacancies,
};
