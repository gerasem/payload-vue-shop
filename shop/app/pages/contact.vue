<script setup lang="ts">
import FormBuilder from '@/components/form/Builder.vue'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()
const toast = useToast()

// Fetch contact page content
const { data: contactPage } = await useAsyncData('contact-page-content', () =>
  usePayloadPage('contact')
)

// Fetch Dynamic Form Definition
const config = useRuntimeConfig()

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

    await $payloadFetch('/api/contact', {
      method: 'POST',
      body: {
        formId: contactForm.value.id,
        submissionData
      }
    })

    // Show success message instead of toast
    submitted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error: any) {
    console.error('Submission failed', error)
    toast.add({
      title: t('Error'),
      description: error.statusMessage || t('Failed to send message'),
      icon: 'i-heroicons-exclamation-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}

usePayloadPageSeo(contactPage)
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-24">
      <!-- Contact Information -->
      <div>
        <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ t('Contact Us') }}</h1>

        <!-- Dynamic Page Content -->
        <div
          v-if="contactPage?.content"
          class="text-gray-500 text-lg mb-8 prose max-w-none"
          v-html="richTextToHTML(contactPage.content)"
        ></div>
        <p v-else class="text-gray-500 text-lg mb-8">
          {{
            t(
              'Have questions? We are here to help. Send us a message or reach out using the contact information below.'
            )
          }}
        </p>
      </div>

      <!-- Contact Form -->
      <UCard class="h-fit">
        <div v-if="formsError" class="text-red-500">
          {{ t('Failed to load contact form.') }}
        </div>
        <div v-else-if="!contactForm && !formsError">
          {{ t('Loading form...') }}
        </div>

        <!-- Success Message -->
        <div v-else-if="submitted" class="text-center py-8">
          <div class="mb-4 text-secondary">
            <UIcon name="i-heroicons-check-circle" class="w-16 h-16 mx-auto" />
          </div>
          <h3 class="text-2xl font-bold mb-4">{{ t('Thank you!') }}</h3>
          <div class="prose max-w-none text-gray-600" v-html="successMessageHtml"></div>

          <UButton class="mt-8" variant="outline" @click="submitted = false">
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
      </UCard>
    </div>
  </div>
</template>
