// Arquivo criado: 17/12/2022 às 19:38
import Navbar from 'components/atoms/NavBar'
import React from 'react'
import * as S from './styles'

export const Footer = () => {

  return (
    <S.Footer>
      <S.Container>
        <div>
          <S.SingleContent>
            <S.Title>Contato</S.Title>
            <p>Telefone: (11) 99999-9999</p>
            <p>Email: contato@dom-hotel.com</p>
            <p>Siga-nos nas redes sociais:</p>
          </S.SingleContent>

          <S.SingleContent>
            <S.Title>Endereço</S.Title>
            <p>Alameda Santos, 960 - Cerqueira César São Paulo - SP</p>
          </S.SingleContent>
        </div>

        <S.SingleContent>
          <S.Title>Continue Navegando</S.Title>
          <Navbar />
        </S.SingleContent>
      </S.Container>

      <S.CopyRight>
        <p>&copy; 2022 - Todos os direitos reservados</p>
      </S.CopyRight>
    </S.Footer>
  )

}

export default Footer
