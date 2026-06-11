import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// const webgl = defineCollection({
//   type: 'content',
//   schema: () =>
//     z.object({
//       title: z.string(),
//       category: z.string(),
//     }),
// });

const glsl = defineCollection({
  loader: glob({ pattern: 'content/glsl/*.mdx' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
  }),
});

export const collections = { glsl };
