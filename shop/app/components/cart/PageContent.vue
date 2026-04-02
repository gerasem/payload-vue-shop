<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()
</script>

<template>
  <!-- Empty cart state -->
  <div v-if="!cartStore.hasItems" class="py-12 text-center">
    <UIcon name="i-bi-cart" class="mx-auto mb-4 h-16 w-16 text-gray-400" />
    <p class="mb-4 text-lg text-gray-600">
      {{ t('Your cart is empty.') }}
    </p>
    <UButton :to="localePath('/all-items')" color="primary" size="lg">
      {{ t('Continue Shopping') }}
    </UButton>
  </div>

  <!-- Cart with items -->
  <div v-else class="grid gap-8 lg:grid-cols-3">
    <!-- Cart items list -->
    <div class="lg:col-span-2">
      <!-- Desktop Headers -->
      <div
        class="hidden md:flex items-center gap-4 px-4 py-3 border-b border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-50/50 rounded-t-lg"
      >
        <div class="w-20 sm:w-24 flex-shrink-0">{{ t('Product') }}</div>
        <div class="flex-1"></div>
        <div class="w-24 text-center">{{ t('Price') }}</div>
        <div class="w-32 text-center">{{ t('Quantity') }}</div>
        <div class="w-24 text-right">{{ t('Total') }}</div>
        <div class="w-8"></div>
      </div>

      <div
        class="divide-y divide-gray-100 bg-white shadow-sm border border-gray-100 rounded-b-lg px-4"
      >
        <CartItem
          v-for="item in cartStore.items"
          :key="`${item.productId}-${item.variantId}`"
          :item="item"
        />
      </div>
    </div>

    <!-- Cart summary sidebar -->
    <div class="lg:col-span-1">
      <CartSummary />
    </div>
  </div>
</template>
