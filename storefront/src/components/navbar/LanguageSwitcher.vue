<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const supportedLocales: string[] = import.meta.env.VITE_LANGUAGES.split(',')
</script>

<template>
  <div
    class="navbar__languages"
    :aria-label="t('Select Language')"
  >
    <template
      v-for="(lang, index) of supportedLocales"
      :key="lang"
    >
      <span
        v-if="locale === lang"
        class="navbar__language navbar__language--current"
        >{{ lang }}</span
      >

      <a
        v-else
        class="navbar__language is-clickable"
        :href="`/${lang}`"
        >{{ lang }}</a
      >

      <span
        v-if="index !== supportedLocales.length - 1"
        class="navbar__language-separator"
        >/</span
      >
    </template>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  &__languages {
    user-select: none;
  }

  &__language-separator {
    color: #ebebeb;
    margin: 0 5px;
    user-select: none;
    cursor: default;
  }

  &__language {
    color: $color-icons;
    display: inline-block;

    &:first-letter {
      text-transform: uppercase;
    }

    &--current {
      color: $color-light-gray;
      cursor: not-allowed;

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
}
</style>
