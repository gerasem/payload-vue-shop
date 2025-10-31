<script setup lang="ts">
import type { IHeaderButton } from '@/interfaces/IHeader'
import { localePath } from '@/composables/localePath.ts'


defineProps<{
  links: IHeaderButton[] | undefined | null
}>()
</script>

<template>
  <template
    v-for="(item, index) in links"
    :key="item?.id || index"
  >
    <RouterLink
      v-if="item.link?.type === 'reference'"
      class="contact button is-white"
      :to="localePath(item.link.reference?.value?.slug)"
    >
      {{ item.link?.label }}
    </RouterLink>

    <a
      v-else
      class="contact button is-white"
      :href="item.link?.url || '#'"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ item.link?.label }}
    </a>
  </template>
</template>

<style lang="scss" scoped></style>
