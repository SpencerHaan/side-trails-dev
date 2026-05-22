// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cname from "@sidetrails/astro-cname";

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: "http://sidetrails.dev",
  integrations: [mdx(), sitemap(), cname(), vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});
