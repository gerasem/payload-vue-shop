<script setup lang="ts">
import type { IHeaderIcon } from '@/interfaces/IHeader.ts'
import { localePath } from '@/composables/localePath.ts'

defineProps<{
  logo?: IHeaderIcon
  slogan: string | null | undefined
}>()

const handleLogoClick = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 300)
}
</script>

<template>
  <RouterLink
    @click="handleLogoClick()"
    class="navbar-item is-flex is-flex-grow-1 navbar__logo"
    :to="localePath('')"
  >
    <span
      v-if="typeof logo === 'object' && logo?.svgContent"
      v-html="logo.svgContent"
    ></span>
  </RouterLink>

  <div
    v-if="slogan"
    class="navbar-item is-hidden-touch navbar__slogan"
  >
    {{ slogan }}
  </div>
</template>

<style scoped lang="scss">
.navbar {
  &__logo {
    align-items: flex-start !important;

    @media (max-width: $screen-md-max) {
      flex: 1;
      justify-content: center;
    }

    span {
      margin-top: 2px;
    }
  }

  &__slogan {
    color: $text-muted;
  }
}
</style>
