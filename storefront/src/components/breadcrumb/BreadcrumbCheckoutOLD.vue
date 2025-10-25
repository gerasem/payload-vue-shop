<script setup lang="ts">
import { localePath } from '@/composables/localePath'
import Icon from '@/components/media/Icon.vue'
import { useI18n } from 'vue-i18n'

defineProps<{
  loading?: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <nav
    class="breadcrumb"
    aria-label="breadcrumbs"
  >
    <ul>
      <li>
        <RouterLink :to="localePath(`cart`)">
          <Icon
            icon="arrow-left"
            class="pr-2"
          />
          {{ t('Cart') }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb {
  margin-bottom: 0;
}
</style>
