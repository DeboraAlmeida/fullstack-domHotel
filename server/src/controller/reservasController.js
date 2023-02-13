import sqlDB from "../app/mysql.js"

class ReservasController {

  static default = (req,res) => {

    sqlDB.query('SELECT * FROM reserve', (err,rows) => {
      if (err) {
        res.status(500).send({
          msg: 'error'
        })

        throw err

      }

      res.status(200).json({
        msg: 'success',
        data: rows
      })
    })

    
  }

}

export default ReservasController
