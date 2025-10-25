import { fileURLToPath, URL } from 'node:url'

import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/styles/sass-utils/_variables.scss" as *;',
      },
    },
  },
  plugins: [vue(), vueDevTools(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@payload-types': path.resolve(__dirname, '../payload/src'),
    },
  },
  server: {
    port: 8000,
  },
})
