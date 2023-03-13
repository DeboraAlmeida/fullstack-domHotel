import express from 'express'
import ReservasController from '../controller/reservasController.js'
import decrypt from '../middlewares/decrypt.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router()

router
  .get('/reservas', validateToken(true), ReservasController.getReserves)
  .get('/reservas/:id', validateToken(true), ReservasController.getReserveById)
  .get('/reservas-ativas', validateToken(true), ReservasController.getActiveReserves)
  .get('/reservas-ativas-total', validateToken(true), ReservasController.getReservesNumber)
  .post('/reserva', validateToken(false), ReservasController.postReserve)
  .put('/reservas/:id', decrypt, validateToken(true), ReservasController.updateStatusReserve)
  .get('/reservas-pela-data/:startDate/:endDate', validateToken(true), ReservasController.searchByDates)

export default router
