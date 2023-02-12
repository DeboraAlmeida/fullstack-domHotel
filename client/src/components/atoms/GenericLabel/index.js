import React from 'react'
import * as S from './styles'

const GenericLabel = (props) => {
  return (
    <S.LabelFor htmlFor={props.for}>{props.children}</S.LabelFor>
  )
}

export default GenericLabel