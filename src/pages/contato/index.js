// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import GenericSelect from '../../components/atoms/GenericSelect'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import TextArea from '../../components/atoms/TextArea'
import { validateEmail, validateName, validateNumber } from '../../utils/validateFields.js'
import * as S from './styles'

export const Contato = () => {
  const [valueInput, setValueInput] = useState(
    {
      nome: '',
      email: '',
      telefone: ''
    }
  )

  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      nome: false,
      telefone: false
    }
  )

  const handleEmail = (value) => {
    setValueInput((prev) => ({ ...prev, email: value }))
    if (validateEmail(valueInput.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
  }
  const handleNome = (value) => {
    setValueInput((prev) => ({ ...prev, nome: value }))
    if (validateName(valueInput.nome)) {
      setErrosFields((prev) => ({ ...prev, nome: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
  }
  const handleTelefone = (value) => {
    setValueInput((prev) => ({ ...prev, telefone: value }))
    if (validateNumber(valueInput.telefone)) {
      setErrosFields((prev) => ({ ...prev, telefone: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, telefone: false }))
  }

  const [inputsCollection] = useState([
    {
      id: 'nome',
      type: 'text',
      label: 'Nome:',
      method: handleNome,
      model: errorFields.nome,
      valueId: 'nome'
    },
    {
      id: 'e-mail',
      type: 'e-mail',
      label: 'E-mail:',
      method: handleEmail,
      model: errorFields.email,
      valueId: 'email'
    },
    {
      id: 'telefone',
      type: 'text',
      label: 'Telefone:',
      method: handleTelefone,
      model: errorFields.telefone,
      valueId: 'telefone'
    }   

  ])
  
  return (

    <S.Wrapper>      
      <PrincipalTitle>Entre em contato conosco</PrincipalTitle>     
      <SubTitle>Como podemos ajudar?</SubTitle>
      <S.FormContainer>
      {inputsCollection.map((element, index) => (
        <S.Container key={index} className='inputsContainer'>
          <GenericLabel for={element.id}>{element.label}</GenericLabel>
          <GenericInput 
            type={element.type} 
            id={element.id}
            onChange={(e) => element.method(e.target.value)} 
            error={element.model} 
            value={valueInput[`${element.valueId}`]}/>
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
        <Button disable={ (errorFields.email || errorFields.nome || errorFields.telefone) }>Enviar</Button>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default Contato
