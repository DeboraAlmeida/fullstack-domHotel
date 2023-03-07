import React from 'react'
import * as S from './styles'

interface Props {
  span?: string
  text?: string
}

const MiniTitle = ({ span, text }: Props) => {
  return (
    <div>
      <h2>
        <S.SpanText>{span}</S.SpanText>{text}
      </h2>
    </div>
  )
}

export default MiniTitle