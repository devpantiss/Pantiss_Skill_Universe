import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy vendor libraries into separate chunks
          'vendor-three': ['three'],
          'vendor-gsap': ['gsap'],
          'vendor-framer': ['framer-motion', 'motion'],
          'vendor-charts': ['recharts', 'chart.js', 'react-chartjs-2'],
          'vendor-maps': ['leaflet', 'react-leaflet'],
          'vendor-ui': ['react-slick', 'slick-carousel', 'swiper', 'react-fast-marquee'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
