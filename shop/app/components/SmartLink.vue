<script setup lang="ts">
import type { MappedLink } from '@/composables/usePayloadLink'

const props = defineProps<{
  link: MappedLink
  class?: string
}>()

// Determine target attribute
const target = computed(() => (props.link.openInNewTab ? '_blank' : undefined))
const rel = computed(() => (props.link.openInNewTab ? 'noopener noreferrer' : undefined))
</script>

<template>
  <NuxtLink :to="link.href" :target="target" :rel="rel" :class="props.class">
    <slot>{{ link.label }}</slot>
  </NuxtLink>
</template>
