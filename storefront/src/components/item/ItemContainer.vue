<script setup lang="ts">
import Item from '@/components/item/Item.vue'
import { HttpTypes } from '@medusajs/types'

defineProps<{
  items: HttpTypes.StoreProduct[]
  loading: boolean
}>()
</script>

<template>
  <div class="columns is-mobile is-multiline is-3">
    <div
      v-for="item in items"
      :key="item.id"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
    >
      <Item :item="item" />
    </div>

    <p
      v-if="!loading && items.length === 0"
      class="column"
    >
      Nothing found
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
