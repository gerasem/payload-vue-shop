// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      payloadUrl: process.env.PAYLOAD_URL || 'http://localhost:3000'
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/de/**': { prerender: true },
    '/en/**': { prerender: true },
    '/item/**': { prerender: true },
    '/category/**': { prerender: true }
  },
  devServer: {
    port: 3001
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'En' },
      { code: 'de', file: 'de.json', name: 'De' }
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
    langDir: 'locales'
  }
})
