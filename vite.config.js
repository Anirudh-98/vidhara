import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    exclude: ['shaders']
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-core'
            }
            if (id.includes('framer-motion') || id.includes('motion')) {
              return 'vendor-motion'
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            if (id.includes('three') || id.includes('shaders')) {
              return 'vendor-shaders'
            }
            return 'vendor-libs'
          }
        }
      }
    }
  }
})
