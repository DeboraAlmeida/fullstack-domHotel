import sqlDB from '../app/mysql.js'

export default class ContatoController {

  static postContato = (req, res) => {
    const payload = req.body 

    sqlDB.query('INSERT INTO `contact` (name, email, comment, subject, createdAt) VALUES (?, ?, ?, ?, ?)', [payload.name, payload.email, payload.comment, payload.subject, new Date()], (err, data) => {

      if (err) {
        res.status(500).send({ 
          status: 500,
          message: err.message
        })
        return
      }

      res.status(201).json({
        status: 201,
        data: 'Mensagem de contato cadastrada com sucesso!'
      })
    })
  }

  static getContato = (_req, res) => {
    
    sqlDB.query('SELECT * FROM `contact` WHERE MONTH(createdAt) = MONTH(CURRENT_DATE())', (err, data) => {
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

}