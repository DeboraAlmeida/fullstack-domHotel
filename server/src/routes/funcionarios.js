import express from 'express'
import FuncionariosController from '../controller/funcionariosController.js'
import decrypt from '../middlewares/decrypt.js'

const router = express.Router()

router
  .get('/funcionarios', FuncionariosController.getWorkers)
  .get('/funcionarios-ativos', FuncionariosController.getActiveWorkers)
  .post('/funcionarios', decrypt, FuncionariosController.postNewWorkers)
  .put('/funcionarios/:id', FuncionariosController.updateWorkers)
  // .get('/funcionarios/Ativos', FuncionariosController.getWorkersActived)
  .get('/funcionarios-ativos-total', FuncionariosController.getWorkersNumber)

export default router