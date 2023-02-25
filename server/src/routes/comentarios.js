import express from 'express'
import ComentariosController from '../controller/comentariosController.js'
import decrypt from '../middlewares/decrypt.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router()

router
  .get('/comments/:rommId', ComentariosController.getComments)
  .post('/comment/:rommId', decrypt, validateToken, ComentariosController.setCooment)
  .get('/verify-can-comment/:roomId', validateToken, ComentariosController.verifyCanComment)

export default router
