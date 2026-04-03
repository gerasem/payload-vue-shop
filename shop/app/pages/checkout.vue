<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()
const router = useRouter()
const toast = useToast()

// Fetch checkout page content
const { data: page } = await useAsyncData('checkout-page-content', () => usePayloadPage('checkout'))

definePageMeta({
  layout: 'default',
  ssr: false
})

// SEO
usePayloadPageSeo(page)

// Guard: redirect to cart if no items
onMounted(async () => {
  if (!cartStore.hasItems) {
    router.replace(localePath('/cart'))
    return
  }

  // Ensure we have the latest shipping methods loaded
  await cartStore.fetchShippingSettings()
})

async function handleFormSubmit(formData: any) {
  const result = await checkoutStore.createOrder(formData)

  if (result.success && result.clientSecret) {
    // Have clientSecret — go to Stripe payment form
    router.push(localePath('/payment'))
  } else if (result.success && !result.clientSecret) {
    // Order created but no Stripe (e.g. Stripe not configured) — treat as success
    await cartStore.clear()
    checkoutStore.clear()
    router.push(localePath('/payment/success'))
  } else {
    toast.add({
      title: t('Error'),
      description: result.error || t('Failed to create order'),
      color: 'error',
      icon: 'i-bi-exclamation-circle'
    })
  }
}
</script>

<template>
  <BaseContainer>
    <h1 class="mb-8 text-4xl">
      {{ page?.title || t('Checkout') }}
    </h1>

    <div class="grid gap-8 lg:grid-cols-3">
      <!-- Checkout Form (Left Column) -->
      <div class="lg:col-span-2 space-y-8">
        <CheckoutForm :loading="checkoutStore.loading" @submit="handleFormSubmit" />

        <!-- Shipping Methods Selection -->
        <div
          v-if="cartStore.shippingMethods && cartStore.shippingMethods.length > 0"
          class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 class="text-xl font-medium mb-4">{{ t('Shipping Method') }}</h2>
          <URadioGroup
            v-model="cartStore.selectedShippingMethodId"
            :items="
              cartStore.shippingMethods.map((m: any) => ({
                value: m.id,
                label: `${m.name} — ${formatEuro(m.price)}`,
                description: m.description
              }))
            "
            name="shipping-method"
            class="space-y-4"
          />
        </div>

        <!-- SEO Text from Checkout Page (Below Form) -->
        <div class="single-column-text">
          <ContentText2Columns v-if="page?.content" :text="richTextToHTML(page.content)" />
        </div>
      </div>

      <!-- Order Summary (Right Column) — button inside the block like on cart page -->
      <div class="lg:col-span-1 space-y-4">
        <UButton
          icon="i-bi-arrow-left"
          variant="ghost"
          color="neutral"
          :to="localePath('/cart')"
          class="mb-2"
        >
          {{ t('Back to Cart') }}
        </UButton>

        <CartSummary :show-checkout-button="false" :show-continue-shopping="false">
          <template #action>
            <UButton
              type="submit"
              form="checkout-form"
              class="py-3"
              block
              size="xl"
              color="primary"
              icon="i-bi-lock"
              :loading="checkoutStore.loading"
              :disabled="checkoutStore.loading"
            >
              {{ checkoutStore.loading ? t('Processing payment...') : t('Continue to Payment') }}
            </UButton>
          </template>
        </CartSummary>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
/* Force single column for the text in checkout, matching cart page */
:deep(.text-content p) {
  column-count: 1 !important;
}
</style>
