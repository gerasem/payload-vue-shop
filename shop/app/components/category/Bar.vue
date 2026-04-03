<script setup lang="ts">
const localePath = useLocalePath()

const { data: categories } = await useAsyncData('payload-categories', () => usePayloadCategories())
</script>

<template>
  <nav class="bg-gray-50 mb-10">
    <BaseContainer>
      <ul class="flex flex-wrap items-center justify-around py-4 gap-4">
        <li v-for="category in categories" :key="category.id">
          <NuxtLink
            :to="localePath(`/category/${category.slug}`)"
            class="category-link hover:text-primary transition-all"
          >
            {{ category.title }}
          </NuxtLink>
        </li>
      </ul>
    </BaseContainer>
  </nav>
</template>

<style scoped lang="scss">
.category-link {
  &.router-link-active {
    color: var(--color-primary);
  }
}
</style>
