import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 🚀 High-Performance Chunking Logic
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js from the main bundle
          'three-core': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate Framer Motion
          'animations': ['framer-motion', 'lenis'],
          // Separate UI Icons
          'lucide': ['lucide-react'],
        },
      },
    },
    // Prevent small assets from being base64 encoded to keep CSS clean
    assetsInlineLimit: 4096,
  },
  // Smooth out the HMR experience for glassmorphism styles
  server: {
    hmr: {
      overlay: true,
    },
  },
})