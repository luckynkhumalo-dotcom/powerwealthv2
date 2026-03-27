import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@google/genai')) return 'google-ai'
            if (id.includes('motion')) return 'motion'
            if (id.includes('lucide-react')) return 'icons'
            if (id.includes('react-router-dom')) return 'router'
            if (id.includes('react') || id.includes('react-dom')) return 'react'
            return 'vendor'
          }
        }
      }
    }
  }
})
