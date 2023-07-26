import { prisma } from '../../../../prisma/db/client'
import { StoreItem } from './components/StoreItem'

const getStoreItems = async () => {
  const storeItems = await prisma.storeItem.findMany()
  return storeItems
}

export const StoreItems = async () => {
  const storeItems = await getStoreItems()

  const storeItemsJsx = storeItems.map((storeItem) => {
    return <StoreItem key={storeItem.id} storeItem={storeItem} />
  })

  return <div>Products</div>
}
