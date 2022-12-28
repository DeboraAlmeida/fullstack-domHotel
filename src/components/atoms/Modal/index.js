import React from 'react'
import Button from '../Button/index'
import * as S from './styles'

const Modal = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return null
  return (
  <S.Backdrop>
    <S.ModalComp>
      <S.BtnClose><Button useDefaultStyle={false} action={(handleClick) => setIsOpen(false)}>x</Button></S.BtnClose>
      { children }
    </S.ModalComp>
  </S.Backdrop>
  )
}

export default Modal