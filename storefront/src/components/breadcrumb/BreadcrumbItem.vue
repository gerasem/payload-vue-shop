<script setup lang="ts">
import type { ICategoryShort } from '@/interfaces/ICategory'
import { localePath } from '@/composables/localePath'
import Icon from '@/components/media/Icon.vue'

defineProps<{
  category: ICategoryShort
}>()
</script>

<template>
  <nav
    class="breadcrumb"
    aria-label="breadcrumbs"
  >
    <ul>
      <li>
        <RouterLink :to="localePath(`category/${category?.slug}`)">
          <Icon
            icon="arrow-left"
            class="pr-2"
          />
          {{ category?.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb__skeleton {
  gap: 10px;
  padding-right: 10px;
}
</style>
