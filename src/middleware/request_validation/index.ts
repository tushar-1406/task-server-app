import { INext, IResponse, IRequest } from '@src/types/vendor'
import { AuthInputSchemas } from '@src/utils/helpers/validator/request_validator/joi'
import { requestValidator } from '@src/utils/helpers/validator/request_validator/requestValidator'

export class ValidateAuthInputs {
  static validateSignUp = (req: IRequest, _res: IResponse, next: INext) => {
    const data = req.body
    return requestValidator(req, next, AuthInputSchemas.signUpSchema, data)
  }
  static validateSignIn = (req: IRequest, _res: IResponse, next: INext) => {
    const data = req.body
    return requestValidator(req, next, AuthInputSchemas.signInSchema, data)
  }
}
