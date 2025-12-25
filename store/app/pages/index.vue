<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <div>
      <template v-for="(locale, index) in locales" :key="locale.code">
        <NuxtLink :to="switchLocalePath(locale.code)">
          {{ locale.name }} ({{ locale.code }})
        </NuxtLink>
        <span v-if="index < locales.length - 1"> / </span>
        <!-- Debug output -->
        <pre style="font-size: 10px; display: inline;">[{{ switchLocalePath(locale.code) }}]</pre>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useSwitchLocalePath, useI18n } from '#imports'

const switchLocalePath = useSwitchLocalePath()
const { locales } = useI18n()
</script>
