import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from './data/slideData'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}

export const Hero = () => {
  const slidesJsx = slideImages.map(({ key, image, text }) => (
    <div key={key}>
      <div style={{ ...divStyle, backgroundImage: `url(${image})` }}>
        <span style={spanStyle}>{text}</span>
      </div>
    </div>
  ))

  return (
    <div className="slide-container">
      <Slide>{slidesJsx}</Slide>
    </div>
  )
}
