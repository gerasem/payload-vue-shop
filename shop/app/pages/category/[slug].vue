<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = route.params.slug

useHead({
  title: `${slug} Category | Store - Browse Products`,
  meta: [
    { name: 'description', content: `Browse all products in the ${slug} category. Find quality items at great prices.` }
  ]
})
</script>

<template>
  <div>
    <h1>Category: {{ slug }}</h1>
  </div>
</template>
