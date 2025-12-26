<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => locales.value)
</script>

<template>
  <div class="flex items-center gap-1">
    <NuxtLink 
      v-for="(locale, index) in availableLocales" 
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="font-medium transition-colors"
      :class="[
        { 'text-gray-900 cursor-not-allowed hover:text-gray-900 ': locale.code === $i18n.locale },
        { 'text-gray-400 hover:text-primary ': locale.code !== $i18n.locale }
      ]"
    >
      {{ locale.name }}
      <span v-if="index < availableLocales.length - 1" class="mx-1 text-gray-200">/</span>
    </NuxtLink>
  </div>
</template>
