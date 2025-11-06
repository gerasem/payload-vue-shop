import type { Router } from 'vue-router'

export function setupLanguageGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log('before each guard')
    const defaultLang = import.meta.env.VITE_DEFAULT_LANGUAGE
    const langInUrl = to.params.locale as string | undefined
    const langInLS = localStorage.getItem('lang')

    if (langInUrl) {
      if (langInUrl !== langInLS) {
        localStorage.setItem('lang', langInUrl)
        console.log('Language set from URL:', langInUrl)
      }
      return next()
    }

    const finalLang = langInLS || defaultLang
    if (!langInLS) {
      localStorage.setItem('lang', finalLang)
      console.log('Language set to default:', finalLang)
    }

    return next({
      name: to.name || undefined,
      params: { ...to.params, locale: finalLang },
      query: to.query,
      hash: to.hash,
    })
  })
}
