import { StoreItemCategory } from '@prisma/client'

interface StoreItem {
  name: string
  image: string
  brand: string
  description: string
  price: number
  category: StoreItemCategory
}

export const storeItemSeeds: StoreItem[] = [
  {
    name: 'Adidas',
    image: './storeItems/nike.webp',
    brand: 'Adidas',
    description:
      'Football boots. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
    category: 'footballBoot',
  },
  {
    name: 'Nike',
    image: './storeItems/nike.webp',
    brand: 'Nike',
    description:
      'Football boots. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
    category: 'footballBoot',
  },
  {
    name: 'New Balance',
    image: './storeItems/nike.webp',
    brand: 'New Balance',
    description:
      'Football boots. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
    category: 'footballBoot',
  },
  {
    name: 'Adidas',
    image: './storeItems/nike.webp',
    brand: 'Adidas',
    description:
      'Football boots. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
    category: 'footballBoot',
  },
  {
    name: 'Nike',
    image: './storeItems/nike.webp',
    brand: 'Nike',
    description:
      'Football boots. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
    category: 'footballBoot',
  },
  {
    name: 'New Balance',
    image: './storeItems/nike.webp',
    brand: 'New Balance',
    description:
      'Football boots. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
    category: 'footballBoot',
  },
]
