import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import pallete from '../../../pallete'
import getActiveWorkers from '../../../services/getActiveWorkers'
import getInactiveWorkers from '../../../services/getInactiveWorkers'
import getWorkers from '../../../services/getWorkers'
import ContainerLayoutAdmin from '../../atoms/ContainerLayoutAdmin'
import GenericSelect from '../../atoms/GenericSelect'
import Modal from '../../atoms/Modal'
import CadastroFuncionarioContent from '../CadastroFuncionarioContent'
import * as S from './styles'

const FuncionariosAdmin = (): JSX.Element => {

  const [showModal, setShowModal] = useState(false)

  const [employeeContent, setEmployeeContent] = useState<[{
    name: '',
    type: ''
  }]>()
  
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

  const handleOpenModal = (): void => {
    setShowModal(true)
  }

  const loadContentEmployee = async (value: string) => {

    switch (value) {
        case selectWorkers[0].label:
          const resultActive = await getActiveWorkers();
          setEmployeeContent(resultActive)
        break;
        case selectWorkers[1].label:
          const resultInactive = await getInactiveWorkers();
          setEmployeeContent(resultInactive)
        break;
        case selectWorkers[2].label:
          const resultAll = await getWorkers();
          setEmployeeContent(resultAll)
        break;
      default:
        break;
    }
  }

  const typeEmployee = JSON.parse(sessionStorage.getItem('isLoggedAdmin') as string).id_office
  
  return (
    <> 
    {typeEmployee == 1 && (
       <S.header onClick={handleOpenModal}>
       <p>Adicionar Novo</p>
       <FaPlus title='Adicionar Funcionário' color={pallete.greenDark} />
     </S.header>   
    )}    
    
     <ContainerLayoutAdmin>
        <S.ContentContainer> 
         <GenericSelect id='Workers' aName='Workers' onChange={(e) => loadContentEmployee(e.target.value)}>
          <option value="checked" disabled>Filtrar</option>
          {
            selectWorkers.map((element, index) => (
              <option key={index} value={element.label}>{element.label}</option>
            ))
          }
        </GenericSelect> 
        </S.ContentContainer>
        <S.ListContainer>
          <ul>
            {employeeContent?.map((employee, index) => (
              <li key={index}>{employee.name} | {employee.type}</li>
            ))}
          </ul>
        </S.ListContainer>       
      </ContainerLayoutAdmin>

      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <CadastroFuncionarioContent />
      </Modal>
    </>
  )

}

export default FuncionariosAdmin
