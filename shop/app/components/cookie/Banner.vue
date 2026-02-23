<script setup lang="ts">
const { t } = useI18n()
const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, moduleOptions } = useCookieControl()

const isSettingsOpen = ref(false)
const analyticsConsent = ref(false)
const isReady = ref(false)

const { necessary, optional } = moduleOptions.cookies

onMounted(() => {
  // Delay showing the banner to prevent hydration mismatch and "flash" for users who already consented
  setTimeout(() => {
    isReady.value = true
  }, 1000)
})

const applyCookies = (cookiesToEnable: typeof necessary) => {
  isConsentGiven.value = true
  cookiesEnabled.value = cookiesToEnable
  cookiesEnabledIds.value = cookiesToEnable.map(c => c.id)
  isSettingsOpen.value = false
}

const acceptAll = () => {
  applyCookies([...necessary, ...optional])
}

const acceptNecessary = () => {
  applyCookies([...necessary])
}

const saveSettings = () => {
  const enabledOptional = analyticsConsent.value ? optional.filter(c => c.id === 'analytics') : []
  applyCookies([...necessary, ...enabledOptional])
}
</script>

<template>
  <CookieControl>
    <template #bar>
      <div
        v-if="!isConsentGiven && isReady"
        class="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] py-6 animate-slide-up"
      >
        <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col gap-8 items-start lg:flex-row">
            <!-- Text Content -->
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {{ t('Your Data. Your Choice.') }}
              </h2>
              <p class="text-sm leading-[1.625] text-gray-700 mb-4 lg:mb-0">
                {{ t('cookie_intro1') }}
              </p>
              <p class="text-sm leading-[1.625] text-gray-700 mb-6 lg:mb-0">
                {{ t('cookie_intro2') }}
              </p>

              <div class="mt-4 flex gap-6 text-sm">
                <NuxtLink to="/page/impressum" class="text-primary-500 hover:underline">
                  {{ t('Imprint') }}
                </NuxtLink>
                <NuxtLink to="/page/datenschutz" class="text-primary-500 hover:underline">
                  {{ t('Privacy Policy') }}
                </NuxtLink>
              </div>
            </div>

            <!-- Actions -->
            <div class="w-full flex flex-col gap-3 shrink-0 lg:w-80">
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
  <div
    v-if="isSettingsOpen"
    class="fixed inset-0 z-[10001] bg-black/50 flex items-center justify-center animate-fade-in"
    @click.self="isSettingsOpen = false"
  >
    <div
      class="bg-white rounded-xl max-w-[520px] w-[90%] max-h-[90vh] overflow-y-auto p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-scale-in"
    >
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-gray-900">
          {{ t('Customize Cookies') }}
        </h3>
        <button
          class="flex items-center justify-center w-8 h-8 rounded-md border-none bg-transparent text-gray-500 text-base cursor-pointer hover:bg-gray-100 transition-colors duration-150"
          @click="isSettingsOpen = false"
        >
          ✕
        </button>
      </div>

      <p class="text-sm text-gray-700 mb-6">
        {{ t('cookie_intro1') }}
      </p>

      <div class="flex flex-col gap-6 mb-8">
        <!-- Necessary -->
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <div class="font-medium text-gray-900 mb-1">
              {{ t('Strictly necessary') }}
            </div>
            <p class="text-xs text-gray-500">
              {{ t('cookie_necessary_desc') }}
            </p>
          </div>
          <label
            class="relative inline-block w-[44px] h-[24px] shrink-0 mt-[2px] opacity-60 cursor-not-allowed"
          >
            <input type="checkbox" checked disabled class="peer sr-only" />
            <span
              class="absolute cursor-not-allowed inset-0 bg-gray-300 rounded-[24px] transition-colors duration-250 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform before:duration-250 peer-checked:bg-primary-500 peer-checked:before:translate-x-[20px]"
            />
          </label>
        </div>

        <!-- Analytics -->
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <div class="font-medium text-gray-900 mb-1">
              {{ t('Marketing / Analytics') }}
            </div>
            <p class="text-xs text-gray-500">
              {{ t('cookie_analytics_desc') }}
            </p>
          </div>
          <label class="relative inline-block w-[44px] h-[24px] shrink-0 mt-[2px]">
            <input v-model="analyticsConsent" type="checkbox" class="peer sr-only" />
            <span
              class="absolute cursor-pointer inset-0 bg-gray-300 rounded-[24px] transition-colors duration-250 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform before:duration-250 peer-checked:bg-primary-500 peer-checked:before:translate-x-[20px]"
            />
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

<style scoped>
.animate-slide-up {
  animation: slideUp 0.35s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.25s ease-out;
}

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
