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
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-900">
        {{ category.title }}
      </h2>
      <UButton
        :to="localePath(`/category/${category.slug}`)"
        color="primary"
        variant="outline"
        size="sm"
      >
        {{ t('Go to {categoryName}', { categoryName: category.title }) }} →
      </UButton>
    </div>

    <!-- Items Grid (6 items max, 3 per row) -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
