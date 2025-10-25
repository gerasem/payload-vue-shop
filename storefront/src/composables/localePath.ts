import type { RouteLocationRaw } from 'vue-router'
import i18n from '@/i18n'

export const localePath = (path: string): RouteLocationRaw => {
  if (path === '/') {
    return `/${i18n.global.locale.value}`
  }
  return `/${i18n.global.locale.value}/${path}`
}
