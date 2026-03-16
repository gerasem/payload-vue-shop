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
  <div class="relative">
    <CookieControl>
      <template #bar>
        <Transition name="slide">
          <div
            v-if="!isConsentGiven && isReady"
            class="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_30px_rgba(0,0,0,0.1)] py-6"
          >
            <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col gap-8 items-start lg:flex-row">
                <!-- Text Content -->
                <div class="flex-1">
                  <h2 class="text-2xl mb-4">
                    {{ t('Your Data. Your Choice.') }}
                  </h2>
                  <p class="mb-4 lg:mb-0">
                    {{ t('cookie_intro1') }}
                  </p>
                  <p class="mb-6 lg:mb-0">
                    {{ t('cookie_intro2') }}
                  </p>

                  <div class="mt-4 flex gap-6">
                    <NuxtLink
                      to="/page/impressum"
                      class="text-primary hover:text-secondary transition-colors duration-200"
                    >
                      {{ t('Imprint') }}
                    </NuxtLink>
                    <NuxtLink
                      to="/page/datenschutz"
                      class="text-primary hover:text-secondary transition-colors duration-200"
                    >
                      {{ t('Privacy Policy') }}
                    </NuxtLink>
                  </div>
                </div>

                <!-- Actions -->
                <div class="w-full flex flex-col gap-3 shrink-0 lg:w-80">
                  <UButton color="primary" block size="xl" @click="acceptAll">
                    {{ t('Accept all') }}
                  </UButton>

                  <UButton color="secondary" block size="xl" @click="acceptNecessary">
                    {{ t('Only necessary') }}
                  </UButton>

                  <UButton
                    color="secondary"
                    variant="outline"
                    block
                    size="xl"
                    @click="isSettingsOpen = true"
                  >
                    {{ t('Settings') }}
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </template>
    </CookieControl>

    <!-- Settings Modal -->
    <ClientOnly>
      <UModal v-model:open="isSettingsOpen" :title="t('Customize Cookies')">
        <template #body>
          <p>
            {{ t('cookie_intro1') }}
          </p>

          <div class="mt-8 flex flex-col gap-4">
            <!-- Necessary -->
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <div class="font-medium mb-1">
                  {{ t('Strictly necessary') }}
                </div>
                <p class="text-sm">
                  {{ t('cookie_necessary_desc') }}
                </p>
              </div>
              <USwitch :model-value="true" disabled color="primary" />
            </div>

            <!-- Analytics -->
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <div class="font-medium mb-1">
                  {{ t('Marketing / Analytics') }}
                </div>
                <p class="text-sm">
                  {{ t('cookie_analytics_desc') }}
                </p>
              </div>
              <USwitch v-model="analyticsConsent" color="primary" />
            </div>
          </div>
        </template>

        <template #footer>
          <UButton block color="primary" size="lg" @click="saveSettings">
            {{ t('Save selection') }}
          </UButton>
        </template>
      </UModal>
    </ClientOnly>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
