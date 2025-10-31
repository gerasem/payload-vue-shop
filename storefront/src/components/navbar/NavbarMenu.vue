<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import type { IHeaderLink } from '@/interfaces/IHeader'

defineProps<{
  links: IHeaderLink[] | undefined | null
}>()
</script>

<template>
  <RouterLink
    v-for="(item, index) in links"
    :key="item?.id || index"
    class="navbar-item button is-white"
    :to="
      localePath(
        item.link?.type === 'reference'
          ? item.link.reference?.value?.slug || '#'
          : item.link?.url || '#',
      )
    "
  >
    {{ item.link?.label }}
  </RouterLink>
</template>

<style scoped lang="scss"></style>
