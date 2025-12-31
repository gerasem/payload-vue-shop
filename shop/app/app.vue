<script setup lang="ts">
const route = useRoute()

// Check if current page is homepage
const isHomePage = computed(() => route.path === '/' || route.path === '/de' || route.path === '/en')

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
    
    <!-- Category bar - shown on all pages except homepage -->
    <CategoryBar v-if="!isHomePage" />

    <UMain>
      <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in'
      }" />
    </UMain>

    <Footer />
  </UApp>
</template>

<style>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
