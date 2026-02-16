import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist/js',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/background/index.jsx'),
      name: 'VoronoiBackground',
      fileName: () => 'voronoi-background.js',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    },
    sourcemap: true,
    minify: 'esbuild'
  }
});
