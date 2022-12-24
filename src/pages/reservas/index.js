// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import MiniTitle from '../../components/atoms/MiniTitle'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import * as S from './styles'

export const Reservas = () => {
  const [inputsCollection] = useState([
    {
      type: 'text',
      label: 'Nome'
    },
    {
      type: 'email',
      label: 'E-mail'
    },
    {
      type: 'number',
      label: 'Telefone'
    }

  ])

  const [inputsReserve] = useState([
    {
      type: 'date',
      label: 'Data de checkin'
    },
    {
      type: 'date',
      label: 'Data de checkout'
    },
    {
      type: 'number',
      label: 'Número de adultos'
    },
    {
      type: 'number',
      label: 'Número de crianças'
    }
    
  ])

  return (
    <>
      <PrincipalTitle>Reserve sua Acomodação</PrincipalTitle>
      <MiniTitle span='Passo 1: ' text='Insira seus dados' />
      <S.FormContainer>
        {inputsCollection.map((element, index) => (
          <S.Container key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id} />
          </S.Container>
        ))}  
      </S.FormContainer>
      <S.ContainerReserve>
        {inputsReserve.map((element, index) => (
          <S.ReserveItem key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id} />
          </S.ReserveItem>
        ))}   
      </S.ContainerReserve>
    </>
  )

}

export default Reservas
