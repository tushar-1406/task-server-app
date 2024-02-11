import { IRequest, IResponse } from '../../../types/vendor/index.js'
import { StatusCodeConstants, ErrorConstants } from '../../../utils/constants/index.js'

const notFoundHandler = (_req: IRequest, res: IResponse) => {
  return res.status(StatusCodeConstants.OK).json({
    statusCode: StatusCodeConstants.NOT_FOUND,
    success: false,
    error: ErrorConstants.INVALID_API,
    data: null,
  })
}

export default notFoundHandler
