import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <header className="flex flex-row justify-between h-fit w-full">
        <Image
          src="/foot_boot_logo.svg"
          alt="Footboot Logo"
          width={200}
          height={40}
          className="p-2"
        />
        <nav>
          <ul className="flex gap-2 items-center justify-center px-4 h-full">
            <li>
              <a href="/store">Store</a>
            </li>
            <li>
              <a href="/about">Login</a>
            </li>
            <li>
              <a href="/contact">Account</a>
            </li>
            <li>
              <a href="/contact">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}
