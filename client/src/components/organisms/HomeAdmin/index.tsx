// Arquivo criado: 19/01/2023 às 15:52
import React, { useEffect, useState } from "react"
import getTotalReserves from "../../../services/getTotalReserves"
import getTotalUsers from "../../../services/getTotalUsers"
import BoxAdminHome from "../../atoms/BoxAdminHome"
import BoxElements from "../../atoms/BoxElements"
import PrincipalTitle from "../../atoms/PrincipalTitle"
import SubTitle from "../../atoms/SubTitle"

// interface Cliente {
//   id: string
//   nome: string
//   consumo: Consumo[]
// }

// interface Consumo {
//   nome: string
//   quantidade: number
// }

// export default class HomeAdmin extends React.Component {

//   handleForm = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const form = new FormData(e.currentTarget)

//     const data = Object.fromEntries(form)

//     if (!data.cliente || !data.consumo) {
//       return alert('Selecione um cliente e um produto')
//     }


//     const consumoData = () => {

//       const consumo = localStorage.getItem('consumo') === null ? [] : JSON.parse(localStorage.getItem('consumo') || '')

//       if (consumo.length > 0) {

//         let hasCliente = false
//         consumo.filter((cliente: Cliente) => {
//           console.log(cliente.id)
//           if (cliente.id === data.cliente) {
//             let hasProduto = false

//             hasCliente = true

//             cliente.consumo.filter(produto => {
//               if (produto.nome === data.consumo) {
//                 produto.quantidade += 1
//                 hasProduto = true
//               }
//               return produto
//             })

//             if (!hasProduto) {
//               cliente.consumo.push({
//                 nome: data.consumo.toString(),
//                 quantidade: 1
//               })
//             }
//           }

//           return cliente
//         })

//         if (!hasCliente) {
//           consumo.push({
//             id: data.cliente,
//             consumo: [
//               {
//                 nome: data.consumo,
//                 quantidade: 1
//               }
//             ]
//           })
//         }


//         return consumo

//       }


//       consumo.push({
//         id: data.cliente,
//         consumo: [
//           {
//             nome: data.consumo,
//             quantidade: 1
//           }
//         ]
//       })

//       return consumo
//     }

//     localStorage.setItem('consumo', JSON.stringify(consumoData()))
//     e.currentTarget.reset()
//     return alert('Produto adicionado com sucesso')

//   }

//   render(): JSX.Element {
//     return (
//       <S.Container>

//         <S.Title>Controle de Consumo</S.Title>

//         <S.Form onSubmit={this.handleForm}>
//           <GenericLabel for='cliente'>Cliente:</GenericLabel>
//           <GenericSelect id='cliente' aName='cliente' onBlur={undefined} error={undefined}>
//             <option value="checked" disabled >Selecionar Cliente</option>
//             {
//               data.clientes.map((cliente: Cliente) => (
//                 <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
//               ))
//             }
//           </GenericSelect>

//           <GenericLabel for='consumo'>Adicionar Produto:</GenericLabel>
//           <GenericSelect id='consumo' aName='consumo' onBlur={undefined} error={undefined}>
//             <option value="checked" disabled >Selecionar Produto</option>
//             <optgroup label='Frigobar'>
//               {
//                 data.frigobar.map((produto: string, index: number) => (
//                   <option key={index} value={produto}>{produto}</option>
//                 ))
//               }
//             </optgroup>

//             <optgroup label='Cesta'>
//               {
//                 data.cesta.map((produto: string, index: number) => (
//                   <option key={index} value={produto}>{produto}</option>
//                 ))
//               }
//             </optgroup>

//             <optgroup label='Bar'>
//               {
//                 data.bar.map((produto: string, index: number) => (
//                   <option key={index} value={produto}>{produto}</option>
//                 ))
//               }
//             </optgroup>
//           </GenericSelect>

//           <S.Button>
//             <Button>Enviar</Button>
//           </S.Button>

//         </S.Form>
//       </S.Container>
//     )
//   }

// }

// const data = {
//   clientes: [
//     {
//       id: '1',
//       nome: 'Flaviano',
//       consumo: []
//     },
//     {
//       id: '2',
//       nome: 'Cristian',
//       consumo: []
//     },
//     {
//       id: '3',
//       nome: 'Debora',
//       consumo: []
//     },
//     {
//       id: '4',
//       nome: 'Larissa',
//       consumo: []
//     }
//   ],
//   frigobar: [
//     'Água',
//     'Cerveja',
//     'Refrigerante'
//   ],
//   cesta: [
//     'Barra de chocolate',
//     'Batata Chips',
//     'Amendoim'
//   ],
//   bar: [
//     'Café',
//     'Pão de Queijo',
//     'Água',
//     'Lanche',
//     'Almoço',
//     'Cerveja',
//     'Refrigerante'
//   ]
// }

const HomeAdmin = () => {
  const [activeUsers, setActiveUsers] = useState(0)
  useEffect(() => {
    const getActiveUsers = async () => {
      const result = await getTotalUsers()
      setActiveUsers(result)
    }
    getActiveUsers()
  },[])

  const [activeReserves, setActiveReserves] = useState(0)
  useEffect(() => {
    const getActiveReserves = async () => {
      const result = await getTotalReserves()
      setActiveReserves(result)
    }
    getActiveReserves()
  },[])
  return (
    <>
    <PrincipalTitle>DOM Hotel</PrincipalTitle>
    <BoxAdminHome>
      <BoxElements>
        <SubTitle>{ activeUsers }</SubTitle> 
        <p>clientes ativos</p>
      </BoxElements>
      <BoxElements>
        <SubTitle>{ activeReserves }</SubTitle> 
        <p>reservas ativas</p>
      </BoxElements>
      <BoxElements>
        <SubTitle>{ activeUsers }</SubTitle> 
        <p>clientes ativos</p>
      </BoxElements>
      <BoxElements>
        <SubTitle>{ activeReserves }</SubTitle> 
        <p>reservas ativas</p>
      </BoxElements>
    </BoxAdminHome>
      
    </>
  )
}

export default HomeAdmin

