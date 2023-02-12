// Arquivo criado: 08/02/2023 às 20:46
import React from 'react'
import * as S from './styles'

interface Props {
  children: React.ReactNode
}

const ContainerLayoutAdmin = ({
  children
}: Props) => {

  return (
    <S.Container>
      {children}
    </S.Container>
  )

}

export default ContainerLayoutAdmin