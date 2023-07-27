import { NavBar } from '@/app/components'
import { checkUserIsAdmin } from '@/lib/checkUserIsAdmin'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  if (!checkUserIsAdmin()) redirect('/pages/dashboard')

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
    </main>
  )
}
