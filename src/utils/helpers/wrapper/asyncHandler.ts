import { IRequest, IResponse, INext, IRequestHandler, IAsyncRequestFunction } from '@src/types/vendor/index'
const asyncHandler = (requestHandler: IAsyncRequestFunction): IRequestHandler => {
  return (req: IRequest, res: IResponse, next: INext) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export { asyncHandler }
