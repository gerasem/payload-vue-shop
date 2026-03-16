<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ICategory, IItem } from '@/types'

const localePath = useLocalePath()
const { t } = useI18n()

defineProps<{
  category: ICategory
  items: IItem[]
}>()

const isDesktop = ref(true) // Default to true (desktop-first/SSR friendly if we assume desktop or handle on mount)

const updateBreakpoint = () => {
  isDesktop.value = window.matchMedia('(min-width: 768px)').matches
}

onMounted(() => {
  updateBreakpoint()
  window.addEventListener('resize', updateBreakpoint)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateBreakpoint)
})
</script>

<template>
  <section class="mb-8">
    <!-- Category Header -->
    <div class="flex items-center justify-between mb-6 group">
      <h2 class="text-4xl">
        {{ category.title }}
      </h2>
      <NuxtLink
        :to="localePath(`/category/${category.slug}`)"
        class="hover:text-primary transition-all opacity-0 group-hover:opacity-100"
      >
        {{ t('View all') }} →
      </NuxtLink>
    </div>

    <!-- Mobile Swiper -->
    <LazyCategoryMobileSwiper v-if="!isDesktop" :items="items" />

    <!-- Desktop Grid -->
    <CategoryDesktopGrid v-else :items="items" />
  </section>
</template>
