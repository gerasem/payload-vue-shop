<script setup lang="ts">
import InformationBanner from '@/components/information-banner/InformationBanner.vue'
import Navbar from '@/components/navbar/Navbar.vue'
import Loader from '@/components/loader/Loader.vue'
import Footer from '@/components/footer/Footer.vue'
import Toast from '@/components/toast/Toast.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Loader />
  <InformationBanner />
  <!-- <Navbar />
  <div id="content">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer /> -->
  <Toast />
</template>

<style scoped></style>
