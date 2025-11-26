// import type { ProductsByCategoryIdQuery } from '@/generated/graphql'
// import ITEMS_BY_CATEGORY_ID from '@/graphql/itemsByCategoryId.gql'
import type { AllProductsQuery, ProductByIdQuery } from '@/generated/graphql'
import type { IItem, IItemGrouped } from '@/interfaces/IItem'
import { gqlRequest } from '@/services/api/api-payload'
// import ApiService from '@/services/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import PRODUCT_BY_ID from '@/graphql/productById.gql'
import ALL_PRODUCTS from '@/graphql/allProducts.gql'

export const useItemStore = defineStore('item', () => {
  const items = ref<IItemGrouped[]>([])
  // const itemsOnMainPage = ref<IItemGrouped[]>([])

  // const getItemsByCategory = async (category: ICategory): Promise<void> => {
  // if (items.value.some((i) => i.category === category.slug)) return
  // const data = await gqlRequest<ProductsByCategoryIdQuery>(ITEMS_BY_CATEGORY_ID, {
  //   where: { categories: { in: [category.id] } },
  // })
  // const docs: IItem[] = data.Products?.docs ?? []
  // items.value.push({
  //   category: category.slug,
  //   products: docs,
  // })
  // }

  // const getItemsForMainPage = async (category: ICategory, limit?: number): Promise<void> => {
  //   if (itemsOnMainPage.value.some((i) => i.category === category.slug)) return

  //   const products: IItem[] = await ApiService.fetchItemsByCategory(
  //     category.id,
  //     `items-${category.slug}`,
  //     limit,
  //   )

  //   itemsOnMainPage.value.push({
  //     category: category.slug,
  //     products,
  //   })
  // }

  const fetchItems = async (): Promise<void> => {
    const products = await gqlRequest<AllProductsQuery>(ALL_PRODUCTS)
    // console.log('DATA ProductsByCategoryIdQuery', products)

    const map = new Map<string, { category: any; products: any[] }>()

    for (const product of products.Products?.docs || []) {
      const category = product.categories
      if (!category) continue

      const slug = category.slug
      if (!slug) continue

      if (!map.has(slug)) {
        map.set(slug, {
          category: {
            slug: category.slug,
            title: category.title,
          },
          products: [],
        })
      }

      map.get(slug)!.products.push(product)
    }

    items.value = Array.from(map.values())
    // console.log('ALL ITEMS FETCHED:', items.value)
  }

  const fetchItemById = async (item: IItem): Promise<void> => {
    if(item.__isFresh) return
    const products = await gqlRequest<ProductByIdQuery>(PRODUCT_BY_ID, {id: item.id}, 'GET_PRODUCT_BY_ID')
    console.log('refresh product', products.Products?.docs[0])
    const freshProduct = products.Products?.docs[0] as IItem
    if(freshProduct) {
      const freshProductClone = { ...freshProduct } as IItem
      freshProductClone.__isFresh = true
      updateProductReactive(freshProductClone)
    }
  }

  const updateProductReactive = (freshProduct: IItem) => {
    let found = false

    for (const group of items.value) {
      const index = group.products.findIndex(p => p.id === freshProduct.id)
      if (index !== -1) {
        group.products.splice(index, 1, freshProduct)
        found = true
        break
      }
    }

    if (!found && items.value.length > 0) {
      items.value[0].products.push(freshProduct)
    }
  }

  // const itemsByCategory = (categorySlug: string): IItem[] => {
  // console.log(1, items.value.find((i) => i.category.slug === categorySlug)?.products ?? [])
  // console.log(2, categorySlug)
  // return items.value.find((i) => i.category.slug === categorySlug)?.products ?? []
  // }

  // const itemsByCategoryForMainPage = (categoryHandle: string): IItem[] => {
  //   return itemsOnMainPage.value.find((i) => i.category === categoryHandle)?.products ?? []
  // }

  const hydrate = (data) => {
    // console.log('DATA IN HYDRATE:', data)
    if (data?.items) {
      items.value = data.items
    }
  }

  return {
    items,
    // itemsOnMainPage,

    // getItemsByCategory,
    // getItemsForMainPage,
    fetchItems,
    fetchItemById,
    // itemsByCategory,
    // itemsByCategoryForMainPage,

    hydrate,
  }
})
