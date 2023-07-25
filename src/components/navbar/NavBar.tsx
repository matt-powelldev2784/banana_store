import Image from 'next/image'
import { NavItems } from './components/NavItems'

export const NavBar = () => {
  return (
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
          <NavItems />
        </ul>
      </nav>
    </header>
  )
}
