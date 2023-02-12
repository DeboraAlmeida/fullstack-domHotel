class ReservasController {

  static default = (req,res) => {
    res.status(200).send({
      msg: 'reservas ok!'
    })
  }

}

export default ReservasController
