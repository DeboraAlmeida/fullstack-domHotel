import express from 'express'
import reservasController from '../controller/reservasController.js'

const router = express.Router()

router
  .get('/reservas',reservasController)

export default router
