import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Rutas relativas para que funcione tanto en local como en GitHub Pages
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        proyecto: resolve(import.meta.dirname, 'proyecto.html'),
      },
    },
  },
});
