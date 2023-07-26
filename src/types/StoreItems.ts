import { StoreItemCategory } from '@prisma/client'

export interface StoreItem {
  name: string
  image: string
  brand: string
  description: string
  price: number
  category: StoreItemCategory
}
