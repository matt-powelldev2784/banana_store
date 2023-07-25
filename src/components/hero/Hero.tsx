import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from './data/slideData'
import Image from 'next/image'

export const Hero = () => {
  const SlidesJsx = slideImages.map(({ key, image, alt, text }) => (
    <div key={key} className="slide-container w-full h-[620px] relative">
      <Image
        src={`/slideImages/${image}`}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute flex flex-col justify-center items-start left-32 max-w-md h-full">
        <p className=" text-white font-bold text-7xl ">{text}</p>
        <button className="bg-white px-4 py-2 rounded my-8">Shop Now</button>
      </div>
    </div>
  ))

  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
  }

  return (
    <section className="relative">
      <Slide {...properties}>{SlidesJsx}</Slide>
    </section>
  )
}
