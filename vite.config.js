import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 85 },
      avif: { quality: 80 },
    }),
  ],
  build: {
    // ✅ Split chunks to reduce initial JS payload (fixes TBT + unused JS)
    rollupOptions: {
      output: {
        manualChunks: {
          // React core in its own chunk — cached across pages
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Icon library separated (tree-shaken per route)
          'icons': ['lucide-react'],
        },
      },
    },
    // ✅ Inline tiny assets (<4KB) as base64 to save network requests
    assetsInlineLimit: 4096,
    // ✅ Reduce build output size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,    // remove console.log in production
        drop_debugger: true,
      },
    },
  },
})

