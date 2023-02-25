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

  static getActiveReserves = (_req, res) => {

    sqlDB.query('SELECT * FROM `reserve`  WHERE `active` = true', (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }
      
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Não existe reservas ativas'
        })
        return
      }

      res.status(200).json({
        status: 200,
        data
      })
    })

  }

  static postReserve = (req, res) => {
    const payload = req.body 
    const idRoom = () => {
      switch (payload.reserva.quarto) {
        case 'VIP':
          return 1
        case 'Premium':
            return 2
        case 'Standard':
            return 3        
      
        default:
          break;
      }
    }

    const obj = {
      amount_people: JSON.parse(payload.reserva.adultos) + JSON.parse(payload.reserva.criancas), 
      check_in: payload.reserva.checkin, 
      check_out: payload.reserva.checkout, 
      user_id: payload.userData.id_user, 
      room_id: idRoom(), 
      active: 0, 
      user_name: payload.userData.name
    }

    sqlDB.query('INSERT INTO `reserve` (amount_people, check_in, check_out, user_id, room_id, active, user_name, room_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [obj.amount_people, obj.check_in, obj.check_out, obj.user_id, obj.room_id, obj.active, obj.user_name, payload.reserva.quarto],(err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      res.status(201).json({
        status: 201,
        data: `reserva cadastrada com sucesso. ${data}`
      })
    })
  }

}

export default ReservasController
