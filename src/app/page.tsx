import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <header>
        <Image
          src="/foot_boot_logo.svg"
          alt="Footboot Logo"
          width={200}
          height={40}
          className="p-2"
        />
        <nav>
          <ul>
            <li>
              <a href="/store">Store</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}
