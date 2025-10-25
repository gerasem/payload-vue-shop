<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = withDefaults(
  defineProps<{
    icon: string
    width?: number | string
    height?: number | string
    fill?: string
  }>(),
  {
    width: 16,
    height: 16,
    fill: 'currentColor',
  },
)

const loadIcon = defineAsyncComponent({
  loader: () => import(`@/assets/icons/${props.icon}.svg?skipsvgo`),
  errorComponent: defineAsyncComponent(() => import(`@/assets/icons/_default.svg`)),
})
</script>

<template>
  <component
    :is="loadIcon"
    class="icon-component"
    :width="width"
    :height="width"
    :fill="fill"
  />
</template>

<style scoped lang="scss">
.icon-component {
  color: currentColor;
  cursor: pointer;
}

.disabled {
  .icon-component {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
