import { randomUUID } from 'crypto'
import { ISignInData, ISignUpData } from '@src/types/request/requestSchema'
import { StatusCodeConstants, ResponseConstants } from '@src/utils/constants'
import { InternalResponse } from '@src/types/response/response'
import { PersonalInfo, AddressInfo, IdentificationInfo, UserData } from '@src/types/db/db'
import createHttpError from 'http-errors'
import Hashing from '@src/utils/helpers/authentication/hashing/hashing'
import DBService from './dbService'
const response = {
  statusCode: StatusCodeConstants.OK,
  message: ResponseConstants.SUCCESS,
  data: {},
}
class AuthService {
  public static signUp = async (signUpParameters: ISignUpData): Promise<InternalResponse> => {
    if (signUpParameters.password !== signUpParameters.confirmPassword)
      throw new createHttpError.BadRequest(ResponseConstants.PASSWORD_NOT_MATCHED)
    // check if user with same email or mobile exists
    const exists: boolean = await DBService.findUser(signUpParameters.email, signUpParameters.phone)
    if (exists) {
      throw new createHttpError.BadRequest(ResponseConstants.USER_ALREADY_EXISTS)
    }
    const hashedPassword: string = await Hashing.hashPassword(signUpParameters.password)
    const userId = randomUUID()
    // Create user data objects
    const personalInfo: PersonalInfo = {
      id: userId,
      email: signUpParameters.email,
      password: hashedPassword,
      phone: signUpParameters.phone,
      firstName: signUpParameters.firstName,
      lastName: signUpParameters.lastName,
      dob: signUpParameters.dob,
    }

    const addressInfo: AddressInfo = {
      streetAddress: signUpParameters.streetAddress,
      optionalAddress: signUpParameters.optionalAddress,
      country: signUpParameters.country,
      state: signUpParameters.state,
      city: signUpParameters.city,
      zipCode: signUpParameters.zipCode,
    }

    const identificationInfo: IdentificationInfo = {
      sinNumber: signUpParameters.sinNumber,
      passportNumber: signUpParameters.passportNumber,
      driverLicenseNumber: signUpParameters.driverLicenseNumber,
    }
    const userData: UserData = {
      personalInfo,
      addressInfo,
      identificationInfo,
    }
    await DBService.signUpUser(userData)
    response.message = ResponseConstants.SIGNUP_SUCCESS
    response.statusCode = StatusCodeConstants.OK
    response.data = {}
    return response
  }
  public static signIn = async (signIpParameters: ISignInData): Promise<InternalResponse> => {
    console.log(signIpParameters)
    return response
  }
}
export default AuthService
