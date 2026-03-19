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
  <div class="sticky top-4 shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
    <!-- Free shipping banner -->
    <div 
      class="bg-[#dfa44c]/10 py-3 px-6 text-center border-b border-[#dfa44c]/20"
      v-if="cartStore.isHydrating || cartStore.totalInEUR < cartStore.freeShippingThreshold"
    >
      <USkeleton v-if="cartStore.isHydrating" class="h-5 w-48 mx-auto" />
      <span v-else class="text-sm font-medium text-[#dfa44c]">
        {{ t('Free shipping over {amount}', { amount: formatEuro(cartStore.freeShippingThreshold) }) }}
      </span>
    </div>
    <div 
      v-else-if="showTotal"
      class="bg-green-50 py-3 px-6 text-center border-b border-green-100"
    >
      <span class="text-sm font-medium text-green-700">
        ✓ {{ t('Free shipping applied!') }}
      </span>
    </div>

    <div class="p-6">
      <!-- Subtotal -->
      <div class="mb-3 flex justify-between items-center text-sm">
        <span class="text-gray-500 font-normal">{{ t('Subtotal') }}</span>
        <div class="flex items-center">
          <USkeleton v-if="cartStore.isHydrating && !cartStore.count" class="h-5 w-20" />
          <BaseAnimatedPrice v-else :value="cartStore.totalInEUR" class="font-bold text-gray-700 text-base" />
        </div>
      </div>

      <!-- Shipping -->
      <div v-if="showTotal" class="mb-5 flex justify-between items-center text-sm">
        <span class="text-gray-500 font-normal">{{ t('Shipping') }}</span>
        <div class="flex items-center">
          <span v-if="cartStore.shippingTotal === 0" class="font-bold text-green-600">
            {{ t('Free') }}
          </span>
          <BaseAnimatedPrice v-else :value="cartStore.shippingTotal" class="font-bold text-gray-700 text-base" />
        </div>
      </div>

      <!-- Total -->
      <div v-if="showTotal" class="mb-8 flex justify-between items-center pt-2">
        <span class="text-gray-500 font-normal">{{ t('Total') }}</span>
        <div class="flex items-center">
          <USkeleton v-if="cartStore.isHydrating && !cartStore.count" class="h-7 w-28" />
          <BaseAnimatedPrice v-else :value="cartStore.grandTotal" class="font-bold text-xl text-[#eb3e7d]" />
        </div>
      </div>

      <!-- Action button: slot or default checkout button -->
      <slot name="action">
        <UButton
          v-if="showCheckoutButton"
          :to="localePath('/checkout')"
          color="primary"
          size="lg"
          block
          :disabled="!cartStore.hasItems"
          class="py-3"
        >
          {{ t('Proceed to Checkout') }}
        </UButton>
      </slot>

      <!-- Continue shopping link -->
      <UButton
        v-if="showContinueShopping"
        :to="localePath('/all-items')"
        variant="link"
        color="neutral"
        block
        class="mt-4 text-xs font-normal opacity-70 hover:opacity-100 transition-opacity"
      >
        {{ t('Continue Shopping') }}
      </UButton>
    </div>
  </div>
</template>
