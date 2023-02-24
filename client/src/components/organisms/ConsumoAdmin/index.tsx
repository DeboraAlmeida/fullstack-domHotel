// Arquivo criado: 19/01/2023 às 14:32
import React, { FormEvent, useEffect, useState } from 'react'
import GenericSelect from '../../../components/atoms/GenericSelect'
import getReserves from '../../../services/getReserves'
import Button from '../../atoms/Button'
import GenericLabel from '../../atoms/GenericLabel'
import data from './data'
import * as S from './styles'


// interface Cliente {
//   id: string
//   nome: string
//   consumo: Consumo[]
// }

// interface Consumo {
//   nome: string
//   quantidade: number
// }

const ConsumoAdmin = () => {

  const [payload, setPayload] = useState({
    reserve: '',
    product: '',
  })

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

  useEffect(() => {
    const listReserves = async () => {
      const result = await getReserves()
      setReservesData(result)
    }

    listReserves()
  }, [])

  const handleReserves = (value: any) => {
    setPayload((prev) => ({ ...prev, reserve: value }))
  }

  const handleProducts = (value: any) => {
    setPayload((prev) => ({ ...prev, product: value }))
  }

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form)

    if (!payload.reserve || !payload.product) {
      return alert('Selecione um cliente e um produto')
    }



    e.currentTarget.reset()
    return alert('Produto adicionado com sucesso')
  }

  return (
    <S.Container>

      <S.Title>Controle de Consumo</S.Title>

      <S.Form onSubmit={handleForm}>
        <div>
          <S.ContainerReserves>
            <GenericLabel for='reserves'>Reservas Ativas</GenericLabel>
            <GenericSelect id='reserves' aName='reserves' onBlur={(e) => handleReserves(e.target.value)}>
              <option value="checked" disabled >Selecionar Reserva:</option>            {
                reservesData.map((reserve, index: number) => (
                  <option key={index} value={reserve.user_name}>{reserve.user_name}</option>
                ))
              }
            </GenericSelect>
          </S.ContainerReserves>

          <S.ContainerProducts>
            <GenericLabel for='product'>Adicionar Produto:</GenericLabel>
            <GenericSelect id='product' aName='products' onBlur={(e) => handleProducts(e.target.value)}>
              <option value="checked" disabled >Selecionar Produto</option>
              <optgroup label='Frigobar'>              {
                data.frigobar.map((produto: string, index: number) => (
                  <option key={index} value={produto}>{produto}</option>
                ))
              }
              </optgroup>

              <optgroup label='Cesta'>
                {
                  data.cesta.map((produto: string, index: number) => (
                    <option key={index} value={produto}>{produto}</option>
                  ))
                }
              </optgroup>

              <optgroup label='Bar'>
                {
                  data.bar.map((produto: string, index: number) => (
                    <option key={index} value={produto}>{produto}</option>
                  ))
                }
              </optgroup>
            </GenericSelect>
          </S.ContainerProducts>

        </div>



        <S.Button>
          <Button>Enviar</Button>
        </S.Button>

      </S.Form>
    </S.Container>
  )

}

export default ConsumoAdmin