<script setup lang="ts">
const { t } = useI18n()
const toast = useToast()

// Fetch contact page content
const { data: contactPage } = await useAsyncData('contact-page-content', () =>
  usePayloadPage('contact')
)
const { data: settingsData } = await useAsyncData('payload-settings', () => useShoppingSettings())

const { data: formsData, error: formsError } = await usePayloadFetch<any>('/api/forms', {
  params: {
    'where[title][like]': 'Contact',
    limit: 1
  }
})

const contactForm = computed(() => formsData.value?.docs?.[0])
const formFields = computed(() => contactForm.value?.fields || [])

const loading = ref(false)
const submitted = ref(false)

// Simple Lexical to HTML Serializer
// Handles basic paragraphs and text with formatting
// Payload v3 usually returns { root: { children: [...] } }
const successMessageHtml = computed(() => {
  const msg = contactForm.value?.confirmationMessage

  if (!msg) return t('We will get back to you shortly.')

  // If it's just a string, return it
  if (typeof msg === 'string') return msg

  // If it's a Lexical object
  if (msg.root) {
    return richTextToHTML(msg)
  }

  return t('We will get back to you shortly.')
})

async function onSubmit(formData: Record<string, any>) {
  if (!contactForm.value) return

  loading.value = true

  try {
    // Transform flat object to Payload Form Builder submission format
    // Array of { field: 'name', value: 'value' }
    const submissionData = Object.entries(formData).map(([key, value]) => ({
      field: key,
      value
    }))

    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        formId: contactForm.value.id,
        submissionData,
        recaptchaToken: formData.recaptchaToken
      }
    })

    submitted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error: any) {
    console.error('Submission failed', error)
    toast.add({
      title: t('Error'),
      description: error.statusMessage || t('Failed to send message'),
      icon: 'i-bi-exclamation-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}

usePayloadPageSeo(contactPage)
</script>

<template>
  <BaseContainer>
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-24">
      <!-- Contact Information -->
      <div>
        <BaseHeader>{{ contactPage?.title || t('Contact Us') }}</BaseHeader>

        <!-- Dynamic Page Content -->
        <div
          v-if="contactPage?.content"
          class="mb-8"
          v-html="richTextToHTML(contactPage.content)"
        ></div>

        <!-- Contact Details -->
        <div v-if="settingsData?.phone || settingsData?.email" class="space-y-1 text-gray-600">
          <p v-if="settingsData.phone">{{ t('Phone') }}: {{ settingsData.phone }}</p>
          <p v-if="settingsData.email">
            {{ t('Email') }}:
            <a
              :href="`mailto:${settingsData.email}`"
              class="hover:text-primary transition-colors"
              >{{ settingsData.email }}</a
            >
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] p-8 mt-4">
        <div v-if="formsError" class="text-red-500">
          {{ t('Failed to load contact form.') }}
        </div>

        <div v-else-if="!contactForm && !formsError">
          {{ t('Loading form...') }}
        </div>

        <!-- Success Message -->
        <div v-else-if="submitted" class="text-center py-8">
          <div class="mb-4">
            <UIcon name="i-bi-check-circle" class="w-16 h-16 mx-auto text-gray-400" />
          </div>

          <h3 class="text-2xl mb-4">{{ t('Thank you!') }}</h3>

          <div class="prose max-w-none" v-html="successMessageHtml"></div>

          <UButton class="mt-8" @click="submitted = false">
            {{ t('Send another message') }}
          </UButton>
        </div>

        <FormBuilder
          v-else
          :fields="formFields"
          :submit-label="contactForm.submitButtonLabel || t('Send Message')"
          :loading="loading"
          @submit="onSubmit"
        />
      </div>
    </div>
  </BaseContainer>
</template>
