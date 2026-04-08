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
    '@pinia/nuxt',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: process.env.SITE_URL || 'http://localhost:3001'
  },

  sitemap: {
    sources: ['/api/sitemap-routes'],
    exclude: ['/auth/**', '/warenkorb', '/checkout', '/payment', '/cabinet/**']
  },

  cookieControl: {
    isCssEnabled: false,
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
    isControlButtonEnabled: false, // hide the floating cookie icon — we use custom #bar slot only
    cookies: {
      necessary: [
        {
          id: 'necessary',
          name: {
            de: 'Technisch notwendige Cookies'
          }
        }
      ],
      optional: [
        {
          id: 'analytics',
          name: {
            de: 'Analyse-Cookies'
          }
        }
      ]
    },
    locales: ['de']
  },

  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },

  runtimeConfig: {
    // Server-only: used in server routes (contact.post.ts, etc.)
    // Set PAYLOAD_PRIVATE_URL env var if your backend is on an internal network
    payloadUrl:
      process.env.PAYLOAD_PRIVATE_URL || process.env.PAYLOAD_URL || 'http://localhost:3000',
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY || '',
    public: {
      payloadUrl: process.env.PAYLOAD_URL || 'http://localhost:3000',
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
      stripeKey: process.env.NUXT_PUBLIC_STRIPE_KEY || '',
      googleAnalyticsId: '',
      shippingCost: 500, // 5.00 EUR in cents
      freeShippingThreshold: 5000 // 50.00 EUR in cents
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/item/**': { prerender: true },
    '/category/**': { prerender: true },
    '/cart': { ssr: false }
  },
  devServer: {
    port: 3001
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    devStorage: {
      cache: {
        driver: 'memory'
      }
    }
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
      //{ code: 'en', file: 'en.json', name: 'En' },
      { code: 'de', file: 'de.json', name: 'De' }
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
    langDir: 'locales'
  }
})
