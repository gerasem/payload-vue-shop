import { useCategoryStore } from '@/stores/CategoryStore'
import { hydrateOrFetch } from '@/utils/hydrateOrFetch'
import { useContentStore } from '@/stores/ContentStore'
import { useItemStore } from './stores/ItemStore'
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

  console.log(
    import.meta.env.SSR
      ? '[vite-ssg] Rendering on server'
      : '[vite-ssg] Running on client (hydration)',
  )

  const defaultLang = import.meta.env.VITE_DEFAULT_LANGUAGE || 'de'
  const supportedLocales = (import.meta.env.VITE_LANGUAGES || 'de').split(',')

  let finalLang = defaultLang

  if (!import.meta.env.SSR) {
    const pathLang =
      window.location.pathname.split('/')[1] || import.meta.env.VITE_DEFAULT_LANGUAGE || 'de'
    const langInUrl =
      supportedLocales.includes(pathLang) && pathLang?.match(/^[a-z]{2}$/) ? pathLang : undefined
    const langInLS = localStorage.getItem('lang')

    finalLang = langInUrl || langInLS || defaultLang

    if (langInLS !== finalLang) {
      localStorage.setItem('lang', finalLang)
    }

    document.documentElement.setAttribute('lang', finalLang)

    console.log('[Lang] finalLang:', finalLang, 'from URL:', langInUrl, 'from LS:', langInLS)
  }

  console.log('[i18n] init with lang:', finalLang)

  // --- i18n ---
  const messages = await import(`@/i18n/locales/${finalLang}.json`)
  const i18n = createI18n({
    legacy: false,
    locale: finalLang,
    fallbackLocale: 'de',
    messages: { [finalLang]: messages.default },
    fallbackWarn: false,
    missingWarn: false,
  })

  // --- Pinia + ContentStore ---
  const pinia = createPinia()
  const contentStore = useContentStore(pinia)
  const categoryStore = useCategoryStore()
  const itemStore = useItemStore()

  if (import.meta.env.SSR) {
    await Promise.all([
      contentStore.fetchInformationBanner(),
      contentStore.fetchHeader(),
      contentStore.fetchFooter(),
      categoryStore.fetchCategories(),
      itemStore.fetchItems(),
    ])

    initialState.content = {
      informationBanner: contentStore.informationBanner,
      header: contentStore.header,
      footer: contentStore.footer,
    }

    initialState.category = {
      categories: categoryStore.categories,
    }

    initialState.items = {
      items: itemStore.items,
    }

    console.log('INITIAL STATE:', initialState)
  } else {
    await Promise.all([
      hydrateOrFetch(contentStore, initialState, ['informationBanner', 'header', 'footer']),
      hydrateOrFetch(categoryStore, initialState, ['categories']),
      hydrateOrFetch(itemStore, initialState, ['items']),
    ])
  }

  app.use(pinia)
  app.use(router)
  app.use(i18n)
  app.use(createHead())
})
