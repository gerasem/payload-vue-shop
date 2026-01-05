<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  inventory: number | null | undefined
  error?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'increment'): void
  (e: 'decrement'): void
}>()

const quantity = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// Check if unlimited stock
const hasUnlimitedStock = computed(
  () => props.inventory === null || props.inventory === undefined
)

const maxQuantity = computed(() => {
  if (hasUnlimitedStock.value) return 999
  return props.inventory || 1
})

function handleBlur() {
  // Ensure valid range
  if (quantity.value < 1) {
    quantity.value = 1
  }
  if (!hasUnlimitedStock.value && quantity.value > maxQuantity.value) {
    quantity.value = maxQuantity.value
  }
}
</script>

<template>
  <div class="flex items-center gap-2">
    <UButton
      icon="i-heroicons-minus"
      size="sm"
      color="neutral"
      variant="outline"
      :disabled="modelValue <= 1"
      @click="emit('decrement')"
    />

    <UInput
      v-model.number="quantity"
      type="number"
      min="1"
      :max="hasUnlimitedStock ? 999 : inventory!"
      class="w-20 text-center"
      :class="{ 'border-red-500': error }"
      @blur="handleBlur"
    />

    <UButton
      icon="i-heroicons-plus"
      size="sm"
      color="neutral"
      variant="outline"
      :disabled="!hasUnlimitedStock && modelValue >= maxQuantity"
      @click="emit('increment')"
    />
  </div>
</template>

<style scoped>
/* Hide number input spinners */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
