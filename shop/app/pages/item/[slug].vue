<script setup lang="ts">
import type { IItem } from '@/types'

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

// Handle variant selection from VariantList
function onVariantSelect(variant: {
  id: number
  options?: Array<{ id: number; label: string; value: string }> | null
}) {
  if (!variant.options || !product.value?.variantTypes) return
  const newOptions: Record<string, string> = {}
  for (const opt of variant.options) {
    // Find which variantType this option belongs to
    const matchingType = product.value.variantTypes.find(type =>
      type.options?.docs?.some(doc => doc.value === opt.value)
    )
    if (matchingType) {
      newOptions[matchingType.name] = opt.value
    }
  }
  selectedOptions.value = newOptions
}

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
  return (selectedVariant.value as any)?.inventory ?? product.value?.inventory
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

const maxQuantity = computed(() => {
  const inv = inventoryQuantity.value
  if (inv === null || inv === undefined) return undefined
  return inv
})

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
  const variantInfo = selectedVariant.value ? ` (${(selectedVariant.value as any).title})` : ''
  toast.add({
    title: t('Added to cart'),
    description: `${product.value!.title}${variantInfo} × ${quantity.value}`,
    actions: [
      {
        label: t('Show Shopping Cart'),
        onClick: () => navigateTo(localePath('/cart'))
      }
    ]
  })

  // Reset quantity
  quantity.value = 1
}

// SEO
usePayloadPageSeo(product)

// === Structured Data (JSON-LD) ===
const { injectSchema } = useJsonLd()
const config = useRuntimeConfig()
const siteUrl = useRequestURL().origin

// Product Schema
injectSchema(() => {
  const p = product.value
  if (!p) return null

  // Resolve Image
  const images = p.gallery
  let imageUrl = undefined
  if (images && images.length > 0) {
    const imgObj = images[0]
    const u = imgObj?.url || imgObj?.thumbnailURL
    if (u) {
      imageUrl = u.startsWith('http') ? u : `${config.public.payloadUrl}${u}`
    }
  }

  // Resolve Description from SEO Meta or Title
  const description = p.meta?.description || p.title

  // Resolve Offers
  const offers: any[] = []
  if (p.enableVariants && p.variants?.docs?.length) {
    p.variants.docs.forEach((v: any) => {
      offers.push({
        '@type': 'Offer',
        name: v.title,
        sku: v.sku || undefined,
        price: ((v.priceInEUR ?? p.priceInEUR ?? 0) / 100).toFixed(2),
        priceCurrency: 'EUR',
        availability:
          v.inventory === 0 ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
        url: `${siteUrl}${route.fullPath}`
      })
    })
  } else {
    offers.push({
      '@type': 'Offer',
      price: ((p.priceInEUR ?? 0) / 100).toFixed(2),
      priceCurrency: 'EUR',
      availability:
        p.inventory === 0 ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
      url: `${siteUrl}${route.fullPath}`
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    image: imageUrl,
    description,
    offers
  }
})

// BreadcrumbList Schema
injectSchema(() => {
  const p = product.value
  if (!p) return null

  // Extract first category for breadcrumb, if available
  const cat = Array.isArray(p.categories) && p.categories.length > 0 ? p.categories[0] : null
  const catTitle = typeof cat === 'object' && cat?.title ? cat.title : 'Products'
  const catSlug = typeof cat === 'object' && cat?.slug ? `/category/${cat.slug}` : '/all-items'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: catTitle,
        item: `${siteUrl}${catSlug}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: p.title
      }
    ]
  }
})
</script>

<template>
  <AppContainer>
    <article class="grid gap-8 lg:grid-cols-2">
      <!-- Gallery -->
      <ItemGallery :images="product?.gallery" />

      <!-- Product Info -->
      <section class="flex flex-col space-y-6">
        <!-- Title -->
        <h1 class="text-4xl">
          {{ product?.title }}
        </h1>

        <!-- Price -->
        <div class="text-4xl font-semibold">
          {{ displayPrice }}
        </div>

        <!-- Inventory Badge -->
        <ItemInventoryBadge :quantity="inventoryQuantity" />

        <!-- Variant List -->
        <ItemVariantList
          v-if="product?.enableVariants"
          :variants="product?.variants?.docs"
          :selected-variant-id="selectedVariant?.id ?? null"
          :base-price="product?.priceInEUR"
          @select="onVariantSelect"
        />

        <!-- Warning if variants not selected -->
        <UAlert
          v-if="product?.enableVariants && !canAddToCart && !isOutOfStock"
          color="warning"
          variant="subtle"
          :title="t('Please select all product options')"
        />

        <!-- Out of stock message (only for variant products, simple products use InventoryBadge) -->
        <UAlert
          v-if="product?.enableVariants && isOutOfStock"
          color="error"
          variant="subtle"
          :title="t('This product is currently out of stock')"
          icon="i-bi-exclamation-circle"
        />

        <!-- Quantity Selector & Add to Cart -->
        <div v-if="!isOutOfStock && canAddToCart" class="flex gap-4">
          <UInputNumber
            v-model="quantity"
            size="xl"
            variant="ghost"
            :min="1"
            :max="maxQuantity"
            class="max-w-36"
          />

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
            size="xl"
            class="px-6"
            icon="i-bi-cart"
            @click="addToCart"
          >
            {{ adding ? t('Adding...') : t('Add to Cart') }}
          </UButton>
        </div>

        <!-- Shipping Terms (Storefront Replication) -->
        <div class="pt-4">
          <p class="flex gap-8">
            {{ t('Free shipping over 50€') }}

            <NuxtLink :to="localePath('/page/delivery')" class="text-secondary hover:underline">
              {{ t('Shipping conditions') }}
            </NuxtLink>
          </p>
        </div>
      </section>
    </article>

    <section v-if="product?.description" class="mt-12">
      <ContentText2Columns :text="richTextToHTML(product.description)" />
    </section>
  </AppContainer>
</template>
