import { StoreItemType } from '@/types/StoreItem'
import Image from 'next/image'

interface StoreItemProps {
  storeItem: StoreItemType
}

export const StoreItem = ({ storeItem }: StoreItemProps) => {
  console.log('storeItem.image', storeItem.image)
  return (
    // <div className="border-2 sm:border-red-500 md:border-blue-500 lg:border-green-500 relative aspect-w-1 aspect-h-1">
    //   <Image
    //     src={`/storeItems/${storeItem.image}`}
    //     alt={storeItem.description}
    //     fill
    //     className="object-cover"
    //   />
    // </div>
    <div className="aspect-w-1 aspect-h-1">
      <div className="w-full h-full flex flex-col items-start">
        <Image
          src={`/storeItems/${storeItem.image}`}
          alt={storeItem.description}
          width={300}
          height={300}
        />
        <p className="text-sm font-light text-black/50">{storeItem.name}</p>
        <p className="text-sm text-black/75">£{storeItem.price}</p>
      </div>
    </div>
  )
}
