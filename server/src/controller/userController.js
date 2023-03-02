import sqlDB from '../app/mysql.js'

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
        // data: { active_users: data[0].active_users }
        data: data[0].active_users
      })
    })

  }
}

export default UserController
