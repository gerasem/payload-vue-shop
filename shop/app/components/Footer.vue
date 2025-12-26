<script setup lang="ts">
const currentYear = new Date().getFullYear()
const localePath = useLocalePath()

interface FooterLink {
  label: string
  to: string
  disabled?: boolean
}

const linkColumns: FooterLink[][] = [
  [
    { label: 'Über uns', to: '/' },
    { label: 'AGB', to: '/' },
    { label: 'Versand', to: '/' }
  ],
  [
    { label: 'FAQ', to: '/' },
    { label: 'Datenschutz', to: '/' },
    { label: 'Widerrufsrecht', to: '/' }
  ],
  [
    { label: 'Impressum', to: '/' },
    { label: 'Cookie-Richtlinie', to: '/' },
    { label: 'Zahlung', to: '/' }
  ],
  [
    { label: 'Demo-Projekt eines Online-Shops', to: '/', disabled: true }
  ]
]
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-100 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <!-- Main Footer Content - Horizontal Layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        <!-- Links Columns (4 columns) -->
        <div 
          v-for="(column, index) in linkColumns" 
          :key="index"
          class="space-y-2"
        >
          <NuxtLink
            v-for="link in column"
            :key="link.to"
            :to="link.disabled ? undefined : localePath(link.to)"
            :class="[
              'block text-sm transition-colors',
              link.disabled 
                ? 'text-gray-400 cursor-default pointer-events-none' 
                : 'text-gray-900 hover:text-primary'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Contact Column -->
        <div class="space-y-2 md:text-right">
          <a 
            href="tel:+4912345678900" 
            class="block text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
          >
            +49 123 456 7890
          </a>
          <NuxtLink 
            :to="localePath('/')" 
            class="block text-sm text-gray-900 hover:text-primary transition-colors"
          >
            Kontakt
          </NuxtLink>
          <a 
            href="#" 
            class="block text-sm text-primary hover:text-primary-600 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
