import bcrypt from 'bcrypt'
import sqlDB from '../app/mysql.js'
import sendEmail from '../utils/sendEmail.js'
import validateEmail from '../utils/validateEmail.js'
import validateName from '../utils/validateName.js'
import validatePassword from '../utils/validatePassword.js'
import LoginController from './loginController.js'

class SignupController {
  static default = (req, res) => {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
      res.status(400).json({ status: 400, message: 'Invalid request' })
      return
    }

    if (!validateEmail(email)) {
      res.status(400).json({ status: 400, message: 'Email inválido. O email deve ter o formato: exemplo@gmail.com' })
      return
    }

    if (!validateName(name)) {
      res.status(400).json({ status: 400, message: 'Nome inválido. O nome deve ter no mínimo 3 caracteres e não pode conter números' })
      return
    }

    if (!validatePassword(password)) {
      res.status(400).json({ status: 400, message: 'Senha inválida. A senha deve ter no mínimo 6 caracteres, 1 número e 1 caractere especial' })
      return
    }

    const encryptedPassword = bcrypt.hashSync(password, 10)
    const datatime = new Date()

    sqlDB.query('INSERT INTO `user` (email, password, name, ativo, lastLogin, createdAt) VALUES (?, ?, ?, ?, ?, ?)', 
      [email, encryptedPassword, name, true, datatime, datatime], err => {
        if (err) {
          switch (err.code) {
          case 'ER_DUP_ENTRY':
            res.status(500).json({ status: 500, message: 'Email já cadastrado' })
            break
          default:
            res.status(500).json({ status: 500, message: 'Erro ao cadastrar usuário' })
          }
          return
        }

        req.body = { email, password }

        sendEmail(email, 'Bem vindo ao Dom Hotel', 'Seja bem vindo ao Dom Hotel. Esperamos que você tenha uma ótima experiência. Caso tenha alguma dúvida, entre em contato conosco.')

        LoginController.default(req, res)

      }
    )

  }
}

export default SignupController
