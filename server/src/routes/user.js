import express from 'express'
import UserController from '../controller/userController.js'
import decrypt from '../middlewares/decrypt.js'
import validateToken from '../middlewares/validateToken.js'


const router = express.Router()

router.get('/active-user', validateToken(true), UserController.getUsersNumber)
router.post('/forgot-password', decrypt, UserController.createForgotPasswordLinkAndSend)
router.post('/update-user/:id', decrypt, UserController.updateUser)

export default router
