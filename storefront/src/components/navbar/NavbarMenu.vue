<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = [{ path: 'category', text: 'All Items' }]
</script>

<template>
  <RouterLink
    v-for="link in links"
    :key="link.path"
    class="navbar-item button is-white"
    :to="localePath(link.path)"
  >
    {{ t(link.text) }}
  </RouterLink>
</template>

<style scoped lang="scss"></style>
