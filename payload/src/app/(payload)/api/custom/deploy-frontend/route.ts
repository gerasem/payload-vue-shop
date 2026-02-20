import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const POST = async (req: Request) => {
  try {
    const payload = await getPayload({ config: configPromise })
    
    // Attempt to authenticate the user using the Payload instance
    const { user } = await payload.auth({
      headers: req.headers,
    })

    // Only allow logged in users to trigger deploys
    if (!user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const deployUrl = process.env.VERCEL_DEPLOY_HOOK_URL
    
    if (!deployUrl) {
      return new Response('Deploy Hook URL not configured', { status: 500 })
    }

    const res = await fetch(deployUrl, {
      method: 'POST',
    })

    if (!res.ok) {
      throw new Error(`Deploy failed: ${res.statusText}`)
    }

    return new Response('Success', { status: 200 })
  } catch (error) {
    console.error('Frontend Deploy Error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
