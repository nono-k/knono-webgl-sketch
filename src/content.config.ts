import { defineCollection, z } from 'astro:content';

// const webgl = defineCollection({
//   type: 'content',
//   schema: () =>
//     z.object({
//       title: z.string(),
//       category: z.string(),
//     }),
// });

const glsl = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      category: z.string(),
    }),
});

export const collections = { glsl };
