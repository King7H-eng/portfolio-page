import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://king7h-eng.github.io',
  base: '/portfolio-page',
  integrations: [mdx()],
});
