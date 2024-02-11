import { INext, IResponse, IRequest } from '../../types/vendor/index.js'
import { AuthInputSchemas } from '../../utils/helpers/validator/request_validator/joi/index.js'
import { requestValidator } from '../../utils/helpers/validator/request_validator/requestValidator.js'

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
