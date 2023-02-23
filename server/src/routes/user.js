import express from 'express'
import UserController from '../controller/userController.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router()

router.get('/verify-can-comment/:roomId', validateToken, UserController.verifyCanComment)

export default router
