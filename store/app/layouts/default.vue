<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <h2 class="logo">Store</h2>
        
        <nav class="language-switcher">
          <template v-for="(locale, index) in locales" :key="locale.code">
            <NuxtLink :to="switchLocalePath(locale.code)" class="locale-link">
              {{ locale.name }}
            </NuxtLink>
            <span v-if="index < locales.length - 1" class="separator"> / </span>
          </template>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <p>&copy; {{ currentYear }} Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useSwitchLocalePath } from '#imports'
import { useI18n } from 'vue-i18n'

const switchLocalePath = useSwitchLocalePath()
const { locales } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 2rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.locale-link {
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  transition: color 0.2s;
}

.locale-link:hover {
  color: #007bff;
}

.separator {
  color: #adb5bd;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

.footer {
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 1.5rem 2rem;
  text-align: center;
  color: #6c757d;
}

.footer p {
  margin: 0;
}
</style>
