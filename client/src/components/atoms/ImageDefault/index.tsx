import PropTypes from 'prop-types'
import React from 'react'
import * as S from './style'

interface Props {
  src: string
  altText?: string
  onClick?: () => void
}

const ImageDefault = ({ src, altText, onClick }: Props) => {
  return (
    <S.Image src={src} alt={altText} onClick={onClick}/>
  )
}

ImageDefault.propTypes = {
  src: PropTypes.node,
  altText: PropTypes.node
}


export default ImageDefault