import { IRequest, IResponse, INext } from './index'
export type IAsyncRequestFunction = (req: IRequest, res: IResponse, next: INext) => Promise<any>
