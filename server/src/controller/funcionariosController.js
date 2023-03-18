import bcrypt from 'bcrypt'
import sqlDB from '../app/mysql.js'
import validateEmail from '../utils/validateEmail.js'
import validateName from '../utils/validateName.js'
import validatePassword from '../utils/validatePassword.js'

class FuncionariosController {

  static getWorkers = (req, res) => {

    sqlDB.query('SELECT admin_workers.name, admin_offices.type FROM workers_offices INNER JOIN admin_offices INNER JOIN admin_workers ON admin_workers.id = workers_offices.id_worker AND admin_offices.id = workers_offices.id_office', (err, data) => {

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

  static getActiveWorkers = (req, res) => {

    sqlDB.query('SELECT admin_workers.name, admin_offices.type FROM workers_offices INNER JOIN admin_offices INNER JOIN admin_workers ON admin_workers.id = workers_offices.id_worker AND admin_offices.id = workers_offices.id_office WHERE admin_workers.ativo = 1', (err, data) => {

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

  static getInactiveWorkers = (req, res) => {

    sqlDB.query('SELECT admin_workers.name, admin_offices.type FROM workers_offices INNER JOIN admin_offices INNER JOIN admin_workers ON admin_workers.id = workers_offices.id_worker AND admin_offices.id = workers_offices.id_office WHERE admin_workers.ativo = 0', (err, data) => {

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

  static getOffices = (req, res) => {

    sqlDB.query('SELECT type FROM admin_offices', (err, data) => {

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
  
  static updateWorkers = (req, res) => {
    const id = req.params.id
    const active = req.body.active

    sqlDB.query('UPDATE `admin_workers` SET `active` = ? WHERE `id` = ?', [active, id], err => {

      if (err) {
        res.status(500).send({
          status: 500,
          message: err.message
        })
        return
      }

      res.status(200).json({
        status: 200,
        data: 'Status alterado com sucesso!'
      })
    })
  }

  static postNewWorkers = (req, res) => {

    const { name, email, password, office } = req.body

    const visible = 1

    if (!name || !email || !password) {
      res.status(400).json({ status: 400, message: 'Invalid request' })
      return
    }

    if (!validateEmail(email)) {
      res.status(400).json({ stats: 400, message: 'Email inválido. O email deve ter o formato: exemplo@gmail.com' })
      return
    }

    if (!validateName(name)) {
      res.status(400).json({ status: 400, message: 'Nome inválido. O nome deve ter no mínimo 3 caracteres e não pode conter números' })
      return
    }

    if (!validatePassword(password)) {
      res.status(400).json({ status: 400, message: 'Senha inválida. A senha deve ter no mínimo 6 caracteres, 1 número e 1 caractere especial' })
      return
    }

    const encryptedPassword = bcrypt.hashSync(password, 10)
    const datatime = new Date()


      sqlDB.query('INSERT INTO `admin_workers` (name, email, password, ativo, lastLogin, createdAt, visible) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, email, encryptedPassword, true, datatime, datatime, visible], (err, data) => {
        if (err) {
          res.status(500).send({
            status: 500,
            message: err.message
          })
          return
        }

        sqlDB.query('INSERT INTO `workers_offices` (id_worker, id_office) VALUES (?, ?)', [data.insertId, office], (err, data) => {
          if (err) {
            res.status(500).send({
              status: 500,
              message: err.message
            })
            return
          }  
  
          res.status(201).json({
            status: 201,
            message: 'Funcionário cadastrado com sucesso!'
          })
        }) 
      })      
  }
}


export default FuncionariosController