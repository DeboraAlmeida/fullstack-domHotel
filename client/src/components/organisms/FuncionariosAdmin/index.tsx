// Arquivo criado: 19/01/2023 às 15:54
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import pallete from '../../../pallete'
import getWorkers from '../../../services/getWorkers'
import ContainerLayoutAdmin from '../../atoms/ContainerLayoutAdmin'
import GenericSelect from '../../atoms/GenericSelect'
import Modal from '../../atoms/Modal'
import CadastroFuncionarioContent from '../CadastroFuncionarioContent'
import * as S from './styles'


const FuncionariosAdmin = (): JSX.Element => {

  const [showModal, setShowModal] = useState(false)
  
  const selectWorkers = [
    {
      label: 'Ativos'
    },
    {
      label: 'Inativos'
    },
    {
      label: 'Todos'
    },

  ]

  useEffect(() => {
    (async() => {
      const result = await getWorkers()
      console.log(result)
    })()
  },[])

  const handleOpenModal = (): void => {
    setShowModal(true)
  }

  return (
    <>
    <ContainerLayoutAdmin width='20%'> 
        <S.header>
          <p>Adicionar Novo</p>
          <FaPlus onClick={handleOpenModal} title='Adicionar Funcionário' color={pallete.greenDark} />
        </S.header>   
    </ContainerLayoutAdmin> 
    
     <ContainerLayoutAdmin>
        <div className='w-20'> 
         <GenericSelect id='Workers' aName='Workers'>
          <option value="checked" disabled>Filtrar</option>
          {
            selectWorkers.map((element, index) => (
              <option key={index} value={element.label}>{element.label}</option>
            ))
          }
        </GenericSelect> 
        </div>
      </ContainerLayoutAdmin>

      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <CadastroFuncionarioContent />
      </Modal>
    </>
  )

}

export default FuncionariosAdmin
