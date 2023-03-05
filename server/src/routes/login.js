import express from 'express'
import LoginController from '../controller/loginController.js'
import decrypt from '../middlewares/decrypt.js'

const router = express.Router()

router.post('/login', decrypt, LoginController.default)

export default router
