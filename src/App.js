import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Acomodacoes from './pages/acomodacoes/index'
import Reservas from './pages/reservas/index'
import Contato from './pages/contato/index'
import Sobre from './pages/sobre/index'
import Navbar from './components/atoms/NavBar'
import Template from './template/template'

// import Carrousel from './components/organisms/Carrousel'
// import Navbar from './components/atoms/NavBar'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Template>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acomodacoes' element={<Acomodacoes />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>      
      </Template>
    </Router>
  )
}

export default App
