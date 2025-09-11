// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cname from "@sidetrails/astro-cname";

// https://astro.build/config
export default defineConfig({
  site: "http://sidetrails.dev",
  integrations: [react(), mdx(), sitemap(), cname()],

  vite: {
    plugins: [tailwindcss()]
  }
});
