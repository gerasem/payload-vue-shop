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

const isPopoverOpen = ref(false)

function removeItem() {
  isPopoverOpen.value = false
  cartStore.remove(props.item.productId, props.item.variantId)
}

function closePopover() {
  isPopoverOpen.value = false
}

// Image URL helper
const imageUrl = computed(() => {
  if (!props.item.image) return ''
  return `${config.public.payloadUrl}${props.item.image}`
})

// Line total
const lineTotal = computed(() => props.item.priceInEUR * quantity.value)

// Display name/variant splitting logic
const displayTitle = computed(() => {
  const match = props.item.title.match(/^(.*)\s\((.*)\)$/)
  if (match && match[1]) return match[1].trim()
  return props.item.title
})

const displayVariant = computed(() => {
  // If we have explicit variant title from the system, use it
  if (props.item.variantTitle && props.item.variantTitle !== props.item.title) {
    return props.item.variantTitle
  }
  // Otherwise try to extract from title if it follows "Name (Variant)" pattern
  const match = props.item.title.match(/^(.*)\s\((.*)\)$/)
  if (match && match[2]) return match[2].trim()
  return null
})
</script>

<template>
  <div class="flex items-center gap-4 border-b border-gray-200 py-4 last:border-0">
    <!-- 1. Image -->
    <NuxtLink :to="localePath(`/item/${item.slug}`)" class="group relative block">
      <div
        class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 sm:h-24 sm:w-24 border border-gray-100 group-hover:opacity-75 transition-opacity"
      >
        <img
          v-if="imageUrl"
          :src="imageUrl"
          :alt="item.title"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </NuxtLink>

    <!-- 2. Product Name and Variant -->
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
        <NuxtLink :to="localePath(`/item/${item.slug}`)">
          {{ displayTitle }}
        </NuxtLink>
      </h3>
      <p v-if="displayVariant" class="mt-0.5 text-xs text-gray-500 line-clamp-1">
        {{ displayVariant }}
      </p>

      <!-- Low Stock Warning (Minimalist) -->
      <div v-if="isLowStock || isOutOfStock" class="mt-1">
        <span v-if="isOutOfStock" class="text-[10px] font-bold uppercase text-red-600 tracking-wider">
          {{ t('Out of stock') }}
        </span>
        <span v-else class="text-[10px] uppercase text-orange-600 tracking-wider">
          {{ t('Only {count} left', { count: item.inventory }) }}
        </span>
      </div>
    </div>

    <!-- 3. Price per 1pc -->
    <div class="hidden md:block w-24 text-center">
      <BaseAnimatedPrice :value="item.priceInEUR" class="text-sm font-medium text-gray-600" />
    </div>

    <!-- 4. Quantity block -->
    <div class="flex items-center justify-center w-32">
      <CartQuantity
        v-model="quantity"
        :inventory="item.inventory"
        :error="quantityError"
        @update:model-value="updateQuantity"
        @decrement="decrementQuantity"
        @increment="incrementQuantity"
      />
    </div>

    <!-- 5. Total Price (Price x Quantity) -->
    <div class="w-24 text-right">
      <template v-if="cartStore.isHydrating && !cartStore.count">
        <USkeleton class="h-5 w-20 ml-auto" />
      </template>
      <template v-else>
        <div class="flex flex-col items-end">
          <BaseAnimatedPrice :value="lineTotal" class="font-bold text-gray-900" />
          <!-- Mobile-only unit price -->
          <div class="md:hidden flex items-baseline gap-1">
            <BaseAnimatedPrice :value="item.priceInEUR" class="text-[10px] text-gray-400" />
            <span class="text-[10px] text-gray-400">/ шт</span>
          </div>
        </div>
      </template>
    </div>

    <!-- 6. Remove button (Крестик) with Confirmation Popover -->
    <div class="flex-shrink-0">
      <UPopover v-model:open="isPopoverOpen" :popper="{ placement: 'top-end' }">
        <UButton
          icon="i-bi-x-lg"
          color="neutral"
          variant="ghost"
          size="sm"
          class="text-gray-400 hover:text-red-500 transition-colors p-1"
          aria-label="Remove item"
        />

        <template #content>
          <div class="p-4 w-48 text-center bg-white shadow-xl rounded-lg">
            <p class="text-sm font-medium text-gray-900 mb-3">
              {{ t('Remove item?') }}
            </p>
            <div class="flex gap-2 justify-center">
              <UButton
                variant="ghost"
                color="neutral"
                size="xs"
                @click="closePopover"
              >
                {{ t('Cancel') }}
              </UButton>
              <UButton
                color="red"
                size="xs"
                @click="removeItem"
              >
                {{ t('Remove') }}
              </UButton>
            </div>
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>
