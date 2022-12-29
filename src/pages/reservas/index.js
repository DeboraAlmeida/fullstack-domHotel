// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import ImageDefault from '../../components/atoms/ImageDefault'
import MiniTitle from '../../components/atoms/MiniTitle'
import { SpanText } from '../../components/atoms/MiniTitle/styles'
import Modal from '../../components/atoms/Modal'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import UnorderedList from '../../components/atoms/UnorderedList'
import premium from './images/acomodacao_premium.jpg'
import standard from './images/acomodacao_standard.jpg'
import vip from './images/acomodacao_vip.jpg'
import * as S from './styles'


export const Reservas = () => {
  const inputsCollection = [
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

  ]

  const inputsReserve = [
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
  ]

  const optionsCollection = [
    {
      type: 'checkbox',
      name: 'Mordomo',
      id: 'Mordomo',
      msg: 'Serviço de Mordomo',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'Cofre',
      id: 'Cofre',
      msg: 'Cofre no quarto',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'Pet',
      id: 'Pet',
      msg: 'Hospedagem para Pet',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'Café',
      id: 'Café',
      msg: 'Incluso café da manhã',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'Massagem',
      id: 'Massagem',
      msg: 'Cadeira de massagem no quarto',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'Ac',
      id: 'Ac',
      msg: 'Ar condicionado no talo!!!',
      price: 'R$ 150,00'
    }
  ]

  const [modalOpen, setModalOpen] = useState(false)

  const quartos = [
    {
      title: 'Standard',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '120,00',
      img: standard
    },
    {
      title: 'Premium',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '160,00',
      img: premium
    },
    {
      title: 'VIP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '200,00',
      img: vip
    }
  ]
  
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
      <S.RoomsContainer>
        <S.ModalContainer>
          <S.containerQuartos>
            <MiniTitle span='Passo 2: ' text='Escolha o Quarto' />

            <div className='-wraper'>
              {
                quartos.map((element, index) => (
                  <S.quartoSingleInput key={index} >
                    <div className='-img'><ImageDefault src={element.img} alt={element.title} /></div>
                    <div className='-informacoes'>
                      <MiniTitle span={element.title} />
                      <p>{element.description}</p>
                      <div className='-informacoes-inputContainer'>
                        <input name='quarto' id={`input_${index}`} type='radio' />
                        <GenericLabel for={`input_${index}`}><MiniTitle span='R$ ' text={element.price} /></GenericLabel>
                      </div>
                    </div>
                  </S.quartoSingleInput>
                ))
              }
            </div>
          </S.containerQuartos>
          <S.Btn01>
            <S.BtnModal1>
            <Button useDefaultStyle={false} action={(HandleClick) => { setModalOpen(true) }}>Mais Serviços</Button>
            </S.BtnModal1>
          </S.Btn01>
        </S.ModalContainer>
        <S.ContainerResume>
            <UnorderedList arr={resumeItens.map((element) => (
              `${element.name} ${element.content}`
            ))} />
            <Button width='100%'>Confirmar</Button>
        </S.ContainerResume>
      </S.RoomsContainer>
       
      {/* Aqui iniciam os modais */}

      <S.ContainerModal>
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <S.HeaderModal>
            <SubTitle>Mais serviços</SubTitle>
          </S.HeaderModal>
          <S.ModalOptions>
            <ul>
              {optionsCollection.map((element) => (
                <li key={element.id}>
                <S.ModalCont>
                <GenericLabel>
                <GenericInput type={element.type} name={element.name} id={element.id}></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg={element.msg}></DescriptionParagraph></S.ModalCont><SpanText>{element.price}</SpanText>
              </li>
              ))}
            </ul>
          </S.ModalOptions>
          <S.Btn01>
            <Button>Confirmar</Button>
          </S.Btn01>
        </Modal>
    </S.ContainerModal>
    </S.PrincipalContainer>
  )

}

export default Reservas
