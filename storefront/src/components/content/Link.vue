<script setup lang="ts">
import type { IHeaderLink, IHeaderButton } from '@/interfaces/IHeader'
import { localePath } from '@/composables/localePath.ts'

defineProps<{
  isExternal?: boolean
  link: IHeaderLink | IHeaderButton | undefined | null
  linkClass: string
}>()
</script>

<template>
  <a
    v-if="isExternal"
    :href="link?.link?.url ?? '#'"
    :class="linkClass"
    :target="link?.link?.newTab ? '_blank' : '_self'"
    rel="noopener noreferrer"
  >
    <slot />
  </a>

  <RouterLink
    v-else
    :to="localePath(link?.link?.reference?.value?.slug)"
    :class="linkClass"
    :target="link?.link?.newTab ? '_blank' : '_self'"
  >
    <slot />
  </RouterLink>
</template>
