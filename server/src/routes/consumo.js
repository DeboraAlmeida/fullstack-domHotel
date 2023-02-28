import express from 'express'
import ConsumoController from '../controller/consumoController.js'

const router = express.Router()

router
  .post('/consumo', ConsumoController.postConsumo)

export default router
