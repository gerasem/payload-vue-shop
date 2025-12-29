<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// TODO: Replace with actual server data fetch
const categoryData = computed(() => ({
  title: `${slug.value} Category | Store - Browse Products`,
  description: `Browse all products in the ${slug.value} category. Find quality items at great prices.`,
  image: '/default-category.jpg' // TODO: Get from server
}))

usePageSeo({
  title: computed(() => categoryData.value.title),
  description: computed(() => categoryData.value.description),
  image: computed(() => categoryData.value.image)
})
</script>

<template>
  <div>
    <h1>Category: {{ slug }}</h1>
  </div>
</template>
