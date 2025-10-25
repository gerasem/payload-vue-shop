<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import ModalDialog from '@/components/modal/ModalDialog.vue'
import Textarea from '@/components/form/Textarea.vue'
import Checkbox from '@/components/form/Checkbox.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useToastStore } from '@/stores/ToastStore'
import Button from '@/components/form/Button.vue'
import Input from '@/components/form/Input.vue'
import ApiService from '@/services/api/api'
import { useSeoMeta } from '@unhead/vue'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const toastStore = useToastStore()
const loaderStore = useLoaderStore()

useSeoMeta({
  title: 'User Cabinet',
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">{{ t('User Cabinet') }}</Header>

    <p class="mt-5">
      This is a placeholder for the user cabinet view. You can implement user profile management,
      order history, and other related features here. Stay tuned for updates!
    </p>
  </main>
</template>

<style scoped lang="scss"></style>
