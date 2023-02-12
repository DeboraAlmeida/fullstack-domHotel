import express from 'express'
import acomodacoes from './acomodacoes.js'
import reservas from './reservas.js'

const routes = (app) =>{
  app.route('/').get((req, res)=>{
    res.status(200).send({
      text: 'Default endpoint'
    })
  })

  app.use(
    express.json(),
    acomodacoes,
    reservas
  )
}

export default routes
