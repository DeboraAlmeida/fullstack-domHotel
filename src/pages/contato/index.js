// Arquivo criado: 15/12/2022 às 20:49
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import GenericSelect from '../../components/atoms/GenericSelect'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import TextArea from '../../components/atoms/TextArea'
import * as S from './styles'

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
      <S.FormContainer>
      {inputsCollection.map((element, index) => (
        <S.Container key={index} className='inputsContainer'>
          <GenericLabel for={element.id}>{element.label}</GenericLabel>
          <GenericInput type={element.type} id={element.id} />
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
        <Button>Enviar</Button>
      </S.FormContainer>
    </S.Wrapper>
  )

}

export default Contato
