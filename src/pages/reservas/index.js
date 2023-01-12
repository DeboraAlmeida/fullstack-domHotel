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
    console.log('email', value)
    valueFields.email = value
    if (validateEmail(valueFields.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
  }

  const handleName = (value) => {
    console.log('name', value)
    valueFields.name = value
    if (validateName(valueFields.name)) {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
  }

  const handleTelephone = (value) => {
    console.log('tel', value)
    valueFields.telephone = value
    if (validateNumber(valueFields.telephone)) {
      setErrosFields((prev) => ({ ...prev, telephone: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, telephone: false }))
  }
  
  const [inputsCollection, setInputsCollection] = useState([
    {
      id: 'nome',
      label: 'Nome:',
      method: handleName,
      model: errorFields.name,
      valueId: 'name',
      type: 'text',
      value: ''
    },
    {
      id: 'email',
      label: 'E-mail:',
      method: handleEmail,
      model: errorFields.email,
      valueId: 'email',
      type: 'email',
      value: ''
    },
    {
      id: 'tel',
      label: 'Telefone:',
      method: handleTelephone,
      model: errorFields.telephone,
      valueId: 'telephone',
      type: 'text',
      value: ''
    }

  ])

  const [inputsReserve, setInputReserve] = useState([
    {
      id: 'checkin',
      type: 'date',
      label: 'Data de checkin',
      value: '',
      error: false
      
    },
    {
      id: 'checkout',
      type: 'date',
      label: 'Data de checkout',
      value: '',
      error: false
      
    },
    {
      id: 'adultos',
      type: 'number',
      label: 'Número de adultos',
      placeholder: '1',
      max: '4',
      min: '1',
      value: '1',
      error: false
      
    },
    {
      id: 'criancas',
      type: 'number',
      label: 'Número de crianças',
      max: '4',
      min: '0',
      value: '0',
      error: false
      
    }
  ])
  
  const optionsCollection = [
    {
      type: 'checkbox',
      name: 'mordomo',
      id: 'mordomo',
      msg: 'Serviço de Mordomo',
      price: 'R$ 150,00',
      checked: false
    },
    {
      type: 'checkbox',
      name: 'cofre',
      id: 'cofre',
      msg: 'Cofre no quarto',
      price: 'R$ 150,00',
      checked: false
    },
    {
      type: 'checkbox',
      name: 'pet',
      id: 'pet',
      msg: 'Hospedagem para Pet',
      price: 'R$ 150,00',
      checked: false
    },
    {
      type: 'checkbox',
      name: 'cafe',
      id: 'cafe',
      msg: 'Incluso café da manhã',
      price: 'R$ 150,00',
      checked: false
    },
    {
      type: 'checkbox',
      name: 'massagem',
      id: 'massagem',
      msg: 'Cadeira de massagem no quarto',
      price: 'R$ 150,00',
      checked: false
    },
    {
      type: 'checkbox',
      name: 'ac',
      id: 'ac',
      msg: 'Ar condicionado no talo!!!',
      price: 'R$ 150,00',
      checked: false
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
    },
    { 
      id: 'total',
      name: 'Total:  ',
      content: 'R$ 0,00',
      value: ''
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
    resumeItensValue[resumeItens.length - 2].content = `R$ ${totalValue.toFixed(2).toString().replace('.', ',')}`
    resumeItensValue[resumeItens.length - 1].content = `R$ ${(parseInt(resumeItensValue[resumeItens.length - 1].value) + totalValue).toFixed(2).toString().replace('.', ',')}`
    setResumeItens(resumeItensValue)
    setModalOpen(false)
    
  }
  
  const [inputsValue, setInputsValue] = useState({
    quarto: '',
    checkin: '',
    checkout: '',
    adultos: '1',
    criancas: '0'
  })

  const [userValue, setUserValue] = useState({
    nome: '',
    email: '',
    tel: ''
  })

  const handleUserChange = (id, e) => {
    setInputsCollection(inputsCollection.filter(input => {
      if (input.id === id) {
        input.value = e.target.value
      }
      userValue[input.id] = input.value
      setUserValue(prev => ({ ...prev }))
      return userValue
    }))
  }
  
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userValue))
  }, [userValue])

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

  let initialValues = {
    today: formatDate(0),
    checkin: '',
    checkout: ''
  }
  
  const [values, setValues] = useState(initialValues)
  
  const handleDateChange = (e) => {
    const fieldName = e.target.id
    const value = e.target.value
    initialValues = { ...values, [fieldName]: value }
    setValues(initialValues)
  }

  
  const countDays = (initialDate, finalDate) => {
    const diff = new Date(finalDate) - new Date(initialDate)
    const numberOfDays = diff / (1000 * 60 * 60 * 24)
    return numberOfDays
  }
  
  const valiDate = (d1, d2) => {
    if (countDays(d1, d2) < 0) {
      return true
    }
  }

  const [controlButton, setControlButton] = useState(
    {
      checkin: false,
      checkout: false
    }
  )

  const handleInputChange = (id, e) => {
    setInputReserve(inputsReserve.filter(input => {
      if (input.id === id) {
        input.value = e.target.value
        if (input.id === 'checkin' || input.id === 'checkout') {
          handleDateChange(e)
          if (input.id === 'checkin') {
            if ((valiDate(initialValues.today, initialValues.checkin)) || (countDays(initialValues.today, initialValues.checkin) > 364)) { 
              input.error = true 
              setControlButton(prev => ({ ...prev, checkin: true }))           
            } else {
              input.error = false
              setControlButton(prev => ({ ...prev, checkin: false }))
            }
          } if (input.id === 'checkout') {
            if ((valiDate(initialValues.checkin, initialValues.checkout)) || (countDays(initialValues.checkin, initialValues.checkout) > 364)) {
              input.error = true  
              setControlButton(prev => ({ ...prev, checkout: true }))           
            } else {
              input.error = false
              setControlButton(prev => ({ ...prev, checkout: false })) 
            }            
          }
        } 
      }
      inputsValue[input.id] = input.value
      setInputsValue(prev => ({ ...prev }))
      return inputsValue
    }))
    
    setReserveResume()
  } 

  let choosenRoom = ''
  let roomValue = 0


  const selectRoom = (event) => {
    if (event.target.checked) {
      inputsValue.quarto = event.target.value
      choosenRoom = event.target.value
      setInputsValue(prev => ({ ...prev, quarto: event.target.value }))
    }
    setReserveResume()
  }

  useEffect(() => {
    localStorage.setItem('reserva', JSON.stringify(inputsValue))
  }, [inputsValue])


  const setReserveResume = () => {
    const math = (parseInt(inputsValue.adultos) + parseInt(inputsValue.criancas))
    const checkinValue = inputsValue.checkin
    const checkoutValue = inputsValue.checkout
    const selectedRoom = quartos
    
    selectedRoom.filter((item, index) => {
      item.price = parseInt(quartos[index].basePrice)
      item.price = (item.price * math)
      if (item.title === choosenRoom || item.title === inputsValue.quarto) {
        roomValue = item.price
      }
      /* item.price = `${item.price},00` */
      item.price = (item.price).toFixed(2).replace('.', ',')
      return item.price
    })
    const resumeItensValue = resumeItens
    resumeItensValue.filter((item, index) => {
      if (Object.hasOwn(inputsValue, resumeItensValue[index].id)) {
        item.content = inputsValue[`${resumeItensValue[index].id}`]
      }
      if (item.id === 'checkin' || item.id === 'checkout') {
        item.content = convertDate(inputsValue[`${resumeItensValue[index].id}`])
      }
      if (item.id === 'resume-people') {
        item.content = math
      }
      if (item.id === 'total') {
        const getMoreServices = JSON.parse(localStorage.getItem('moreServices'))
        let moreServices = 0
        const getDays = countDays(checkinValue, checkoutValue)        
        item.value = parseInt(roomValue * getDays)
        if (!isNaN(item.value) || item.value === 0) { 
          if (resumeItensValue[resumeItens.length - 2].content !== '') {
            for (const item in getMoreServices) {
              if (getMoreServices[item] !== 0) {
                moreServices += getMoreServices[item]
              }
            }
            item.value += moreServices 
          }
          item.content = `R$ ${parseInt(item.value).toFixed(2).toString().replace('.', ',')}` 
        } else {
          item.content = 'R$ 0,00'
        }
      }
      return resumeItensValue
    })
   
    setQuartos(selectedRoom)
    setResumeItens(resumeItensValue)
  }

  useEffect(() => [errorFields])
  
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
            onChange={(e) => { element.method(e.target.value); handleUserChange(element.id, e) }}
            error={element.model}/>
          </S.Container>
        ))} 
        </S.DataContainer> 
        <S.ContainerReserve>
          {inputsReserve.map(element => (
            <S.ReserveItem key={element.id}>
              <GenericLabel for={element.id}>{element.label}</GenericLabel>
              <GenericInput type={element.type} id={element.id} error={element.error} placeholder={element.placeholder} min={element.min} max={element.max} name={element.id} onChange={(e) => handleInputChange(element.id, e)} />
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
            <Button disabled={(errorFields.email || errorFields.name || errorFields.telephone || controlButton.checkin || controlButton.checkout)} width='100%'>Confirmar</Button>
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
                  <GenericInput type={element.type} onClick={handleCheckbox} name={element.name} id={element.id} value={element.price} ></GenericInput>
                  </GenericLabel>
                  <DescriptionParagraph msg={element.msg}></DescriptionParagraph></S.ModalCont><SpanText>{element.price}</SpanText>
                </li>)
              )}
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
