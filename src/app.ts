import express, { Application } from 'express'
import morganMiddleware from '@src/providers/morgan/index'
import { notFoundHandler, errorHandler } from '@src/utils/helpers/handlers'
import router from '@src/routes'
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
