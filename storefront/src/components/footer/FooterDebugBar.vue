<script setup lang="ts">
import { useCategoryStore } from '@/stores/CategoryStore'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useItemStore } from '@/stores/ItemStore'

const categoryStore = useCategoryStore()
const itemStore = useItemStore()
const loaderStore = useLoaderStore()
</script>

<template>
  <div class="debug columns">
    <div class="column">
      <pre>
        {{ loaderStore.activeLoaders }}
      </pre>
    </div>

    <div class="column">
      <pre></pre>
    </div>
  </div>
</template>

<style lang="scss">
pre {
  max-height: 300px;
  overflow-y: auto;
  font-size: 12px;
  line-height: 14px;
}

.debug {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
