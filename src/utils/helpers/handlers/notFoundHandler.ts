import { IRequest, IResponse } from '@src/types/vendor'
import { StatusCodeConstants, ErrorConstants } from '@src/utils/constants'

const notFoundHandler = (_req: IRequest, res: IResponse) => {
  return res.status(StatusCodeConstants.OK).json({
    statusCode: StatusCodeConstants.NOT_FOUND,
    success: false,
    error: ErrorConstants.INVALID_API,
    data: null,
  })
}

export default notFoundHandler
