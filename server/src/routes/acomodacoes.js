import express from 'express'
import acomodacoesController from '../controller/acomodacoesController.js'

const router = express.Router()

router
  .get('/acomodacoes', acomodacoesController)

export default router
