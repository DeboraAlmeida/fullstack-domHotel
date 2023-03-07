import express from 'express'
import ConsumoController from '../controller/consumoController.js'
import validateToken from '../middlewares/validateToken.js'


const router = express.Router()

router
  .post('/consumo', validateToken(true), ConsumoController.postConsumo)

export default router
