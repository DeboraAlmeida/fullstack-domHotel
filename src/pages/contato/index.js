// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import GenericSelect from '../../components/atoms/GenericSelect'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import TextArea from '../../components/atoms/TextArea'
import { validateEmail, validateName } from '../../utils/validateFields.js'
import * as S from './styles'

export const Contato = () => {  
  const [valueFields, setValueFields] = useState(
    {
      email: '',
      name: '',
      telephone: ''
    }
  )
  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      name: false,
      telephone: false
    }
  )

  const handleEmail = (value) => {
    setValueFields((prev) => ({ ...prev, email: value }))
    if (validateEmail(valueFields.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
  }

  const handleName = (value) => {
    setValueFields((prev) => ({ ...prev, name: value }))
    if (validateName(valueFields.name)) {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
  }

  const handleTelephone = (value) => {
    setValueFields((prev) => ({ ...prev, telephone: value }))
    if (validateName(valueFields.name)) {
      setErrosFields((prev) => ({ ...prev, telephone: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, telephone: false }))
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
      type: 'number'
    }
  ]
  
  return (
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
            value={valueFields[`${element.valueId}`]}
            onChange={(e) => element.method(e.target.value)}
            error={element.model}/>
        </S.Container>
      ))}
      <S.Container className='inputsContainer'> 
        <GenericLabel for='subject'>Assunto de Interesse:</GenericLabel>
        <GenericSelect id='subject' name='subject'>
          <option value="checked" disabled>Selecione</option>
          <option value="cancelamento">Cancelamento de Reserva</option>
          <option value="ouvidoria">Ouvidoria</option>
          <option value="departamento_financeiro">Departamento Financeiro</option>
          <option value="outros">Outros</option>
        </GenericSelect>
      </S.Container>
      <S.Container className='inputsContainer'>
        <GenericLabel for='comentario'>Deixe um comentário:</GenericLabel>
        <TextArea id='comentario' rows={10}/>
      </S.Container>
        <Button disabled={(errorFields.email || errorFields.name || errorFields.telephone)}>Enviar</Button>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default Contato
