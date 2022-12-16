import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

function Navbar() {
  return (
    <S.Nav>
      <li><Link to='/'>Home</Link></li>|
      <li><Link to='/acomodacoes' >Acomodações</Link></li>|
      <li><Link to='/reservas' >Reservas </Link></li>|
      <li><Link to='/sobre' >Sobre </Link></li>|
      <li><Link to='/contato' >Contato </Link></li>|
    </S.Nav>
  )
}

export default Navbar