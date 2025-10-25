<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps<{
  src: string
}>()

const imageName = computed((): string => {
  const parts = props.src.split('.')
  return parts.length > 1 ? parts.slice(0, -1).join('.') : props.src
})

const imageExtension = computed((): string => {
  const parts = props.src.split('.')
  return parts.length > 1 ? parts.pop() : ''
})

const loadImage = defineAsyncComponent({
  loader: () => import(`@/assets/images/${imageName.value}.${imageExtension.value}`),
  errorComponent: defineAsyncComponent(() => import(`@/assets/images/_default-image.svg`)),
})

const imageUrl = computed((): string => {
  const path = new URL(`../../assets/images/${props.src}`, import.meta.url).href
  if (path.endsWith('/undefined')) {
    return new URL(`../../assets/images/_default-image.svg`, import.meta.url).href
  } else {
    return new URL(`../../assets/images/${props.src}`, import.meta.url).href
  }
})
</script>

<template>
  <component
    v-if="imageExtension === 'svg'"
    :is="loadImage"
    class="image"
  />
  <img
    v-else
    :src="imageUrl"
  />
</template>

<style scoped lang="scss">
@forward 'bulma/sass/elements/image';
</style>
