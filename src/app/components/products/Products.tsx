import { prisma } from '../../../../prisma/db/client'

export const Products = async () => {
  const products = await prisma.storeItems.findMany()
  console.log('products', products)

  return <div>Products</div>
}
