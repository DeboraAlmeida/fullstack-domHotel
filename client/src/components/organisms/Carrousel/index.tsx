import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ImageDefault from '../../atoms/ImageDefault'

interface Props {
  imgCollection: Array<{ src: string }>
  altText: string
}

const Carrousel = ({ imgCollection, altText }: Props) => {
  return (
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
           {imgCollection.map((img, index) => (
            <div key={index}>
                <ImageDefault src={img.src} altText={altText}/>
            </div>  
           ))}
        </Carousel>
  )
}
export default Carrousel