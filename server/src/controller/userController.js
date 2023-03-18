import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sqlDB from '../app/mysql.js'
import createToken from '../utils/createToken.js'
import sendEmail from '../utils/sendEmail.js'
import validateName from '../utils/validateName.js'
import validatePassword from '../utils/validatePassword.js'

class UserController {
  static getUsersNumber = (_req, res) => {

    sqlDB.query('SELECT COUNT(`ativo`) AS `active_users` FROM `user`', (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Não existem clientes ativos'
        })
        return
      }

      res.status(200).json({
        status: 200,
        data: data[0].active_users
      })
    })

  }

  static createForgotPasswordLinkAndSend = (req, res) => {
    const { email } = req.body

    const bodyEmailForgotPassword = (token) => {

      return `
      <h2>Recuperação de senha</h2>

      <p>Olá, você solicitou a recuperação de senha da sua conta. Clique no link abaixo para recuperar sua senha.</p>

      <a href="http://localhost:3000/reset-password/${token}">Clique aqui para recuperar sua senha</a>

      <p>Se você não solicitou a recuperação de senha, ignore esse email.</p>

      <p>Atenciosamente, Dom Hotel <3</p>
      `

    }

    sqlDB.query('SELECT `id`, `email` FROM `user` WHERE `email` = ?', email, (err, data) => {
      if (err) {
        res.status(500).send({
          status: 500,
          message: err.message
        })
        return
      }
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Não existe nenhum usuário com esse email'
        })
        return
      }

      try {
        const token = createToken({ id: data[0].id, email: data[0].email }, '1h')

        sendEmail(data[0].email, 'Recuperação de senha', bodyEmailForgotPassword(token))

        res.status(200).json({
          status: 200,
          message: 'Email enviado com sucesso'
        })
      } catch (err) {
        res.status(500).json({
          status: 500,
          message: err.message
        })
      }

    })
  }

  // vai ter q fazer dois. um para atualizar só o nome e outro para atualizar a senha. tanto aqui quanto la nas rotas.
  static updateUser = (req, res) => {
    const { name } = req.body
    const { id } = req.params

    if (!name) {
      res.status(400).json({ status: 400, message: 'Invalid request' })
      return
    }

    if (!validateName(name)) {
      res.status(400).json({ status: 400, message: 'Nome inválido. O nome deve ter no mínimo 3 caracteres e não pode conter números' })
      return
    }

    sqlDB.query('UPDATE `user` SET `name` = ? WHERE `id` = ?', [name, id], err => {
      if (err) {
        res.status(500).send({
          status: 500,
          message: err.message
        })
        return
      }


      res.status(200).json({
        status: 200,
        message: 'Usuário atualizado com sucesso'
      })

    })

  }

  static updatePassword = (req, res) => {
    const { password, token } = req.body

    jwt.verify(token, process.env.JWT_TOKEN, { ignoreExpiration: false }, (err, decoded) => {
      if (err) {

        if (err.name === 'TokenExpiredError') {
          res.status(401).send({
            status: 401,
            message: 'Token expirado'
          })
          return
        }

        res.status(401).send({
          status: 401,
          message: 'Unauthorized'
        })
        return
      }

      if (!password) {
        res.status(400).json({ status: 400, message: 'Invalid request' })
        return
      }

      if (!validatePassword(password)) {
        res.status(400).json({ status: 400, message: 'Senha inválida. A senha deve ter no mínimo 6 caracteres, 1 número e 1 caractere especial' })
        return
      }

      const encryptedPassword = bcrypt.hashSync(password, 10)
      const { email } = decoded


      sqlDB.query('UPDATE `user` SET `password` = ? WHERE `email` = ?', [encryptedPassword, email], err => {
        if (err) {
          res.status(500).send({
            status: 500,
            message: err.message
          })
          return
        }

        sendEmail(email, 'Senha alterada', 'Sua senha foi alterada com sucesso')

        res.status(200).json({
          status: 200,
          message: 'Senha alterada com sucesso'
        })

      })
    })

  }

}

export default UserController
