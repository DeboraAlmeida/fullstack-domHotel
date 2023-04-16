import Anchor from 'components/atoms/Anchor/index'
import Button from 'components/atoms/Button/index'
import DescriptionParagraph from 'components/atoms/DescriptionParagraph/index'
import GenericInput from 'components/atoms/GenericInput/index'
import GenericLabel from 'components/atoms/GenericLabel/index'
import MiniTitle from 'components/atoms/MiniTitle/index'
import React, { useState } from 'react'
import backEnd from 'utils/backEnd'
import { validateEmail, validateName } from 'utils/validateFields'
import * as S from './styles'

interface Props {
  type: string
  setIsLogged: (isLogged: boolean) => void
  setLoggedName: (name: string) => void
}

interface LoginArr {
  email: string
  password: string
  name: string
}


const LoginContent = ({ type, setIsLogged, setLoggedName }: Props) => {
  const [typeLogin, setTypeLogin] = useState(type)
  const [showMessage, setShowMessage] = useState({
    show: false,
    message: ''
  })
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

  const handleEmail = (value: string) => {
    setValueFields((prev) => ({ ...prev, email: value }))
    if (validateEmail(valueField.email)) {
      setErrosFields((prev) => ({ ...prev, email: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, email: false }))
  }

  const handleName = (value: string) => {
    setValueFields((prev) => ({ ...prev, name: value }))
    if (validateName(valueField.name)) {
      setErrosFields((prev) => ({ ...prev, name: true }))
      return
    }
    setErrosFields((prev) => ({ ...prev, name: false }))
  }

  const handlePassword = (value: string) => {
    setValueFields((prev) => ({ ...prev, password: value }))
    setErrosFields((prev) => ({ ...prev, password: false }))
  }

  const actionSignUp = async (data: LoginArr) => {
    if (data.email === '' || data.name === '' || data.password === '') {
      if (data.email === '') {
        setErrosFields((prev) => ({ ...prev, email: true }))
      }
      if (data.password === '') {
        setErrosFields((prev) => ({ ...prev, password: true }))
      }
      if (data.name === '') {
        setErrosFields((prev) => ({ ...prev, name: true }))
      }
      return
    }

    if (data.password.length < 6) {
      setErrosFields((prev) => ({ ...prev, password: true }))
      return
    }

    await backEnd('/signup', 'POST', false, {
      email: data.email,
      name: data.name,
      password: data.password
    }).then(res => {
      if (res.status === 200) {
        setIsLogged(true)
        setLoggedName(res.data.name.split(' ')[0])
        sessionStorage.setItem('isLogged', JSON.stringify({
          ...res.data,
          email: data.email,
          isLogged: true,
          token: res.token
        }))
      } else {
        handleShowMessage(res.message)
      }
    })
  }

  const actionSignIn = async (data: LoginArr) => {
    if (data.email === '' || data.password === '') {
      if (data.email === '') {
        setErrosFields((prev) => ({ ...prev, email: true }))
      }
      if (data.password === '') {
        setErrosFields((prev) => ({ ...prev, password: true }))
      }
      return
    }

    await backEnd('/login', 'POST', false, { email: data.email, password: data.password }).then(res => {
      
      if (res.status === 200) {
        setIsLogged(true)
        setLoggedName(res.data.name.split(' ')[0])
        sessionStorage.setItem('isLogged', JSON.stringify({
          ...res.data,
          email: data.email,
          isLogged: true,
          token: res.token,
          id_user: res.data.id_user
        }))

      } else {
        handleShowMessage(res.message)
        setIsLogged(false)
      }
      

    }).catch((err) => {
      handleShowMessage(err.message)
    })

  }

  const handleButton = () => {
    const data = {
      name: valueField.name,
      email: valueField.email,
      password: valueField.password
    }
    if (typeLogin === 'sign-up') {
      actionSignUp(data)      
    }
    if (typeLogin === 'sign-in') {
      actionSignIn(data)
    }
  }

  const handleShowMessage = (msg: string) => {
    setShowMessage({
      show: true,
      message: msg
    })

    setTimeout(() => {
      setShowMessage({
        show: false,
        message: ''
      })
    }, 3000)
  }

  const handleForgotPassword = async () => {
    const email = valueField.email

    if(email === '') {
      setErrosFields((prev) => ({ ...prev, email: true }))
      handleShowMessage('Preencha o campo de e-mail')
      return
    }

    await backEnd('/forgot-password', 'POST', false, { email }).then(res => {
      if (res.status === 200) {
        handleShowMessage('Enviamos um e-mail para você com as instruções para redefinir sua senha')
      } else {
        handleShowMessage(res.message)
      }
    }).catch(err => {
      handleShowMessage(err.message)
    })
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
     {
      showMessage.show
        ? <S.tittleAviso>{showMessage.message}</S.tittleAviso>
        : (
            <>
              {typeLogin === 'sign-in' && (
                <>
                  <MiniTitle text={'Login'} />
                  {inputsSignIn.map((element, index) => (
                    <S.ContainerInputSignIn key={index}>
                      <GenericLabel for={element.id}>{element.label}</GenericLabel>
                      {/* @ts-ignore */}
                      <GenericInput type={element.type} id={element.id} onChange={(e) => element.method(e.target.value)} error={element.model} value={valueField[`${element.valueId}`]} />
                    </ S.ContainerInputSignIn>
                  ))}
                  <Anchor action={handleForgotPassword} href={'#'} msg={'Esqueceu a senha ?'} />
                  <Button disabled={(errorFields.email || errorFields.password)} action={handleButton}>Entrar</Button>
                  <S.ContainerSignUp>
                    <DescriptionParagraph msg={'Não tem uma conta?'} /><Anchor action={() => setTypeLogin('sign-up')} msg={'Criar conta'} />
                  </S.ContainerSignUp>
                </>
              )}
              {typeLogin === 'sign-up' && (
                <>
                  <MiniTitle text={'Cadastrar'} />
                  {inputsSignUp.map((element, index) => (
                    <S.ContainerInputSignUp key={index}>
                      <GenericLabel for={element.id}>{element.label}</GenericLabel>
                      {/* @ts-ignore */}
                      <GenericInput type={element.type} id={element.id} onChange={(e) => element.method(e.target.value)} error={element.model} value={valueField[`${element.valueId}`]} />
                    </ S.ContainerInputSignUp>
                  ))}
                  <Button disabled={(errorFields.email || errorFields.name || errorFields.password)} action={handleButton}>Cadastrar</Button>
                  <S.ContainerSignIn>
                    <DescriptionParagraph msg={'Já possui uma conta?'} /><Anchor action={() => setTypeLogin('sign-in')} msg={'Entrar'} />
                  </S.ContainerSignIn>
                </>
              )}
            </>   
          )
     }
    </S.Wrapper>
  )
}

export default LoginContent