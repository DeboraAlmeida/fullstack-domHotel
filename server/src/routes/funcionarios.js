import express from 'express'
import FuncionariosController from '../controller/funcionariosController.js'

const router = express.Router()

router
  .get('/funcionarios', FuncionariosController.getWorkers)
  .get('/funcionarios/Ativos', FuncionariosController.getWorkersActived)
  .get('/funcionarios/AtivosTotal', FuncionariosController.getWorkersNumber)

export default router