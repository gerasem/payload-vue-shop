import type { RouteLocationRaw } from 'vue-router'

export const localePath = (path: string): RouteLocationRaw => {
  const langInLS = localStorage.getItem('lang')

  if (path === '/') {
    return `/${langInLS}`
  }
  return `/${langInLS}/${path}`
}
