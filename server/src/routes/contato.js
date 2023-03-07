import express from 'express'
import ContatoController from '../controller/contatoController.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router()

router
  .post('/contato', ContatoController.postContato)
  .get('/contato', validateToken(true), ContatoController.getContato)

export default router
