import express from 'express'
import acomodacoes from './acomodacoes.js'
import comentarios from './comentarios.js'
import consumo from './consumo.js'
import funcionarios from './funcionarios.js'
import login from './login.js'
import reservas from './reservas.js'
import signup from './signup.js'

const routes = app => {
  app.route('/').get((_req, res) => {
    res.status(200).send({
      text: 'Default endpoint'
    })
  })

  app.use(
    // cors,
    express.json(),
    acomodacoes,
    reservas,
    comentarios,
    login,
    signup,
    funcionarios,
    consumo
  )
}

export default routes
