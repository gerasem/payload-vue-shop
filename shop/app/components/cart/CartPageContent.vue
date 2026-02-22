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
    <div class="lg:col-span-2 space-y-4">
      <CartItem
        v-for="item in cartStore.items"
        :key="`${item.productId}-${item.variantId}`"
        :item="item"
      />
    </div>

    <!-- Cart summary sidebar -->
    <div class="lg:col-span-1">
      <CartSummary />
    </div>
  </div>
</template>
