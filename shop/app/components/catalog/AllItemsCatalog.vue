<script setup lang="ts">
const { data: categoriesWithItems } = await useAsyncData('all-items-catalog', async () => {
  return usePayloadCategoriesWithItems(8)
})
</script>

<template>
  <div>
    <!-- Category Sections -->
    <div v-if="categoriesWithItems && categoriesWithItems.length > 0">
      <CategorySection
        v-for="section in categoriesWithItems"
        :key="section.category.id"
        :category="section.category"
        :items="section.items"
      />
    </div>
  </div>
</template>
