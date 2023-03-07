import GenericSelect from 'components/atoms/GenericSelect'
import React, { useState } from 'react'
import postNewEmployee from 'services/postNewEmployee'
import Button from '../../atoms/Button'
import GenericInput from '../../atoms/GenericInput'
import GenericLabel from '../../atoms/GenericLabel'
import MiniTitle from '../../atoms/MiniTitle'
import * as S from './styles'

const CadastroFuncionarioContent = (): JSX.Element => {

  const [valueField, SetValueField] = useState({
    name: '',
    email: '',
    password: '',
    office: 0,
  })


  const setValueInField = (value: string, element: string) => {
    switch (element) {
      case 'name':
        SetValueField((prev) => ({...prev, name: value}))
        break;
      case 'email':
        SetValueField((prev) => ({...prev, email: value}))
        break;
      case 'password':
        SetValueField((prev) => ({...prev, password: value}))
        break;
    }
  }

  const getValueField = (element: string) => {
    switch (element) {
      case 'name':
        return valueField.name
        break;
      case 'email':
        return valueField.email
        break;
      case 'password':
        return valueField.password
        break;
    }
  }

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

  const offices = [
    {
      type: 'admin',
      id: 1
    },
    {
      type: 'funcionário',
      id: 2
    },
  ]

  const setOffice = (value: string) => {
    SetValueField((prev) => ({...prev, office: Number(value)}))
  }

  const registerEmployee = async () => {
    const result = await postNewEmployee(valueField)
  }

  return(
   <S.Wrapper>
      <MiniTitle text={'Cadastrar'} />
      <br />
      <S.ContainerInputSignUp>
        <GenericLabel for='Cargo'>Cargo:</GenericLabel>
        <GenericSelect id='Cargo' aName='Cargo' onChange={(e) => setOffice(e.target.value)}>
          <option value="checked" disabled >Selecionar Cargo</option>
          {
            offices.map((element) => (
              <option key={element.id} value={element.id}>{element.type}</option>
            ))
          }
        </GenericSelect>
      </S.ContainerInputSignUp>
      
      {inputsSignUp.map(element => (
        <S.ContainerInputSignUp key={element.id}>
          <GenericLabel for={element.id}>{element.label}</GenericLabel>
          <GenericInput type={element.type} id={element.id} value={getValueField(element.valueId)} onChange={(e) => setValueInField(e.target.value, element.valueId)}/>
        </ S.ContainerInputSignUp>
      ))}
      <Button disabled={false} action={registerEmployee}>Cadastrar</Button>      
   </S.Wrapper>
  )
}

export default CadastroFuncionarioContent
