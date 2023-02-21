import express from 'express'
import SignupController from '../controller/signupController.js'
import decrypt from '../middlewares/decrypt.js'

const router = express.Router()

router.post('/signup', decrypt, SignupController.default)

export default router
