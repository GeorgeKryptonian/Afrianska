import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Afrianska/",
  plugins: [svelte()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
})