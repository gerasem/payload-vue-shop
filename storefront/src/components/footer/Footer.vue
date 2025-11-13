<script setup lang="ts">
import { useContentStore } from '@/stores/ContentStore'
import FooterDebugBar from './FooterDebugBar.vue'
import Link from '@/components/content/Link.vue'

const contentStore = useContentStore()
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
              class="column is-full-mobile is-half-tablet is-half-desktop footer__item"
            >
              <Link
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
                :isExternal="contentStore.footer?.contactLink?.link?.type === 'custom'"
                :link="contentStore.footer?.contactLink?.link"
              >
                {{ contentStore.footer?.contactLink?.link?.label }}
              </Link>
            </li>

            <li class="footer__item footer__item--instagram footer__item--instagram">
              <Link
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
  $footer-padding: 3rem 1.5rem
);
</style>

<style lang="scss" scoped>
.footer {
  margin-top: 4rem;

  &__items {
    margin: 0 -15px;
  }

  &__item {
    padding: 0.2rem 15px;

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
