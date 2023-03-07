import express from 'express'
import UserController from '../controller/userController.js'
import validateToken from '../middlewares/validateToken.js'


const router = express.Router()

router.get('/active-user', validateToken(true), UserController.getUsersNumber)

export default router
