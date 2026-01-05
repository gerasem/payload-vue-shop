<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import { usePageSeo } from '@/composables/usePageSeo'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

definePageMeta({
  layout: 'default',
  // Disable SSR for cart page to avoid Pinia initialization issues
  ssr: false
})

// SEO
usePageSeo({
  title: t('Shopping Cart'),
  description: t('Review your cart items and proceed to checkout')
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <h1 class="mb-8 text-3xl font-bold text-gray-900">
      {{ t('Shopping Cart') }}
    </h1>

    <!-- Loading state for SSR -->
    <div v-if="!cartStore" class="py-12 text-center">
      <p class="text-gray-600">Loading cart...</p>
    </div>

    <!-- Empty cart state -->
    <div v-else-if="!cartStore.hasItems" class="py-12 text-center">
      <UIcon name="i-heroicons-shopping-cart" class="mx-auto mb-4 h-16 w-16 text-gray-400" />
      <p class="mb-4 text-lg text-gray-600">
        {{ t('Your cart is empty.') }}
      </p>
      <UButton
        :to="localePath('/all-items')"
        color="primary"
        size="lg"
      >
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
  </div>
</template>
