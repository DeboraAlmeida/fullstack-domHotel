// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import * as S from './styles'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import GenericInput from '../../components/atoms/GenericInput'
import GenericSelect from '../../components/atoms/GenericSelect'
import TextArea from '../../components/atoms/TextArea'
import Button from '../../components/atoms/Button'
import GenericLabel from '../../components/atoms/GenericLabel'

export const Contato = () => {
  const [inputsCollection] = useState([
    {
      id: 'nome',
      type: 'text',
      label: 'Nome:'
    },
    {
      id: 'e-mail',
      type: 'e-mail',
      label: 'E-mail:'
    },
    {
      id: 'telefone',
      type: 'text',
      label: 'Telefone:'
    }   

  ])

  return (

    <S.Wrapper>      
      <PrincipalTitle>Entre em contato conosco</PrincipalTitle>     
      <SubTitle>Como podemos ajudar?</SubTitle>
      <S.formContainer>
      {inputsCollection.map((element, index) => (
        <S.Container key={index}>
          <GenericLabel for={element.id}>{element.label}</GenericLabel>
          <GenericInput type={element.type} id={element.id} />
        </S.Container>
      ))}
      <S.Container>
        <GenericLabel for='subject'>Assunto de Interesse:</GenericLabel>
        <GenericSelect id='subject' name='subject'>
          <option value="checked" disabled>Selecione</option>
          <option value="cancelamento">Cancelamento de Reserva</option>
          <option value="ouvidoria">Ouvidoria</option>
          <option value="departamento_financeiro">Departamento Financeiro</option>
        </GenericSelect>
      </S.Container>
      <S.Container>
        <GenericLabel for='comentario'>Deixe um comentário:</GenericLabel>
        <TextArea id='comentario' rows={10}/>
      </S.Container>
        <Button>Enviar</Button>
      </S.formContainer>
    </S.Wrapper>
  )

}

export default Contato
