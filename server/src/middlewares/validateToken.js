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

  jwt.verify(token, process.env.JWT_TOKEN, { ignoreExpiration: false }, (err, decoded) => {
    if (err) {

      if (err.name === 'TokenExpiredError') {
        res.status(401).send({ 
          status: 401,
          message: 'Token expired!'
        })
        return
      }

      res.status(401).send({ 
        status: 401,
        message: 'Unauthorized'
      })
      return 
    }

    if (isAdmin && !decoded.admin) {
      res.status(401).send({ 
        status: 401,
        message: 'You are not an admin!'
      })
      return 
    }

    req.body.user = decoded
    
    next()
  })
}

export default validateToken
