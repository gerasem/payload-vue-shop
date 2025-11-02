<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import type { ILink } from '@/interfaces/ILink'

defineProps<{
  isExternal?: boolean
  link: ILink | undefined
  linkClass: string
}>()
</script>

<template>
  <a
    v-if="isExternal"
    :href="link?.url ?? '#'"
    :class="linkClass"
    :target="link?.newTab ? '_blank' : '_self'"
    rel="noopener noreferrer"
  >
    <slot />
  </a>

  <RouterLink
    v-else
    :to="localePath(link?.reference?.value?.slug)"
    :class="linkClass"
    :target="link?.newTab ? '_blank' : '_self'"
  >
    <slot />
  </RouterLink>
</template>
