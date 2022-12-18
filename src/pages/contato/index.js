// Arquivo criado: 15/12/2022 às 20:49
import React from 'react'
import * as S from './styles'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import GenericInput from '../../components/atoms/GenericInput'
import GenericSelect from '../../components/atoms/GenericSelect'
import TextArea from '../../components/atoms/TextArea'
import Button from '../../components/atoms/Button'

export const Contato = () => {

  return (
    <S.Wrapper>
      <PrincipalTitle>Entre em contato conosco</PrincipalTitle>
      <SubTitle>Como podemos ajudar?</SubTitle>
      <S.formContainer>
        <GenericInput type='text' placeholder='Nome' />
        <GenericInput type='email' placeholder='E-mail' />
        <GenericInput type='text' placeholder='Telefone' />
        <GenericSelect id='subject' name='subject'>
          <option value="" disabled selected className='invalidOption'>Assunto de interesse</option>
          <option value="cancelamento">Cancelamento de Reserva</option>
          <option value="ouvidoria">Ouvidoria</option>
          <option value="departamento_financeiro">Departamento Financeiro</option>
        </GenericSelect>
        <TextArea placeholder='Deixe um comentário:' rows={10}/>
        <Button>Enviar</Button>
      </S.formContainer>
    </S.Wrapper>
  )

}

export default Contato
