import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { prisma } from '../../prisma/db/client'

export const checkUserIsAdmin = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  if (email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    const isAdmin = user?.isAdmin
    return isAdmin
  }

  return false
}
