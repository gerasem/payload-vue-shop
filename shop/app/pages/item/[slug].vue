<script setup lang="ts">
import { getMinPriceFormatted, areAllPricesEqual, formatEuro } from '@/utils/price'
import ItemGallery from '@/components/item/ItemGallery.vue'
import VariantSelector from '@/components/item/VariantSelector.vue'
import InventoryBadge from '@/components/item/InventoryBadge.vue'
import type { IItem } from '@/types'
import { richTextToHTML } from '@/utils/richtext'
import { useCartStore } from '@/stores/useCartStore'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const toast = useToast()
const cartStore = useCartStore()

// Fetch product data (SSR)
const { data: product } = await useAsyncData(
  `item-${route.params.slug}`,
  async () => {
    const slug = route.params.slug as string
    return await usePayloadItemBySlug(slug)
  }
)

// Handle 404
if (!product.value) {
  throw createError({
    statusCode: 404,
    message: 'Product not found'
  })
}

// Variant selection state
const selectedOptions = ref<Record<string, string>>({})

// Find selected variant based on options
const selectedVariant = computed(() => {
  if (!product.value?.enableVariants || !product.value?.variants?.docs) {
    return null
  }

  const selectedCount = Object.keys(selectedOptions.value).length
  if (selectedCount === 0) return null

  return product.value.variants.docs.find((variant) => {
    if (!variant?.options || variant.options.length === 0) return false

    let matches = true

    // Fixed: use [, selectedValue] to get VALUE from entries, not key
    for (const [, selectedValue] of Object.entries(selectedOptions.value)) {
      const hasMatchingOption = variant.options.some((opt: any) => opt.value === selectedValue)

      if (!hasMatchingOption) {
        matches = false
        break
      }
    }

    return matches && variant.options.length === selectedCount
  })
})

// Price display
const displayPrice = computed(() => {
  // If variant is selected, show variant price
  if (selectedVariant.value) {
    return formatEuro(selectedVariant.value.priceInEUR)
  }

  // Otherwise show product price or "from" price
  if (areAllPricesEqual(product.value)) {
    return formatEuro(product.value?.priceInEUR)
  }

  return `${t('priceFrom')} ${getMinPriceFormatted(product.value)}`
})

// Inventory quantity
const inventoryQuantity = computed(() => {
  return selectedVariant.value?.inventory ?? product.value?.inventory
})

// Check if can add to cart
const canAddToCart = computed(() => {
  // If has variants, must select all options
  if (product.value?.enableVariants) {
    const requiredOptions = product.value?.variantTypes?.length || 0
    const selectedCount = Object.keys(selectedOptions.value).length
    return selectedCount === requiredOptions && !!selectedVariant.value
  }

  // Otherwise just check inventory
  return (inventoryQuantity.value ?? 0) > 0
})

// Quantity management
const quantity = ref(1)

function increaseQuantity() {
  const maxQuantity = inventoryQuantity.value || 1
  if (quantity.value < maxQuantity) {
    quantity.value++
  }
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function validateQuantity() {
  const maxQuantity = inventoryQuantity.value || 1
  
  // Ensure quantity is at least 1
  if (quantity.value < 1) {
    quantity.value = 1
  }
  
  // Ensure quantity doesn't exceed inventory
  if (quantity.value > maxQuantity) {
    quantity.value = maxQuantity
  }
}

// Reset quantity when variant changes
watch(selectedVariant, () => {
  quantity.value = 1
})

// Add to cart function
const adding = ref(false)

async function addToCart() {
  if (!canAddToCart.value) return

  adding.value = true

  await cartStore.add(
    product.value!.id,
    quantity.value,
    selectedVariant.value?.id || null
  )

  adding.value = false

  // Show success toast
  const variantInfo = selectedVariant.value ? ` (${selectedVariant.value.title})` : ''
  toast.add({
    title: t('Added to cart'),
    description: `${product.value!.title}${variantInfo} × ${quantity.value}`,
    icon: 'i-heroicons-check-circle',
    color: 'success'
  })

  // Reset quantity
  quantity.value = 1
}

// SEO
usePageSeo({
  title: product.value?.meta?.title || product.value?.title || 'Product',
  description: product.value?.meta?.description || product.value?.title || ''
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Gallery -->
      <ItemGallery :images="product?.gallery" />

      <!-- Product Info -->
      <div class="flex flex-col space-y-6">
        <!-- Title -->
        <h1 class="text-3xl font-bold text-gray-900">
          {{ product?.title }}
        </h1>

        <!-- Price -->
        <div class="text-2xl font-semibold text-gray-900">
          {{ displayPrice }}
        </div>

        <!-- Inventory Badge -->
        <InventoryBadge :quantity="inventoryQuantity" />

        <!-- Variant Selector -->
        <VariantSelector
          v-if="product?.enableVariants"
          :variant-types="product?.variantTypes"
          v-model="selectedOptions"
        />

        <!-- Warning if variants not selected -->
        <UAlert
          v-if="product?.enableVariants && !canAddToCart"
          color="yellow"
          variant="subtle"
          :title="t('Please select all product options')"
        />

        <!-- Quantity Selector -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <UButton
              icon="i-heroicons-minus"
              size="md"
              color="gray"
              variant="outline"
              :disabled="quantity <= 1"
              @click="decreaseQuantity"
            />
            <UInput
              v-model.number="quantity"
              type="number"
              min="1"
              :max="inventoryQuantity || 1"
              class="w-20 text-center"
              @input="validateQuantity"
              @blur="validateQuantity"
            />
            <UButton
              icon="i-heroicons-plus"
              size="md"
              color="gray"
              variant="outline"
              :disabled="quantity >= (inventoryQuantity || 1)"
              @click="increaseQuantity"
            />
          </div>
          
          <!-- Add to Cart Button -->
          <UButton
            :disabled="!canAddToCart || quantity > (inventoryQuantity || 0) || adding"
            :loading="adding"
            size="lg"
            class="flex-1"
            icon="i-heroicons-shopping-cart"
            @click="addToCart"
          >
            {{ adding ? t('Adding...') : t('Add to Cart') }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
