<script setup lang="ts">
const { t } = useI18n()
const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, moduleOptions } = useCookieControl()

const isSettingsOpen = ref(false)
const analyticsConsent = ref(false)

const { necessary, optional } = moduleOptions.cookies

const acceptAll = () => {
  isConsentGiven.value = true
  cookiesEnabled.value = [...necessary, ...optional]
  cookiesEnabledIds.value = [...necessary, ...optional].map(c => c.id)
  isSettingsOpen.value = false
}

const acceptNecessary = () => {
  isConsentGiven.value = true
  cookiesEnabled.value = [...necessary]
  cookiesEnabledIds.value = necessary.map(c => c.id)
  isSettingsOpen.value = false
}

const saveSettings = () => {
  const enabledOptional = analyticsConsent.value ? optional.filter(c => c.id === 'analytics') : []
  isConsentGiven.value = true
  cookiesEnabled.value = [...necessary, ...enabledOptional]
  cookiesEnabledIds.value = [...necessary, ...enabledOptional].map(c => c.id)
  isSettingsOpen.value = false
}
</script>

<template>
  <CookieControl>
    <template #bar>
      <div v-if="!isConsentGiven" class="cookie-banner">
        <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
          <div class="cookie-banner__layout">
            <!-- Text Content -->
            <div class="cookie-banner__text">
              <h2 class="cookie-banner__title">
                {{ t('Your Data. Your Choice.') }}
              </h2>
              <p class="cookie-banner__body">
                {{ t('cookie_intro1') }}
              </p>
              <p class="cookie-banner__body">
                {{ t('cookie_intro2') }}
              </p>

              <div class="cookie-banner__links">
                <NuxtLink to="/page/impressum" class="cookie-banner__link">
                  {{ t('Imprint') }}
                </NuxtLink>
                <NuxtLink to="/page/datenschutz" class="cookie-banner__link">
                  {{ t('Privacy Policy') }}
                </NuxtLink>
              </div>
            </div>

            <!-- Actions -->
            <div class="cookie-banner__actions">
              <UButton
                color="primary"
                block
                size="xl"
                class="font-medium justify-center"
                @click="acceptAll"
              >
                {{ t('Accept all') }}
              </UButton>

              <UButton
                color="secondary"
                block
                size="xl"
                class="font-medium justify-center"
                @click="acceptNecessary"
              >
                {{ t('Only necessary') }}
              </UButton>

              <UButton
                color="secondary"
                variant="outline"
                block
                size="xl"
                class="font-medium justify-center"
                @click="isSettingsOpen = true"
              >
                {{ t('Settings') }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CookieControl>

  <!-- Settings Modal -->
  <div v-if="isSettingsOpen" class="cookie-modal-overlay" @click.self="isSettingsOpen = false">
    <div class="cookie-modal">
      <div class="cookie-modal__header">
        <h3 class="cookie-modal__title">
          {{ t('Customize Cookies') }}
        </h3>
        <button class="cookie-modal__close" @click="isSettingsOpen = false">✕</button>
      </div>

      <p class="cookie-modal__description">
        {{ t('cookie_intro1') }}
      </p>

      <div class="cookie-modal__options">
        <!-- Necessary -->
        <div class="cookie-option">
          <div class="cookie-option__info">
            <div class="cookie-option__name">
              {{ t('Strictly necessary') }}
            </div>
            <p class="cookie-option__desc">
              {{ t('cookie_necessary_desc') }}
            </p>
          </div>
          <label class="cookie-toggle cookie-toggle--disabled">
            <input type="checkbox" checked disabled />
            <span class="cookie-toggle__slider" />
          </label>
        </div>

        <!-- Analytics -->
        <div class="cookie-option">
          <div class="cookie-option__info">
            <div class="cookie-option__name">
              {{ t('Marketing / Analytics') }}
            </div>
            <p class="cookie-option__desc">
              {{ t('cookie_analytics_desc') }}
            </p>
          </div>
          <label class="cookie-toggle">
            <input v-model="analyticsConsent" type="checkbox" />
            <span class="cookie-toggle__slider" />
          </label>
        </div>
      </div>

      <UButton
        block
        color="primary"
        size="lg"
        class="font-medium justify-center"
        @click="saveSettings"
      >
        {{ t('Save selection') }}
      </UButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$color-text: #1e1e1e;
$color-text-secondary: #454545;
$color-text-muted: #787878;
$color-primary: #eb3e7d;
$color-border: #e3e3e3;
$color-bg-hover: #f0f0f0;

// Banner
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  border-top: 1px solid $color-border;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
  padding: 1.5rem 0;
  animation: slideUp 0.35s ease-out;

  &__layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  &__text {
    flex: 1;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-text;
    margin-bottom: 1rem;
  }

  &__body {
    font-size: 0.875rem;
    line-height: 1.625;
    color: $color-text-secondary;
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 1.5rem;

      @media (min-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }

  &__links {
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
    font-size: 0.875rem;
  }

  &__link {
    color: $color-primary;

    &:hover {
      text-decoration: underline;
    }
  }

  &__actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex-shrink: 0;

    @media (min-width: 1024px) {
      width: 20rem;
    }
  }
}

// Settings Modal
.cookie-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 10001;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease-out;
}

.cookie-modal {
  background: #fff;
  border-radius: 12px;
  max-width: 520px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: scaleIn 0.25s ease-out;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: $color-text;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: $color-text-muted;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background: $color-bg-hover;
    }
  }

  &__description {
    font-size: 0.875rem;
    color: $color-text-secondary;
    margin-bottom: 1.5rem;
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
}

// Cookie option row
.cookie-option {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  &__info {
    flex: 1;
  }

  &__name {
    font-weight: 500;
    color: $color-text;
    margin-bottom: 0.25rem;
  }

  &__desc {
    font-size: 0.75rem;
    color: $color-text-muted;
  }
}

// Toggle switch
.cookie-toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #c8c8c8;
    border-radius: 24px;
    transition: background-color 0.25s ease;

    &::before {
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.25s ease;
    }
  }

  input:checked + &__slider {
    background: $color-primary;
  }

  input:checked + &__slider::before {
    transform: translateX(20px);
  }

  &--disabled {
    opacity: 0.6;

    .cookie-toggle__slider {
      cursor: not-allowed;
    }
  }
}

// Animations
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
