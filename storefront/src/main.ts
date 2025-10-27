import { createHead } from '@unhead/vue/client'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import './assets/styles/main.scss'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LANGUAGE,
  fallbackLocale: 'en',
  legacy: false,
  fallbackWarn: false,
  missingWarn: false,
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createHead())

router.isReady().then(async () => {
  const lang = localStorage.getItem('lang')

  if (lang) {
    const messages = await import(`@/i18n/locales/${lang}.json`)

    i18n.global.setLocaleMessage(lang, messages.default)
    i18n.global.locale.value = lang
    console.log('Loaded message json', i18n.global.locale.value)
  }

  app.mount('#app')
  document.querySelector('html')?.setAttribute('lang', lang)
})
