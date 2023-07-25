import { prisma } from '../db/client'
import { storeItemSeeds } from './storeItems'

async function main(): Promise<void> {
  const storeItems = await prisma.storeItems.createMany({
    data: storeItemSeeds.map((product) => ({
      name: product.name,
      description: product.description,
      price: product.price,
    })),
  })

  console.log({ storeItems })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
