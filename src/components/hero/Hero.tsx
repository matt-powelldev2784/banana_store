import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="w-screen h-[600px] relative">
      <Image
        src="/ronaldo.jpg"
        alt="Football Boot"
        fill
        style={{ objectFit: 'cover' }}
        className=""
      />
    </section>
  )
}
