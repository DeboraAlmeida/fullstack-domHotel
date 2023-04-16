// Arquivo criado: 19/01/2023 às 15:52
import Button from "components/atoms/Button"
import GenericInput from "components/atoms/GenericInput"
import GenericLabel from "components/atoms/GenericLabel"
import GenericSelect from "components/atoms/GenericSelect"
import Modal from "components/atoms/Modal"
import PrincipalTitle from "components/atoms/PrincipalTitle"
import SubTitle from "components/atoms/SubTitle"
import TextArea from "components/atoms/TextArea"
import ContactStatus from "enums/ContactStatus"
import PayloadContact from "interfaces/payloadContact"
import pallete from "pallete"
import React, { ChangeEvent, useEffect, useState } from "react"
import { FaCheck, FaCopy } from "react-icons/fa"
import getMonthReserves from "services/getMonthReserves"
import getThisMonthContacts from "services/getThisMonthContacts"
import getTotalReserves from "services/getTotalReserves"
import getTotalUsers from "services/getTotalUsers"
import getTotalWorkers from "services/getTotalWorkers"
import backEnd from "utils/backEnd"
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
  const [showModal, setShowModal] = useState(false)
  const [selectedContact, setSelectedContact] = useState<PayloadContact>({} as PayloadContact)
  const [copied, setCopied] = useState(false)

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

  const handleContactClick = (contact: PayloadContact) => {
    setSelectedContact(contact)
    setShowModal(true)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChangeContactStatus = async (e: ChangeEvent<HTMLSelectElement>) => {

    const value = parseInt(e.target.value)

    if (value === 0 || value === 1 || value === 2) {

      // mudando no title do modal
      setSelectedContact({ ...selectedContact, status: value })

      // mudando no array de contatos
      const newContacts = contacts.map(val => {
        if (val.id === selectedContact.id) {
          val.status = value
        }
        return val
      })

      setContacts(newContacts)

      const body = {
        status: value,
        id: selectedContact.id
      }

      try {
        await backEnd('/contato', 'PUT', 'admin', body)
      } catch (err) {
        alert(err)
      }
    }


  }

  return (
    <>
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

                const color = () => {
                  switch (contact.status) {
                    case 0:
                      return pallete.error
                    case 1:
                      return pallete.gold
                    case 2:
                      return pallete.greenDefault
                    default:
                      return pallete.gold
                  }
                }

                return (
                  <CommentArea
                    key={index}
                    onClick={() => handleContactClick(contact)}
                    comment={comment.toLowerCase()}
                    name={contact.name.toLowerCase()}
                    button={
                      <Button
                        backgroundColor={color()}
                        hoverColor={color()}
                        paddingVertical='3px'
                        paddingHorizontal='5px'>
                        {ContactStatus[contact.status]}
                      </Button>
                    }
                  />
                )
              })}
            </ul>
          </S.ContainerContact>
        </S.BoxItens>
      </S.Container>

      <Modal isOpen={showModal} setIsOpen={setShowModal} >
        <SubTitle>{ContactStatus[selectedContact.status]}</SubTitle>
        <S.ContainerModalInfos>

          <div className="-boxInput">
            <GenericLabel for="status" >
              <span>Status:</span>
              <GenericSelect onChange={handleChangeContactStatus} defaultValue={selectedContact.status} aName="status" id="status">
                {
                  [
                    { value: 0, text: 'Pendente' },
                    { value: 1, text: 'Em andamento' },
                    { value: 2, text: 'Concluído' }
                  ].map(option => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                  ))
                }
              </GenericSelect>
            </GenericLabel>
          </div>

          <div className="-boxInput">
            <GenericLabel for="email" >
              <div className="-boxInput-spanContent">
                <span>Email:</span>
                {
                  copied
                    ? <FaCheck />
                    : <FaCopy title="Copiar email" onClick={() => copyToClipboard(selectedContact.email)} />
                }
              </div>
              <GenericInput value={selectedContact.email} disabled id="email" type="email" />
            </GenericLabel>
          </div>
          <div className="-boxInput">
            <GenericLabel for="mensagem" >
              <span>Mensagem:</span>
              <TextArea disabled defaultValue={selectedContact.comment} />
            </GenericLabel>
          </div>



        </S.ContainerModalInfos>
      </Modal>
    </>
  )
}

export default HomeAdmin

