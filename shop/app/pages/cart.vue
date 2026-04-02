<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

const { data: page } = await useAsyncData('cart-page-content', () => usePayloadPage('warenkorb'))

usePayloadPageSeo(page)
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="mb-8 text-4xl">
      {{ page?.title || t('Shopping Cart') }}
    </h1>

    <div v-if="!cartStore.hasItems" class="py-12 text-center">
      <UIcon name="i-bi-cart" class="mx-auto mb-4 h-16 w-16 text-gray-400" />

      <p class="mb-4 text-lg">
        {{ t('Your cart is empty.') }}
      </p>

      <UButton :to="localePath('/all-items')" color="primary" size="lg">
        {{ t('Continue Shopping') }}
      </UButton>
    </div>

    <div v-else class="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-3">
      <div class="col-span-1 lg:order-2">
        <CartSummary :show-total="false" />
      </div>

      <div class="col-span-1 lg:col-span-2 space-y-4 lg:order-1">
        <CartItem
          v-for="item in cartStore.items"
          :key="`${item.productId}-${item.variantId}`"
          :item="item"
        />
      </div>

      <ContentText2Columns
        v-if="page?.content"
        class="col-span-1 lg:col-span-2 lg:order-3"
        :text="richTextToHTML(page.content)"
      />
    </div>
  </div>
</template>
