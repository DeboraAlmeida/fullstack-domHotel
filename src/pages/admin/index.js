// Arquivo criado: 16/02/2023
import React, { useState } from 'react'
import HomeAdmin from '../../components/organisms/homeAdmin'
import LoginAdmin from '../../components/organisms/LoginAdmin'
import * as S from './styles'


const Admin = () => {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <S.Wrapper>
      {
        isLogged 
          ? <HomeAdmin />
          : <LoginAdmin setIsLogged={setIsLogged} />
      }
    </S.Wrapper>
  )
}

export default Admin