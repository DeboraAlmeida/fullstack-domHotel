import React from 'react'
import * as S from './styles'

interface Props {
  span?: string
  text?: string
}

const MiniTitle = ({ span, text }: Props) => {
  return (
    <S.DivWrapper>
      <S.H2Title><S.SpanText>{span}</S.SpanText>{text}</S.H2Title>
    </S.DivWrapper>
  )
}

export default MiniTitle