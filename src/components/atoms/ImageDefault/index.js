import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style.js'

const ImageDefault = ({ src, altText }) => {
  return (
    <S.Image src={src} alt={altText}/>
  )
}

ImageDefault.propTypes = {
  src: PropTypes.node,
  altText: PropTypes.node
}


export default ImageDefault