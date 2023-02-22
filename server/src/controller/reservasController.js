import sqlDB from '../app/mysql.js'

class ReservasController {

  static getReserves = (_req, res) => {

    sqlDB.query('SELECT * FROM `reserve`', (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }
      
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Não existe reservas cadastradas'
        })
        return
      }

      res.status(200).json({
        status: 200,
        data
      })
    })

  }

  static getReserveById = (req, res) => {

    const id = req.params.id

    sqlDB.query('SELECT * FROM `reserve` WHERE `id` = ?', id, (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      } 
      
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Não existe reserva com esse ID'
        })
        return
      }

      res.status(200).json({
        status: 200,
        data
      })

    })

  }



}

export default ReservasController
