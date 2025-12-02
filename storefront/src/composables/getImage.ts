
import defaultImage from '@/assets/images/_default-image.svg'

export const getImage = (imageUrl: string | null | undefined) => {
  return import.meta.env.VITE_BACKEND_DOMAIN + imageUrl || defaultImage
}