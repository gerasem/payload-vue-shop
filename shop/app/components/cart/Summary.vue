<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import { formatEuro } from '@/utils/price'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

withDefaults(
  defineProps<{
    showCheckoutButton?: boolean
    showTotal?: boolean
    showContinueShopping?: boolean
  }>(),
  {
    showCheckoutButton: true,
    showTotal: true,
    showContinueShopping: true
  }
)
</script>

<template>
  <div class="sticky top-24 shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] bg-white">
    <!-- Free shipping banner -->
    <div
      class="flex bg-secondary-100 px-6 h-14 justify-center items-center"
      v-if="cartStore.isHydrating || cartStore.totalInEUR < cartStore.freeShippingThreshold"
    >
      <USkeleton v-if="cartStore.isHydrating" class="h-5 w-48 mx-auto" />
      <span v-else class="font-medium text-secondary">
        {{
          t('Free shipping over {amount}', { amount: formatEuro(cartStore.freeShippingThreshold) })
        }}
      </span>
    </div>

    <div v-else-if="showTotal" class="flex bg-green-50 px-6 h-14 justify-center items-center">
      <span class="font-medium text-green-700"> {{ t('Free shipping applied!') }} </span>
    </div>

    <div class="p-6">
      <!-- Subtotal -->
      <div class="mb-3 flex gap-4">
        <span class="text-gray-500 flex-1 text-right">{{ t('Subtotal') }}</span>
        <div class="flex flex-1">
          <USkeleton v-if="cartStore.isHydrating && !cartStore.count" class="h-5 w-20" />
          <BaseAnimatedPrice v-else :value="cartStore.totalInEUR" class="font-bold" />
        </div>
      </div>

      <!-- Shipping -->
      <div v-if="showTotal" class="mb-3 flex gap-4">
        <span class="text-gray-500 flex-1 text-right">{{ t('Shipping') }}</span>
        <div class="flex flex-1">
          <span v-if="cartStore.shippingTotal === 0" class="font-bold text-green-600">
            {{ t('Free') }}
          </span>
          <BaseAnimatedPrice v-else :value="cartStore.shippingTotal" class="font-bold" />
        </div>
      </div>

      <!-- Total -->
      <div v-if="showTotal" class="mb-8 flex gap-4">
        <span class="text-gray-500 flex-1 text-right">{{ t('Total') }}</span>
        <div class="flex flex-1">
          <USkeleton v-if="cartStore.isHydrating && !cartStore.count" class="h-7 w-28" />
          <BaseAnimatedPrice v-else :value="cartStore.grandTotal" class="font-bold text-primary" />
        </div>
      </div>

      <!-- Action button: slot or default checkout button -->
      <slot name="action">
        <UButton
          v-if="showCheckoutButton"
          :to="localePath('/checkout')"
          color="primary"
          size="xl"
          block
          :disabled="!cartStore.hasItems"
          class="py-3"
        >
          {{ t('Proceed to Checkout') }}
        </UButton>
      </slot>
    </div>
  </div>
</template>
