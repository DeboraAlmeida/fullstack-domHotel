// Arquivo criado: 19/01/2023 às 15:56
import { Reserves } from 'interfaces/Reserves'
import React, { FormEvent, useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import pallete from '../../../pallete'
import backEnd from '../../../utils/backEnd'
import dataFormatter from '../../../utils/dataFormatter'
import Button from '../../atoms/Button'
import ContainerLayoutAdmin from '../../atoms/ContainerLayoutAdmin'
import GenericInput from '../../atoms/GenericInput'
import GenericLabel from '../../atoms/GenericLabel'
import Modal from '../../atoms/Modal'
import SubTitle from '../../atoms/SubTitle'
import CommentArea from '../CommentArea'
import * as S from './styles'

const ReservasAdmin = (): JSX.Element => {

  const [showModal, setShowModal] = useState(false)
  const [reservas, setReservas] = useState<Reserves[]>([])
  const [seemSeachContainer, setSeemSeachContainer] = useState(false)
  const [searchResults, setSearchResults] = useState<{ isSearching: boolean, data: Reserves[] }>({
    isSearching: false,
    data: []
  })

  useEffect(() => {
    backEnd('/reservas', 'GET', false).then((res) => {
      if (res.status === 200) {
        setReservas(res.data)
      }
    }).catch(() => {
      setShowModal(true)
    })
  }, [])

  const getPendentesHoje = () => {
    return reservas.filter(d => {
      const date = new Date(d.check_in).toDateString()
      const today = new Date().toDateString()
      return date === today && !d.active
    })
  }

  const getAtivas = () => {
    return reservas.filter(d => d.active)
  }

  const verifyDateTime = (date: Date) => {
    const today = new Date().toDateString()
    const dateToCompare = new Date(date).toDateString()

    if (dateToCompare === today) {
      return 'today'
    }

    if (new Date(date) < new Date()) {
      return 'past'
    }

    return 'future'
  }

  const updateStatusReserva = (id: number, active: boolean) => {

    const changeStatus = (arr: Reserves[]) => {
      return arr.filter(d => {
        if (d.id === id) {
          d.active = active
        }
        return d
      })
    }

    if (searchResults.data.length > 0) {
      setSearchResults({
        isSearching: true,
        data: changeStatus(searchResults.data)
      })
    }

    backEnd(`/reservas/${id}`, 'PUT', false, { active }).then(res => {
      if (res.status === 200) {
        setReservas(changeStatus(reservas))
        return
      }

      setShowModal(true)
    }).catch(() => {
      setShowModal(true)
    })
  }

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    const data = {
      inicioData: form.inicioData.value,
      finalData: form.finalData.value,
    }

    if (data.inicioData === '' || data.finalData === '') {
      setShowModal(true)
      return
    }

    setSearchResults({
      isSearching: true,
      data: []
    })

    backEnd(`/reservas-by-date/${data.inicioData}/${data.finalData}`, 'GET', false).then(res => {

      if (res.status === 200) {
        setSearchResults({
          isSearching: true,
          data: res.data
        })
        return
      }

      setShowModal(true)
    }).catch(() => {
      setShowModal(true)
    })
  }

  return (
    <>
      <ContainerLayoutAdmin>
        <p>Reservas</p>
      </ContainerLayoutAdmin>


      <S.ContainerSides>

        {
          [
            {
              title: 'Pendentes hoje',
              data: getPendentesHoje(),
              buttonTitle: 'Ativar',
              tooltip: 'Aqui você pode ativar as reservas pendentes de hoje. Ao ativar, o cliente poderá acessar o quarto reservado. Caso o cliente não compareça, você pode finalizar a reserva na sessão ao lado.',
              width: '35%',
              emptyMessage: 'Nenhuma reserva pendente para hoje'
            },
            {
              title: 'Reservas Ativas',
              data: getAtivas(),
              buttonTitle: 'Finalizar',
              width: '60%',
              tooltip: 'Aqui você pode finalizar as reservas ativas. Ao finalizar, o cliente não poderá mais acessar o quarto reservado.',
              emptyMessage: 'Nenhuma reserva ativa'
            }
          ].map((val, index) => (
            <ContainerLayoutAdmin className='-need-mobile' key={index} width={val.width}>
              <S.BoxReservasTitle>
                <p>{val.title}</p>
                <FaInfoCircle title={val.tooltip} />
              </S.BoxReservasTitle>

              <S.ContainerReservas>
                {val.data.length === 0 && (
                  <S.CenterEmptyMessage>
                    <p>{val.emptyMessage}</p>
                  </S.CenterEmptyMessage>
                )}
                {val.data.map((data, index) => {

                  const colorSituationCheckOut = () => {
                    const situation = verifyDateTime(data.check_out)

                    switch (situation) {
                      case 'past':
                        return pallete.error
                      case 'today':
                        return pallete.gold

                      default:
                        return pallete.greenDefault

                    }
                  }

                  return (
                    <CommentArea
                      key={index}
                      name={data.room_name}
                      comment={<span>Por <S.NameNegrito>{data.user_name.split(' ')[0]}</S.NameNegrito> até {dataFormatter(data.check_out)}</span>}
                      button={
                        <S.ContainerButton>
                          <Button
                            action={() => updateStatusReserva(data.id, !data.active)}
                            paddingVertical='4px'
                            paddingHorizontal='5px'
                            backgroundColor={data.active ? colorSituationCheckOut() : pallete.greenDefault}
                            hoverColor={data.active ? colorSituationCheckOut() : pallete.greenDefault}
                          >
                            {val.buttonTitle}
                          </Button>
                        </S.ContainerButton>
                      }
                    />
                  )
                })}
              </S.ContainerReservas>
            </ContainerLayoutAdmin>
          ))
        }

      </S.ContainerSides>

      <ContainerLayoutAdmin>
        <S.ContainerSides pointer onClick={() => setSeemSeachContainer(!seemSeachContainer)}>
          <p>Pesquisar</p>
          {seemSeachContainer ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </S.ContainerSides>

        {
          seemSeachContainer && (
            <div>
              <form onSubmit={handleForm}>
                <S.ContainerSidesInputs>
                  <div>
                    <GenericLabel for='inicioData'>De:</GenericLabel>
                    <GenericInput id='inicioData' aName='inicioData' type='date' />
                  </div>

                  <div>
                    <GenericLabel for='finalData'>Até:</GenericLabel>
                    <GenericInput id='finalData' aName='finalData' type='date' />
                  </div>


                </S.ContainerSidesInputs>

                <S.ContainerButtonPesquisa>
                  <Button paddingHorizontal='12px' paddingVertical='10px'>Pesquisar</Button>
                </S.ContainerButtonPesquisa>
              </form>

              {searchResults.isSearching && (
                <S.ContainerResultadosPesquisa>
                  <p>{searchResults.data.length} resultados encontrados</p>

                  <S.ContainerReservas>
                    {searchResults.data.map((data, index) => (
                      <CommentArea
                        key={index}
                        name={data.room_name}
                        comment={<span>Por <S.NameNegrito>{data.user_name.split(' ')[0]}</S.NameNegrito> de {dataFormatter(data.check_in)} até {dataFormatter(data.check_out)}</span>}
                        button={
                          <S.ContainerButton>
                            {
                              data.active 
                                ? <Button hoverColor={pallete.greenDefault} paddingVertical='4px' paddingHorizontal='5px'>Em Andamento</Button>
                                : <Button backgroundColor='gray' hoverColor='gray' paddingVertical='4px' paddingHorizontal='5px'>Finalizado</Button> 
                            }
                          </S.ContainerButton>
                        }
                      />
                    ))}
                  </S.ContainerReservas>
                </S.ContainerResultadosPesquisa>
              )}
            </div>
          )
        }
      </ContainerLayoutAdmin>


      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <SubTitle >Ops... </SubTitle>
        <S.ErrorParagraph>Algo deu errado, tente novamente mais tarde.</S.ErrorParagraph>
      </Modal>
    </>
  )

}

export default ReservasAdmin
