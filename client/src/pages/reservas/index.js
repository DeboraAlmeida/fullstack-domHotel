// Arquivo criado: 15/12/2022 às 20:49
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Button from '../../components/atoms/Button'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import ImageDefault from '../../components/atoms/ImageDefault'
import MiniTitle from '../../components/atoms/MiniTitle'
import { SpanText } from '../../components/atoms/MiniTitle/styles'
import Modal from '../../components/atoms/Modal'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import UnorderedList from '../../components/atoms/UnorderedList'
import postReserve from '../../services/postReserve'
import phoneFormatter from '../../utils/phoneFormatter'
import { validateEmail, validateName, validateNumber } from '../../utils/validateFields'
import premium from './images/acomodacao_premium.webp'
import standard from './images/acomodacao_standard.webp'
import vip from './images/acomodacao_vip.webp'
import * as S from './styles'


const Reservas = ({ setForcedLogin }) => {
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

  const [resumeOpen, setResumeOpen] = useState(false)

  const [quartos, setQuartos] = useState([
    {
      title: 'Standard',
      description: 'O quarto standard é a melhor opção para quem está procurando toda a diversão do nosso hotel, com economia e sem abrir mão do conforto, com uma cama de casal confortável, frigobar, wi-fi, TV com acesso aos melhores streammings, mesa para computador e sacada!',
      price: '120,00',
      basePrice: '120,00',
      img: standard
    },
    {
      title: 'Premium',
      description: 'Conforto e praticidade em uma suíte moderna e agradável, com cama queen size, frigobar, TV com acesso aos melhores streammings, sacada espaçosa, wi-fi, sala de estar e mesa para computador!',
      price: '160,00',
      basePrice: '160,00',
      img: premium
    },
    {
      title: 'VIP',
      description: 'A suíte vip é espaçosa e incrivelmente aconchegante e conta com cama king Size, banheira de hidromassagem, frigobar, TV com acesso aos melhores streammings, sacada gourmet, wi-fi, sala de estar, mesa para computador e vista panorâmica!',
      price: '200,00',
      basePrice: '200,00',
      img: vip
    }
  ])

  const [resumeItens, setResumeItens] = useState([
    {
      id: 'quarto',
      name: 'Quarto:  ',
      content: {
        title: '',
        description: '',
        price: '',
        basePrice: '',
        img: ''
      }
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
    quarto: {
      title: '',
      description: '',
      price: '',
      basePrice: '',
      img: ''
    },
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


  const selectRoom = event => {
    if (event.target.checked) {
      inputsValue.quarto = quartos.find(item => item.title === event.target.value)
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

  const saveUserStorage = (id) => {
    let obj = {}
    if (valueFields[`${id}`] === '') {
      setErrosFields(prev => ({ ...prev, [id]: true }))
      return
    }
    if (localStorage.getItem('userData')) {
      obj = JSON.parse(localStorage.getItem('userData'))
      obj[`${id}`] = valueFields[`${id}`]
      localStorage.setItem('userData', JSON.stringify(obj))
      return
    }
    obj[`${id}`] = valueFields[`${id}`]
    localStorage.setItem('userData', JSON.stringify(obj))
  }
  
  const handleOpenConfirmationModal = () => {
    onButtonClick()
    resumeItens.forEach(item => {
      if (item.id === 'quarto') {
        if (item.content.img !== '') {
          setResumeOpen(true)
        }
      }
    })
  }

  const sendReserve = async () => {
    setResumeOpen(false)
    if (sessionStorage.getItem('isLogged')) {

      const userData = JSON.parse(localStorage.getItem('userData'))
      const moreService = JSON.parse(localStorage.getItem('moreServices'))
      const reserva = JSON.parse(localStorage.getItem('reserva'))

      userData.id_user = JSON.parse(sessionStorage.getItem('isLogged')).id_user

      const payload = {
        userData,
        moreService,
        reserva
      }


      await postReserve(payload)
    }
    setForcedLogin(true)
  }
  
  const getDataForPDF = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs
    if (sessionStorage.getItem('isLogged')) {
      // nome do user
      const userData = JSON.parse(localStorage.getItem('userData'))
      userData.name = JSON.parse(sessionStorage.getItem('isLogged')).name 
      // dados da reserva
      const reserva = JSON.parse(localStorage.getItem('reserva'))
      const reserve = [`Número de adultos: ${reserva.adultos}`, `Número de crianças: ${reserva.criancas}`, `Data de check-in: ${reserva.checkin.split('-').reverse().join('/')}`, `Data de check-out: ${reserva.checkout.split('-').reverse().join('/')}`, `Quarto: ${reserva.quarto}`]
      // serviços adicionais contratados
      const moreService = JSON.parse(localStorage.getItem('moreServices'))
      let services = ['Não foram contratados serviços adicionais.']
      const contractedServices = []
      if (moreService) {
        services = Object.keys(moreService)
        services.forEach((service) => {
          if (moreService[service] !== 0) {
            switch (service) {
              case 'mordomo':
                contractedServices.push('Serviço de mordomo')
                break
              case 'cofre':
                contractedServices.push('Cofre no quarto')
                break
              case 'pet':
                contractedServices.push('Hospedagem para pet')
                break
              case 'cafe':
                contractedServices.push('Incluso café da manhã')
                break
              case 'massagem':
                contractedServices.push('Cadeira de massagem no quarto')
                break
              case 'ac':
                contractedServices.push('Ar condicionado no talo!')
                break
              default:
                contractedServices.push('Não foram contratados serviços adicionais.')
            }
          }
        })
        services = contractedServices
      }     
      // buscando o valor final
      let totalReserve = ''
      const checkResumeItens = resumeItens
      checkResumeItens.filter((item) => {
        if (item.id === 'total') {
          totalReserve = item.content
        }
        return checkResumeItens
      })
      // data e hora atual
      const date = new Date().toLocaleString()
      
      // gerando o pdf com os dados resgatados
      const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [30, 50, 30, 40],
        header: [{ text: `Olá, ${userData.name}! Bem vindo(a) ao DOM Hotel!`, style: 'header' }],
        content: [{ text: 'Esta é a sua reserva:', style: 'subheader' }, [reserve], { text: 'Serviços adicionais contratados:', style: 'subheader' }, [services], { text: 'Valor total da reserva:', style: 'subheader' }, [totalReserve]],
        footer: [{ text: `Reserva impressa em ${date}`, style: 'footer' }],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: 20,
            alignment: 'center'
          },
          subheader: {
            fontSize: 15,
            bold: true,
            margin: [0, 10, 0, 10]
          },
          footer: {
            fontSize: 12,
            bold: false,
            margin: 20,
            alignment: 'right'
          }
        }
      }
      pdfMake.createPdf(docDefinitions).open()
      
    }    
  }

  const [showReserveButton, setShowReserveButton] = useState(false)
  const onButtonClick = () => setShowReserveButton(true)
  
  

  // const discountedValue = JSON.parse(localStorage.getItem('discountedValue'))
  
  return (
    <>
      <Helmet>
        <title>DOM Hotel - Reservas</title>
        <meta name='description' content='Faça sua reserva na DOM Hotel' />
      </Helmet>
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
                  onBlur={() => saveUserStorage(element.valueId)}
                  error={element.model} />
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
                  {quartos.map((element, index) => (
                    <S.quartoSingleInput key={index}>
                      <div className='-img'><ImageDefault src={element.img} alt={element.title} /></div>
                      <div className='-informacoes'>
                        <MiniTitle span={element.title} />
                        <p>{element.description}</p>
                        <div className='-informacoes-inputContainer'>
                          <input name='quarto' id={`input_${index}`} type='radio' value={element.title} onClick={selectRoom} />
                          <GenericLabel for={`input_${index}`}><MiniTitle span='R$ ' text={element.price} /></GenericLabel>
                        </div>
                      </div>
                    </S.quartoSingleInput>
                  ))}
                </div>
              </S.containerQuartos>
              <S.Btn01>
                <S.BtnModal1>
                  <Button useDefaultStyle={false} action={() => setModalOpen(true)}>Mais Serviços</Button>
                </S.BtnModal1>
              </S.Btn01>
            </S.ModalContainer>
            <S.ContainerResume>
              <UnorderedList arr={resumeItens.map(element => {
                const value = typeof element.content === 'object' ? element.content.title : element.content
                return (`${element.name} ${value}`)
              })} />
              { !showReserveButton ? <Button disabled={(errorFields.email || errorFields.name || errorFields.telephone || controlButton.checkin || controlButton.checkout)} width='100%' action={handleOpenConfirmationModal}>Confirmar</Button> : <Button disabled={(errorFields.email || errorFields.name || errorFields.telephone || controlButton.checkin || controlButton.checkout)} width='100%' action={handleOpenConfirmationModal}>Alterar Reserva</Button> }              
              { showReserveButton ? <Button width='100%' action={() => getDataForPDF()} target='_blank'>Imprimir Reserva</Button> : null }
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
                {optionsCollection.map(element => (
                  <li key={element.id}>
                    <GenericLabel>
                      <div>
                        <GenericInput
                          type={element.type}
                          onClick={handleCheckbox}
                          name={element.name}
                          id={element.id}
                          value={element.price} />
                        <span>{element.msg}</span>
                      </div>
                      <SpanText>{element.price}</SpanText>
                    </GenericLabel>
                  </li>)
                )}
              </ul>
            </S.ModalOptions>
            <S.Btn01>
              <Button action={handleMoreService}>Confirmar</Button>
            </S.Btn01>
          </Modal>

          <Modal isOpen={resumeOpen} setIsOpen={setResumeOpen}>
            <S.HeaderModal>
              <SubTitle>Confirme sua reserva</SubTitle>
            </S.HeaderModal>
            <S.ModalResume>
              <UnorderedList arr={inputsCollection.map(element => {
                const value = element.valueId === 'telephone' ? phoneFormatter(valueFields[element.valueId]) : valueFields[element.valueId]
                return (
                  <p
                    style={{ textTransform: element.valueId === 'name' ? 'capitalize' : 'none' }}
                    key={element.id}
                  >
                    {element.label} {value}
                  </p>
                )
              })} />
            </S.ModalResume>
            <S.ModalResume2>
              <UnorderedList arr={resumeItens.map(element => {
                const isQuarto = typeof element.content === 'object'
                const value = isQuarto ? element.content.title : element.content
                return (
                  <>
                    {isQuarto && (
                      <S.ContentImgInsideModal>
                        <ImageDefault altText="Imagem do Quarto selecionado" src={element.content.img} />
                        <p>{element.content.description}</p>
                      </S.ContentImgInsideModal>
                    )}

                    <p key={element.id}>{element.name} {value}</p>
                  </>
                )
              })} />
            </S.ModalResume2>
            {/* <S.boxDiscounted><SubTitle>{`Total: R$ ${(discountedValue).toFixed(2).toString().replace('.', ',')}`}</SubTitle></S.boxDiscounted> */}
            <S.Btn01>
              {/* <Button action={() => setResumeOpen(false)}>Finalizar</Button> */}
              <Button action={() => sendReserve()}>Finalizar</Button>
            </S.Btn01>
          </Modal>
        </S.ContainerModal>

      </S.PrincipalContainer>
    </>
  )

}

export default Reservas
