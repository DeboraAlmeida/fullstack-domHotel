import React from 'react'
import * as S from './style'

interface Props {
  src: string
  altText?: string
  onClick?: () => void
}

const ImageDefault = ({ src, altText, onClick }: Props) => {
  return (
    <S.Image src={src} alt={altText} onClick={onClick} />
  )
}

export default ImageDefault