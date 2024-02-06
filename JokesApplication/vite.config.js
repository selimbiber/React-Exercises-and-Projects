import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        cssnano,
      ],
    },
  },
});