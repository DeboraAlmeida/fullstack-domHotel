// Arquivo criado: 19/01/2023 às 15:52
import React, { useEffect, useState } from "react"
import getMonthReserves from "../../../services/getMonthReserves"
import getTotalReserves from "../../../services/getTotalReserves"
import getTotalUsers from "../../../services/getTotalUsers"
import getTotalWorkers from "../../../services/getTotalWorkers"
import Anchor from "../../atoms/Anchor"
import GenericLabel from "../../atoms/GenericLabel"
import PrincipalTitle from "../../atoms/PrincipalTitle"
import SubTitle from "../../atoms/SubTitle"
import * as S from "./styles"


const HomeAdmin = () => {
  const [activeUsers, setActiveUsers] = useState(0)
  const [activeReserves, setActiveReserves] = useState(0)
  const [activeWorkers, setActiveWorkers] = useState(0)
  const [monthReserves, setMonthReserves] = useState(0)
  useEffect(() => {
    const getActiveUsers = async () => {
      const result = await getTotalUsers()
      setActiveUsers(result)
    }
    const getActiveReserves = async () => {
      const result = await getTotalReserves()
      setActiveReserves(result)
    }
    const getActiveWorkers = async () => {
      const result = await getTotalWorkers()
      setActiveWorkers(result)
    }
    const getMonthReservesNumber = async () => {
      const result = await getMonthReserves()
      setMonthReserves(result)
    }
    getActiveWorkers()
    getActiveUsers()
    getActiveReserves()
    getMonthReservesNumber()
  },[])

  const metrics = [
    {
      name: activeUsers,
      text: 'clientes ativos',
      id: 1,
      href: '/'
    },
    {
      name: activeReserves,
      text: 'reservas ativas',
      id: 2,
      href: '/'
    },
    {
      name: activeWorkers,
      text: 'funcionários ativos',
      id: 3,
      href: '/'
    },
    {
      name: monthReserves,
      text: 'reservas para este mês',
      id: 4,
      href: '/'
    }

  ]

 


  return (
    <S.Container>
      <PrincipalTitle>DOM Hotel</PrincipalTitle>
      <S.BoxItens>
        <S.ContainerReserves>
          <GenericLabel for='metrics'>Métricas</GenericLabel>
          <ul>
            {metrics.map((metric, index: number) => (
              <li key={index} value={metric.id}><SubTitle>{metric.name}</SubTitle> <Anchor activeLink='' hoverColor='' msg={metric.text} href='' /> </li>
            ))}
          </ul>
        </S.ContainerReserves>
        <S.ContainerContact>
          <GenericLabel for='contact'>Informações de Contato</GenericLabel>
          <S.ContainerTabContact>
            <span>Aqui vai entrar</span>
            <span>Info dos contatos</span>
          </S.ContainerTabContact>
        </S.ContainerContact>
      </S.BoxItens>
    </S.Container>
  )
}

export default HomeAdmin

