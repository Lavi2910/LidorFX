import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  base: '/LidorFX/',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      exclude: /\.svg$/i,
      jpg: { quality: 70 },
      jpeg: { quality: 70 },
      png: { quality: 70 },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
