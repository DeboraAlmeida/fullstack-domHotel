// Arquivo criado: 19/01/2023 às 15:54
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import pallete from '../../../pallete'
import ContainerLayoutAdmin from '../../atoms/ContainerLayoutAdmin'
import Modal from '../../atoms/Modal'
import CadastroFuncionarioContent from '../CadastroFuncionarioContent'
import * as S from './styles'


const FuncionariosAdmin = (): JSX.Element => {

  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = (): void => {
    setShowModal(true)
  }

  return (
    <>
      <ContainerLayoutAdmin>
        <S.header>
          <p>FuncionariosAdmin</p>
          <FaPlus onClick={handleOpenModal} title='Adicionar Funcionário' color={pallete.greenDark} />
        </S.header>
      </ContainerLayoutAdmin>

      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <CadastroFuncionarioContent />
      </Modal>
    </>
  )

}

export default FuncionariosAdmin
