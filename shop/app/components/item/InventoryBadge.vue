<script setup lang="ts">
const props = defineProps<{
  quantity: number | null | undefined
}>()

const status = computed(() => {
  if (props.quantity === null || props.quantity === undefined || props.quantity <= 0) {
    return {
      label: 'Out of Stock',
      color: 'red' as const,
      show: true
    }
  }
  
  if (props.quantity <= 5) {
    return {
      label: `Only ${props.quantity} left`,
      color: 'orange' as const,
      show: true
    }
  }
  
  return {
    label: 'In Stock',
    color: 'green' as const,
    show: true
  }
})
</script>

<template>
  <UBadge 
    v-if="status.show"
    :color="status.color"
    variant="subtle"
    size="md"
  >
    {{ status.label }}
  </UBadge>
</template>
