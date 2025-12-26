<template>
  <UHeader toggle-side="left" mode="slideover" toggleSide="left">
    <template #left>
    

      <!-- Logo - centered on mobile, left on desktop -->
      <NuxtLink 
        :to="localePath('/')" 
        class="flex items-center gap-3 lg:ml-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      >
        <img src="/assets/images/logo.svg" alt="Logo" class="w-35 h-12 -mt-2" />
      </NuxtLink>

      <!-- Desktop only content -->
      <div class="hidden lg:flex items-center gap-8">
        <!-- Slogan - hidden on tablet and below -->
        <div class="hidden xl:flex items-center gap-6 text-gray-400">
          Slogan
        </div>
        
        <!-- Main navigation -->
        <NuxtLink 
          :to="localePath('/items')" 
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          Alle Waren
        </NuxtLink>
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-8">
        <!-- Language switcher - hidden on mobile -->
        <div class="hidden md:block">
          <LanguageSwitcher />
        </div>
        
        <!-- Contact link - hidden on mobile -->
        <NuxtLink 
          :to="localePath('/contact')" 
          class="hidden lg:block text-gray-900 hover:text-primary font-medium transition-colors"
        >
          Kontakt
        </NuxtLink>
        
        <!-- User & Cart icons - always visible -->
        <div class="flex items-center">
          <!-- User icon -->
          <UButton
            :to="localePath('/cabinet')"
            icon="i-bi-person"
            color="neutral"
            variant="link"
            size="xl" 
            aria-label="Account"
          />
          
          <!-- Cart icon -->
          <UButton
            :to="localePath('/cart')"
            icon="i-bi-cart"
            color="neutral"
            variant="link"
            size="xl" 
            aria-label="Shopping Cart"
          />
        </div>
      </div>
    </template>


    <template #body>
      <div class="space-y-4">
        <UNavigationMenu :items="navigationLinks" orientation="vertical" class="-mx-2.5" />
        
        <!-- Language switcher in mobile menu -->
        <div class="pt-4 border-t border-gray-200">
          <LanguageSwitcher />
        </div>
      </div>
    </template>

  </UHeader>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const navigationLinks = [
  {
    label: 'Alle Waren',
    to: '/items',
  },
  {
    label: 'Kontakt',
    to: '/contact',
  }
]
</script>
