// @ts-check
import { defineConfig } from 'astro/config';

import { siteConfig } from './src/config';

import mdx from '@astrojs/mdx';

const { siteUrl, siteBase } = siteConfig;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: siteBase,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/styles/mixin.scss";',
        },
      },
    },
  },

  integrations: [mdx()],
});
