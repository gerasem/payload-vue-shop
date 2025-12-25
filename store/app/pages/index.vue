<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    
      <BaseButton>
        Nuxt UI Button
      </BaseButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
