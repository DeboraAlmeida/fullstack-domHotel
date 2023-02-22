import express from 'express'
import cors from '../middlewares/cors.js'
import acomodacoes from './acomodacoes.js'
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
    cors,
    express.json(),
    acomodacoes,
    reservas,
    login,
    signup
  )
}

export default routes
