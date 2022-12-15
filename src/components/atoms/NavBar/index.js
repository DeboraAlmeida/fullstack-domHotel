import React from 'react'
import Anchor from '../Anchor'

function Navbar () {
  return (
        <nav>
           <Anchor href='/' target='_blank' msg='Home | '></Anchor>
           <Anchor href='/' target='_blank' msg='Acomodações | '></Anchor>
           <Anchor href='/' target='_blank' msg='Reservas | '></Anchor>
           <Anchor href='/' target='_blank' msg='Sobre | '></Anchor>
           <Anchor href='/' target='_blank' msg='Contatos'></Anchor>
        </nav>
  )
}

export default Navbar