// Arquivo criado: 19/01/2023 às 15:52
import GenericLabel from "components/atoms/GenericLabel"
import PrincipalTitle from "components/atoms/PrincipalTitle"
import SubTitle from "components/atoms/SubTitle"
import React, { useEffect, useState } from "react"
import getMonthReserves from "services/getMonthReserves"
import getTotalReserves from "services/getTotalReserves"
import getTotalUsers from "services/getTotalUsers"
import getTotalWorkers from "services/getTotalWorkers"
import * as S from "./styles"


interface Props {
  setPage: (page: string) => void
}

const HomeAdmin = ({ setPage }: Props) => {
  const [activeUsers, setActiveUsers] = useState(0)
  const [activeReserves, setActiveReserves] = useState(0)
  const [activeWorkers, setActiveWorkers] = useState(0)
  const [monthReserves, setMonthReserves] = useState(0)
  const [loading, setLoading] = useState(true)

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

    const getAll = async () => {
      setLoading(true)
      await getActiveWorkers()
      await getActiveUsers()
      await getActiveReserves()
      await getMonthReservesNumber()
      setLoading(false)
    }

    getAll()
  }, [])

  const metrics = [
    {
      name: activeUsers,
      text: 'clientes ativos',
      id: 1,
      action: () => setPage('reservas'),
      descricaoClick: 'Clique e veja a tela de reservas'
    },
    {
      name: activeReserves,
      text: 'reservas ativas',
      id: 2,
      action: () => setPage('reservas'),
      descricaoClick: 'Clique para ver as reservas'

    },
    {
      name: activeWorkers,
      text: 'funcionários ativos',
      id: 3,
      action: () => setPage('funcionarios'),
      descricaoClick: 'Clique para ver os funcionários'

    },
    {
      name: monthReserves,
      text: 'reservas para este mês',
      id: 4,
      action: () => setPage('reservas'),
      descricaoClick: 'Clique para ver as reservas para este mês'

    }

  ]




  return (
    <S.Container>
      <PrincipalTitle>DOM Hotel</PrincipalTitle>
      <S.BoxItens>
        <S.ContainerReserves>
          <GenericLabel for='metrics'>Métricas</GenericLabel>
          {
            loading
              ? (
                <S.ContainerLoading>
                  Carregando...
                </S.ContainerLoading>
              )
              : (
                <ul>
                  {metrics.map((metric, index) => (
                    <li title={metric.descricaoClick} onClick={metric.action} key={index} value={metric.id}>
                      <SubTitle>{metric.name}</SubTitle>
                      <span>{metric.text}</span>
                    </li>
                  ))}
                </ul>
              )
          }
        </S.ContainerReserves>
        <S.ContainerContact>
          <GenericLabel for='contact'>Informações de Contato</GenericLabel>
          <S.ContainerTabContact>
            <span>Hoje</span>
            <span>Último mês</span>
          </S.ContainerTabContact>
        </S.ContainerContact>
      </S.BoxItens>
    </S.Container>
  )
}

export default HomeAdmin

