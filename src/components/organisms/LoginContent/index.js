import React, { useEffect, useState } from 'react'
import { validateEmail, validateName } from '../../../utils/validateFields.js'
import Anchor from '../../atoms/Anchor/index.js'
import Button from '../../atoms/Button/index.js'
import DescriptionParagraph from '../../atoms/DescriptionParagraph/index.js'
import GenericInput from '../../atoms/GenericInput/index.js'
import GenericLabel from '../../atoms/GenericLabel/index.js'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import * as S from './styles.js'

const LoginContent = ({ type, setIsLogged, setLoggedName }) => {
  const [typeLogin, setTypeLogin] = useState(type)
  const [valueField, setValueFields] = useState(
    {
      email: '',
      name: '',
      password: ''
    }
  )
  const [errorFields, setErrosFields] = useState(
    {
      email: false,
      name: false,
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

  const handleName = (value) => {
    setValueFields((prev) => ({ ...prev, name: value }))
    if (validateName(valueField.name)) {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
  }

  const handlePassword = (value) => {
    setValueFields((prev) => ({ ...prev, password: value }))
    setErrosFields((prev) => ({ ...prev, password: false }))
  }

  const actionSignUp = (data, logins) => {
    if (data.email === '' || data.name === '' || data.password === '') {
      if (data.email === '') {
        setErrosFields({ email: true })
      }
      if (data.password === '') {
        setErrosFields({ password: true })
      }
      if (data.name === '') {
        setErrosFields({ name: true })
      }
      return
    }         
    logins.push(data)
    localStorage.setItem('logins', JSON.stringify(logins))
    setLoggedName(data.name.split(' ')[0])
    setIsLogged(true)
  }

  const actionSignIn = (data, logins) => {
    if (data.email === '' || data.password === '') {
      if (data.email === '') {
        setErrosFields({ email: true })
      }
      if (data.password === '') {
        setErrosFields({ password: true })
      }
      return
    }
    let result = false
    let name = ''
    logins.forEach(user => {
      if (user.email === data.email && user.password === data.password) {
        name = user.name
        result = true
      }
    })
    if (result) {
      setIsLogged(true)
      setLoggedName(name.split(' ')[0])
    } else {
      alert('Usuário não cadastrado!')
      setIsLogged(false)
    }    
  }

  const handleButton = () => {
    const logins = JSON.parse(localStorage.getItem('logins'))
    const data = {
      name: valueField.name,
      email: valueField.email,
      password: valueField.password
    }
    if (typeLogin === 'sign-up') {
      actionSignUp(data, logins)      
    }
    if (typeLogin === 'sign-in') {
      actionSignIn(data, logins)
    }
  }

  useEffect(() => {
    const logins = localStorage.getItem('logins')
    if (!logins) {
      localStorage.setItem('logins', '[]')
    }
  }, [])

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

  const inputsSignUp = [
    { 
      id: 'name-sign-up',
      label: 'Nome:',
      method: handleName,
      model: errorFields.name,
      valueId: 'name',
      type: 'text'
    },
    { 
      id: 'email-sign-up',
      label: 'E-mail:',
      method: handleEmail,
      model: errorFields.email,
      valueId: 'email',
      type: 'email'
    },
    { 
      id: 'password-sign-up',
      label: 'Senha:',
      method: handlePassword,
      model: errorFields.password,
      valueId: 'password',
      type: 'password'
    }
  ]

  return (
    <S.Wrapper>
      {typeLogin === 'sign-in' && (
        <>
          <MiniTitle text={'Login'}/>
          {inputsSignIn.map((element, index) => (
            <S.ContainerInputSignIn key={index}>
              <GenericLabel for={element.id}>{element.label}</GenericLabel>
              <GenericInput type={element.type} id={element.id} onChange={(e) => element.method(e.target.value)} error={element.model} value={valueField[`${element.valueId}`]}/>
            </ S.ContainerInputSignIn>
          ))}
          <Anchor href={'#'} msg={'Esqueceu a senha?'}/>
          <Button disabled={(errorFields.email || errorFields.password)} action={handleButton}>Entrar</Button>
          <S.ContainerSignUp>
            <DescriptionParagraph msg={'Não tem uma conta?'} /><Anchor action={() => setTypeLogin('sign-up')} onClick msg={'Criar conta'}/>
          </S.ContainerSignUp>
        </>
      )}
      {typeLogin === 'sign-up' && (
        <>
          <MiniTitle text={'Cadastrar'}/>
          {inputsSignUp.map((element, index) => (
            <S.ContainerInputSignUp key={index}>
              <GenericLabel for={element.id}>{element.label}</GenericLabel>
              <GenericInput type={element.type} id={element.id} onChange={(e) => element.method(e.target.value)} error={element.model} value={valueField[`${element.valueId}`]}/>
            </ S.ContainerInputSignUp>
          ))}
          <Button disabled={(errorFields.email || errorFields.name || errorFields.password)} action={handleButton}>Cadastrar</Button>
          <S.ContainerSignIn>
            <DescriptionParagraph msg={'Já possui uma conta?'} /><Anchor action={() => setTypeLogin('sign-in')} onClick msg={'Entrar'}/>
          </S.ContainerSignIn>
        </>
      )}      
    </S.Wrapper>
  )
}

export default LoginContent