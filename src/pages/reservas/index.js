// Arquivo criado: 15/12/2022 às 20:49
import React, { useEffect, useState } from 'react'
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

  const [inputsReserve, setInputReserve] = useState([
    {
      id: 'checkin',
      type: 'date',
      label: 'Data de checkin',
      value: ''
      
    },
    {
      id: 'checkout',
      type: 'date',
      label: 'Data de checkout',
      value: ''
      
    },
    {
      id: 'adultos',
      type: 'number',
      label: 'Número de adultos',
      placeholder: '1',
      max: '4',
      min: '1',
      value: '1'
      
    },
    {
      id: 'criancas',
      type: 'number',
      label: 'Número de crianças',
      max: '4',
      min: '0',
      value: '0'
      
    }
  ])
  
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

  const [quartos, setQuartos] = useState([
    {
      title: 'Standard',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '120,00',
      basePrice: '120,00',
      img: standard
    },
    {
      title: 'Premium',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '160,00',
      basePrice: '160,00',
      img: premium
    },
    {
      title: 'VIP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '200,00',
      basePrice: '200,00',
      img: vip
    }
  ])
  
  const [resumeItens, setResumeItens] = useState([
    { 
      id: 'quarto',
      name: 'Quarto:  ',
      content: ''
    },
    { 
      id: 'checkin', 
      name: 'Checkin:  ', 
      content: ''
    },
    { 
      id: 'checkout',
      name: 'Checkout:  ',
      content: ''
    },
    { 
      id: 'resume-people',
      name: 'Pessoas:  ',
      content: ''
    },
    { 
      id: 'resume-services',
      name: 'Serviços Adicionais:  ',
      content: ''
    }])

  const [inputsValue, setInputsValue] = useState({
    quarto: '',
    checkin: '',
    checkout: '',
    adultos: '1',
    criancas: '0'
  })

  const formatDate = d => {
    const data = new Date()
    const dt = new Date(data.setDate(data.getDate() + d))
    let month = '' + (dt.getMonth() + 1)
    let day = '' + dt.getDate()
    const year = dt.getFullYear()

    if (month.length < 2) { month = '0' + month }
    if (day.length < 2) { day = '0' + day }

    return [year, month, day].join('-')
  }
  
  const convertDate = d => {
    return d.split('-').reverse().join('/')
  }

  const handleInputChange = (id, e) => {
    setInputReserve(inputsReserve.filter(input => {
      if (input.id === id) {
        input.value = e.target.value
        if (input.id === 'checkin' || input.id === 'checkout') {
          input.value = convertDate(input.value)
        }
      }
      inputsValue[input.id] = input.value
      setInputsValue(prev => ({ ...prev }))
      return inputsValue
    }))
    setReserveResume()
  } 

  const selectRoom = (event) => {
    if (event.target.checked) {
      inputsValue.quarto = event.target.value
      setInputsValue(prev => ({ ...prev, quarto: event.target.value }))
    }
    setReserveResume()
  }
  
  useEffect(() => {
    localStorage.setItem('reserva', JSON.stringify(inputsValue))
  }, [inputsValue])


  const setReserveResume = () => {
    const math = (parseInt(inputsValue.adultos) + parseInt(inputsValue.criancas))
    const selectedRoom = quartos
    selectedRoom.filter((item, index) => {
      item.price = parseInt(quartos[index].basePrice)
      item.price = (item.price * math).toFixed(2)
      return selectedRoom
    })
    const resumeItensValue = resumeItens
    resumeItensValue.filter((item, index) => {
      if (Object.hasOwn(inputsValue, resumeItensValue[index].id)) {
        item.content = inputsValue[`${resumeItensValue[index].id}`]
      }
      if (item.id === 'resume-people') {
        item.content = math
      }
      return resumeItensValue
    })
    setQuartos(selectedRoom)
    setResumeItens(resumeItensValue)
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
            <GenericInput type={element.type} id={element.id}/>
          </S.Container>
        ))} 
        </S.DataContainer> 
        <S.ContainerReserve>
          {inputsReserve.map(element => (
            <S.ReserveItem key={element.id}>
              <GenericLabel for={element.id}>{element.label}</GenericLabel>
              <GenericInput type={element.type} id={element.id} placeholder={element.placeholder} min={element.min} max={element.max} name={element.id} onChange={(e) => handleInputChange(element.id, e)} />
            </S.ReserveItem>
          ))}   
        </S.ContainerReserve>
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
                        <input name='quarto' id={`input_${index}`} type='radio' value={element.title} onClick={selectRoom}/>
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
            <Button type='submit' width='100%'>Confirmar</Button>
        </S.ContainerResume>
      </S.RoomsContainer>
    </S.FormContainer>
       
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
