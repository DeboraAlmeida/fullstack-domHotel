import express from 'express'
import ComentariosController from '../controller/comentariosController.js'
import decrypt from '../middlewares/decrypt.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router()

router
  .get('/comentarios/:rommId', ComentariosController.getComments)
  .post('/comentarios/:rommId', decrypt, validateToken(), ComentariosController.setComment)
  .get('/verifica-pode-comentar/:roomId', validateToken(), ComentariosController.verifyCanComment)

export default router
