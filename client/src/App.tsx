import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import Acomodacoes from './pages/acomodacoes/index'
import Admin from './pages/admin'
import Contato from './pages/contato/index'
import Home from './pages/home/index'
import Reservas from './pages/reservas/index'
import Sobre from './pages/sobre/index'
import Template from './template/template'
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
