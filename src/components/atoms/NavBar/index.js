import React from 'react'
import { pallete } from '../../../pallete.js'
import Anchor from '../../atoms/Anchor/index.js'
import * as S from './styles'


const Navbar = () => {
  return (
    <S.Nav>
      <li><Anchor activeLink={pallete.gold} hoverColor='' msg='Home' href='/' /></li>|
      <li><Anchor activeLink={pallete.gold} hoverColor='' msg='Acomodações' href='/acomodacoes' /></li>|
      <li><Anchor activeLink={pallete.gold} hoverColor='' msg='Reservas' href='/reservas' /></li>|
      <li><Anchor activeLink={pallete.gold} hoverColor='' msg='Sobre' href='/sobre' /></li>|
      <li><Anchor activeLink={pallete.gold} hoverColor='' msg='Contato' href='/contato' /></li>
    </S.Nav>
  )
}

export default Navbar