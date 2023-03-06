import React, { ReactNode, useState } from 'react'
import * as S from './styles'

interface Props {
  srcImage: ReactNode
  description: ReactNode

}

const Dropboximage = ({ srcImage, description }: Props) => {
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