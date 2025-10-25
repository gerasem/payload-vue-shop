<script setup lang="ts">
defineProps<{
  count: number
}>()
</script>

<template>
  <div
    v-for="skeleton in 5"
    :key="skeleton"
    class="skeleton-lines"
  >
    <div></div>
  </div>
</template>

<style scoped lang="scss"></style>
