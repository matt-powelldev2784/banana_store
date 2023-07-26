import { StoreItemType } from '@/types/StoreItem'
import Image from 'next/image'

interface StoreItemProps {
  storeItem: StoreItemType
}

export default function ProductItem({ storeItem }: StoreItemProps) {
  return (
    <div className="aspect-w-1 aspect-h-1">
      <div className="w-full h-full flex flex-col items-start">
        <Image
          src={`/storeItems/${storeItem.image}`}
          alt={storeItem.description}
          width={301}
          height={301}
        />
        <p className="text-sm font-light text-black/50">{storeItem.name}</p>
        <p className="text-sm text-black/75">£{storeItem.price}</p>
      </div>
    </div>
  )
}
