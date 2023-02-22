import jwt from 'jsonwebtoken'

const secret = process.env.JWT_TOKEN

const createToken = ({ name, email }) => {
  const payload = {
    name,
    email
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options)
}

export default createToken
