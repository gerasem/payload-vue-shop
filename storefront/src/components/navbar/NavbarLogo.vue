<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import Image from '@/components/media/Image.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
    <Image src="logo.svg" />
  </RouterLink>

  <div class="navbar-item is-hidden-touch navbar__slogan">
    {{ t('Demo project of an online store') }}
  </div>
</template>

<style scoped lang="scss">
.navbar {
  &__logo {
    @media (max-width: $screen-md-max) {
      flex: 1;
      justify-content: center;
    }

    svg {
      margin-top: -5px;
    }
  }

  &__slogan {
    color: $text-muted;
  }
}
</style>
