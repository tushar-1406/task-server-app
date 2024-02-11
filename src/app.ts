import express, { Application } from 'express'
import morganMiddleware from './providers/morgan/index.js'
import { notFoundHandler, errorHandler } from './utils/helpers/handlers/index.js'
import router from './routes/index.js'
const app: Application = express()
app.use(
  express.json({
    type: ['application/json', 'application/cloudevents+json'],
  }),
)
app.use(morganMiddleware)
app.use('/v1/api/auth', router)
app.use(errorHandler)
app.use('*', notFoundHandler)
export default app
