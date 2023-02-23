import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
}

const PrincipalTitle = ({ children }: Props) => {
  return (
    <>
      <S.TitleH1>{children}</S.TitleH1>
    </>
  )
}

export default PrincipalTitle