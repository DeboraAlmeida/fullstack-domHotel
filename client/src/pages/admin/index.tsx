// Arquivo criado: 16/02/2023
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ControllerAdmin from '../../components/organisms/ControllerAdmin'
import LoginAdmin from '../../components/organisms/LoginAdmin'


const Admin = () => {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      <Helmet>
        <title>DOM Hotel - Admin</title>
      </Helmet>
      {
        isLogged 
          ? <ControllerAdmin />
          : <LoginAdmin setIsLogged={setIsLogged} />
      }
    </div>
  )
}

export default Admin