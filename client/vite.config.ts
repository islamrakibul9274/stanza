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
    // 🛡️ Keep this: prevents Tailwind v4 from crashing the Vercel build
    cssMinify: 'esbuild', 
    // 📦 Keep this: stops Three.js from throwing "Large Chunk" warnings
    chunkSizeWarningLimit: 2000 
  }
});