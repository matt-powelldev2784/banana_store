import { StoreItem } from '@/types/StoreItem'
import Image from 'next/image'

export const StoreItem = (storeItem: StoreItem) => {
  return (
    <div>
      <Image
        src={`/storeItems/${storeItem.image}`}
        alt={storeItem.description}
        width={30}
        height={30}
        className=""
      />
    </div>
  )
}
