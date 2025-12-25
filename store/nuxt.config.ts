// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: {
    autoImport: false
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'En' },
      { code: 'de', file: 'de.json', name: 'De' }
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
    langDir: 'locales',
  },
  devServer: {
    port: 3001
  }
})
