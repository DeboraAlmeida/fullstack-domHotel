import express from 'express'
import FuncionariosController from '../controller/funcionariosController.js'
import validateToken from '../middlewares/validateToken.js'


const router = express.Router()

router
  .get('/funcionarios', validateToken(true), FuncionariosController.getWorkers)
  .get('/cargos', validateToken(true), FuncionariosController.getOffices)
  .get('/funcionariosAtivos', validateToken(true), FuncionariosController.getActiveWorkers)
  .get('/funcionariosInativos', validateToken(true), FuncionariosController.getInactiveWorkers)
  .post('/funcionariosCadastro', validateToken(true), FuncionariosController.postNewWorkers)
  .put('/funcionariosAtualiza', validateToken(true), FuncionariosController.updateWorkers)
  .get('/funcionarios-ativos-total', validateToken(true), FuncionariosController.getWorkersNumber)

export default router