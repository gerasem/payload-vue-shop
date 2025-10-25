<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <RouterLink
    :to="localePath('contact')"
    class="contact button is-white"
    data-test-id="contact"
    >{{ t('contact') }}
  </RouterLink>
</template>

<style lang="scss" scoped></style>
