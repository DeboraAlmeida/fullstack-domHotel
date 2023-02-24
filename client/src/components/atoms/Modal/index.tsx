import React, { Dispatch, MouseEvent, SetStateAction } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import Button from '../Button/index'
import * as S from './styles'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ children, isOpen, setIsOpen }: Props) => {
  if (!isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClickInside = (e: MouseEvent<HTMLDivElement>) => {
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