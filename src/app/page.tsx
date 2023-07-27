import { NavBar, Hero, StoreItems } from '@/app/components'
import { checkUserIsAdmin } from '@/lib/checkUserIsAdmin'
import { redirect } from 'next/navigation'

export default async function Home() {
  const isAdmin = await checkUserIsAdmin()
  if (isAdmin) redirect('/pages/dashboard')

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <Hero />
      <StoreItems />
    </main>
  )
}
