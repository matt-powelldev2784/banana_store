import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <header className="flex flex-row justify-between h-fit w-full my-2">
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
      <section className="w-screen h-[600px] relative">
        <Image
          src="/ronaldo.jpg"
          alt="Football Boot"
          fill
          style={{ objectFit: 'cover' }}
          className=""
        />
        {/* <Image
          src="/adidas_black_white.webp"
          alt="Football Boot"
          fill
          style={{ objectFit: 'cover' }}
          className=""
        /> */}
      </section>
    </main>
  )
}
