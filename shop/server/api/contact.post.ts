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
    recaptchaToken: z.string().optional()
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

  // Google reCAPTCHA Verification
  const recaptchaSecret = config.recaptchaSecretKey
  if (recaptchaSecret) {
    if (!result.data.recaptchaToken) {
      throw createError({
        statusCode: 400,
        statusMessage: 'reCAPTCHA is required'
      })
    }

    try {
      const verifyRes: any = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        params: {
          secret: recaptchaSecret,
          response: result.data.recaptchaToken
        }
      })

      if (!verifyRes.success) {
        throw createError({
          statusCode: 400,
          statusMessage: 'reCAPTCHA verification failed'
        })
      }

      // v3 returns a score (0.0 to 1.0). 0.5 is a common threshold.
      if (typeof verifyRes.score === 'number' && verifyRes.score < 0.5) {
        console.warn(`Low reCAPTCHA score: ${verifyRes.score} for IP: ${ip}`)
        throw createError({
          statusCode: 400,
          statusMessage: 'Bot detection: low score'
        })
      }
    } catch (err: any) {
      console.error('reCAPTCHA verification error', err)
      if (err.statusCode) throw err
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to verify reCAPTCHA'
      })
    }
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
