import crypt from 'crypto-js'


const decrypt = (req, res, next) => {

  const { body } = req.body

  if (body === undefined) {
    res.status(422).send('Request body is empty')
    return
  }

  const decrypted = crypt.AES.decrypt(body, process.env.DECRYPT_EASY_KEY)

  req.body = JSON.parse(decrypted.toString(crypt.enc.Utf8))

  next()
}

export default decrypt
