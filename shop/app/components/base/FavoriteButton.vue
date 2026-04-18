<script setup lang="ts">
import { useFavoritesStore } from '@/stores/useFavoritesStore'

const favoritesStore = useFavoritesStore()

const props = defineProps<{
  /** Product object to toggle (needs id + title) */
  product: { id: number; title?: string | null; [key: string]: any }
  /** SVG icon size in px */
  size?: number
  /** Inactive color class (when NOT favorited) */
  inactiveClass?: string
}>()

const size = computed(() => props.size ?? 24)
const inactiveClass = computed(() => props.inactiveClass ?? 'text-gray-500')
</script>

<template>
  <button
    class="shrink-0 flex"
    aria-label="Toggle Favorite"
    @click.prevent.stop="favoritesStore.toggle(product)"
  >
    <ClientOnly>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 16 16"
        class="transition-all overflow-visible hover:text-secondary"
        :class="favoritesStore.isFavorite(product.id) ? 'text-primary' : inactiveClass"
      >
        <!-- White fill + border base layer -->
        <path
          fill="white"
          stroke="white"
          stroke-width="2.5"
          stroke-linejoin="round"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
        <!-- Colored heart outline on top -->
        <path
          fill="currentColor"
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
        />
      </svg>
    </ClientOnly>
  </button>
</template>
