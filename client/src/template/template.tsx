import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
}

const Template = ({ children }: Props) => {
  return (
  <S.Wrapper>
    { children }
  </S.Wrapper>
  )
}

export default Template 