import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ImageDefault from '../../atoms/ImageDefault/index.js'

const Carrousel = ({ img1, img2, img3, img4, altText }) => {
  return (
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
            <div>
                <ImageDefault src={img1} alt={altText}/>
            </div> 
            <div>
                <ImageDefault src={img2} alt={altText}/>
            </div> 
            <div>
                <ImageDefault src={img3} alt={altText}/>
            </div> 
            <div>
                <ImageDefault src={img4} alt={altText}/>
            </div> 
        </Carousel>
  )
}
export default Carrousel