import sqlDB from '../app/mysql.js'

class ConsumoController {

  static postConsumo = (req, res) => {
    const payload = req.body 

    const obj = {
      product: payload.product,
      id_reserve: payload.reserve
    }

    sqlDB.query('INSERT INTO `expenditure` (product, id_reserve) VALUES (?, ?)', [obj.product, obj.id_reserve], (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      res.status(201).json({
        status: 201,
        data: 'Consumo cadastrado com sucesso.'
      })
    })
  }

}

export default ConsumoController
