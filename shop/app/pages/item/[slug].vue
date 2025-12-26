<template>
  <div>
    <h1>Item</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { capitalize } from '~/utils/formatters'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const productName = computed(() => capitalize((route.params.slug as string).replace(/-/g, ' ')))

useHead({
  title: computed(() => `${productName.value} | Store - Product Details`),
  meta: [
    { name: 'description', content: computed(() => `View details, pricing, and specifications for ${productName.value}. Add to cart and enjoy fast shipping.`) }
  ]
})
</script>
