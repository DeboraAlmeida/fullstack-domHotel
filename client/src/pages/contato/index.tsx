// Arquivo criado: 15/12/2022 às 20:49
import Button from 'components/atoms/Button'
import GenericInput from 'components/atoms/GenericInput'
import GenericLabel from 'components/atoms/GenericLabel'
import GenericSelect from 'components/atoms/GenericSelect'
import PrincipalTitle from 'components/atoms/PrincipalTitle'
import SubTitle from 'components/atoms/SubTitle'
import TextArea from 'components/atoms/TextArea'
import PayloadContact from 'interfaces/payloadContact'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import postContact from 'services/postContact'
import getIfAlreadyLogged from 'utils/getIfAlreadyLogged'
import { validateEmail, validateName } from 'utils/validateFields'
import * as S from './styles'

const Contato = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState({
    loading: false,
    buttonMsg: 'Enviar'
  })

  const [payload, setPayload] = useState({
    name: getIfAlreadyLogged('name'),
    email: getIfAlreadyLogged('email'),
    comment: '',
    subject: ''
  } as PayloadContact)


  useEffect(() => {
    localStorage.setItem('contato', JSON.stringify(payload))
  }, [payload])

  const [valueFields, setValueFields] = useState(
    {
      name: getIfAlreadyLogged('name'),
      email: getIfAlreadyLogged('email'),
      select: 'checked',
      textArea: ''
    }
  )
  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      name: false,
      select: false,
      textArea: false
    }
  )

  const handleEmail = (value: string) => {
    setValueFields((prev) => ({ ...prev, email: value }))
    if (validateEmail(valueFields.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
    setPayload((prev) => ({ ...prev, email: value }))
  }

  const handleName = (value: string) => {
    setValueFields((prev) => ({ ...prev, name: value }))
    if (validateName(valueFields.name)) {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
    setPayload((prev) => ({ ...prev, name: value }))
  }

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setPayload((prev) => ({ ...prev, subject: event.target.value }))
    valueFields.select = event.target.value
    if (valueFields.select !== 'checked') {
      setErrosFields((prev) => ({ ...prev, select: false }))
      return
    }
    setErrosFields((prev) => ({ ...prev, select: true }))
  }

  const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPayload((prev) => ({ ...prev, comment: event.target.value }))
    valueFields.textArea = event.target.value
    if (valueFields.textArea !== '') {
      setErrosFields((prev) => ({ ...prev, textArea: false }))
      return
    }
    setErrosFields((prev) => ({ ...prev, textArea: true }))
  }

  const inputsContact = [
    {
      id: 'name-contact',
      label: 'Nome:',
      method: handleName,
      model: errorFields.name,
      valueId: 'name',
      type: 'text'
    },
    {
      id: 'email-contact',
      label: 'E-mail:',
      method: handleEmail,
      model: errorFields.email,
      valueId: 'email',
      type: 'email'
    }
  ]

  const handleButton = async () => {
    if (valueFields.email === '') {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    if (valueFields.name === '') {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    if (valueFields.select === 'checked') {
      setErrosFields((prev) => ({ ...prev, select: true }))
      return
    }
    if (valueFields.textArea === '') {
      setErrosFields((prev) => ({ ...prev, textArea: true }))
      return
    }

    if (localStorage.getItem('contato')) {

      const contato = JSON.parse(localStorage.getItem('contato') as string)
      setLoading({ loading: true, buttonMsg: 'Enviando...' })
      await postContact(contato)
      setLoading({ loading: false, buttonMsg: 'Enviar' })
      alert('Mensagem enviada com sucesso!')
      navigate('/')
    }

  }

  return (
    <>
      <Helmet>
        <title>DOM Hotel - Contato</title>
        <meta name='description' content='Entre em contato conosco' />
      </Helmet>
      <S.Wrapper>
        <PrincipalTitle>Entre em contato conosco</PrincipalTitle>
        <SubTitle>Como podemos ajudar?</SubTitle>
        <S.FormContainer>
          {inputsContact.map((element, index) => (
            <S.Container key={index} className='inputsContainer'>
              <GenericLabel for={element.id}>{element.label}</GenericLabel>
              <GenericInput
                type={element.type}
                id={element.id}
                // @ts-expect-error
                value={valueFields[`${element.valueId}`]}
                onChange={(e) => element.method(e.target.value)}
                error={element.model} />
            </S.Container>
          ))}
          <S.Container className='inputsContainer'>
            <GenericLabel for='subject'>Assunto de Interesse:</GenericLabel>
            <GenericSelect id='subject' aName='subject' onBlur={handleSelect} error={errorFields.select}>
              {
                [
                  {
                    value: 'checked',
                    disabled: true,
                    text: 'Selecione'
                  },
                  {
                    value: 'cancelamento',
                    text: 'Cancelamento de Reserva'
                  },
                  {
                    value: 'ouvidoria',
                    text: 'Ouvidoria'
                  },
                  {
                    value: 'departamento_financeiro',
                    text: 'Departamento Financeiro'
                  },
                  {
                    value: 'outros',
                    text: 'Outros'
                  }
                ].map((element, index) => (
                  <option key={index} value={element.value} disabled={element.disabled}>{element.text}</option>
                ))
              }
            </GenericSelect>
          </S.Container>
          <S.Container className='inputsContainer'>
            <GenericLabel for='comentario'>Deixe um comentário:</GenericLabel>
            <TextArea id='comentario' rows={10} onChange={handleTextArea} error={errorFields.textArea} />
          </S.Container>
          <Button action={handleButton} disabled={(errorFields.email || loading.loading || errorFields.name || errorFields.select || errorFields.textArea)}>
            {loading.buttonMsg}
          </Button>
        </S.FormContainer>
      </S.Wrapper>
    </>
  )
}

export default Contato
