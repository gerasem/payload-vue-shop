<script setup lang="ts">
import { usePayloadLink } from '@/composables/usePayloadLink'
import type { MappedLink } from '@/composables/usePayloadLink'

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
  footerData.value?.contactLink ? usePayloadLink(footerData.value.contactLink) : null
)

const socialLink = computed(() => 
  footerData.value?.socialLink ? usePayloadLink(footerData.value.socialLink) : null
)

// Form state
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)

async function onSubmit() {
  loading.value = true
  
  // Simulate sending
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  loading.value = false
  
  toast.add({
    title: t('Message sent'),
    description: t('We will get back to you shortly.'),
    icon: 'i-heroicons-check-circle',
    color: 'success'
  })
  
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
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
          {{ t('Have questions? We are here to help. Send us a message or reach out using the contact information below.') }}
        </p>
        
        <div class="space-y-8">
          <!-- Phone -->
          <div v-if="phone" class="flex items-start gap-4">
            <div class="bg-primary-50 p-3 rounded-lg text-primary">
              <UIcon name="i-heroicons-phone" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ t('Phone') }}</h3>
              <a :href="`tel:${phone.replace(/\s/g, '')}`" class="text-gray-600 hover:text-primary transition-colors">
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
              <h3 class="font-semibold text-gray-900 mb-1">{{ contactLink.label || t('Email') }}</h3>
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
        <form @submit.prevent="onSubmit" class="space-y-6">
          <UFormGroup :label="t('Name')" required>
            <UInput 
              v-model="form.name" 
              icon="i-heroicons-user" 
              :placeholder="t('Your name')" 
              required
            />
          </UFormGroup>
          
          <UFormGroup :label="t('Email')" required>
            <UInput 
              v-model="form.email" 
              type="email" 
              icon="i-heroicons-envelope" 
              :placeholder="t('your@email.com')" 
              required
            />
          </UFormGroup>
          
          <UFormGroup :label="t('Message')" required>
            <UTextarea 
              v-model="form.message" 
              :rows="4" 
              :placeholder="t('How can we help you?')" 
              required
            />
          </UFormGroup>
          
          <UButton 
            type="submit" 
            block 
            size="lg" 
            :loading="loading"
          >
            {{ t('Send Message') }}
          </UButton>
        </form>
      </UCard>
      
    </div>
  </div>
</template>
