import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        source: z.string(),
      })
    ),
    tags: z.array(z.string()),
    date: z.string().optional(),
    institution: z.string().optional(),
    category: z.string(),
    type: z.string(),
    visibility: z.string(),
    team: z.array(z.string()).optional(),
    cover: z.string(),
    figures: z.array(
      z.object({
        src: z.string(),
        caption: z.string(),
      })
    ).default([]),
  }),
});

export const collections = { projects };
