<script setup lang="ts">
import type { IVariant } from '@/types'

const props = defineProps<{
  productId: number
  productTitle?: string | null
  selectedVariant?: IVariant | null
  inventoryQuantity?: number | null
  canAddToCart: boolean
  isOutOfStock: boolean
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const toast = useToast()
const cartStore = useCartStore()

const quantity = ref(1)
const adding = ref(false)

const maxQuantity = computed(() => {
  const inv = props.inventoryQuantity
  return inv === null || inv === undefined ? undefined : inv
})

// Reset quantity when variant changes
watch(
  () => props.selectedVariant?.id,
  () => {
    quantity.value = 1
  }
)

const isDisabled = computed(
  () =>
    !props.canAddToCart ||
    (props.inventoryQuantity !== null &&
      props.inventoryQuantity !== undefined &&
      quantity.value > props.inventoryQuantity) ||
    adding.value
)

const addToCart = async () => {
  if (!props.canAddToCart) return

  adding.value = true
  try {
    await cartStore.add(props.productId, quantity.value, props.selectedVariant?.id || null)

    const variantTitle = props.selectedVariant?.title
    const variantInfo = variantTitle ? ` (${variantTitle})` : ''
    toast.add({
      title: t('Added to cart'),
      description: `${props.productTitle}${variantInfo} × ${quantity.value}`,
      actions: [
        {
          label: t('Show Shopping Cart'),
          onClick: () => navigateTo(localePath('/cart'))
        }
      ]
    })

    quantity.value = 1
  } catch (e) {
    console.error('Failed to add to cart:', e)
    toast.add({ title: t('Error'), description: t('Failed to add item to cart'), color: 'error' })
  } finally {
    adding.value = false
  }
}
</script>

<template>
  <div v-if="!isOutOfStock && canAddToCart" class="flex gap-4">
    <UInputNumber
      v-model="quantity"
      size="xl"
      variant="ghost"
      :min="1"
      :max="maxQuantity"
      class="max-w-36"
      data-test="product-quantity-input"
    />

    <UButton
      :disabled="isDisabled"
      :loading="adding"
      size="xl"
      class="px-6"
      icon="i-bi-cart"
      data-test="add-to-cart-button"
      @click="addToCart"
    >
      {{ adding ? t('Adding...') : t('Add to Cart') }}
    </UButton>
  </div>
</template>
