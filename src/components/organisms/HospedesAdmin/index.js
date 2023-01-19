// Arquivo criado: 19/01/2023 às 15:52
import React from 'react'
import Button from '../../atoms/Button'
import GenericLabel from '../../atoms/GenericLabel'
import GenericSelect from '../../atoms/GenericSelect'
import * as S from './styles'

const HospedesAdmin = () => {

  const handleForm = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const data = Object.fromEntries(form)

    if (!data.cliente || !data.consumo) {
      return alert('Selecione um cliente e um produto')
    }


    const consumoData = () => {

      const consumo = JSON.parse(localStorage.getItem('consumo')) || []

      if (consumo.length > 0) {

        let hasCliente = false
        consumo.filter(cliente => {
          if (cliente.id === data.cliente) {
            let hasProduto = false

            hasCliente = true

            cliente.consumo.filter(produto => {
              if (produto.nome === data.consumo) {
                produto.quantidade += 1
                hasProduto = true
              }
              return produto
            })

            if (!hasProduto) {
              cliente.consumo.push({
                nome: data.consumo,
                quantidade: 1
              })
            }
          }

          return cliente
        })

        if (!hasCliente) {
          consumo.push({
            id: data.cliente,
            consumo: [
              {
                nome: data.consumo,
                quantidade: 1
              }
            ]
          })
        }


        return consumo

      }
      

      consumo.push({
        id: data.cliente,
        consumo: [
          {
            nome: data.consumo,
            quantidade: 1
          }
        ]
      })

      return consumo
    }

    localStorage.setItem('consumo', JSON.stringify(consumoData()))
    e.target.reset()
    return alert('Produto adicionado com sucesso')

  }

  return (
    <S.Container>

      <S.Title>Controle de Consumo</S.Title>

      <S.Form onSubmit={handleForm}>
        <GenericLabel for='cliente'>Cliente:</GenericLabel>
        <GenericSelect id='cliente' aName='cliente'>
          <option value="checked" disabled >Selecionar Cliente</option>
          {
            data.clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
            ))
          }
        </GenericSelect>

        <GenericLabel for='consumo'>Adicionar Produto:</GenericLabel>
        <GenericSelect id='consumo' aName='consumo'>
          <option value="checked" disabled >Selecionar Produto</option>
          <optgroup label='Frigobar'>
            {
              data.frigobar.map((produto, index) => (
                <option key={index} value={produto}>{produto}</option>
              ))
            }
          </optgroup>

          <optgroup label='Cesta'>
            {
              data.cesta.map((produto, index) => (
                <option key={index} value={produto}>{produto}</option>
              ))
            }
          </optgroup>

          <optgroup label='Bar'>
            {
              data.bar.map((produto, index) => (
                <option key={index} value={produto}>{produto}</option>
              ))
            }
          </optgroup>
        </GenericSelect>

        <S.Button>
          <Button>Enviar</Button>
        </S.Button>

      </S.Form>
    </S.Container>
  )

}

const data = {
  clientes: [
    {
      id: 1,
      nome: 'Flaviano'
    },
    {
      id: 2,
      nome: 'Cristian'
    },
    {
      id: 3,
      nome: 'Debora'
    },
    {
      id: 4,
      nome: 'Larissa'
    }
  ],
  frigobar: [
    'Água',
    'Cerveja',
    'Refrigerante'
  ],
  cesta: [
    'Barra de chocolate',
    'Batata Chips',
    'Amendoim'
  ],
  bar: [
    'Café',
    'Pão de Queijo',
    'Água',
    'Lanche',
    'Almoço',
    'Cerveja',
    'Refrigerante'
  ]
}

export default HospedesAdmin
