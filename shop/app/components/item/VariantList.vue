<script setup lang="ts">
import { formatEuro } from '@/utils/price'

const props = defineProps<{
  variants:
    | Array<{
        id: number
        title?: string | null
        priceInEUR?: number | null
        inventory?: number | null
        options?: Array<{
          id: number
          label: string
          value: string
        }> | null
      }>
    | null
    | undefined
  selectedVariantId?: number | null
  basePrice?: number | null
}>()

const emit = defineEmits<{
  (
    e: 'select',
    variant: typeof props.variants extends Array<infer T> | null | undefined ? T : never
  ): void
}>()

const { t } = useI18n()

function variantLabel(variant: NonNullable<typeof props.variants>[number]): string {
  if (variant.options?.length) {
    return variant.options.map(o => o.label).join(' / ')
  }
  return variant.title || `Variant #${variant.id}`
}

function inventoryStatus(qty: number | null | undefined) {
  if (qty === 0) {
    return { label: t('Out of stock'), color: 'error' as const }
  }
  if (qty !== null && qty !== undefined && qty <= 3) {
    return { label: t('Only {count} left', { count: qty }), color: 'warning' as const }
  }
  if (qty !== null && qty !== undefined) {
    return { label: t('In stock'), color: 'success' as const }
  }
  return { label: t('In stock'), color: 'success' as const }
}
</script>

<template>
  <div v-if="variants && variants.length > 0" class="space-y-2">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ t('Variants') }}
    </label>

    <div class="grid grid-cols-2 gap-2">
      <button
        v-for="variant in variants"
        :key="variant.id"
        @click="emit('select', variant)"
        :disabled="variant.inventory === 0"
        class="variant-card"
        :class="{
          'variant-card--selected': selectedVariantId === variant.id,
          'variant-card--disabled': variant.inventory === 0
        }"
      >
        <!-- Title & Price -->
        <div class="variant-card__header">
          <span class="variant-card__title">{{ variantLabel(variant) }}</span>
          <UBadge v-if="variant.inventory === 0" color="error" variant="subtle" size="xs">
            {{ t('Out of stock') }}
          </UBadge>
          <span class="variant-card__price">{{ formatEuro(variant.priceInEUR ?? basePrice) }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.variant-card {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.625rem 0.75rem;
  border: 2px solid var(--ui-border);
  border-radius: 0.5rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
}

.variant-card:hover:not(.variant-card--disabled) {
  border-color: var(--ui-primary);
  background: var(--ui-primary-50, rgba(59, 130, 246, 0.05));
}

.variant-card--selected {
  border-color: var(--ui-primary);
  background: var(--ui-primary-50, rgba(59, 130, 246, 0.05));
  box-shadow: 0 0 0 1px var(--ui-primary);
}

.variant-card--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.variant-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.variant-card__title {
  font-weight: 500;
  color: var(--ui-text);
}

.variant-card__price {
  font-weight: 600;
  color: var(--ui-text);
  white-space: nowrap;
}
</style>
