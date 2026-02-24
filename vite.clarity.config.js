import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/js',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/clarity/index.js'),
      name: 'ClarityInit',
      fileName: () => 'clarity-init.js',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    },
    sourcemap: false,
    minify: 'esbuild'
  }
});
