import express from 'express'
import ReservasController from '../controller/reservasController.js'
import decrypt from '../middlewares/decrypt.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router()

router
  .get('/reservas', validateToken(true), ReservasController.getReserves)
  .get('/reservas/:id', validateToken(true), ReservasController.getReserveById)
  .get('/reservasAtivas', validateToken(true), ReservasController.getActiveReserves)
  .get('/reservasAtivasTotal', validateToken(true), ReservasController.getReservesNumber)
  .post('/reserva', validateToken(true), ReservasController.postReserve)
  .put('/reservas/:id', decrypt, validateToken(true), ReservasController.updateStatusReserve)
  .get('/reservas-by-date/:startDate/:endDate', validateToken(true), ReservasController.searchByDates)

export default router
