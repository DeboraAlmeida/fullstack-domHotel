
class AcomodacoesController {
  static default = (_req, res) => {
    res.status(200).send({
      msg: 'acomodações ok!'
    })
  }
}

export default AcomodacoesController
