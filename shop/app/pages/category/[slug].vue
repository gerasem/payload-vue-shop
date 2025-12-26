<template>
  <div>
    <h1>Category</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { capitalize } from '~/utils/formatters'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const categoryName = computed(() => capitalize((route.params.slug as string).replace(/-/g, ' ')))

useHead({
  title: computed(() => `${categoryName.value} | Store - Shop ${categoryName.value}`),
  meta: [
    { name: 'description', content: computed(() => `Browse our ${categoryName.value} collection. Find the best products in ${categoryName.value} at competitive prices.`) }
  ]
})
</script>
