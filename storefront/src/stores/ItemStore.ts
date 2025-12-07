import type { 
  ProductByIdQuery,
  ProductsByCategoryQuery,
  ProductBySlugQuery
} from '@/generated/graphql'
import type { IItem, IItemGrouped } from '@/interfaces/IItem'
import { gqlRequest } from '@/services/api/api-payload'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import PRODUCT_BY_ID from '@/graphql/productById.gql'
import PRODUCTS_BY_CATEGORY from '@/graphql/productsByCategory.gql'
import PRODUCT_BY_SLUG from '@/graphql/productBySlug.gql'

export const useItemStore = defineStore('item', () => {
  // Single source of truth - flat storage by slug
  const itemsBySlug = ref<Map<string, IItem>>(new Map())
  
  // Lightweight index: category slug -> array of product slugs
  const itemSlugsByCategory = ref<Map<string, string[]>>(new Map())

  /**
   * Helper: Add product to cache and update category index
   */
  const addProductToCache = (product: IItem) => {
    if (!product.slug) return

    // Store product
    itemsBySlug.value.set(product.slug, product)

    // Update category index
    const categorySlug = product.categories?.slug
    if (categorySlug) {
      const existingSlugs = itemSlugsByCategory.value.get(categorySlug) || []
      if (!existingSlugs.includes(product.slug)) {
        itemSlugsByCategory.value.set(categorySlug, [...existingSlugs, product.slug])
      }
    }
  }

  /**
   * Fetch products for a specific category
   */
  const fetchItemsByCategory = async (categorySlug: string): Promise<void> => {
    // Check cache first
    if (itemSlugsByCategory.value.has(categorySlug)) {
      return
    }

    // Need to get category ID from categoryStore
    // Import categoryStore at the top of this method
    const { useCategoryStore } = await import('./CategoryStore')
    const categoryStore = useCategoryStore()
    
    const category = categoryStore.categories.find(c => c.slug === categorySlug)
    if (!category?.id) {
      console.warn(`Category with slug "${categorySlug}" not found`)
      itemSlugsByCategory.value.set(categorySlug, [])
      return
    }

    const products = await gqlRequest<ProductsByCategoryQuery>(
      PRODUCTS_BY_CATEGORY,
      { categoryId: category.id }
    )

    const productList = products.Products?.docs || []
    
    if (productList.length === 0) {
      // Mark category as loaded (even if empty)
      itemSlugsByCategory.value.set(categorySlug, [])
      return
    }

    const slugs: string[] = []
    
    for (const product of productList) {
      addProductToCache(product as IItem)
      if (product.slug) {
        slugs.push(product.slug)
      }
    }

    itemSlugsByCategory.value.set(categorySlug, slugs)
  }

  /**
   * Fetch a single product by slug
   */
  const fetchItemBySlug = async (slug: string): Promise<void> => {
    // Check cache first
    if (itemsBySlug.value.has(slug)) {
      return
    }

    const products = await gqlRequest<ProductBySlugQuery>(
      PRODUCT_BY_SLUG,
      { slug }
    )

    const product = products.Products?.docs[0]
    if (!product) return

    addProductToCache(product as IItem)
  }

  /**
   * Refresh a single product by ID (for inventory updates)
   */
  const fetchItemById = async (item: IItem): Promise<void> => {
    if(item.__isFresh) return
    
    const products = await gqlRequest<ProductByIdQuery>(PRODUCT_BY_ID, {id: item.id}, 'GET_PRODUCT_BY_ID')
    const freshProduct = products.Products?.docs[0] as IItem
    
    if(freshProduct && freshProduct.slug) {
      const freshProductClone = { ...freshProduct } as IItem
      freshProductClone.__isFresh = true
      
      // Update in cache
      itemsBySlug.value.set(freshProduct.slug, freshProductClone)
    }
  }

  /**
   * Get products for a specific category (from cache)
   */
  const getItemsByCategory = (categorySlug: string): IItem[] => {
    const slugs = itemSlugsByCategory.value.get(categorySlug)
    if (!slugs) return []

    return slugs
      .map(slug => itemsBySlug.value.get(slug))
      .filter((item): item is IItem => item !== undefined)
  }

  /**
   * Get a single product by slug (from cache)
   */
  const getItemBySlug = (slug: string): IItem | null => {
    return itemsBySlug.value.get(slug) ?? null
  }

  /**
   * Get all items grouped by category (for AllItemsView)
   * This creates IItemGrouped[] dynamically from flat storage
   */
  const getAllItemsGrouped = (): IItemGrouped[] => {
    const groups = new Map<string, IItemGrouped>()

    for (const item of itemsBySlug.value.values()) {
      const category = item.categories
      if (!category?.slug) continue

      const categorySlug = category.slug

      if (!groups.has(categorySlug)) {
        groups.set(categorySlug, {
          category: {
            slug: category.slug,
            title: category.title ?? '',
          },
          products: [],
        })
      }

      groups.get(categorySlug)!.products.push(item)
    }

    return Array.from(groups.values())
  }

  /**
   * Hydrate store from SSG initial state
   */
  const hydrate = (data: any) => {
    // Restore flat item storage
    if (data?.itemsBySlug) {
      itemsBySlug.value = new Map<string, IItem>(Object.entries(data.itemsBySlug))
    }

    // Restore category index
    if (data?.itemSlugsByCategory) {
      itemSlugsByCategory.value = new Map<string, string[]>(Object.entries(data.itemSlugsByCategory))
    }
  }

  /**
   * Get serializable state for SSG
   */
  const getSerializableState = () => {
    return {
      itemsBySlug: Object.fromEntries(itemsBySlug.value),
      itemSlugsByCategory: Object.fromEntries(itemSlugsByCategory.value),
    }
  }

  return {
    // Data
    itemsBySlug,
    itemSlugsByCategory,
    
    // Fetch methods
    fetchItemsByCategory,
    fetchItemBySlug,
    fetchItemById,
    
    // Getters
    getItemsByCategory,
    getItemBySlug,
    getAllItemsGrouped,
    
    // Hydration
    hydrate,
    getSerializableState,
  }
})
