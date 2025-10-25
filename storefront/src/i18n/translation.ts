import i18n from '@/i18n'

async function loadLocaleMessages(locale: string) {
  const messages = await import(`@/i18n/locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)
  i18n.global.locale.value = locale
}

export { loadLocaleMessages }
