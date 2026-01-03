<script setup lang="ts">
import type { MappedLink } from '@/composables/usePayloadLink'

const props = defineProps<{
  link: MappedLink
  class?: string
}>()

// Determine target attribute
const target = computed(() => props.link.openInNewTab ? '_blank' : undefined)
const rel = computed(() => props.link.openInNewTab ? 'noopener noreferrer' : undefined)
</script>

<template>
  <!-- External link -->
  <a
    v-if="link.isExternal"
    :href="link.href"
    :target="target"
    :rel="rel"
    :class="props.class"
  >
    <slot>{{ link.label }}</slot>
  </a>

  <!-- Internal link -->
  <NuxtLink
    v-else
    :to="link.href"
    :target="target"
    :class="props.class"
  >
    <slot>{{ link.label }}</slot>
  </NuxtLink>
</template>
