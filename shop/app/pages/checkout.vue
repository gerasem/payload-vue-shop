<script setup lang="ts">
import Text2Columns from '~/components/content/Text2Columns.vue'
import CheckoutForm from '~/components/checkout/CheckoutForm.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

// Fetch checkout page content
const { data: page } = await useAsyncData('checkout-page-content', () => usePayloadPage('checkout'))

definePageMeta({
  layout: 'default',
  ssr: false
})

// SEO
usePageSeo({
  title: page.value?.meta?.title || page.value?.title || t('Checkout'),
  description: page.value?.meta?.description || t('Complete your order')
})

function handleFormSubmit(formData: any) {
  console.log('Form submitted', formData)
  // Logic to proceed to next step / payment would go here
}
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="mb-8 text-3xl font-bold text-gray-900">
      {{ page?.title || t('Checkout') }}
    </h1>

    <!-- Empty cart redirection/message could go here if needed, but for now we assume user has items or just show empty summary -->

    <div class="grid gap-8 lg:grid-cols-3">
      <!-- Checkout Form (Left Column) -->
      <div class="lg:col-span-2 space-y-8">
        <CheckoutForm @submit="handleFormSubmit" />

        <!-- SEO Text from Checkout Page (Below Form) -->
        <div class="single-column-text">
          <ContentText2Columns v-if="page?.content" :text="richTextToHTML(page.content)" />
        </div>
      </div>

      <!-- Order Summary (Right Column) -->
      <div class="lg:col-span-1 h-fit">
        <CartSummary :show-checkout-button="false" />
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
