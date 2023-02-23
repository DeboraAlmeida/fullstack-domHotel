// Arquivo criado: 19/01/2023 às 15:06
import React from 'react'
import * as S from './styles'

interface Props {
  setPage: (page: string) => void
}

const HeaderAdmin = ({
  setPage
}: Props) => {

  return (
    <S.Header >
      <S.Nav>
        <li onClick={() => setPage('home')}>Home</li>|
        <li onClick={() => setPage('hospedes')}>Hóspedes</li>|
        <li onClick={() => setPage('funcionarios')}>Funcionários</li>|
        <li onClick={() => setPage('reservas')}>Reservas</li>
      </S.Nav>
    </S.Header>
  )

}

export default HeaderAdmin
