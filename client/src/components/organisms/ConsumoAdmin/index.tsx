// Arquivo criado: 19/01/2023 às 14:32
import Button from 'components/atoms/Button'
import DescriptionParagraph from 'components/atoms/DescriptionParagraph'
import GenericLabel from 'components/atoms/GenericLabel'
import MiniTitle from 'components/atoms/MiniTitle'
import Modal from 'components/atoms/Modal'
import React, { FormEvent, useEffect, useState } from 'react'
import getReserves from 'services/getReserves'
import postExpenditure from 'services/postExpenditure'
import data from './data'
import * as S from './styles'


const ConsumoAdmin = () => {

  const [payload, setPayload] = useState({
    reserve: 0,
    product: '',
  })

  const [actualTab, setActualTab] = useState('frigobar')

  const [reservesData, setReservesData] = useState([{
    active: 0,
    amount_people: 0,
    check_in: "",
    check_out: "",
    id: 0,
    room_id: 0,
    user_id: 0,
    user_name: "Flaviano",
  }])

  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: '',
    description: ''
  })

  useEffect(() => {
    const listReserves = async () => {
      const result = await getReserves()
      setReservesData(result)
    }

    listReserves()
  }, [])

  const handleReserves = (value: number) => {
    setPayload((prev) => ({ ...prev, reserve: value }))
  }

  const handleProducts = (value: any) => {
    setPayload((prev) => ({ ...prev, product: value }))
  }

  const handleTabProducts = (value: string) => {
    setActualTab(value)
  }

  const actualProduct = () => {
    if (actualTab === 'frigobar') {
      return data.frigobar.map((product: string, index: number) => (
        <li key={index} value={product} onClick={() => handleProducts(product)}>{product}</li>
      ))
    }

    if (actualTab === 'cesta') {
      return data.cesta.map((product: string, index: number) => (
        <li key={index} value={product} onClick={() => handleProducts(product)}>{product}</li>
      ))
    }

    if (actualTab === 'bar') {
      return data.bar.map((product: string, index: number) => (
        <li key={index} value={product} onClick={() => handleProducts(product)}>{product}</li>
      ))
    }
  }

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!payload.reserve || !payload.product) {
      setModalContent({ title: 'Erro', description: 'Selecione um cliente e um produto' })
      setShowModal(true)
      return
    }

    const result = await postExpenditure(payload)
    setModalContent({ title: 'Aviso', description: result })
    setShowModal(true)
  }

  return (
    <S.Container>

      <S.Title>Controle de Consumo</S.Title>

      <S.Form onSubmit={handleForm}>
        <div>
          <S.ContainerReserves>
            <GenericLabel for='reserves'>Reservas Ativas</GenericLabel>
            <ul>
              {reservesData.map((reserve, index: number) => (
                <li key={index} value={reserve.id} onClick={() => handleReserves(reserve.id)}>ID: {reserve.id} | {reserve.user_name}</li>
              ))}
            </ul>
          </S.ContainerReserves>

          <S.ContainerProducts>
            <GenericLabel for='product'>Adicionar Produto</GenericLabel>
            <S.ContainerTabProducts>
              {Object.keys(data).map((tab, index) => {
                if (index > 0) {
                  return (<span key={index} onClick={() => handleTabProducts(tab)}>{tab}</span>)
                }
              })}
            </S.ContainerTabProducts>
            <ul>
              {actualProduct()}
            </ul>
          </S.ContainerProducts>

        </div>
        <S.Button>
          <Button>Enviar</Button>
        </S.Button>
      </S.Form>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <MiniTitle text={modalContent.title} />
        <DescriptionParagraph msg={modalContent.description} />
      </Modal>
    </S.Container>
  )

}

export default ConsumoAdmin