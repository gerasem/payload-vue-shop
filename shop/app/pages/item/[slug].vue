<script setup lang="ts">
import type { IVariant } from '@/types'

// ─── Dependencies ────────────────────────────────────────────────────
const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const config = useRuntimeConfig()
const siteUrl = useRequestURL().origin
const cartStore = useCartStore()

// ─── Data Fetching ───────────────────────────────────────────────────
const { data: product } = await useAsyncData(`item-${route.params.slug}`, async () => {
  const slug = route.params.slug as string
  return await usePayloadItemBySlug(slug)
})

if (!product.value) {
  throw createError({ statusCode: 404, message: 'Product not found' })
}

// ─── Breadcrumb ──────────────────────────────────────────────────────
const firstCategory = computed(() => {
  const cats = product.value?.categories
  if (!cats) return null
  // categories can be a single object or an array depending on the query
  const cat = Array.isArray(cats) ? cats[0] : cats
  return typeof cat === 'object' && cat?.title && cat?.slug ? cat : null
})

// ─── Variants ────────────────────────────────────────────────────────
const { selectedOptions, selectedVariant, displayPrice } = useProductVariants(product)

const onVariantSelect = (variant: IVariant) => {
  if (!variant.options || !product.value?.variantTypes) return

  const newOptions: Record<string, string> = {}
  for (const opt of variant.options) {
    const matchingType = product.value.variantTypes.find(type =>
      type.options?.docs?.some(doc => doc.value === opt.value)
    )
    if (matchingType) {
      newOptions[matchingType.name] = opt.value
    }
  }
  selectedOptions.value = newOptions
}

// ─── Inventory ───────────────────────────────────────────────────────
const liveInventory = ref<number | null>(null)

const updateInventory = async () => {
  const productId = product.value?.id
  const variantId = selectedVariant.value?.id
  if (productId) {
    liveInventory.value = await useLiveInventory(productId, variantId)
  }
}

onMounted(() => updateInventory())

// When variant changes: reset inventory and refetch
watch(selectedVariant, () => {
  liveInventory.value = null
  updateInventory()
})

const inventoryQuantity = computed(() => {
  if (liveInventory.value !== null) return liveInventory.value
  return selectedVariant.value?.inventory ?? product.value?.inventory
})

const isOutOfStock = computed(() => {
  const qty = inventoryQuantity.value
  return qty !== null && qty !== undefined && qty === 0
})

// ─── Cart ────────────────────────────────────────────────────────────
const canAddToCart = computed(() => {
  if (isOutOfStock.value) return false

  if (product.value?.enableVariants) {
    const requiredOptions = product.value?.variantTypes?.length || 0
    const selectedCount = Object.keys(selectedOptions.value).length
    return selectedCount === requiredOptions && !!selectedVariant.value
  }

  return true
})

// ─── SEO ─────────────────────────────────────────────────────────────
usePayloadPageSeo(product)

const { injectSchema } = useJsonLd()

// Product Schema (JSON-LD)
injectSchema(() => {
  const p = product.value
  if (!p) return null

  const firstImage = p.gallery?.[0]
  const imgUrl = firstImage?.url || firstImage?.thumbnailURL
  const imageUrl = imgUrl
    ? imgUrl.startsWith('http')
      ? imgUrl
      : `${config.public.payloadUrl}${imgUrl}`
    : undefined

  const description = p.meta?.description || p.title

  const offers: any[] = []
  if (p.enableVariants && p.variants?.docs?.length) {
    for (const v of p.variants.docs) {
      offers.push({
        '@type': 'Offer',
        name: v.title,
        price: centsToDecimal(v.priceInEUR ?? p.priceInEUR),
        priceCurrency: 'EUR',
        availability:
          v.inventory === 0 ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
        url: `${siteUrl}${route.fullPath}`
      })
    }
  } else {
    offers.push({
      '@type': 'Offer',
      price: centsToDecimal(p.priceInEUR),
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

// BreadcrumbList Schema (JSON-LD)
injectSchema(() => {
  const p = product.value
  if (!p) return null

  const cat = firstCategory.value
  const catTitle = cat?.title ?? 'Products'
  const catSlug = cat?.slug ? `/category/${cat.slug}` : '/all-items'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: catTitle, item: `${siteUrl}${catSlug}` },
      { '@type': 'ListItem', position: 3, name: p.title }
    ]
  }
})
</script>

<template>
  <BaseContainer>
    <!-- Breadcrumb -->
    <ItemBreadcrumb v-if="product" :category="firstCategory" :product-title="product.title" />

    <article class="grid gap-8 lg:grid-cols-2">
      <!-- Gallery -->
      <ItemGallery :images="product?.gallery" />

      <!-- Product Info -->
      <section class="flex flex-col space-y-6">
        <!-- Title + Favorite -->
        <div class="flex items-start gap-4">
          <BaseHeader class="flex-1">
            {{ product?.title }}
          </BaseHeader>

          <BaseFavoriteButton
            v-if="product"
            :product="product"
            :size="28"
            inactive-class="text-gray-400"
            class="mt-1"
          />
        </div>

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
          :can-add-to-cart="canAddToCart"
          :is-out-of-stock="isOutOfStock"
          @select="onVariantSelect"
        />

        <!-- Quantity Selector & Add to Cart -->
        <ItemAddToCart
          :product-id="product!.id"
          :product-title="product?.title"
          :selected-variant="selectedVariant"
          :inventory-quantity="inventoryQuantity"
          :can-add-to-cart="canAddToCart"
          :is-out-of-stock="isOutOfStock"
        />

        <!-- Shipping Terms -->
        <div class="pt-4">
          <p class="flex gap-8">
            <span v-if="cartStore.freeShippingThreshold > 0">
              {{
                t('Free shipping over {amount}', {
                  amount: formatEuro(cartStore.freeShippingThreshold)
                })
              }}
            </span>

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
  </BaseContainer>
</template>
