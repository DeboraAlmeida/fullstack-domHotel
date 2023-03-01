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

  static getWorkersNumber = (_req, res) => {

    sqlDB.query('SELECT COUNT(`ativo`) AS `active_workers` FROM `admin_workers`', (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Nenhum funcionário encontrado'
        })
        return
      }

      res.status(200).json({
        status: 200,
        // data: { active_reserves: data[0].active_reserves }
        data: data[0].active_workers
      })
    })

  }


}

export default FuncionariosController