<script setup lang="ts">

const route = useRoute()

// Initialize cart store on client-side only
onMounted(async () => {
    const cartStore = useCartStore()
    cartStore.init()
})

// Check if current page is homepage
const isHomePage = computed(
    () => route.path === '/' || route.path === '/de' || route.path === '/en'
)

const { locale } = useI18n()

useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
        lang: locale
    }
})
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator color="#dfa44c" />
        <Header />

        <!-- Category bar - shown on all pages (hidden on desktop for homepage to avoid duplicate with sidebar) -->
        <CategoryBar :class="{ 'lg:hidden': isHomePage }" />

        <UMain>
            <NuxtPage
                :transition="{
                    name: 'page',
                    mode: 'out-in'
                }"
            />
        </UMain>

        <Footer />

        <!-- GDPR Cookie Banner -->
        <CookieBanner />
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
