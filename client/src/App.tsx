import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import Acomodacoes from 'pages/acomodacoes'
import Admin from 'pages/admin'
import Contato from 'pages/contato'
import Home from 'pages/home'
import Reservas from 'pages/reservas'
import Sobre from 'pages/sobre'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Template from 'template/template'
// import Carrousel from './components/organisms/Carrousel'
// import Navbar from './components/atoms/NavBar'
const App = () => {

  const [isAdmin, setIsAdmin] = useState(false)
  const [forcedLogin, setForcedLogin] = useState(false)

  const verifyRoute = () => {
    const route = window.location.pathname
    if (route === '/admin') {
      return true
    }
    return false
  }

  useEffect(() => {
    setIsAdmin(verifyRoute())
  }, [window.location.pathname])

  return (
    <Router>
      {!isAdmin && <Header forcedLogin={forcedLogin}/>}
      <Template>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acomodacoes' element={<Acomodacoes />} />
          <Route path='/reservas' element={<Reservas setForcedLogin={setForcedLogin}/>} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Template>
      <Footer />
    </Router>
  )
}


export default App
