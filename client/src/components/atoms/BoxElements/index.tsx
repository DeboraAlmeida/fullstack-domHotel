import React from 'react'
import * as S from './styles'

interface Props {
  children: React.ReactNode
}

const BoxElements = ({
  children
}: Props) => {

  return (
    <S.Container>
      {children}
    </S.Container>
  )

}

export default BoxElements