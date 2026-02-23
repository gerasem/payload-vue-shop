<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="text-2-columns my-12 w-full">
    <div class="text-content text-gray-600 block w-full" v-html="text"></div>
  </div>
</template>

<style lang="scss">

.text-content {
  p {
  column-count: 1;
  @media (min-width: 768px) {
    column-count: 2;
    column-gap: 40px;
  }
}

h2 {
  font-size: 2.25rem; /* text-2xl */
  font-weight: 700;
  color: #1e1e1e; /* gray-900 */
  margin-bottom: 1rem;
  margin-top: 0;
  line-height: 1.3;
  break-after: avoid; /* Keep with text */
  break-inside: avoid-column;
  font-weight: 500;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
}



</style>
