import Image from 'next/image'
import { NavItems } from './components/NavItems'

export const NavBar = () => {
  return (
    <header className="">
      <nav className="flex flex-row justify-between items-center h-fit w-full my-2">
        <a href="/menu">
          <Image
            src={`/icons/hamburger.svg`}
            alt={'Hamburger Menu Icon'}
            width={30}
            height={30}
            className="lg:hidden ml-2"
          />
        </a>
        <a href="/">
          <Image
            src="/foot_boot_logo.svg"
            alt="Footboot Logo"
            width={200}
            height={40}
            className="sm:h-6 lg:m-3 lg:mx-8 m-0"
          />
        </a>
        <a href="/api/auth/signin">
          <Image
            src={`/icons/signin.svg`}
            alt={'Hamburger Menu Icon'}
            width={30}
            height={30}
            className="lg:hidden mr-2"
          />
        </a>

        <ul className="hidden lg:flex gap-8 items-center justify-center mx-8 h-full">
          <NavItems />
        </ul>
      </nav>
    </header>
  )
}
