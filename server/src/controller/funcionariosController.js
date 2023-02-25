import sqlDB from '../app/mysql.js'

class FuncionariosController {

  static getWorkers = (req, res) => {


    sqlDB.query('SELECT * FROM `admin_workers`', (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      res.status(200).json({
        status: 200,
        data
      })
    })

  }

  static getWorkersActived = (req, res) => {

    const ativo = req.params.ativo

    sqlDB.query('SELECT * FROM `admin_workers` WHERE `ativo = ?`', ativo, (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      res.status(200).json({
        status: 200,
        data
      })
    })

  }


}

export default FuncionariosController