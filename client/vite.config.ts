import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    // 🛡️ Uses the esbuild package we just explicitly added
    cssMinify: 'esbuild', 
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false // Speeds up the build slightly
  }
});