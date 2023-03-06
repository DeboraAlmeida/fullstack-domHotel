import express from 'express'
import ContatoController from '../controller/contatoController.js'

const router = express.Router()

router
  .post('/contato', ContatoController.postContato)

export default router
