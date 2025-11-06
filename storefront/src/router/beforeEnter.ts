import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
// import { loadLocaleMessages } from '@/i18n/translation'
import { init } from '@/utils/initialize'

// const SUPPORTED_LANGUAGES = ['en', 'de']
// const DEFAULT_LANGUAGE = 'de'

export async function handleRouting(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> {
  console.log('before enter')


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

  // load categories, region and some necessary data from api
  init().catch((error) => console.error('Initialization error:', error))

  // const lang = to.params.locale || detectUserLanguage()
  // const normalizedLang = normalizeLanguage(lang as string)

  // if (to.params.locale === '') {
  //   next({
  //     path: `/de`,
  //     query: to.query,
  //     hash: to.hash,
  //   })

  //   return
  // }

  // await loadLocaleMessages(normalizedLang)

  next()
}

// function normalizeLanguage(lang: string): string {
//   return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE
// }

// function detectUserLanguage(): string {
//   return navigator.language.split('-')[0]
// }
