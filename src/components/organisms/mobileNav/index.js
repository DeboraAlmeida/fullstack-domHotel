// Arquivo criado: 29/12/2022 às 11:21
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import NavBar from '../../atoms/NavBar'
import * as S from './styles'

export const MobileNav = ({
  openLoginModal,
  setIsLogged,
  isLogged
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleLogin = () => {
    openLoginModal(true)
  }

  const loggout = () => {
    setIsLogged(false)
  }

  return (
    <S.Wrapper>
      <FaBars onClick={handleOpen} />
      {
        isOpen && 
        <S.coverOptions onClick={handleOpen}>
          <S.containerOptions>
            <NavBar />
            {
              isLogged 
                ? <span onClick={loggout}>Sair</span>
                : <span onClick={handleLogin}>Entrar</span>
            }
          </S.containerOptions>
        </S.coverOptions>
      }
    </S.Wrapper>
  )

}

export default MobileNav
