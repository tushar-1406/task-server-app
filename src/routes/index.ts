import { Router } from 'express'
import { ValidateAuthInputs } from '@src/middleware/request_validation'
import { AuthController } from '@src/controllers'
import { IRequest, IResponse } from '@src/types/vendor'
const router = Router()
router.get('/', (_req: IRequest, res: IResponse) => {
  res.send('Hello, This is Auth Service!')
})
router.route('/signUp').post(ValidateAuthInputs.validateSignUp, AuthController.signUp)
router.route('/login').post(ValidateAuthInputs.validateSignIn, AuthController.signIn)
export default router
