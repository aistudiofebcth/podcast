import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        // the design-system showcase
        main: path.resolve(__dirname, 'index.html'),
        // the LINE LIFF podcast app (embed in a rich menu)
        liff: path.resolve(__dirname, 'liff.html'),
      },
    },
  },
})
