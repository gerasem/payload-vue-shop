import { fetchCategoriesFromPayload, fetchProductsFromPayload } from './src/lib/payload-ssg'
import graphqlLoader from 'vite-plugin-graphql-loader'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/styles/sass-utils/_variables.scss" as *;',
      },
    },
  },
  plugins: [vue(), vueDevTools(), svgLoader(), graphqlLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@payload-types': path.resolve(__dirname, '../payload/src'),
    },
  },
  server: {
    port: 8000,

    watch: {
      ignored: ['!../payload/src/payload-types.ts'],
    },
  },
  ssgOptions: {
    script: 'async',
    //formatting: 'minify',
    async includedRoutes(paths, routes) {
      const locales = (process.env.VITE_LANGUAGES || 'de,en').split(',')
      const dynamicRoutes: string[] = []

      // 1. Categories
      const categories = await fetchCategoriesFromPayload()
      for (const cat of categories) {
        for (const locale of locales) {
          dynamicRoutes.push(`/${locale}/category/${cat.slug}`)
        }
      }

      // // 2. Items
      // const products = await fetchProductsFromPayload()
      // for (const product of products) {
      //   for (const locale of locales) {
      //     dynamicRoutes.push(`/${locale}/item/${product.slug}`)
      //   }
      // }

      // console.log('PRODUCTS/ CATEGORIES', products, categories)
      return [...locales.map((loc) => `/${loc}`), ...dynamicRoutes]
    },
  },
})
