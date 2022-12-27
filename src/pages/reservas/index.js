// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import MiniTitle from '../../components/atoms/MiniTitle'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import UnorderedList from '../../components/atoms/UnorderedList'
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
      id: 'checkin',
      type: 'date',
      label: 'Data de checkin'
    },
    {
      id: 'checkout',
      type: 'date',
      label: 'Data de checkout'
    },
    {
      id: 'adultos',
      type: 'number',
      label: 'Número de adultos',
      placeholder: '1',
      max: '4',
      min: '1'
    },
    {
      id: 'criancas',
      type: 'number',
      label: 'Número de crianças',
      max: '4',
      min: '0'
    }
    
  ])
  
  const [resumeItens] = useState([
    { 
      id: 'resume-room',
      name: 'Quarto: ',
      content: 'xxx',
      class: 'marginBottom'
    },
    { 
      id: 'resume-checkin', 
      name: 'Checkin: ', 
      content: 'xxx', 
      class: ''
    },
    { 
      id: 'resume-checkout',
      name: 'Checkout: ',
      content: 'xxx',
      class: 'marginBottom'
    },
    { 
      id: 'resume-people',
      name: 'Pessoas: ',
      content: 'xxx',
      class: ''
    },
    { 
      id: 'resume-services',
      name: 'Serviços Adicionais: ',
      content: 'xxx',
      class: 'marginBottom'
    }])

  return (
    <S.PrincipalContainer>
      <PrincipalTitle>Reserve sua Acomodação</PrincipalTitle>
      <MiniTitle span='Passo 1: ' text='Insira seus dados' />
      <S.FormContainer>
        <S.DataContainer>
        {inputsCollection.map((element, index) => (
          <S.Container key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id}/>
          </S.Container>
        ))} 
        </S.DataContainer> 
        <S.ContainerReserve>
          {inputsReserve.map((element, index) => (
            <S.ReserveItem key={index}>
              <GenericLabel for={element.id}>{element.label}</GenericLabel>
              <GenericInput type={element.type} id={element.id} placeholder={element.placeholder} min={element.min} max={element.max} name={element.id} />
            </S.ReserveItem>
          ))}   
        </S.ContainerReserve>
      </S.FormContainer>
        <S.ContainerResume>
            <UnorderedList arr={resumeItens.map((element) => (
              `${element.name} ${element.content}`
            ))} />
            <Button width='100%'>Confirmar</Button>
        </S.ContainerResume>
    </S.PrincipalContainer>
  )

}

export default Reservas
