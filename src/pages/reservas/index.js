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
      id: '1',
      type: 'text',
      label: 'Nome'
    },
    {
      id: '2',
      type: 'email',
      label: 'E-mail'
    },
    {
      id: '3',
      type: 'tel',
      label: 'Telefone'
    }

  ])

  const [inputsReserve] = useState([
    {
      id: '1',
      type: 'date',
      label: 'Data de checkin'
    },
    {
      id: '2',
      type: 'date',
      label: 'Data de checkout'
    },
    {
      id: '3',
      type: 'number',
      label: 'Número de adultos',
      placeholder: '1',
      max: '4',
      min: '1'
    },
    {
      id: '4',
      type: 'number',
      label: 'Número de crianças',
      max: '4',
      min: '0'
    }
    
  ])

  return (
    <S.PrincipalContainer>
      <PrincipalTitle>Reserve sua Acomodação</PrincipalTitle>
      <MiniTitle span='Passo 1: ' text='Insira seus dados' />
      <S.FormContainer>
        {inputsCollection.map((element, index) => (
          <S.Container key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id}/>
          </S.Container>
        ))}  
      </S.FormContainer>
      <S.ContainerReserve>
        {inputsReserve.map((element, index) => (
          <S.ReserveItem key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id} placeholder={element.placeholder} min={element.min} max={element.max} />
          </S.ReserveItem>
        ))}   
      </S.ContainerReserve>
    </S.PrincipalContainer>
  )

}

export default Reservas
