import Image from 'next/image'
import Link from 'next/link'

interface ItemDetails {
  href: string
  image: string
  alt: string
  text: string
}

interface NavItemProps {
  itemDetails: ItemDetails
}

export const NavItem = ({ itemDetails }: NavItemProps) => {
  const { href, image, alt, text } = itemDetails

  return (
    <li>
      <Link href={href} className="flexRow gap-1 text-lg">
        <Image
          src={`/icons/${image}`}
          alt={alt}
          width={30}
          height={30}
          className=""
        />
        <p>{text}</p>
      </Link>
    </li>
  )
}
