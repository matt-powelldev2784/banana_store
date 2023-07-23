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
          className="m-3 mx-8"
        />
        <nav>
          <ul className="flex gap-8 items-center justify-center mx-8 h-full">
            <li>
              <a href="/contact" className="flexRow gap-1 text-lg">
                <Image
                  src="/icons/boot.svg"
                  alt="Footboot Boot Icon"
                  width={30}
                  height={30}
                  className=""
                />
                Store
              </a>
            </li>
            <li>
              <a href="/contact" className="flexRow gap-1 text-lg">
                <Image
                  src="/icons/signin.svg"
                  alt="Login Icon"
                  width={30}
                  height={30}
                  className=""
                />
                Login
              </a>
            </li>
            <li>
              <a href="/contact" className="flexRow gap-1 text-lg">
                <Image
                  src="/icons/person.svg"
                  alt="Person Icon"
                  width={30}
                  height={30}
                  className=""
                />
                Account
              </a>
            </li>
            <li>
              <a href="/contact" className="flexRow gap-1 text-lg">
                <Image
                  src="/icons/basket.svg"
                  alt="Basket Icon"
                  width={30}
                  height={30}
                  className=""
                />
                Basket
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}
