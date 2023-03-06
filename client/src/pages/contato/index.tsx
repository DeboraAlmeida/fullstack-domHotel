// Arquivo criado: 15/12/2022 às 20:49
import Button from 'components/atoms/Button'
import GenericInput from 'components/atoms/GenericInput'
import GenericLabel from 'components/atoms/GenericLabel'
import GenericSelect from 'components/atoms/GenericSelect'
import PrincipalTitle from 'components/atoms/PrincipalTitle'
import SubTitle from 'components/atoms/SubTitle'
import TextArea from 'components/atoms/TextArea'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import postContact from 'services/postContact'
import { validateEmail, validateName, validateNumber } from 'utils/validateFields'
import * as S from './styles'

const Contato = () => {

  const [payload, setPayload] = useState({
    name: '',
    email: '',
    comment: '',
    subject: ''
  })

  useEffect(() => {
    localStorage.setItem('contato', JSON.stringify(payload))
  }, [payload])

  const [valueFields, setValueFields] = useState(
    {
      email: '',
      name: '',
      telephone: '',
      select: 'checked',
      textArea: ''
    }
  )
  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      name: false,
      telephone: false,
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

  const handleTelephone = (value: string) => {
    setValueFields((prev) => ({ ...prev, telephone: value }))
    if (validateNumber(valueFields.telephone)) {
      setErrosFields((prev) => ({ ...prev, telephone: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, telephone: false }))
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
    },
    {
      id: 'telephone-contact',
      label: 'Telefone:',
      method: handleTelephone,
      model: errorFields.telephone,
      valueId: 'telephone',
      type: 'tel'
    }
  ]

  const handleButton = async () => {
    if (valueFields.email === '' || valueFields.name === '' || valueFields.telephone === '' || valueFields.select === 'checked' || valueFields.textArea === '') {
      if (valueFields.email === '') {
        setErrosFields((prev) => ({ ...prev, email: true }))
      }
      if (valueFields.telephone === '') {
        setErrosFields((prev) => ({ ...prev, telephone: true }))
      }
      if (valueFields.name === '') {
        setErrosFields((prev) => ({ ...prev, name: true }))
      }
      if (valueFields.select === 'checked') {
        setErrosFields((prev) => ({ ...prev, select: true }))
      }
      if (valueFields.textArea === '') {
        setErrosFields((prev) => ({ ...prev, textArea: true }))
      }
    }

    if (localStorage.getItem('contato')) {

      const contato = JSON.parse(localStorage.getItem('contato') as string)
      await postContact(contato)

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
              <option value="checked" disabled>Selecione</option>
              <option value="cancelamento">Cancelamento de Reserva</option>
              <option value="ouvidoria">Ouvidoria</option>
              <option value="departamento_financeiro">Departamento Financeiro</option>
              <option value="outros">Outros</option>
            </GenericSelect>
          </S.Container>
          <S.Container className='inputsContainer'>
            <GenericLabel for='comentario'>Deixe um comentário:</GenericLabel>
            <TextArea id='comentario' rows={10} onChange={handleTextArea} error={errorFields.textArea} />
          </S.Container>
          <Button action={handleButton} disabled={(errorFields.email || errorFields.name || errorFields.telephone || errorFields.select || errorFields.textArea)}>Enviar</Button>
        </S.FormContainer>
      </S.Wrapper>
    </>
  )
}

export default Contato
