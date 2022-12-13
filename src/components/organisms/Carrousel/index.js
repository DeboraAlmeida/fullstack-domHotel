import React from 'react';
import * as S from './styles.js';
import {carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImageDefault from '../../atoms/ImageDefault/index.js'

const Carrousel = () => {
    return (
        <carousel>
        <div>
            <S.Image src={img1} alt={altText}/>
        </div> 
        <div>
            <S.Image src={img2} alt={altText}/>
        </div> 
        <div>
            <S.Image src={img3} alt={altText}/>
        </div> 
        <div>
            <S.Image src={img4} alt={altText}/>
        </div> 
        </carousel>
    )
}

export default Carrousel