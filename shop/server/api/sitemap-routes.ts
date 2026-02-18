export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const payloadUrl = config.public.payloadUrl

  const routes: string[] = []

  try {
    // 1. Fetch Products
    // /item/:slug
    const products = await $fetch<{ docs: any[] }>('/api/products', {
      baseURL: payloadUrl,
      params: {
        limit: 1000,
        depth: 0,
        where: {
          _status: { equals: 'published' }
        }
      }
    })
    
    if (products?.docs) {
      products.docs.forEach(doc => {
        if (doc.slug) {
          routes.push(`/item/${doc.slug}`)
        }
      })
    }

    // 2. Fetch Categories
    // /category/:slug
    const categories = await $fetch<{ docs: any[] }>('/api/categories', {
      baseURL: payloadUrl,
      params: {
        limit: 1000,
        depth: 0
      }
    })

    if (categories?.docs) {
      categories.docs.forEach(doc => {
        if (doc.slug) {
          routes.push(`/category/${doc.slug}`)
        }
      })
    }

    // 3. Fetch Pages
    // /:slug (home -> /)
    const pages = await $fetch<{ docs: any[] }>('/api/pages', {
      baseURL: payloadUrl,
      params: {
        limit: 1000,
        depth: 0,
        where: {
          _status: { equals: 'published' }
        }
      }
    })

    if (pages?.docs) {
      pages.docs.forEach(doc => {
        if (doc.slug === 'home') {
          routes.push('/')
        } else if (doc.slug) {
          routes.push(`/${doc.slug}`)
        }
      })
    }

  } catch (error) {
    console.error('Error fetching sitemap routes:', error)
    // Return empty array or partial results in case of error, 
    // to avoid breaking sitemap generation completely
  }

  return routes
})
