import { StoreItem } from '@/types/StoreItems'

export const storeItem = ({
  name,
  image,
  brand,
  description,
  price,
  category,
}: StoreItem) => {
  console.log(name, image, brand, description, price, category)

  return <div>storeItem</div>
}
