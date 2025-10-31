<script setup lang="ts">
import type { IHeaderLink } from '@/interfaces/IHeader'
import Link from '@/components/content/Link.vue'

defineProps<{
  links: IHeaderLink[] | undefined | null
}>()
</script>

<template>
  <Link
    v-for="(item, index) in links"
    :key="item?.id || index"
    linkClass="navbar-item button is-white"
    :isExternal="item.link?.type === 'custom'"
    :link="item"
  >
    {{ item.link?.label }}
  </Link>
</template>

<style scoped lang="scss"></style>
