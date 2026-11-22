import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://medhub.sk',
  build: {
    format: 'directory',
  },
});
