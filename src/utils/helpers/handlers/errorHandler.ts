import createHttpError from 'http-errors'
import { IRequest, IResponse, INext } from '@src/types/vendor'
import Logger from '@src/providers/logger'
import { ErrorConstants, StatusCodeConstants } from '@src/utils/constants'

const errorHandler = (err: Error, _req: IRequest, res: IResponse, _next: INext) => {
  // TODO : comment for production
  Logger.error(err.stack)
  Logger.info(err.message)
  // Handle HTTP errors created by the createHttpError library
  if (err instanceof createHttpError.HttpError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      success: false,
      message: err.message || ErrorConstants.INTERNAL_SERVER_ERROR,
      data: {},
    })
  }

  // Handle other non-HTTP errors with a generic internal server error response
  return res.status(StatusCodeConstants.INTERNAL_SERVER_ERROR).json({
    statusCode: StatusCodeConstants.INTERNAL_SERVER_ERROR,
    success: false,
    message: ErrorConstants.INTERNAL_SERVER_ERROR,
    data: null,
  })
}

export default errorHandler
