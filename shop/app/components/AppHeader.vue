<template>
  <UHeader>
    <template #left>
      <div class="flex items-center gap-8">
        <!-- Logo and brand -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
          <img src="/assets/images/logo.svg" alt="Logo" class="w-35 h-12 -mt-2" />
        </NuxtLink>

        <div class="flex items-center gap-6 text-gray-400">
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
        <!-- Language switcher -->
        <LanguageSwitcher />
        
        <!-- Contact link -->
        <NuxtLink 
          :to="localePath('/contact')" 
          class="text-gray-900 hover:text-primary font-medium transition-colors"
        >
          Kontakt
        </NuxtLink>
        
        <div>
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
  </UHeader>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
