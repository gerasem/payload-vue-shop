<script setup lang="ts">
import type { ICategory, IItem } from '@/types'
import ItemCard from '@/components/item/ItemCard.vue'

const localePath = useLocalePath()
const { t } = useI18n()

defineProps<{
  category: ICategory
  items: IItem[]
}>()
</script>

<template>
  <section class="mb-12">
    <!-- Category Header -->
    <div class="flex items-center justify-between mb-6 group">
      <h2 class="text-2xl font-bold text-gray-900">
        {{ category.title }}
      </h2>
      <NuxtLink
        :to="localePath(`/category/${category.slug}`)"
        class="text-gray-500 hover:text-gray-900 text-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        {{ t('View all') }} →
      </NuxtLink>
    </div>

    <!-- Items Grid (4 items max, 4 per row on desktop) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
