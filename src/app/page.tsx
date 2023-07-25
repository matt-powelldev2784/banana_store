'use client'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  console.log('session', session)

  if (session) {
    return <div>{session?.user?.name} signed in</div>
  }

  if (!session) {
    return <div>not signed in</div>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Banana Store</p>
    </main>
  )
}
