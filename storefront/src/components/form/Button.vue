<script setup lang="ts">
import Icon from '@/components/media/Icon.vue'

defineProps<{
  icon?: string
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="button"
    type="button"
    :disabled="disabled"
  >
    <Icon
      v-if="icon"
      :icon="icon"
      :width="16"
      :height="16"
    />

    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  gap: 10px;

  &:has(svg) {
    padding-left: 8px;
    padding-right: 8px;
  }

  &:disabled > * {
    cursor: not-allowed !important;
  }
}
</style>
