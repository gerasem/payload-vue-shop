<script setup lang="ts">
const { t } = useI18n()

// Dummy data for conversion boxes
const boxes = [
  {
    id: 1,
    title: 'Бесплатная доставка', // Free shipping
    description: 'от €1,000', // from €1,000
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop', // Gift/Delivery related
    alt: 'Free delivery'
  },
  {
    id: 2,
    title: 'Особый дизайн', // Special design
    description: 'Создадим приглашения, идеально подходящие именно для вашей свадьбы. Это займет 1-2 недели\n\nот 125р / шт', 
    image: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop', // Textures/Design related
    alt: 'Special design'
  }
]
</script>

<template>
  <div class="my-12">
    <div class="grid gap-6 md:grid-cols-2">
      <div 
        v-for="box in boxes" 
        :key="box.id"
        class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex h-full"
      >
        <!-- Image Section (Left, 40-50%) -->
        <div class="w-1/2 md:w-5/12 relative">
          <img 
            :src="box.image" 
            :alt="box.alt"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <!-- Content Section (Right) -->
        <div class="w-1/2 md:w-7/12 p-6 flex flex-col justify-center">
            <h3 class="text-2xl font-serif text-gray-900 mb-2 leading-tight">
              {{ box.title }}
            </h3>
            <div class="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
              {{ box.description }}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add custom serif font if not available globally, 
   though 'font-serif' utility usually handles it.
*/
</style>
