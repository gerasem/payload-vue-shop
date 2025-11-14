const BACKEND_URL = process.env.VITE_BACKEND_URL || 'http://localhost:3000/api'

export async function fetchCategoriesFromPayload() {
  const res = await fetch(`${BACKEND_URL}/categories?limit=0&depth=1`)
  console.log('FETCH CATEGORIES FROM PAYLOAD SSG', res)
  const data = await res.json()
  return data.docs || []
}

export async function fetchProductsFromPayload() {
  const res = await fetch(`${BACKEND_URL}/products?limit=0&depth=2`)
  console.log('FETCH PRODUCTS FROM PAYLOAD SSG', res)
  const data = await res.json()
  return data.docs || []
}
