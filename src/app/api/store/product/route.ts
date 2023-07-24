import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/db/client'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const body = await req.json()
  const { name, description } = body
  const price = Number(body.price)

  if (!name || !description || !price) {
    return NextResponse.json({
      success: false,
      status: 400,
      errors: [{ msg: 'Please provide all required fields' }],
    })
  }

  const newProduct = await prisma.storeItems.create({
    data: {
      name,
      description,
      price,
    },
  })

  return NextResponse.json({
    success: true,
    status: 201,
    msg: 'New product added to database',
    data: newProduct,
  })
}
