// @ts-check
import { defineConfig } from 'astro/config';

import { siteConfig } from './src/config';

import mdx from '@astrojs/mdx';

const { siteUrl } = siteConfig;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,

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
