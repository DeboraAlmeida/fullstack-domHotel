import sqlDB from '../app/mysql.js'

class ComentariosController {

  static getComments = async (req, res) => {
    const { rommId } = req.params

    if (!rommId) {
      res.status(500).send({
        status: 500,
        message: 'ID da acomodação não informado'
      })
      return
    }

    sqlDB.query('SELECT * FROM `comment` WHERE `room_id` = ?', rommId, (err, data) => {

      if (err) {
        res.status(500).send({
          status: 500,
          message: err.message
        })
        return
      }

      res.status(200).json({
        status: 200,
        data
      })
    })
  }

  static setCooment = async (req, res) => {
    const { rommId } = req.params
    const { description, avaliation, user } = req.body


    if (!rommId) {
      res.status(500).send({
        status: 500,
        message: 'ID da acomodação não informado'
      })

    }

    if (!avaliation) {
      res.status(500).send({
        status: 500,
        message: 'Avaliação não informada'
      })
      return
    }

    if (!user) {
      res.status(500).send({
        status: 500,
        message: 'Usuário não encontrado'
      })
      return
    }

    if (description && description.length > 250) {
      res.status(500).send({
        status: 500,
        message: 'Mensagem muito grande'
      })
      return
    }

    sqlDB.query('INSERT INTO `comment` (`description`, `avaliation`, `room_id`, `user_id`, `user_name`, `createdAt`) VALUES (?, ?, ?, ?, ?, ?)',
      [description, avaliation, rommId, user.id, user.name, new Date()], err => {

        if (err) {
          res.status(500).send({
            status: 500,
            message: err.message
          })
          return
        }

        res.status(200).json({
          status: 200,
          message: 'Comentário enviado com sucesso'
        })
      })
  }

  static verifyCanComment = (req, res) => {

    const { roomId } = req.params
    const { id } = req.body.user

    if (!roomId || !id) {
      res.status(500).json({
        status: 500,
        message: 'Invalid request'
      })
    }

    sqlDB.query('SELECT id FROM `reserve` WHERE `user_id` = ? AND `room_id` = ?', [id, roomId], (err, result) => {
      if (err) {
        res.status(500).json({
          status: 500,
          message: 'Internal server error'
        })
      }

      if (result.length <= 0) {
        res.status(200).json({
          status: 200,
          canComment: false
        })
        return
      }

      res.status(200).json({
        status: 200,
        canComment: true
      })
    })


  }
}

export default ComentariosController
