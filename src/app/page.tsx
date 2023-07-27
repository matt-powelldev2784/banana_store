import { NavBar, Hero, StoreItems } from '@/app/components'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log('session', session)
  const isLoggedIn = Boolean(session?.user)
  console.log('isLoggedIn', isLoggedIn)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <Hero />
      <StoreItems />
    </main>
  )
}
