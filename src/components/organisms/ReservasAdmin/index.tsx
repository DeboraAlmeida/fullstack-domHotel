// Arquivo criado: 19/01/2023 às 15:56
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import pallete from '../../../pallete'
import ContainerLayoutAdmin from '../../atoms/ContainerLayoutAdmin'
import Modal from '../../atoms/Modal'
import * as S from './styles'

const ReservasAdmin = (): JSX.Element => {

  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = (): void => {
    setShowModal(true)
  }

  return (
    <>
      <ContainerLayoutAdmin>
        <S.header>
          <p>ReservarAdmin</p>
          <FaPlus onClick={handleOpenModal} title='Adicionar Funcionário' color={pallete.greenDark} />
        </S.header>
      </ContainerLayoutAdmin>

      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        adicionar conteúdo de cadastro de reserva
      </Modal>
    </>
  )

}

export default ReservasAdmin
