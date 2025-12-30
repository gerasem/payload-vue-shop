<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Handle language switch with page reload
const switchLanguage = async (localeCode: string) => {
  if (localeCode === locale.value) return
  
  // Update locale (this updates localStorage)
  await setLocale(localeCode as 'en' | 'de')
  
  // Get the new URL and reload
  const newUrl = switchLocalePath(localeCode as 'en' | 'de')
  window.location.href = newUrl
}
</script>

<template>
  <div class="flex items-center gap-1">
    <template v-for="(loc, index) in locales" :key="loc.code">
      <a
        href="#"
        class="font-medium transition-colors"
        :class="[
          loc.code === locale
            ? 'text-gray-900 cursor-default hover:text-gray-900'
            : 'text-gray-400 hover:text-primary cursor-pointer'
        ]"
        @click.prevent="switchLanguage(loc.code)"
      >
        {{ loc.name }}
      </a>
      <span v-if="index < locales.length - 1" class="mx-1 text-gray-200">/</span>
    </template>
  </div>
</template>

