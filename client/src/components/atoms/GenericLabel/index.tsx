import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  for: string
  children: ReactNode
}

const GenericLabel = ({ for: htmlFor, children }: Props) => {
  return (
    <S.LabelFor htmlFor={htmlFor}> {children} </S.LabelFor>
  )
}

export default GenericLabel