import { prisma } from '../../../../prisma/db/client'

export const StoreItems = async () => {
  const storeItems = await prisma.storeItem.findMany()
  console.log('storeItems', storeItems)

  return <div>Products</div>
}
