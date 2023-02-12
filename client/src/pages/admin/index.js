// Arquivo criado: 16/02/2023
import React, { useState } from 'react'
import ControllerAdmin from '../../components/organisms/ControllerAdmin'
import LoginAdmin from '../../components/organisms/LoginAdmin'
import * as S from './styles'


const Admin = () => {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <S.Wrapper>
      {
        isLogged 
          ? <ControllerAdmin />
          : <LoginAdmin setIsLogged={setIsLogged} />
      }
    </S.Wrapper>
  )
}

export default Admin