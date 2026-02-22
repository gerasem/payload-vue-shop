<script setup lang="ts">
import CheckoutForm from '~/components/checkout/CheckoutForm.vue'

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
onMounted(() => {
  if (!cartStore.hasItems) {
    router.replace(localePath('/cart'))
  }
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
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
      {{ page?.title || t('Checkout') }}
    </h1>

    <div class="grid gap-8 lg:grid-cols-3">
      <!-- Checkout Form (Left Column) -->
      <div class="lg:col-span-2 space-y-8">
        <CheckoutForm :loading="checkoutStore.loading" @submit="handleFormSubmit" />

        <!-- SEO Text from Checkout Page (Below Form) -->
        <div class="single-column-text">
          <ContentText2Columns v-if="page?.content" :text="richTextToHTML(page.content)" />
        </div>
      </div>

      <!-- Order Summary (Right Column) — button inside the block like on cart page -->
      <div class="lg:col-span-1">
        <CartSummary :show-checkout-button="false" :show-continue-shopping="false">
          <template #action>
            <UButton
              type="submit"
              form="checkout-form"
              block
              size="lg"
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
  </div>
</template>

<style scoped>
/* Force single column for the text in checkout, matching cart page */
:deep(.text-content p) {
  column-count: 1 !important;
}
</style>
