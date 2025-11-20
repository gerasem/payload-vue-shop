<script setup lang="ts">
import { getMinPriceFormatted, formatEuro, areAllPricesEqual } from '@/utils/priceUtils'
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue'
import ProductActions from '@/components/item-view/ProductActions.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import Gallery from '@/components/gallery/Gallery.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import { useRoute, useRouter } from 'vue-router'
import type { IItem } from '@/interfaces/IItem'
import ApiService from '@/services/api/api'
import { watch, ref, computed } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const categoryStore = useCategoryStore()
const loaderStore = useLoaderStore()
const itemStore = useItemStore()

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const item = computed(() => {
  return (
    itemStore.items.flatMap((g) => g.products).find((p) => p.slug === route.params.handle) || null
  )
})

const category = computed(() => {
  return item.value?.categories
})

watch(item, (value) => {
  if (!value) {
    router.push({ name: '404' })
  }
})

const selectedVariantPrice = computed(() => {
  const priceCents = selectedVariant.value?.priceInEUR ?? item.value?.priceInEUR
  return formatEuro(priceCents)
})

const price = computed(() => {
  if (areAllPricesEqual(item.value)) {
    return formatEuro(item.value?.priceInEUR)
  } else {
    return `${t('From')} ${getMinPriceFormatted(item.value)}`
  }
})

const selectedOptions = ref<Record<string, string>>({})

const variantTypes = computed(() => item.value?.variantTypes || [])

const selectOption = (typeName: string, value: string) => {
  selectedOptions.value[typeName] = value
}

const selectedVariant = computed(() => {
  if (!item.value?.variants?.docs || item.value.variants.docs.length === 0) return null

  const selectedCount = Object.keys(selectedOptions.value).length
  if (selectedCount === 0) return null

  return item.value.variants.docs.find((variant) => {
    if (!variant?.options || variant.options.length === 0) return false

    let matches = true

    for (const [typeName, selectedValue] of Object.entries(selectedOptions.value)) {
      const hasMatchingOption = variant.options.some((opt) => opt.value === selectedValue)

      if (!hasMatchingOption) {
        matches = false
        break
      }
    }

    if (matches && variant.options.length === selectedCount) {
      return true
    }

    return false
  })
})

useSeoMeta({
  title: computed(() => item.value?.meta?.title || item.value?.title),
  description: computed(() => item.value?.meta?.description || item.value?.title),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <BreadcrumbItem :category="category" />

    <!-- <pre>{{ item }}</pre> -->
    <div class="columns is-5-tablet is-6-desktop is-8-fullhd is-tablet">
      <div class="column is-three-fifths-widescreen is-half-desktop">
        <Gallery
          v-if="item"
          :item="item"
        />
      </div>

      <div class="column is-desktop">
        <Header :level="1">
          {{ item?.title }}
        </Header>

        <!-- <ProductActions :product="item" /> -->

        <h4 class="title is-4">
          {{ selectedVariant ? selectedVariantPrice : price }}
        </h4>

        <!-- <pre>{{ selectedVariantPrice }}</pre> -->

        <div v-if="item?.variants?.docs.length && item?.variants?.docs.length > 0">
          <!-- <pre>
            {{ selectedOptions }}
          </pre>

          <pre>
            {{ selectedVariant }}
          </pre> -->
          <div
            v-for="type in variantTypes"
            :key="type.id"
            class="mb-5"
          >
            <p class="label mb-2">{{ type.label }}</p>

            <div class="buttons has-addons">
              <button
                v-for="opt in type.options?.docs"
                :key="opt.id"
                @click="selectOption(type.name, opt.value)"
                :class="{
                  'is-primary is-selected': selectedOptions[type.name] === opt.value,
                }"
                class="button is-small"
              >
                {{ opt.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(item?.description || [])"> </Text2Columns>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
