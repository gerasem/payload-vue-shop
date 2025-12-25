<template>
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: '404 - Page Not Found | Store',
  meta: [
    { name: 'description', content: 'The page you are looking for does not exist. Return to our homepage to continue shopping.' }
  ]
})
</script>
