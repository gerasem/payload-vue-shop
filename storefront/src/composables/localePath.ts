import type { RouteLocationRaw } from 'vue-router'

export const localePath = (path: string | null | undefined): RouteLocationRaw => {
  if (!path) {
    return '/'
  }

  const langInLS = localStorage.getItem('lang')

  if (path === '/') {
    return `/${langInLS}`
  }
  return `/${langInLS}/${path}`
}
