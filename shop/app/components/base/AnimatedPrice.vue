<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import { gsap } from 'gsap'
import { formatEuro } from '@/utils/price'

const props = withDefaults(
  defineProps<{
    value: number
    duration?: number
  }>(),
  {
    duration: 0.5
  }
)

const tweened = reactive({
  value: props.value
})

watch(
  () => props.value,
  newValue => {
    gsap.to(tweened, {
      duration: props.duration,
      value: newValue,
      ease: 'power2.out'
    })
  }
)

const formattedPrice = computed(() => formatEuro(tweened.value))

const widthStyle = computed(() => {
  const price = Math.abs(props.value) / 100
  const digits = Math.max(1, Math.floor(Math.log10(price || 1)) + 1)
  const width = 54 + (digits - 1) * 18
  return {
    width: `${width}px`
  }
})
</script>

<template>
  <span class="inline-block text-right tabular-nums" :style="widthStyle">
    {{ formattedPrice }}
  </span>
</template>
