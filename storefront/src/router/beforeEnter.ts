import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
// import { loadLocaleMessages } from '@/i18n/translation'
//import { init } from '@/utils/initialize'

// const SUPPORTED_LANGUAGES = ['en', 'de']
// const DEFAULT_LANGUAGE = 'de'

export async function handleRouting(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> {
  console.log('before enter')
  // load categories, region and some necessary data from api
  //init().catch((error) => console.error('Initialization error:', error))

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
