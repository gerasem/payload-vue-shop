<script setup lang="ts">

// Fetch all categories with their items (8 per category)
const { data: categoriesWithItems } = await useAsyncData('all-items-catalog', async () => {
  return usePayloadCategoriesWithItems(8)
})

// Expose data for parent pages if needed, but mostly self-contained
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
