<script setup lang="ts">
const localePath = useLocalePath()

// Fetch categories with SSR
const { data: categories } = await useAsyncData('payload-categories', () => usePayloadCategories())
</script>

<template>
  <div class="bg-gray-100">
    <nav class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
      <ul class="flex items-center justify-around h-12 gap-4">
        <li v-for="category in categories" :key="category.id">
          <NuxtLink
            :to="localePath(`/category/${category.slug}`)"
            class="category-link text-gray-700 hover:text-primary font-medium transition-colors text-sm sm:text-base"
          >
            {{ category.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.category-link.router-link-active {
  color: var(--color-primary);
}
</style>
