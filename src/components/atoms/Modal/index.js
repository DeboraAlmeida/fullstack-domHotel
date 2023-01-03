import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import Button from '../Button/index'
import * as S from './styles'

const Modal = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return null
  return (
  <S.Backdrop>
    <S.ModalComp>
      <S.BtnClose>
        <Button useDefaultStyle={false} action={() => setIsOpen(false)}>
          <RiCloseFill />
        </Button>
      </S.BtnClose>
      { children }
    </S.ModalComp>
  </S.Backdrop>
  )
}

export default Modal