<script setup lang="ts">
import type { ICartItem } from '@/types'
import { formatEuro } from '@/utils/price'
import { useCartStore } from '@/stores/useCartStore'

const props = defineProps<{
  item: ICartItem
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()
const config = useRuntimeConfig()

// Local quantity state
const quantity = ref(props.item.qty)

// Computed inventory status
const isOutOfStock = computed(() => props.item.inventory === 0)
const isLowStock = computed(
  () =>
    props.item.inventory !== null &&
    props.item.inventory !== undefined &&
    props.item.inventory > 0 &&
    props.item.inventory <= 5
)
const hasUnlimitedStock = computed(
  () => props.item.inventory === null || props.item.inventory === undefined
)

// Quantity validation
const quantityError = computed(() => {
  if (hasUnlimitedStock.value) return false
  if (props.item.inventory === null || props.item.inventory === undefined) return false
  return quantity.value > props.item.inventory
})

const maxQuantity = computed(() => {
  if (hasUnlimitedStock.value) return 999
  return props.item.inventory || 1
})

// Update quantity in cart
function updateQuantity() {
  // Validate and clamp quantity
  if (quantity.value < 1) quantity.value = 1
  if (!hasUnlimitedStock.value && quantity.value > maxQuantity.value) {
    quantity.value = maxQuantity.value
  }

  cartStore.updateQuantity(props.item.productId, props.item.variantId, quantity.value)
}

function decrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--
    updateQuantity()
  }
}

function incrementQuantity() {
  if (hasUnlimitedStock.value || quantity.value < maxQuantity.value) {
    quantity.value++
    updateQuantity()
  }
}

function removeItem() {
  cartStore.remove(props.item.productId, props.item.variantId)
}

// Image URL helper
const imageUrl = computed(() => {
  if (!props.item.image) return ''
  return `${config.public.payloadUrl}${props.item.image}`
})

// Line total
const lineTotal = computed(() => props.item.priceInEUR * quantity.value)
</script>

<template>
  <div class="flex gap-4 border-b border-gray-200 pb-4">
    <!-- Product image -->
    <NuxtLink :to="localePath(`/item/${item.slug}`)">
      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-32 sm:w-32">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          :alt="item.title"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </NuxtLink>

    <!-- Product info -->
    <div class="flex flex-1 flex-col">
      <div class="flex justify-between">
        <div class="flex-1">
          <h3 class="text-base font-medium text-gray-900">
            <NuxtLink :to="localePath(`/item/${item.slug}`)">
              {{ item.title }}
            </NuxtLink>
          </h3>
          <p v-if="item.variantTitle" class="mt-1 text-sm text-gray-500">
            {{ item.variantTitle }}
          </p>

          <!-- Inventory status -->
          <div class="mt-2">
            <UBadge v-if="isOutOfStock" color="error" size="xs">
              {{ t('Out of stock') }}
            </UBadge>
            <UBadge v-else-if="isLowStock" color="warning" size="xs">
              Only {{ item.inventory }} left
            </UBadge>
          </div>
        </div>

        <!-- Remove button -->
        <div class="ml-4">
          <UButton
            icon="i-heroicons-x-mark"
            color="neutral"
            variant="ghost"
            size="sm"
            @click="removeItem"
            aria-label="Remove item"
          />
        </div>
      </div>

      <!-- Price and quantity controls -->
      <div class="mt-4 flex items-center justify-between">
        <!-- Quantity controls -->
        <CartQuantity
          v-model="quantity"
          :inventory="item.inventory"
          :error="quantityError"
          @update:model-value="updateQuantity"
          @decrement="decrementQuantity"
          @increment="incrementQuantity"
        />

        <!-- Price -->
        <div class="text-right">
          <template v-if="cartStore.isHydrating">
            <USkeleton class="h-4 w-24 mb-1 ml-auto" />
            <USkeleton class="h-6 w-16 ml-auto" />
          </template>
          <template v-else>
            <p class="text-sm text-gray-500">{{ formatEuro(item.priceInEUR) }} × {{ quantity }}</p>
            <p class="text-base font-medium text-gray-900">
              {{ formatEuro(lineTotal) }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
