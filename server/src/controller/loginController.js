import bcrypt from 'bcrypt'
import sqlDB from '../app/mysql.js'
import createToken from '../utils/createToken.js'

class LoginController {
  static default = (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ message: 'Invalid request' })
      return
    }

    sqlDB.query('SELECT name,password,ativo,id FROM `user` WHERE `email` = ? LIMIT 1', email, async (err, data) => {
      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Senha ou email incorretos'
        })
        return
      }

      if (!data[0].ativo) {
        res.status(500).json({
          status: 500,
          message: 'Usuário desativado'
        })
        return
      }

      const isMatch = await bcrypt.compare(password, data[0].password)

      if (!isMatch) {
        res.status(500).json({
          status: 500,
          message: 'Senha incorreta'
        })
        return
      }

      const token = createToken({ name: data[0].name, email, id: data[0].id })

      sqlDB.query('UPDATE `user` SET `lastLogin` = ? WHERE `email` = ?', [new Date(), email], err => {
        if (err) {
          res.status(500).send({ message: err.message })
          return
        }

        res.status(200).json({
          status: 200,
          message: 'Login realizado com sucesso',
          data: {
            name: data[0].name
          },
          token
        })
      })

    })
  }
}

export default LoginController
