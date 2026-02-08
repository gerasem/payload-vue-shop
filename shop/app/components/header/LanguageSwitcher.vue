<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

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

const items = ref<DropdownMenuItem[]>()

// Get current locale name
const currentLocaleName = computed(
  () => locales.value.find(l => l.code === locale.value)?.name || locale.value
)

onMounted(() => {
  items.value = locales.value.map(loc => ({
    label: loc.name,
    value: loc.code,
    color: loc.code === locale.value ? 'primary' : 'neutral',
    onSelect() {
      switchLanguage(loc.code)
    }
  }))
})
</script>

<template>
  <div class="flex items-center gap-1">
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'center',
        side: 'bottom',
        sideOffset: 8
      }"
      :ui="{
        content: 'w-24'
      }"
    >
      <UButton trailing-icon="i-lucide-chevron-down" color="neutral" variant="link" size="xl">{{
        currentLocaleName
      }}</UButton>
    </UDropdownMenu>
  </div>
</template>
