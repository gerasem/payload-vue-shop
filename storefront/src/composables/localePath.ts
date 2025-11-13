import type { RouteLocationRaw } from 'vue-router'

export const localePath = (path: string | null | undefined): RouteLocationRaw => {
  if (!path) {
    return '/'
  }

  let currentLocale: string

  if (typeof window !== 'undefined') {
    currentLocale =  localStorage.getItem('lang') || import.meta.env.VITE_DEFAULT_LANGUAGE
  } else {
    currentLocale = import.meta.env.VITE_DEFAULT_LANGUAGE
  }

  if (path === '/') {
    return `/${currentLocale}`
  }
  return `/${currentLocale}/${path}`
}
