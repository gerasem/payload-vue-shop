<script setup lang="ts">
const props = defineProps<{
  quantity: number | null | undefined
}>()

const { t } = useI18n()

const status = computed(() => {
  if (props.quantity === null || props.quantity === undefined || props.quantity <= 0) {
    return {
      label: t('Out of stock'),
      color: 'error' as const,
      show: true
    }
  }
  
  if (props.quantity <= 5) {
    return {
      label: t('Only {count} left', { count: props.quantity }),
      color: 'warning' as const,
      show: true
    }
  }
  
  return {
    label: t('In stock'),
    color: 'success' as const,
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
