import express from 'express'
import FuncionariosController from '../controller/funcionariosController.js'

const router = express.Router()

router
  .get('/funcionarios', FuncionariosController.getWorkers)
  .get('/cargos', FuncionariosController.getOffices)
  .get('/funcionariosAtivos', FuncionariosController.getActiveWorkers)
  .get('/funcionariosInativos', FuncionariosController.getInactiveWorkers)
  .post('/funcionariosCadastro', FuncionariosController.postNewWorkers)
  .put('/funcionariosAtualiza', FuncionariosController.updateWorkers)
  // .get('/funcionarios/Ativos', FuncionariosController.getWorkersActived)
  .get('/funcionarios-ativos-total', FuncionariosController.getWorkersNumber)

export default router