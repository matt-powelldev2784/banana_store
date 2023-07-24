'use client'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  console.log('session', session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Banana Store</p>
    </main>
  )
}
