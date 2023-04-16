import ImageDefault from 'components/atoms/ImageDefault'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import React, { useEffect, useState } from 'react'
import { BoxImage } from '../DropboxImage/styles'
import img1 from './images/img1.webp'
import img2 from './images/img2.webp'
import img3 from './images/img3.webp'
import img4 from './images/img4.webp'
import * as S from './styles'



const images = [
  img1,
  img2,
  img3,
  img4
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [currentIndex])

  const handleClickPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <S.ContainerCarousel>
      <BoxImage>
        <ImageDefault src={images[currentIndex]} altText={`Image ${currentIndex}`}></ImageDefault>
      </BoxImage>
      <S.BtnCarousel><SlArrowLeft onClick={handleClickNext}></SlArrowLeft></S.BtnCarousel>
      <S.BtnCarousel2><SlArrowRight onClick={handleClickPrevious}></SlArrowRight></S.BtnCarousel2>
    </S.ContainerCarousel>
  )
}

export default Carousel
