<script setup lang="ts">
import FooterDebugBar from './FooterDebugBar.vue'
import { computed } from 'vue'

const year = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="footer">
    <div class="container is-fullhd">
      <div class="grid is-col-min-8">
        <ul class="cell footer__items">
          <li class="footer__item"><a href="#">Lorem ipsum</a></li>
          <li class="footer__item"><a href="#">dolor sit amet</a></li>
          <li class="footer__item">
            <a href="#">consectetur adipisicing</a>
          </li>
        </ul>

        <ul class="cell footer__items">
          <li class="footer__item"><a href="#">Lorem ipsum</a></li>
          <li class="footer__item"><a href="#">dolor sit amet</a></li>
          <li class="footer__item">
            <a href="#">consectetur adipisicing</a>
          </li>
        </ul>

        <ul class="cell footer__items">
          <li class="footer__item"><a href="#">Lorem ipsum</a></li>
          <li class="footer__item"><a href="#">dolor sit amet</a></li>
          <li class="footer__item">
            <a href="#">consectetur adipisicing</a>
          </li>
        </ul>

        <div class="cell footer__text">
          <p>© {{ year }} Minishop</p>
          <p class="d-block">Lorem ipsum dolor sit amet.</p>
        </div>

        <ul class="cell footer__items">
          <li class="footer__item footer__item--phone">
            <a href="tel:49123456789">+49 (0) 123 456 78 9</a>
          </li>
          <li class="footer__item"><a href="#">Contact</a></li>
          <li class="footer__item footer__item--instagram">
            <a href="#">Instagram</a>
          </li>
        </ul>
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
    list-style: none;
    margin-bottom: 0.2rem;

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
