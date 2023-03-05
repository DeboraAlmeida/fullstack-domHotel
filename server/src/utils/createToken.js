import jwt from 'jsonwebtoken'

const secret = process.env.JWT_TOKEN

const createToken = (obj) => {

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(obj, secret, options)
}

export default createToken
