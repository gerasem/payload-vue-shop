<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import { gsap } from 'gsap'
import { formatEuro } from '@/utils/price'

const props = withDefaults(
  defineProps<{
    value: number // Value in EUR (float) or cents (if handled by formatter)
    duration?: number
  }>(),
  {
    duration: 0.5
  }
)

const tweened = reactive({
  value: props.value
})

// Whenever props.value changes, animate the tweenedValue
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
</script>

<template>
  <span>{{ formattedPrice }}</span>
</template>
