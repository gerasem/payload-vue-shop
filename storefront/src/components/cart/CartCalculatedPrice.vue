<script setup lang="ts">
import { convertToLocale } from '@/utils/priceUtils'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { t } = useI18n()

const props = defineProps<{
  value: number | undefined
  label: string
  loading?: boolean
}>()

const animatedValue = ref<number | undefined>(props.value)

const animatePrice = (start: number, end: number, duration: number = 1000) => {
  let startTime: number | null = null
  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    animatedValue.value = Math.round(start + (end - start) * progress)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

watch(
  () => props.value,
  (newValue, oldValue) => {
    if (newValue !== undefined && oldValue !== undefined) {
      animatePrice(oldValue, newValue)
    } else {
      animatedValue.value = newValue
    }
  },
)
</script>

<template>
  <div class="columns cart__price-container">
    <div class="column">{{ t(label) }}:</div>
    <div
      v-if="loading"
      class="column"
    >
      <span class="tag is-skeleton">Loading ...</span>
    </div>

    <div
      v-else
      class="column"
    >
      <span
        v-if="animatedValue !== undefined"
        class="cart__form-price"
        >{{ convertToLocale({ amount: animatedValue }) }}</span
      >
      <span v-else> - </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  &__price-container {
    margin-bottom: 0;
  }

  &__form-price {
    font-weight: 600;
    display: inline-block;
    transition: all 0.3s ease;
  }

  &--total .cart__form-price {
    color: $color-secondary;
  }

  &--discount .cart__form-price {
    color: $color-primary;
  }
}
</style>
