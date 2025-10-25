<script setup lang="ts">
import type { IUserAddress } from '@/interfaces/IUserAddress'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import Input from '@/components/form/Input.vue'
import { useI18n } from 'vue-i18n'

defineProps<{
  header: string
}>()

const { t } = useI18n()
const loaderStore = useLoaderStore()

const address = defineModel<IUserAddress>('address', { required: true })

defineEmits<{
  (e: 'blur'): void
}>()
</script>

<template>
  <div>
    <Header :level="3">{{ header }}</Header>

    <div class="columns">
      <div class="column is-half">
        <Input
          v-model:input="address.firstname"
          :label="t('Firstname')"
          name="firstname"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>

      <div class="column is-half">
        <Input
          v-model:input="address.lastname"
          :label="t('Lastname')"
          name="lastname"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>
    </div>

    <div class="columns">
      <div class="column is-full">
        <Input
          v-model:input="address.address"
          :label="t('Address')"
          name="address"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-fourth">
        <Input
          v-model:input="address.zip"
          :label="t('Zip Code')"
          name="zip"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>

      <div class="column is-three-quarters">
        <Input
          v-model:input="address.city"
          :label="t('City')"
          name="city"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>
    </div>

    <div class="columns">
      <div class="column is-half">
        <Input
          v-model:input="address.phone"
          :label="t('Phone')"
          name="phone"
          type="tel"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>

      <div class="column is-half">
        <Input
          v-model:input="address.country"
          :label="t('Country')"
          name="country"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)"
          @blur="$emit('blur')"
          required
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
