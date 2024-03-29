import morgan, { StreamOptions } from 'morgan'
import Logger from '../logger/index.js'

const stream: StreamOptions = {
  write: (message: any) => Logger.http(message),
}

const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream,
})

export default morganMiddleware
