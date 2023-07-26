import { prisma } from '../../../../prisma/db/client'
import { StoreItem } from './components/StoreItem'

const getStoreItems = async () => {
  const storeItems = await prisma.storeItem.findMany()
  return storeItems
}

export const StoreItems = async () => {
  const storeItems = await getStoreItems()

  const storeItemsJsx = storeItems.map((storeItemDetails) => {
    return <StoreItem key={storeItemDetails.id} storeItem={storeItemDetails} />
  })

  return (
    <section className="relative w-full md:w-11/12 flexCol m-auto min-w-[320px] mb-8">
      <p className="font-bold text-3xl mt-10 text-primaryBlue">
        Featured Products
      </p>
      <p className="font-bold m-2 text-black/50 mb-8">100 products found</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {storeItemsJsx}
      </div>
    </section>
  )
}
