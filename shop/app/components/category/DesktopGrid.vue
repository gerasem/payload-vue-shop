<script setup lang="ts">
import type { IItem } from '@/types'

defineProps<{ items: IItem[] }>()
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
