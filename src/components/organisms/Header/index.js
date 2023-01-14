// Arquivo criado: 20/12/2022 às 14:27
import React, { useEffect, useState } from 'react'
import logo from '../../../assets/dom_logo.png'
import Anchor from '../../atoms/Anchor'
import Button from '../../atoms/Button'
import ImageDefault from '../../atoms/ImageDefault'
import Modal from '../../atoms/Modal'
import Navbar from '../../atoms/NavBar'
import LoginContent from '../LoginContent'
import MobileNav from '../mobileNav'
import * as S from './styles'

export const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [loggedName, setLoggedName] = useState('')
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    if (isLogged) {
      setShowModal(false)
    }
  }, [isLogged])

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768)
  }

  const handleLogout = () => {
    setIsLogged(false)
    sessionStorage.removeItem('isLogged')
  }

  
  return (
   <S.Header>
    <div className='-body'>
      <div className='-body-left'>
        <div className='-body-left-img'>
          <ImageDefault src={logo} altText={'Logo DOM Hotel'} />
        </div> 
        <h3>Para viver momentos inesquecíves</h3>
      </div>
     {isDesktop
       ? <div className='-body-right'>
        {isLogged && (
          <>
            <Anchor href='#' msg={`Olá ${loggedName.toUpperCase()}`} />
            <Anchor action={handleLogout} msg='Sair' />
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
       : <MobileNav
          openLoginModal={setShowModal}
          setIsLogged={setIsLogged}
          isLogged={isLogged}
          />
     }
    </div>
      <div className='-navbar'>
        <div>
          {isDesktop && <Navbar />}
        </div>
      </div>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <LoginContent type={'sign-in'} setIsLogged={setIsLogged} setLoggedName={setLoggedName} />
      </Modal>
   </S.Header>
  )

}

export default Header
