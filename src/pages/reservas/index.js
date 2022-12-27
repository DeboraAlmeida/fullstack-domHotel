// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import MiniTitle from '../../components/atoms/MiniTitle'
import { SpanText } from '../../components/atoms/MiniTitle/styles'
import Modal from '../../components/atoms/Modal'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
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

  const [modalOpen, setModalOpen] = useState(false)

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
      <S.ContainerModal>
        < Modal isOpen={modalOpen} setisOpen={setModalOpen}>
        <div className='HeaderModal'>
          <SubTitle>Mais serviços</SubTitle>
        </div>
          <S.ModalOptions>
            <ul>
              <li>
                <GenericLabel>
                  <GenericInput type='checkbox' name='Mordomo' id='Mordomo'></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg= 'Serviço de Mordomo'></DescriptionParagraph><SpanText>R$ 150,00</SpanText>
              </li>
              <li>
                <GenericLabel>
                  <GenericInput type='checkbox' name='cofre' id='cofre'></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg= 'Cofre no quarto'></DescriptionParagraph><SpanText>R$ 150,00</SpanText>
              </li>
              <li>
                <GenericLabel>
                  <GenericInput type='checkbox' name='pet' id='pet'></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg= 'Hospedagem para pets' ></DescriptionParagraph><SpanText>R$ 150,00</SpanText>
              </li>
              <li>
                <GenericLabel>
                  <GenericInput type='checkbox' name='café' id='café'></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg='Incluso Café da manhã'></DescriptionParagraph><SpanText>R$ 150,00</SpanText>
              </li>
              <li>
                <GenericLabel>
                  <GenericInput type='checkbox' name='massagem' id='massagem'></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg= 'Cadeira de massagem no quarto'></DescriptionParagraph><SpanText>R$ 150,00</SpanText>
              </li>
              <li>
                <GenericLabel>
                  <GenericInput type='checkbox' name='ac' id='ac'></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg= 'Ar condicionado no talo!!!'></DescriptionParagraph>
                <SpanText>R$ 150,00</SpanText>
              </li>
            </ul>
          </S.ModalOptions>
        </Modal>
      <div>
        <Button action={ (handleClick) => { setModalOpen(true) }}>Mais Serviços</Button>
      </div>
    </S.ContainerModal>
    </S.PrincipalContainer>
  )

}

export default Reservas
