<script setup lang="ts">
import ItemGallery from '@/components/item/ItemGallery.vue'
import VariantSelector from '@/components/item/VariantSelector.vue'
import InventoryBadge from '@/components/item/InventoryBadge.vue'
import type { IItem } from '@/types'
import { richTextToHTML } from '@/utils/richtext'
import { useCartStore } from '@/stores/useCartStore'
import { useLiveInventory } from '@/composables/useLiveInventory'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const toast = useToast()
const cartStore = useCartStore()

// Fetch product data (SSR)
const { data: product } = await useAsyncData(`item-${route.params.slug}`, async () => {
  const slug = route.params.slug as string
  return await usePayloadItemBySlug(slug)
})

// Handle 404
if (!product.value) {
  throw createError({
    statusCode: 404,
    message: 'Product not found'
  })
}

// Variant logic extracted to composable
const { selectedOptions, selectedVariant, displayPrice } = useProductVariants(product)

// Live inventory state
const liveInventory = ref<number | null>(null)

// Check live inventory on mount (for base product) or when variant changes
async function updateInventory() {
  const productId = product.value?.id
  const variantId = selectedVariant.value?.id
  
  if (productId) {
    liveInventory.value = await useLiveInventory(productId, variantId)
  }
}

onMounted(() => {
  // Always fetch inventory on mount to get fresh data
  updateInventory()
})

watch(selectedVariant, () => {
    liveInventory.value = null // Reset while fetching
    updateInventory()
})

// Inventory quantity
const inventoryQuantity = computed(() => {
  // Use live value if available, otherwise fall back to static data
  if (liveInventory.value !== null) {
      return liveInventory.value
  }
  return selectedVariant.value?.inventory ?? product.value?.inventory
})

// Check if out of stock
const isOutOfStock = computed(() => {
  const qty = inventoryQuantity.value
  return qty !== null && qty !== undefined && qty === 0
})

// Check if can add to cart
const canAddToCart = computed(() => {
  // If Out of Stock, cannot add
  if (isOutOfStock.value) return false

  // If has variants, must select all options
  if (product.value?.enableVariants) {
    const requiredOptions = product.value?.variantTypes?.length || 0
    const selectedCount = Object.keys(selectedOptions.value).length
    return selectedCount === requiredOptions && !!selectedVariant.value
  }

  return true
})

// Quantity management
const quantity = ref(1)

function increaseQuantity() {
  const max = inventoryQuantity.value
  // Increase if unlimited (null/undefined) OR current < max
  if (max === null || max === undefined || quantity.value < max) {
    quantity.value++
  }
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function validateQuantity() {
  const max = inventoryQuantity.value

  // Ensure quantity is at least 1
  if (quantity.value < 1) {
    quantity.value = 1
  }

  // Ensure quantity doesn't exceed inventory (only if constrained)
  if (max !== null && max !== undefined && quantity.value > max) {
    quantity.value = max
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

  await cartStore.add(product.value!.id, quantity.value, selectedVariant.value?.id || null)

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
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          v-if="product?.enableVariants && !canAddToCart && !isOutOfStock"
          color="warning"
          variant="subtle"
          :title="t('Please select all product options')"
        />
        
        <!-- Out of stock message -->
         <UAlert
          v-if="isOutOfStock"
          color="error"
          variant="subtle"
          :title="t('This product is currently out of stock')"
          icon="i-heroicons-exclamation-circle"
        />

        <!-- Quantity Selector & Add to Cart -->
        <div v-if="!isOutOfStock" class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <UButton
              icon="i-heroicons-minus"
              size="md"
              color="neutral"
              variant="outline"
              :disabled="quantity <= 1"
              @click="decreaseQuantity"
            />
            <UInput
              v-model.number="quantity"
              type="number"
              min="1"
              :max="inventoryQuantity || undefined"
              class="w-20 text-center"
              @input="validateQuantity"
              @blur="validateQuantity"
            />
            <UButton
              icon="i-heroicons-plus"
              size="md"
              color="neutral"
              variant="outline"
              :disabled="
                inventoryQuantity !== null &&
                inventoryQuantity !== undefined &&
                quantity >= inventoryQuantity
              "
              @click="increaseQuantity"
            />
          </div>

          <!-- Add to Cart Button -->
          <UButton
            :disabled="
              !canAddToCart ||
              (inventoryQuantity !== null &&
                inventoryQuantity !== undefined &&
                quantity > inventoryQuantity) ||
              adding
            "
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
