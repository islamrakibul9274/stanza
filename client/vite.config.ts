import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
      output: {
        // 🚀 Functional chunking to bypass TS syntax errors
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three-core';
            if (id.includes('lucide')) return 'lucide';
            if (id.includes('framer-motion')) return 'animations';
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});