import express from 'express'
import '../app/dotEnv.js'
import routes from '../routes/index.js'

const app = express()

routes(app)


export default app
