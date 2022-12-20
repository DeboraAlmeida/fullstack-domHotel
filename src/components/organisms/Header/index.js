// Arquivo criado: 20/12/2022 às 14:27
import React from 'react'
import logo from '../../../assets/dom_logo.png'
import Anchor from '../../atoms/Anchor'
import Button from '../../atoms/Button'
import ImageDefault from '../../atoms/ImageDefault'
import Navbar from '../../atoms/NavBar'
import * as S from './styles'

export const Header = () => {

  return (
   <S.Header>
    <div className='-body'>
      <div className='-body-left'>
        <div className='-body-left-img'>
          <ImageDefault src={logo} altText={'Logo DOM Hotel'} />
        </div> 
        <h3>Para viver momentos inesquecíves</h3>
      </div>
      <div className='-body-right'>
        <Anchor href='/' msg='Olá Usuário' />
        <Anchor href='/' msg='Sair' />
        <Button 
          paddingHorizontal="6px"
          paddingVertical="6px"
          className="-body-right-button"
        >CADASTRE-SE</Button>
      </div>
    </div>
      <div className='-navbar'>
        <div>
          <Navbar />
        </div>
      </div>
   </S.Header>
  )

}

export default Header
