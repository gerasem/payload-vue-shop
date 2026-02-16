<script setup lang="ts">
import Text2Columns from '~/components/content/Text2Columns.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

// Fetch cart page content
const { data: page } = await useAsyncData('cart-page-content', () => usePayloadPage('warenkorb'))

definePageMeta({
  layout: 'default',
  // Disable SSR completely for cart page
  // This is necessary because cart components (CartItem, CartSummary, etc.)
  // all access the Pinia store, which causes SSR initialization errors
  ssr: false
})

// SEO
usePageSeo({
  title: page.value?.meta?.title || page.value?.title || t('Shopping Cart'),
  description: page.value?.meta?.description || t('Review your cart items and proceed to checkout')
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="mb-8 text-3xl font-bold text-gray-900">
      {{ page?.title || t('Shopping Cart') }}
    </h1>

    <!-- Empty cart state (ONLY if we know for sure it's empty from LS) -->
    <div v-if="!cartStore.hasItems" class="py-12 text-center">
      <UIcon name="i-heroicons-shopping-cart" class="mx-auto mb-4 h-16 w-16 text-gray-400" />
      <p class="mb-4 text-lg text-gray-600">
        {{ t('Your cart is empty.') }}
      </p>
      <UButton :to="localePath('/all-items')" color="primary" size="lg">
        {{ t('Continue Shopping') }}
      </UButton>
    </div>

    <!-- Loading state (Hydrating items from API) -->
    <div v-else-if="cartStore.isHydrating && cartStore.items.length === 0" class="grid gap-8 lg:grid-cols-3">
      <div class="lg:col-span-2 space-y-4">
        <div v-for="i in 3" :key="i" class="flex gap-4 p-4 border rounded-lg">
          <USkeleton class="h-24 w-24 rounded-md" />
          <div class="flex-1 space-y-2">
            <USkeleton class="h-4 w-3/4" />
            <USkeleton class="h-4 w-1/2" />
          </div>
        </div>
      </div>
      <div class="lg:col-span-1">
        <USkeleton class="h-64 rounded-lg" />
      </div>
    </div>

    <!-- Cart with items -->
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
      <div class="lg:col-span-1 h-fit">
        <CartSummary :show-total="false" />
      </div>

      <!-- SEO Text from Cart Page -->
      <!-- Cart Page Content -->
      <ContentText2Columns
        v-if="page?.content"
        :text="richTextToHTML(page.content)"
      />
    </div>
  </div>
</template>
