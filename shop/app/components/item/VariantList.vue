<script setup lang="ts">
import type { IVariant } from '@/types'
import { formatEuro } from '@/utils/price'

const props = defineProps<{
  variants: IVariant[] | null | undefined
  selectedVariantId?: number | null
  basePrice?: number | null
  canAddToCart?: boolean
  isOutOfStock?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', variant: IVariant): void
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
        class="flex flex-col gap-1.5 px-3 py-2.5 border border-default cursor-pointer transition-all text-left hover:not-disabled:border-primary hover:not-disabled:bg-(--ui-primary)/5"
        :class="{
          'border-(--ui-primary) bg-(--ui-primary)/5 ring-1 ring-(--ui-primary)':
            selectedVariantId === variant.id,
          'opacity-50 cursor-not-allowed': variant.inventory === 0
        }"
      >
        <!-- Title & Price -->
        <div class="flex items-center justify-between gap-2">
          <span class="font-medium text-(--ui-text)">{{ variantLabel(variant) }}</span>

          <UBadge v-if="variant.inventory === 0" color="error" variant="subtle" size="xs">
            {{ t('Out of stock') }}
          </UBadge>

          <span class="font-semibold text-(--ui-text) whitespace-nowrap">{{
            formatEuro(variant.priceInEUR ?? basePrice)
          }}</span>
        </div>
      </button>
    </div>

    <!-- Warning if variants not selected -->
    <UAlert
      v-if="!canAddToCart && !isOutOfStock"
      color="warning"
      variant="soft"
      :title="t('Please select all product options')"
    />

    <!-- Out of stock message -->
    <UAlert
      v-if="isOutOfStock"
      color="error"
      variant="soft"
      :title="t('This product is currently out of stock')"
      icon="i-bi-exclamation-circle"
    />
  </div>
</template>
