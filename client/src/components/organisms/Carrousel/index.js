import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ImageDefault from '../../atoms/ImageDefault/index.js'

const Carrousel = ({ imgCollection, altText }) => {
  return (
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
           {imgCollection.map((img, index) => (
            <div key={index}>
                <ImageDefault src={img.src} alt={altText}/>
            </div>  
           ))}
        </Carousel>
  )
}
export default Carrousel