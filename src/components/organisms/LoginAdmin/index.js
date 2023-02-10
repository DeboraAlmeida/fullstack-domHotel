import React, { useEffect, useState } from 'react'
import { validateEmail } from '../../../utils/validateFields'
import Button from '../../atoms/Button/'
import GenericInput from '../../atoms/GenericInput/index'
import GenericLabel from '../../atoms/GenericLabel/index'
import MiniTitle from '../../atoms/MiniTitle/index'
import { adminLogins } from './adminLogins'
import * as S from './styles'

const LoginAdmin = ({
  setIsLogged
}) => {


  const [valueField, setValueFields] = useState(
    {
      email: '',
      password: ''
    }
  )
  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      password: false
    }
  )

  const handleEmail = (value) => {
    setValueFields((prev) => ({ ...prev, email: value }))
    if (validateEmail(valueField.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
  }

  const handlePassword = (value) => {
    setValueFields((prev) => ({ ...prev, password: value }))
    setErrosFields((prev) => ({ ...prev, password: false }))
  }

  const actionSignIn = (data, logins) => {
    if (data.email === '' || data.password === '') {
      if (data.email === '') {
        setErrosFields((prev) => ({ ...prev, email: true }))
      }
      if (data.password === '') {
        setErrosFields((prev) => ({ ...prev, password: true }))
      }
      return
    }
    let result = false
    logins.forEach(user => {
      if (user.email === data.email && user.password === data.password) {
        result = true
      }
    })
    if (result) {
      setIsLogged(true)
      sessionStorage.setItem('isLoggedAdmin', JSON.stringify({ ...data, isLogged: true }))
    } else {
      alert('Administrador não cadastrado!')
      setIsLogged(false)
    }    
  }

  const handleButton = () => {
    const data = {
      email: valueField.email,
      password: valueField.password
    }
    actionSignIn(data, adminLogins)
  }

  const inputsSignIn = [
    { 
      id: 'email-login',
      label: 'E-mail:',
      method: handleEmail,
      model: errorFields.email,
      valueId: 'email',
      type: 'email'
    },
    { 
      id: 'password-login',
      label: 'Senha:',
      method: handlePassword,
      model: errorFields.password,
      valueId: 'password',
      type: 'password'
    }
  ]

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('isLoggedAdmin'))) {
      const result = JSON.parse(sessionStorage.getItem('isLoggedAdmin'))
      setIsLogged(result.isLogged)
      return
    }
    setIsLogged(false)
  }, [])

  return (
    <S.Wrapper>
      <S.WrapperLogin>
        <MiniTitle text={'Login Admin'} />
        {inputsSignIn.map((element, index) => (
          <S.ContainerInputSignIn key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id} onChange={(e) => element.method(e.target.value)} error={element.model} value={valueField[`${element.valueId}`]} />
          </ S.ContainerInputSignIn>
        ))}
        <Button disabled={(errorFields.email || errorFields.password)} action={handleButton}>Entrar</Button>
      </S.WrapperLogin>
    </S.Wrapper>
  )
}

export default LoginAdmin