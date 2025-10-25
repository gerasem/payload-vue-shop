import { HttpTypes } from '@medusajs/types'

export interface IItem {
  category: string
  products: HttpTypes.StoreProduct[] | []
}
