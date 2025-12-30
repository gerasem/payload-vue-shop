<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <UApp>
    <Header />

    <UMain>
      <NuxtPage />
    </UMain>

    <Footer />

    <!-- Toast notifications positioned at bottom-center -->
    <UNotifications>
      <template #title="{ title }">
        <span class="font-semibold">{{ title }}</span>
      </template>
    </UNotifications>
  </UApp>
</template>
