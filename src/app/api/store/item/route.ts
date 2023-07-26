import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/db/client'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const body = await req.json()
  const { name, image, brand, description, category } = body
  const price = Number(body.price)

  if (!name || !description || !price) {
    return NextResponse.json({
      success: false,
      status: 400,
      errors: [{ msg: 'Please provide all required fields' }],
    })
  }

  const newItem = await prisma.storeItem.create({
    data: {
      name,
      image,
      brand,
      description,
      price,
      category,
    },
  })

  return NextResponse.json({
    success: true,
    status: 201,
    msg: 'New product added to database',
    data: newItem,
  })
}
