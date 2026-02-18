import { z } from 'zod'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const payloadUrl = config.public.payloadUrl || 'http://localhost:3000'

  // Generic schema expecting formId and submissionData array
  const schema = z.object({
    formId: z.number().or(z.string()),
    submissionData: z.array(
      z.object({
        field: z.string(),
        value: z.any()
      })
    ),
    honey: z.string().optional() // Honeypot field (if still used)
  })

  // Validate request structure
  const result = schema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation Failed',
      data: result.error.issues
    })
  }

  // Spam protection
  if (result.data.honey) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Spam detected'
    })
  }

  try {
    // Forward directly to Payload Form Builder API
    const response = await $fetch(`${payloadUrl}/api/form-submissions`, {
      method: 'POST',
      body: {
        form: result.data.formId,
        submissionData: result.data.submissionData
      }
    })

    return { success: true, data: response }
  } catch (error: any) {
    console.error('Contact submission error:', error)
    // Payload might return useful validation errors
    if (error.data && error.data.errors) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Form Validation Failed',
        data: error.data.errors
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message',
      data: error.message
    })
  }
})
