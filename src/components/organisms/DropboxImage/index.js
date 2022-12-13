import React, { useState } from 'react'
import * as S from './styles.js'
import DescriptionParagraph from '../../atoms/DescriptionParagraph'

const Dropboximage = ({ srcImage, children }) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleImage = () => {
    setShowDescription(prev => !prev)
  }

  return (
    <S.Wrapper>
    <S.BoxImage onClick={handleImage}>
      {srcImage}
    </S.BoxImage>
    {showDescription && (
      <S.BoxDescription>
        <DescriptionParagraph msg={children} />
      </S.BoxDescription>
    )}    
  </S.Wrapper>
  )
  
}

export default Dropboximage