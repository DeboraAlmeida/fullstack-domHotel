import React, { useState } from 'react'
import Anchor from '../../atoms/Anchor/index.js'
import Button from '../../atoms/Button/index.js'
import DescriptionParagraph from '../../atoms/DescriptionParagraph/index.js'
import GenericInput from '../../atoms/GenericInput/index.js'
import GenericLabel from '../../atoms/GenericLabel/index.js'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import * as S from './styles.js'

const LoginContent = ({ type, setIsLogged }) => {
  const [typeLogin, setTypeLogin] = useState(type)

  const inputsSignIn = [
    { 
      id: 1,
      label: 'E-mail:',
      type: 'text'
    },
    { 
      id: 2,
      label: 'Senha:',
      type: 'password'
    }
  ]

  const inputsSignUp = [
    { 
      id: 1,
      label: 'Nome:',
      type: 'text'
    },
    { 
      id: 2,
      label: 'E-mail:',
      type: 'email'
    },
    { 
      id: 3,
      label: 'Senha:',
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
              <GenericInput type={element.type} id={element.id} />
            </ S.ContainerInputSignIn>
          ))}
          <Anchor href={'#'} msg={'Esqueceu a senha?'}/>
          <Button action={() => setIsLogged(true)}>Entrar</Button>
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
              <GenericInput type={element.type} id={element.id} />
            </ S.ContainerInputSignUp>
          ))}
          <Button action={() => setIsLogged(true)} >Cadastrar</Button>
          <S.ContainerSignIn>
            <DescriptionParagraph msg={'Já possui uma conta?'} /><Anchor action={() => setTypeLogin('sign-in')} onClick msg={'Entrar'}/>
          </S.ContainerSignIn>
        </>
      )}      
    </S.Wrapper>
  )
}

export default LoginContent