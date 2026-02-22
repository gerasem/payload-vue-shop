import { z } from 'zod'

// Simple in-memory rate limiter: max 20 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT = 20
const RATE_WINDOW_MS = 60_000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS })
    return true
  }

  if (record.count >= RATE_LIMIT) return false

  record.count++
  return true
}

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  // Use private payloadUrl (server-only, not exposed to client)
  const payloadUrl = config.payloadUrl || 'http://localhost:3000'

  // Rate limiting by IP
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (!checkRateLimit(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests'
    })
  }

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
    const response = await $fetch('/api/form-submissions', {
      baseURL: payloadUrl as string,
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
