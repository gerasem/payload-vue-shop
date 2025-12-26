<template>
  <div class="flex items-center gap-1">
    <NuxtLink 
      v-for="(locale, index) in availableLocales" 
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="font-medium hover:text-primary transition-colors text-gray-900"
    >
      {{ locale.name }}
      <span v-if="index < availableLocales.length - 1" class="mx-1 text-gray-400">/</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => locales.value)
</script>
