import express from 'express'
import ReservasController from '../controller/reservasController.js'
import decrypt from '../middlewares/decrypt.js'

const router = express.Router()

router
  .get('/reservas', ReservasController.getReserves)
  .get('/reservas/:id', ReservasController.getReserveById)
  .get('/reservasAtivas', ReservasController.getActiveReserves)
  .post('/reserva', ReservasController.postReserve)
  .put('/reservas/:id', decrypt, ReservasController.updateStatusReserve)
  .get('/reservas-by-date/:startDate/:endDate', ReservasController.searchByDates)

export default router
