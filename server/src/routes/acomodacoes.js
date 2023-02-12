import express from 'express'
import AcomodacoesController from '../controller/acomodacoesController.js'

const router = express.Router()

router
  .get('/acomodacoes', AcomodacoesController.default)

export default router
