import express from 'express'
import ReservasController from '../controller/reservasController.js'

const router = express.Router()

router
  .get('/reservas', ReservasController.getReserves)
  .get('/reservas/:id', ReservasController.getReserveById)

export default router
