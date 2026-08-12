import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// One-off config: build ONLY the design-system showcase (index.html) as a
// single self-contained chunk, so it can be inlined into one downloadable HTML.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(process.cwd(), './src') },
  },
  build: {
    outDir: 'dist-single',
    rollupOptions: {
      input: path.resolve(process.cwd(), 'index.html'),
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
