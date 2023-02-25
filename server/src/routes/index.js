import express from 'express'
import acomodacoes from './acomodacoes.js'
import funcionarios from './funcionarios.js'
import login from './login.js'
import reservas from './reservas.js'
import signup from './signup.js'
import user from './user.js'

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
    user,
    reservas,
    login,
    signup,
    funcionarios
  )
}

export default routes
