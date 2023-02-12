import React from 'react'
import Button from '../../atoms/Button'
import GenericInput from '../../atoms/GenericInput'
import GenericLabel from '../../atoms/GenericLabel'
import GenericSelect from '../../atoms/GenericSelect'
import MiniTitle from '../../atoms/MiniTitle'
import * as S from './styles'


const CadastroFuncionarioContent = (): JSX.Element => {

  const inputsSignUp = [
    {
      id: 'name-sign-up',
      label: 'Nome:',
      valueId: 'name',
      type: 'text'
    },
    {
      id: 'email-sign-up',
      label: 'E-mail:',
      valueId: 'email',
      type: 'email'
    },
    {
      id: 'password-sign-up',
      label: 'Senha:',
      valueId: 'password',
      type: 'password'
    }
  ]

  const selectOptions = [
    {
      label: 'Recepção'
    },
    {
      label: 'Restaurante'
    },
    {
      label: 'Garagem'
    },
    {
      label: 'Serviço de Quarto'
    },
    {
      label: 'Gerencia'
    },
    {
      label: 'Concierege'
    },
    {
      label: 'Supervisor de Andar'
    }
  ]

  return(
   <S.Wrapper>
      <MiniTitle text={'Cadastrar'} />
      <br />
      <S.ContainerInputSignUp>
        <GenericLabel for='Cargo'>Cargo:</GenericLabel>
        <GenericSelect id='Cargo' aName='Cargo'>
          <option value="checked" disabled >Selecionar Cargo</option>
          {
            selectOptions.map((element, index) => (
              <option key={index} value={element.label}>{element.label}</option>
            ))
          }
        </GenericSelect>
      </S.ContainerInputSignUp>
      
      {inputsSignUp.map(element => (
        <S.ContainerInputSignUp key={element.id}>
          <GenericLabel for={element.id}>{element.label}</GenericLabel>
          <GenericInput type={element.type} id={element.id} />
        </ S.ContainerInputSignUp>
      ))}
      <Button disabled={false} action={()=>{}}>Cadastrar</Button>
      
   </S.Wrapper>
  )
}

export default CadastroFuncionarioContent
