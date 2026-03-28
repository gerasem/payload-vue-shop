<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  inventory: number | null | undefined
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const quantity = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const maxQuantity = computed(() => {
  if (props.inventory === null || props.inventory === undefined) return undefined
  return props.inventory || 1
})
</script>

<template>
  <UInputNumber
    v-model="quantity"
    size="md"
    variant="ghost"
    :min="1"
    :max="maxQuantity"
  />
</template>
