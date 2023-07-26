import { NavBar, Hero } from '@/components'

export default function Home() {
  // const { data: session } = useSession()
  // console.log('session', session)

  // if (session) {
  //   return <div>{session?.user?.name} signed in</div>
  // }

  // if (!session) {
  //   return <div>not signed in</div>
  // }

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <Hero />
    </main>
  )
}
