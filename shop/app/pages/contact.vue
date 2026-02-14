<script setup lang="ts">
import type { MappedLink } from '@/composables/usePayloadLink'
import FormBuilder from '@/components/form/Builder.vue'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()
const toast = useToast()

// Fetch contact data from footer config
const { data: footerData } = await useAsyncData('contact-page-data', () => usePayloadFooter())

// Computed contact info
const phone = computed(() => footerData.value?.phone)

// Map single links
const contactLink = computed(() =>
  footerData.value?.contactLink ? usePayloadLink({ link: footerData.value.contactLink }) : null
)

const socialLink = computed(() =>
  footerData.value?.socialLink ? usePayloadLink({ link: footerData.value.socialLink }) : null
)

// Fetch Dynamic Form Definition
const config = useRuntimeConfig()
const payloadUrl = config.public.payloadUrl || 'http://localhost:3000'

const { data: formsData, error: formsError } = await useFetch<any>(`${payloadUrl}/api/forms`, {
  params: {
    'where[title][like]': 'Contact',
    limit: 1
  }
})

const contactForm = computed(() => formsData.value?.docs?.[0])
const formFields = computed(() => contactForm.value?.fields || [])

const loading = ref(false)

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
        submissionData
      }
    })

    toast.add({
      title: t('Message sent'),
      description: contactForm.value.confirmationMessage 
        ? undefined // Let the server handle rich text or just show generic? 
        : t('We will get back to you shortly.'),
      // For now, use generic success message as confirmationMessage is rich text
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })

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

usePageSeo({
  title: t('Contact Us'),
  description: t('Get in touch with us for any questions or inquiries.')
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-24">
      <!-- Contact Information -->
      <div>
        <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ t('Contact Us') }}</h1>
        <p class="text-gray-500 text-lg mb-8">
          {{
            t(
              'Have questions? We are here to help. Send us a message or reach out using the contact information below.'
            )
          }}
        </p>

        <div class="space-y-8">
          <!-- Phone -->
          <div v-if="phone" class="flex items-start gap-4">
            <div class="bg-primary-50 p-3 rounded-lg text-primary">
              <UIcon name="i-heroicons-phone" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ t('Phone') }}</h3>
              <a
                :href="`tel:${phone.replace(/\s/g, '')}`"
                class="text-gray-600 hover:text-primary transition-colors"
              >
                {{ phone }}
              </a>
            </div>
          </div>

          <!-- Contact Link (Email etc) -->
          <div v-if="contactLink" class="flex items-start gap-4">
            <div class="bg-primary-50 p-3 rounded-lg text-primary">
              <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">
                {{ contactLink.label || t('Email') }}
              </h3>
              <a
                :href="contactLink.href"
                :target="contactLink.openInNewTab ? '_blank' : undefined"
                class="text-gray-600 hover:text-primary transition-colors"
              >
                {{ contactLink.label }}
              </a>
            </div>
          </div>

          <!-- Social Media -->
          <div v-if="socialLink" class="flex items-start gap-4">
            <div class="bg-primary-50 p-3 rounded-lg text-primary">
              <UIcon name="i-simple-icons-instagram" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ t('Follow Us') }}</h3>
              <div class="flex flex-wrap gap-4">
                <a
                  :href="socialLink.href"
                  :target="socialLink.openInNewTab ? '_blank' : undefined"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  {{ socialLink.label || 'Instagram' }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <UCard class="h-fit">
        <div v-if="formsError" class="text-red-500">
          {{ t('Failed to load contact form.') }}
        </div>
        <div v-else-if="!contactForm && !formsError">
          {{ t('Loading form...') }}
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
