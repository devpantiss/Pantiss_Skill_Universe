import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Let Rollup preserve route boundaries. Grouping unrelated packages into
    // manual vendor chunks pulled dashboard charts into the home page preload.
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
