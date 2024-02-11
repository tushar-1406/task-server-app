import { IRequest, IResponse } from '@src/types/vendor'
import { RequestHandler } from 'express'
import { ISignUpData, ISignInData } from '@src/types/request/requestSchema'
import { asyncHandler } from '@src/utils/helpers/wrapper/asyncHandler'
import { ApiResponse } from '@src/utils/helpers/handlers'
import { StatusCodeConstants, ResponseConstants } from '@src/utils/constants'
import { InternalResponse } from '@src/types/response/response'
import AuthService from '@src/services/authService'

class AuthController {
  public static signUp: RequestHandler = asyncHandler(async (req: IRequest, res: IResponse) => {
    /** Retrieve the signUp parameters from the request body  **/
    const signUpParameters: ISignUpData = req.body
    const response: InternalResponse = await AuthService.signUp(signUpParameters)
    return res.status(response.statusCode).json(new ApiResponse(response.statusCode, response.data, response.message))
  })
  public static signIn: RequestHandler = asyncHandler(async (req: IRequest, res: IResponse) => {
    /** Retrieve the signIn parameters from the request body  **/
    const signInParameters: ISignInData = req.body
    const response: InternalResponse = await AuthService.signIn(signInParameters)
    return res
      .status(response.statusCode)
      .json(new ApiResponse(StatusCodeConstants.OK, response.data, response.message))
  })
}
export default AuthController
