<script setup lang="ts">
import { useContentStore } from '@/stores/ContentStore'
import { useLoaderStore } from '@/stores/LoaderStore'
import FooterDebugBar from './FooterDebugBar.vue'
import Link from '@/components/content/Link.vue'
import { onMounted } from 'vue'

const contentStore = useContentStore()
const loaderStore = useLoaderStore()

onMounted(async () => {
  await contentStore.fetchFooter()
})
</script>

<template>
  <footer class="footer">
    <div class="container is-fullhd">
      <div class="columns is-multiline">
        <div class="column is-half-desktop is-full-tablet">
          <div class="columns is-multiline footer__items">
            <div
              v-for="(item, index) in contentStore.footer?.navItems"
              :key="item?.id || index"
              :class="[
                'column',
                'footer__item',
                'is-full-mobile',
                'is-half-tablet',
                index < 3 ? 'is-half-desktop' : 'is-half-desktop',
              ]"
            >
              <Link
                linkClass=""
                :isExternal="item.link?.type === 'custom'"
                :link="item?.link"
              >
                {{ item.link?.label }}
              </Link>
            </div>
          </div>
        </div>

        <div class="column is-one-quarter-desktop is-half-tablet footer__text">
          <p>{{ contentStore.footer?.slogan }}</p>
        </div>

        <div class="column is-one-quarter-desktop is-half-tablet">
          <ul class="footer__items">
            <li class="footer__item footer__item--phone">
              <a :href="`tel:${contentStore.footer?.phone}`">{{ contentStore.footer?.phone }}</a>
            </li>

            <li class="footer__item">
              <Link
                linkClass=""
                :isExternal="contentStore.footer?.contactLink?.link?.type === 'custom'"
                :link="contentStore.footer?.contactLink?.link"
              >
                {{ contentStore.footer?.contactLink?.link?.label }}
              </Link>
            </li>

            <li class="footer__item footer__item--instagram">
              <Link
                linkClass=""
                :isExternal="contentStore.footer?.socialLink?.link?.type === 'custom'"
                :link="contentStore.footer?.socialLink?.link"
              >
                {{ contentStore.footer?.socialLink?.link?.label }}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <FooterDebugBar v-if="false" />
</template>

<style lang="scss">
@use 'bulma/sass/layout/footer' with (
  $footer-background-color: $background-gray,
  $footer-padding: 3rem 0.75rem
);
</style>

<style lang="scss" scoped>
.footer {
  margin-top: 4rem;

  &__items {
    margin: 0;
  }

  &__item {
    padding: 0.2rem 0.5rem;

    a {
      color: $color-text;
    }

    &--phone {
      font-weight: 600;
    }

    &--instagram a {
      color: $color-primary;
    }
  }

  &__text {
    color: $color-icons;

    span {
      color: $text-muted;
    }
  }
}
</style>
