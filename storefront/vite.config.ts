import { fetchCategoriesFromPayload, fetchProductsFromPayload } from './src/lib/payload-ssg'
import graphqlLoader from 'vite-plugin-graphql-loader'
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig, loadEnv } from 'vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  return {
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
        const env = loadEnv(mode, process.cwd(), '')

        const locales = (env.VITE_LANGUAGES || 'de').split(',')
        const dynamicRoutes: string[] = []

        // 1. Categories

        const responseCategories = await fetch(`${env.VITE_BACKEND_URL}/categories?limit=0&depth=1`)
        const categoriesData = await responseCategories.json()
        const categories = categoriesData.docs || []

        for (const cat of categories) {
          for (const locale of locales) {
            dynamicRoutes.push(`/${locale}/category/${cat.slug}`)
          }
        }

        // const responseItems = await fetch(`${env.VITE_BACKEND_URL}/products?limit=0&depth=2`)
        // const itemsData = await responseItems.json()
        // const products = itemsData.docs || []
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
  }
})
