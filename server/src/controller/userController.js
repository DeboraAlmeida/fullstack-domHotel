import sqlDB from '../app/mysql.js'
import createToken from '../utils/createToken.js'
import sendEmail from '../utils/sendEmail.js'

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
}

export default UserController
