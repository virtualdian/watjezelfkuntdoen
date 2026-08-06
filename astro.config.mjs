import { defineConfig } from 'astro/config';

// Op GitHub Pages draait de site onder /<repo-naam>/. De workflow vult
// SITE_URL en BASE_PATH; lokaal en op het eigen domein staat alles in de root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://watjezelfkuntdoen.nl',
  base: process.env.BASE_PATH || '/',
});
