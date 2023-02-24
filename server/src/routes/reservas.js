import express from 'express'
import ReservasController from '../controller/reservasController.js'

const router = express.Router()

router
  .get('/reservas', ReservasController.getReserves)
  .get('/reservas/:id', ReservasController.getReserveById)
  .get('/reservasAtivas', ReservasController.getActiveReserves)
  .post('/reserva', ReservasController.postReserve)

export default router
