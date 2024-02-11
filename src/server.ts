// import 'module-alias/register.js'
import app from './app.js'
import Locals from './config/index.js'
import Logger from './providers/logger/index.js'
import Database from './db/index.js'

const port: number = Locals.config().PORT
Database.init()
  .then(() => {
    app.listen(port, () => {
      Logger.info('Auth service listening on port ' + port)
    })
  })
  .catch((err: any) => {
    Logger.error('db connection failed !!! ', err)
  })
