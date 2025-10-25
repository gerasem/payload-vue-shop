import type { HttpTypes } from '@medusajs/types'

export function optionsAsKeymap(
  variantOptions?: HttpTypes.StoreProductVariant['options'],
): Record<string, string> {
  return (
    variantOptions?.reduce((acc: Record<string, string>, opt) => {
      if (opt.option_id) {
        acc[opt.option_id] = opt.value
      }
      return acc
    }, {}) || {}
  )
}

export function isEqual(
  obj1: Record<string, string | undefined>,
  obj2: Record<string, string | undefined>,
): boolean {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  return keys1.every((key) => obj1[key] === obj2[key])
}
