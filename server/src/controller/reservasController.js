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

  static updateStatusReserve = (req, res) => {
    const id = req.params.id
    const active = req.body.active

    sqlDB.query('UPDATE `reserve` SET `active` = ? WHERE `id` = ?', [active, id], err => {

      if (err) {
        res.status(500).send({
          status: 500,
          message: err.message
        })
        return
      }

      res.status(200).json({
        status: 200,
        data: 'Status da reserva alterado com sucesso.'
      })
    })
  }

  static searchByDates = (req, res) => {
    const { startDate, endDate } = req.params

    sqlDB.query('SELECT * FROM `reserve` WHERE `check_in` BETWEEN ? AND ?', [startDate, endDate], (err, data) => {
      if (err) {
        res.status(500).send({
          status: 500,
          message: err.message
        })
        return
      }

      if (data.length <= 0) {
        res.status(200).json({
          status: 200,
          data: [],
          message: 'Não existe reservas nesse período'
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

  static getReservesNumber = (_req, res) => {

    sqlDB.query('SELECT COUNT(`active`) AS `active_reserves` FROM `reserve`', (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }
      if (data.length <= 0) {
        res.status(500).json({
          status: 500,
          message: 'Não existem reservas ativas'
        })
        return
      }

      res.status(200).json({
        status: 200,
        // data: { active_reserves: data[0].active_reserves }
        data: data[0].active_reserves
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
        break
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

    sqlDB.query(`SELECT * FROM reserve`, (err, data) => {
      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      const result = []

      data.map((reserve) => {
       const data = {
        check_in: reserve.check_in.toISOString().split("T")[0],
        check_out: reserve.check_out.toISOString().split("T")[0],
       }

        if (
          ((Date.parse(data.check_out) <= Date.parse(obj.check_out) && Date.parse(data.check_in) >= Date.parse(obj.check_in)) && reserve.room_id === obj.room_id) 
        ) {
          result.push(reserve.id)
        }
      })

      if (result.length > 0) {
        res.status(400).send({ message: 'Data indisponível para esta reserva', data: result})
        return
      }  

      sqlDB.query('INSERT INTO `additional_service` (service_obj) VALUES (?)', [JSON.stringify(payload.moreService)], (err, data) => {
        if (err) {
          res.status(500).send({
            status: 500,
            message: err.message
          })
          return
        }
  
        sqlDB.query('INSERT INTO `reserve` (amount_people, check_in, check_out, user_id, room_id, active, user_name, room_name, additional_service_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [obj.amount_people, obj.check_in, obj.check_out, obj.user_id, obj.room_id, obj.active, obj.user_name, payload.reserva.quarto, data.insertId], (err, data) => {
  
          if (err) {
            res.status(500).send({ message: err.message })
            return
          }
  
          res.status(201).json({
            status: 201,
            data: `reserva cadastrada com sucesso. ${data}`
          })
        })
  
      }) 
    })
  }
}

export default ReservasController
