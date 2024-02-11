import winston from 'winston'
const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'
const isStaging = env === 'staging'

const level = () => {
  return isDevelopment || isStaging ? 'debug' : 'warn'
}

const format = winston.format.combine(
  isDevelopment ? winston.format.colorize() : winston.format.uncolorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
)
const transports = isDevelopment
  ? [new winston.transports.Console()]
  : [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
      }),
      new winston.transports.File({ filename: 'logs/http.log', level: 'http' }),
      new winston.transports.File({ filename: 'logs/debug.log', level: 'debug' }),
      new winston.transports.File({ filename: 'logs/warn.log', level: 'warn' }),
      new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
      new winston.transports.File({ filename: 'logs/all.log' }),
    ]

const Logger = winston.createLogger({
  level: level(),
  format,
  transports,
})

export default Logger
