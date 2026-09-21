import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://framschool.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/about-fram-2': '/about',
    '/elementor-2036': '/about/leadership',
    '/elementor-1785': '/admissions',
    '/our-values-vision': '/about/values',
    '/our-team': '/about/leadership',
    '/teachers-team': '/about/teachers',
    '/message-from-our-founder': '/about/leadership',
    '/welfare-pastoral-pillar': '/curriculum/welfare-pastoral',
    '/campus': '/about/campus',
    '/fram-open-house': '/admissions/visit',
    '/curriculum/learning-assessment': '/curriculum/academic#assessment',
    '/curriculum/behaviour': '/curriculum/welfare-pastoral#behaviour',
    '/curriculum/wellbeing': '/curriculum/welfare-pastoral#wellbeing',
    '/about/accreditations': '/about/history#accreditations',
    '/about/results': '/curriculum/academic#assessment',
    '/about/governance': '/about/leadership#governance',
  },
});
