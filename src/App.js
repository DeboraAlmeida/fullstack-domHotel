import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import Acomodacoes from './pages/acomodacoes/index'
import Contato from './pages/contato/index'
import Home from './pages/home/index'
import Reservas from './pages/reservas/index'
import Sobre from './pages/sobre/index'
import Template from './template/template'

// import Carrousel from './components/organisms/Carrousel'
// import Navbar from './components/atoms/NavBar'

const App = () => {
  return (
    <Router>
      <Header />
      <Template>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acomodacoes' element={<Acomodacoes />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </Template>
      <Footer />
    </Router>
  )
}

export default App
