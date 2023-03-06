import sqlDB from '../app/mysql.js'

class ContatoController {

  static postContato = (req, res) => {
    const payload = req.body 

    const obj = {
      name: payload.name,
      email: payload.email,
      comment: payload.comment,
      subject: payload.subject
    }

    sqlDB.query('INSERT INTO `contact` (name, email, comment, subject) VALUES (?, ?, ?, ?)', [obj.name, obj.email, obj.comment, obj.subject], (err, data) => {

      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      res.status(201).json({
        status: 201,
        data: `Mensagem de contato cadastrada com sucesso. ${data}`
      })
    })
  }

}

export default ContatoController