import jwt from 'jsonwebtoken'

const secret = process.env.JWT_TOKEN

const createToken = (obj, expiresIn = '1d') => {

  const options = {
    expiresIn
  }

  return jwt.sign(obj, secret, options)
}

export default createToken
