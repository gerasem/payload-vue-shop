<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="hero is-link">
    <div class="container is-fluid hero-body">
      <p class="title">{{ title }}</p>
      <p
        v-if="subtitle"
        class="subtitle"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@forward 'bulma/sass/layout/hero';
</style>
