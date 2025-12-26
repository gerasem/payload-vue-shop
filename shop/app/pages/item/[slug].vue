<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = route.params.slug

useHead({
  title: `${slug} | Store - Product Details`,
  meta: [
    { name: 'description', content: `View detailed information about ${slug}. Check availability, specifications, and reviews.` }
  ]
})
</script>

<template>
  <div>
    <h1>Product: {{ slug }}</h1>
  </div>
</template>
