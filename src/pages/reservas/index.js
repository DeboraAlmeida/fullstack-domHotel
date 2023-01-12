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
import { validateEmail, validateName, validateNumber } from '../../utils/validateFields'
import premium from './images/acomodacao_premium.jpg'
import standard from './images/acomodacao_standard.jpg'
import vip from './images/acomodacao_vip.jpg'
import * as S from './styles'


export const Reservas = () => {
  const [valueFields] = useState(
    {
      email: '',
      name: '',
      telephone: ''
    }
  )
  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      name: false,
      telephone: false
    }
  )

  const handleEmail = (value) => {
    valueFields.email = value
    if (validateEmail(valueFields.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
  }

  const handleName = (value) => {
    valueFields.name = value
    if (validateName(valueFields.name)) {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
  }

  const handleTelephone = (value) => {
    valueFields.telephone = value
    if (validateNumber(valueFields.telephone)) {
      setErrosFields((prev) => ({ ...prev, telephone: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, telephone: false }))
  }
  
  const inputsCollection = [
    {
      id: '1',
      label: 'Nome:',
      method: handleName,
      model: errorFields.name,
      valueId: 'name',
      type: 'text'
    },
    {
      id: '2',
      label: 'E-mail:',
      method: handleEmail,
      model: errorFields.email,
      valueId: 'email',
      type: 'email'
    },
    {
      id: '3',
      label: 'Telefone:',
      method: handleTelephone,
      model: errorFields.telephone,
      valueId: 'telephone',
      type: 'text'
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
      name: 'mordomo',
      id: 'mordomo',
      msg: 'Serviço de Mordomo',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'cofre',
      id: 'cofre',
      msg: 'Cofre no quarto',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'pet',
      id: 'pet',
      msg: 'Hospedagem para Pet',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'cafe',
      id: 'cafe',
      msg: 'Incluso café da manhã',
      price: 'R$ 150,00'
    },
    {
      type: 'checkbox',
      name: 'massagem',
      id: 'massagem',
      msg: 'Cadeira de massagem no quarto',
      price: 'R$ 150,50'
    },
    {
      type: 'checkbox',
      name: 'ac',
      id: 'ac',
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
  
  const [resumeItens, setResumeItens] = useState([
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

  const valueClickCheckbox = {
    mordomo: 0,
    cofre: 0,
    pet: 0,
    cafe: 0,
    massagem: 0,
    ac: 0
  }

  let totalValue = 0

  const formatValueCheckbox = (value) => {
    const result = value.replace('R$', '').replace(',', '.')
    return parseFloat(result)
  }

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      valueClickCheckbox[`${e.target.id}`] = formatValueCheckbox(e.target.value)
      totalValue += formatValueCheckbox(e.target.value)
    } else {
      valueClickCheckbox[`${e.target.id}`] = 0
      totalValue -= formatValueCheckbox(e.target.value)
    }
  } 

  const handleMoreService = () => {
    localStorage.setItem('moreServices', JSON.stringify(valueClickCheckbox))
    const resumeItensValue = resumeItens
    resumeItensValue[resumeItens.length - 1].content = `R$ ${totalValue.toFixed(2).toString().replace('.', ',')}`
    setResumeItens(resumeItensValue)
    setModalOpen(false)
  }

  return (
    <S.PrincipalContainer>
      <PrincipalTitle>Reserve sua Acomodação</PrincipalTitle>
      <MiniTitle span='Passo 1: ' text='Insira seus dados' />
      <S.FormContainer>
        <S.DataContainer>
        {inputsCollection.map((element, index) => (
          <S.Container key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id} value={valueFields[`${element.valueId}`]}
            onChange={(e) => element.method(e.target.value)}
            error={element.model}/>
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
            <Button disabled={(errorFields.email || errorFields.name || errorFields.telephone)} width='100%'>Confirmar</Button>
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
                <GenericInput type={element.type} onClick={handleCheckbox} name={element.name} id={element.id} value={element.price}></GenericInput>
                <GenericInput type={element.type} name={element.name} price={element.price} id={element.id}></GenericInput>
                </GenericLabel>
                <DescriptionParagraph msg={element.msg}></DescriptionParagraph></S.ModalCont><SpanText>{element.price}</SpanText>
              </li>
              ))}
            </ul>
          </S.ModalOptions>
          <S.Btn01>
            <Button action={handleMoreService}>Confirmar</Button>
          </S.Btn01>
        </Modal>
    </S.ContainerModal>
    </S.PrincipalContainer>
  )

}

export default Reservas
