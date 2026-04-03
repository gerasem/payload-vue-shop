<script setup lang="ts">
import { useFavoritesStore } from '@/stores/useFavoritesStore'

const { t } = useI18n()
const favoritesStore = useFavoritesStore()
const localePath = useLocalePath()

// Ensure we have fresh item data
onMounted(async () => {
  await favoritesStore.hydrate()
})

usePageSeo({
  title: computed(() => t('Favorites') || 'Favorites'),
  description: computed(() => t('Your favorite items') || '')
})
</script>

<template>
  <BaseContainer>
    <!-- Header -->
    <BaseHeader>{{ t('Favorites') }}</BaseHeader>

    <!-- Hydrating State -->
    <div v-if="favoritesStore.isHydrating" class="text-center py-12">
      <UIcon name="i-bi-arrow-repeat" class="w-8 h-8 animate-spin text-gray-400 mx-auto" />
    </div>

    <!-- Favorites Grid -->
    <div
      v-else-if="favoritesStore.items.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
    >
      <ItemCard v-for="item in favoritesStore.items" :key="item.id" :item="item" />
    </div>

    <!-- Empty State -->
    <div v-else class="py-12 text-center">
      <UIcon name="i-bi-heart" class="mx-auto mb-4 h-16 w-16 text-gray-400" />

      <p class="mb-4 text-lg">{{ t('No favorites yet.') }}</p>

      <UButton :to="localePath('/')" color="primary" size="lg">
        {{ t('Continue Shopping') }}
      </UButton>
    </div>
  </BaseContainer>
</template>
