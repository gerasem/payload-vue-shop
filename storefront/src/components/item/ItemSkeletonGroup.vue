<script setup lang="ts">
import ItemSkeleton from '@/components/item/ItemSkeleton.vue'

defineProps<{
  count: number
}>()
</script>

<template>
  <div class="columns is-mobile is-multiline is-3">
    <ItemSkeleton
      v-for="skeleton in count"
      :key="skeleton"
    />
  </div>
</template>

<style scoped></style>
