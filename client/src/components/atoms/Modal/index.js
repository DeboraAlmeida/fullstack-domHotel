import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import Button from '../Button/index'
import * as S from './styles'

const Modal = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClickInside = e => {
    e.stopPropagation()
  }

  return (
    <S.Backdrop onClick={handleClose} >
      <S.ModalComp onClick={handleClickInside}>
      <S.BtnClose>
        <Button useDefaultStyle={false} action={handleClose}>
          <RiCloseFill />
        </Button>
      </S.BtnClose>
      { children }
    </S.ModalComp>
  </S.Backdrop>
  )
}

export default Modal