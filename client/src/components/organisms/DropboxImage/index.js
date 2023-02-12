import React, { useState } from 'react'
import * as S from './styles.js'

const Dropboximage = ({ srcImage, description }) => {
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
        {description}
      </S.BoxDescription>
    )}    
  </S.Wrapper>
  )
  
}

export default Dropboximage