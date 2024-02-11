import { Router } from 'express'
import { ValidateAuthInputs } from '../middleware/request_validation/index.js'
import { AuthController } from '../controllers/index.js'
import { IRequest, IResponse } from '../types/vendor/index.js'
const router = Router()
router.get('/', (_req: IRequest, res: IResponse) => {
  res.send('Hello, This is Auth Service!')
})
router.route('/signUp').post(ValidateAuthInputs.validateSignUp, AuthController.signUp)
router.route('/login').post(ValidateAuthInputs.validateSignIn, AuthController.signIn)
export default router
