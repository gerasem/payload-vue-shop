import { useContentStore } from '@/stores/ContentStore'
import { createHead } from '@unhead/vue/client'
import type { ViteSSGContext } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import './assets/styles/main.scss'
import { ViteSSG } from 'vite-ssg'
import routes from './router'
import App from './App.vue'

export const createApp = ViteSSG(App, { routes }, async (context: ViteSSGContext) => {
  const { app, router, initialState } = context

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

  const pinia = createPinia()

  app.use(pinia)
  app.use(router)
  app.use(i18n)
  app.use(createHead())

  console.log(
    !import.meta.env.SSR
      ? '[vite-ssg] Running on client (hydration)'
      : '[vite-ssg] Rendering on server (SSG build)',
  )

  if (!import.meta.env.SSR) {
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

  const contentStore = useContentStore(pinia)

  if (import.meta.env.SSR) {
    await contentStore.fetchInformationBanner()

    initialState.content = {
      informationBanner: contentStore.informationBanner,
    }
  } else {
    console.log('Initial State:', initialState)

    if (initialState?.content?.informationBanner) {
      contentStore.hydrate(initialState.content)
    }
  }

  if (!import.meta.env.SSR) {
    router.beforeEach((to, from, next) => {
      console.log('Lang in URL:', to.params.locale)

      const defaultLang = import.meta.env.VITE_DEFAULT_LANGUAGE
      const langInLS = localStorage.getItem('lang')

      // Если в localStorage и в URL одинаково, просто продолжаем
      if (langInLS === to.params.locale || (langInLS && !to.params.locale)) {
        console.log('Lang in LS, continue')
        next()
        return
      }

      // Если в URL есть язык, сохраняем его
      if (typeof to.params.locale === 'string' && to.params.locale) {
        localStorage.setItem('lang', to.params.locale)
        console.log('Set lang from URL:', to.params.locale)
      } else {
        // Если в URL нет языка, ставим дефолтный
        localStorage.setItem('lang', defaultLang)
        console.log('Set default lang:', defaultLang)
      }

      next()
    })
  }
})
