import express from 'express'
import acomodacoes from './acomodacoes.js'
<<<<<<< HEAD
import funcionarios from './funcionarios.js'
=======
import comentarios from './comentarios.js'
import consumo from './consumo.js'
>>>>>>> c89398b0caa59c88c4fe48996477b743cc7f0dc8
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
<<<<<<< HEAD
    funcionarios
=======
    consumo,
>>>>>>> c89398b0caa59c88c4fe48996477b743cc7f0dc8
  )
}

export default routes
