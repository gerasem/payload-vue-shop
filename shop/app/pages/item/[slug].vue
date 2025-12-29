<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// TODO: Replace with actual server data fetch
const productData = computed(() => ({
  title: `${slug.value} | Store - Product Details`,
  description: `View detailed information about ${slug.value}. Check availability, specifications, and reviews.`,
  image: '/default-product.jpg' // TODO: Get from server
}))

usePageSeo({
  title: computed(() => productData.value.title),
  description: computed(() => productData.value.description),
  image: computed(() => productData.value.image)
})
</script>

<template>
  <div>
    <h1>Product: {{ slug }}</h1>
  </div>
</template>
