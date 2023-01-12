import PropTypes from 'prop-types'
import React from 'react'
import * as S from './style.js'

const ImageDefault = ({ src, altText, onClick }) => {
  return (
    <S.Image src={src} alt={altText} onClick={onclick}/>
  )
}

ImageDefault.propTypes = {
  src: PropTypes.node,
  altText: PropTypes.node
}


export default ImageDefault