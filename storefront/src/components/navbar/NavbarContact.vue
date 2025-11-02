<script setup lang="ts">
import type { IHeaderButton } from '@/interfaces/IHeader'
import Link from '@/components/content/Link.vue'

defineProps<{
  links: IHeaderButton[] | undefined | null
}>()
</script>

<template>
  <Link
    v-for="(item, index) in links"
    :key="item?.id || index"
    linkClass="contact button is-white"
    :isExternal="item.link?.type === 'custom'"
    :link="item?.link"
  >
    {{ item.link?.label }}
  </Link>
</template>

<style lang="scss" scoped></style>
