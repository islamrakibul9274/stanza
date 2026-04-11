import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  css: {
    // 🛡️ Force PostCSS transformation to ensure @apply is resolved
    transformer: 'postcss',
  },
  build: {
    // 🛡️ Use esbuild to avoid the LightningCSS "@theme" bug
    cssMinify: 'esbuild', 
    chunkSizeWarningLimit: 2000 
  }
});