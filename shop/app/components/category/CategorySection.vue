<script setup lang="ts">
import type { ICategory, IItem } from '@/types'
import ItemCard from '@/components/item/ItemCard.vue'

const localePath = useLocalePath()

defineProps<{
  category: ICategory
  items: IItem[]
}>()
</script>

<template>
  <section class="mb-12">
    <!-- Category Header -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-900">
        {{ category.title }}
      </h2>
      <NuxtLink
        :to="localePath(`/category/${category.slug}`)"
        class="text-primary hover:text-primary-600 font-medium text-sm transition-colors"
      >
        Show all →
      </NuxtLink>
    </div>

    <!-- Items Grid (4 items max) -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
