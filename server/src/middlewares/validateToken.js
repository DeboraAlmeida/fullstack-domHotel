import jwt from 'jsonwebtoken'

const validateToken = (isAdmin = false) => (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).send('Unauthorized')
    return
  }

  const [bearer, token] = authHeader.split(' ')

  if (bearer !== 'Bearer' || !token) {
    res.status(401).send('Unauthorized')
    return
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: 'Unauthorized!' })
      return 
    }

    if (isAdmin && !decoded.admin) {
      res.status(401).send({ message: 'You are not an admin!' })
      return 
    }

    req.body.user = decoded
    
    next()
  })
}

export default validateToken
