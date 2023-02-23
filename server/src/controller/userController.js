import sqlDB from '../app/mysql.js'

class UserController {
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

export default UserController
