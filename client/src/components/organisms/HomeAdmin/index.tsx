// Arquivo criado: 19/01/2023 às 15:52
import GenericLabel from "components/atoms/GenericLabel"
import PrincipalTitle from "components/atoms/PrincipalTitle"
import SubTitle from "components/atoms/SubTitle"
import PayloadContact from "interfaces/payloadContact"
import React, { useEffect, useState } from "react"
import getMonthReserves from "services/getMonthReserves"
import getThisMonthContacts from "services/getThisMonthContacts"
import getTotalReserves from "services/getTotalReserves"
import getTotalUsers from "services/getTotalUsers"
import getTotalWorkers from "services/getTotalWorkers"
import dataFormatter from "utils/dataFormatter"
import CommentArea from "../CommentArea"
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
  const [contacts, setContacts] = useState<PayloadContact[]>([])
  const [seeTodayContacts, setSeeTodayContacts] = useState(true)

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

    const getThisMonthContactsData = async () => {
      const result = await getThisMonthContacts()
      setContacts(result)
    }

    const getAll = async () => {
      setLoading(true)
      await getActiveWorkers()
      await getActiveUsers()
      await getActiveReserves()
      await getMonthReservesNumber()
      await getThisMonthContactsData()
      setLoading(false)
    }

    getAll()
  }, [])

  const getContacts = (type: boolean) => {

    return contacts.filter(d => {
      const date = new Date(d.createdAt).toDateString()
      const today = new Date().toDateString()

      if (type) {
        return date === today
      }
      return date !== today
    })

  }

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

  const filterTypeContact = (type: string) => {
    switch (type) {
      case 'sugestao':
        return 'Sugestão'
      case 'cancelamento':
        return 'Cancelamento'
      case 'ouvidoria':
        return 'Ouvidoria'
      case 'departamento_financeiro':
        return 'D. Financeiro'
      case 'outros':
        return 'Outros'
      default:
        return 'Outros'
    }
  }



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
            <S.SpanTipoContact selected={seeTodayContacts} onClick={() => setSeeTodayContacts(true)}>Hoje</S.SpanTipoContact>
            <S.SpanTipoContact selected={!seeTodayContacts} onClick={() => setSeeTodayContacts(false)}>Último mês</S.SpanTipoContact>
          </S.ContainerTabContact>
          <ul>
            {contacts.length === 0 && (
              <S.ContainerLoading>
                {loading ? 'Carregando...' : 'Ainda não há contatos'}
              </S.ContainerLoading>
            )}
            {/* repeti o componente porq ia ficar uma condicional muito complexa. Ao meu ver sem necessídade. */}
            {getContacts(seeTodayContacts).length === 0 && !loading && (
              <S.ContainerLoading>
                Nada encontrado para {seeTodayContacts ? 'hoje' : 'este mês'}
              </S.ContainerLoading>
            )}
            {getContacts(seeTodayContacts).map((contact, index) => {

              const comment = `${contact.comment.slice(0, 30)}...`

              return (
                <CommentArea
                  key={index}
                  comment={comment.toLowerCase()}
                  name={contact.name.toLowerCase()}
                  button={
                    <S.TypeInfoContactSingle>
                      {
                        seeTodayContacts
                          ? filterTypeContact(contact.subject)
                          : dataFormatter(contact.createdAt)
                      }
                    </S.TypeInfoContactSingle>}
                />
              )
            })}
          </ul>
        </S.ContainerContact>
      </S.BoxItens>
    </S.Container>
  )
}

export default HomeAdmin

