import { createHead } from '@unhead/vue/client'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import './assets/styles/main.scss'
import { ViteSSG } from 'vite-ssg'
import routes from './router'
import App from './App.vue'

export const createApp = ViteSSG(App, { routes }, async ({ app, router, isClient }) => {
  const defaultLang = import.meta.env.VITE_DEFAULT_LANGUAGE || 'de'

  const messages = await import(`@/i18n/locales/${defaultLang}.json`)

  const i18n = createI18n({
    legacy: false,
    locale: defaultLang,
    fallbackLocale: 'en',
    messages: { [defaultLang]: messages.default },
    fallbackWarn: false,
    missingWarn: false,
  })

  app.use(createPinia())
  app.use(router)
  app.use(i18n)
  app.use(createHead())

  console.log(
    isClient
      ? '[vite-ssg] Running on client (hydration)'
      : '[vite-ssg] Rendering on server (SSG build)',
  )

  if (isClient) {
    const savedLang = localStorage.getItem('lang')
    if (savedLang && savedLang !== defaultLang) {
      try {
        const newMessages = await import(`@/i18n/locales/${savedLang}.json`)
        i18n.global.setLocaleMessage(savedLang, newMessages.default)
        i18n.global.locale.value = savedLang
        document.documentElement.setAttribute('lang', savedLang)
      } catch (e) {
        console.warn(`Could not load locale ${savedLang}`, e)
      }
    }
  }
})
