import 'module-alias/register'
import app from './app'
import Locals from '@src/config/index'
import Logger from '@src/providers/logger/'
import Database from '@src/db'

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
