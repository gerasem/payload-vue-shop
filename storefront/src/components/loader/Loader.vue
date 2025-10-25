<script setup lang="ts">
import { useLoaderStore } from '@/stores/LoaderStore'
const loaderStore = useLoaderStore()
</script>

<template>
  <div
    v-if="loaderStore.isLoading"
    class="loader"
  >
    <progress
      class="progress is-small is-primary"
      max="100"
    >
      15%
    </progress>
  </div>
</template>

<style scoped lang="scss">
.loader {
  position: absolute;
  height: 10px;
  z-index: 1000;
  width: 100%;
  --bulma-size-small: 0.25rem;
}
</style>
