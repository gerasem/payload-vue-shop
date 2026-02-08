<template>
  <div class="min-h-screen flex flex-col">
    <InformationBanner />
    
    <header class="bg-white border-b border-separator px-8 py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h2 class="text-2xl font-semibold m-0 text-text">Store</h2>
        
        <nav class="flex items-center gap-1">
          <template v-for="(locale, index) in locales" :key="locale.code">
            <NuxtLink 
              :to="switchLocalePath(locale.code)" 
              class="text-text font-medium hover:text-primary transition-colors no-underline"
            >
            >
              {{ locale.name }}
            </NuxtLink>
            <span v-if="index < locales.length - 1" class="text-muted"> / </span>
          </template>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-7xl w-full mx-auto px-8 py-8">
      <slot />
    </main>

    <footer class="bg-white border-t border-separator px-8 py-6 text-center text-muted">
      <p class="m-0">&copy; {{ currentYear }} Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useSwitchLocalePath } from '#imports'
import { useI18n } from 'vue-i18n'

const switchLocalePath = useSwitchLocalePath()
const { locales } = useI18n()
const currentYear = new Date().getFullYear()
</script>
