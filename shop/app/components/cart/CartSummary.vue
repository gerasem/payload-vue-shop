<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import { formatEuro } from '@/utils/price'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

withDefaults(defineProps<{
  showCheckoutButton?: boolean
}>(), {
  showCheckoutButton: true
})
</script>

<template>
  <div class="sticky top-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <h2 class="mb-4 text-lg font-semibold text-gray-900">
      {{ t('Order Summary') }}
    </h2>

    <!-- Subtotal -->
    <div class="mb-4 flex justify-between border-b border-gray-200 pb-4">
      <span class="text-gray-600">{{ t('Subtotal') }}</span>
      <USkeleton v-if="cartStore.isHydrating" class="h-6 w-24" />
      <span v-else class="font-semibold text-gray-900">{{ cartStore.totalFormatted }}</span>
    </div>

    <!-- Free shipping message -->
    <div v-if="cartStore.isHydrating" class="mb-4">
      <USkeleton class="h-12 w-full rounded-md" />
    </div>
    <div v-else-if="cartStore.totalInEUR < 50" class="mb-4 rounded-md bg-blue-50 p-3">
      <p class="text-sm text-blue-700">
        {{ t('Free shipping over 50€') }}
      </p>
      <p class="mt-1 text-xs text-blue-600">
        {{
          t('Add {amount} more to qualify', {
            amount: formatEuro(50 - cartStore.totalInEUR)
          })
        }}
      </p>
    </div>
    <div v-else class="mb-4 rounded-md bg-green-50 p-3">
      <p class="text-sm font-medium text-green-700">✓ {{ t('Free shipping applied!') }}</p>
    </div>

    <!-- Checkout button -->
    <UButton
      v-if="showCheckoutButton"
      :to="localePath('/checkout')"
      color="primary"
      size="lg"
      block
      :disabled="!cartStore.hasItems"
    >
      {{ t('Proceed to Checkout') }}
    </UButton>

    <!-- Continue shopping link -->
    <UButton :to="localePath('/all-items')" variant="link" color="neutral" block class="mt-4">
      {{ t('Continue Shopping') }}
    </UButton>
  </div>
</template>
