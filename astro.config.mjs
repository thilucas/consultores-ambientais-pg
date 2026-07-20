// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://consultores-ambientais-pg.netlify.app',
  image: {
    // Fotos enviadas pelo CMS ficam em src/assets/uploads e são otimizadas no build
    responsiveStyles: true,
  },
});
