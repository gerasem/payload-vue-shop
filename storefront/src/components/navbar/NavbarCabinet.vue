<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import Icon from '@/components/media/Icon.vue'
</script>

<template>
  <RouterLink
    class="navbar__icon-link"
    :to="localePath('cabinet')"
  >
    <Icon
      icon="person"
      :width="32"
      :height="30"
      class="navbar__cart-icon"
    />
  </RouterLink>
</template>

<style lang="scss" scoped>
.navbar {
  &__icon-link {
    text-align: center;
    color: $color-icons;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__cart-icon {
  }
}
</style>
