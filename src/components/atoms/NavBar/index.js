import React from 'react'
import Anchor from '../../atoms/Anchor/index.js'
import * as S from './styles'


function Navbar() {
  return (
    <S.Nav>
      <li><Anchor hoverColor='' msg='Home' href='/' /></li>|
      <li><Anchor hoverColor='' msg='Acomodações' href='/acomodacoes' /></li>|
      <li><Anchor hoverColor='' msg='Reservas' href='/reservas' /></li>|
      <li><Anchor hoverColor='' msg='Sobre' href='/sobre' /></li>|
      <li><Anchor hoverColor='' msg='Contato' href='/contato' /></li>
    </S.Nav>
  )
}

export default Navbar