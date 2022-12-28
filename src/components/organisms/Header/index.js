// Arquivo criado: 20/12/2022 às 14:27
import React, { useEffect, useState } from 'react'
import logo from '../../../assets/dom_logo.png'
import Anchor from '../../atoms/Anchor'
import Button from '../../atoms/Button'
import ImageDefault from '../../atoms/ImageDefault'
import Modal from '../../atoms/Modal'
import Navbar from '../../atoms/NavBar'
import LoginContent from '../LoginContent'
import * as S from './styles'

export const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (isLogged) {
      setShowModal(false)
    }
  }, [isLogged])
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
        {isLogged && (
          <>
            <Anchor href='#' msg={`Olá ${'Usuário'}`} />
            <Anchor action={() => setIsLogged(false)} msg='Sair' />
          </>
        )}
        {!isLogged && (
          <Button action={() => setShowModal(true)} 
            paddingHorizontal="10px"
            paddingVertical="10px"
            className="-body-right-button"
          >ENTRAR</Button>
        )}
      </div>
    </div>
      <div className='-navbar'>
        <div>
          <Navbar />
        </div>
      </div>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <LoginContent type={'sign-in'} setIsLogged={setIsLogged}/>
      </Modal>
   </S.Header>
  )

}

export default Header
