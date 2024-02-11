import { IRequest, IResponse } from '../types/vendor/index.js'
import { RequestHandler } from 'express'
import { ISignUpData, ISignInData } from '../types/request/requestSchema.js'
import { asyncHandler } from '../utils/helpers/wrapper/asyncHandler.js'
import { ApiResponse } from '../utils/helpers/handlers/index.js'
import { StatusCodeConstants } from '../utils/constants/index.js'
import { InternalResponse } from '../types/response/response.js'
import AuthService from '../services/authService.js'

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
