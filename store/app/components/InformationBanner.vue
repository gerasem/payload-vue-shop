<template>
  <header class="hidden md:flex items-center justify-center h-10 bg-[#FAFAFA] text-[#787878] text-[15px] relative">
    <div class="flex items-center justify-around gap-6 px-3 overflow-x-auto scrollbar-hide whitespace-nowrap w-full">
      <div 
        v-for="(item, index) in bannerItems" 
        :key="index" 
        class="flex items-center gap-2"
      >
        <span v-if="item.icon" v-html="item.icon" class="flex w-4 h-4"></span>
        <span>{{ item.text }}</span>
      </div>
    </div>
    <!-- Gradient fade effect on right -->
    <div class="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#F0F0F0] to-transparent pointer-events-none"></div>
  </header>
</template>

<script setup lang="ts">
const bannerItems = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path>
</svg>`,
    text: 'Versandkostenfrei ab einem Bestellwert von 50 €'
  }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
