import JWT, { SignOptions } from 'jsonwebtoken'
import ResponseConstants from '@src/utils/constants/responseConstants'
import Locals from '@src/config/index'
import { JwtPayload } from '@src/types/jwt/jwt'
import createHttpError from 'http-errors'
export default class TokenHandler {
  private static JWT_ALGORITHM: JWT.Algorithm = Locals.JWT().JWT_ALGORITHM as JWT.Algorithm
  private static JWT_ACCESS_TOKEN_EXPIRY = Locals.JWT().JWT_ACCESS_TOKEN_EXPIRY
  private static JWT_ISSUER = Locals.JWT().JWT_ISSUER
  private static JWT_REFRESH_TOKEN_EXPIRY = Locals.JWT().JWT_REFRESH_TOKEN_EXPIRY

  /**
   *
   * @param payload contains: id, email, role
   * @returns object: {status: true/false, data: token/err}
   */
  static generateAccessToken(payload: JwtPayload): string {
    const privateKey = Locals.JWT().JWT_PRIVATE_KEY

    const JwtOptions: SignOptions = {
      algorithm: this.JWT_ALGORITHM,
      expiresIn: this.JWT_ACCESS_TOKEN_EXPIRY,
      issuer: this.JWT_ISSUER,
    }
    const JWT_TOKEN = JWT.sign(
      {
        email: payload.email,
        phone: payload.phone,
        userId: payload.userId,
        role: payload.role,
      },
      privateKey,
      JwtOptions,
    )
    return JWT_TOKEN
  }

  /**
   *
   * @param token : string
   * @returns object: {status: true/false, data: parsed-data/err}
   */
  // static verifyAccessToken(token: string) {
  //   const publicKey = Locals.JWT().JWT_PUBLIC_KEY
  //   const verify = JWT.verify(token, publicKey, {
  //     algorithms: [this.JWT_ALGORITHM],
  //   })
  //   return { status: true, data: verify }
  // }

  static generateRefreshToken(payload: JwtPayload): string {
    const privateKey = Locals.JWT().JWT_REFRESH_PRIVATE_KEY

    const JwtOptions: SignOptions = {
      algorithm: this.JWT_ALGORITHM,
      expiresIn: this.JWT_REFRESH_TOKEN_EXPIRY,
    }

    const refreshToken = JWT.sign(
      {
        email: payload.email,
        phone: payload.phone,
        userId: payload.userId,
      },
      privateKey,
      JwtOptions,
    )
    return refreshToken
  }

  static async verifyRefreshToken(refreshToken: string) {
    const publicKey = Locals.JWT().JWT_REFRESH_PUBLIC_KEY
    const verify: any = JWT.verify(refreshToken, publicKey, {
      algorithms: [this.JWT_ALGORITHM],
    })

    const userId = verify.userId

    // find refresh token from db
    // const findRefreshToken = await Requests.GQLAdminRequest({
    //   query: Queries.find_refresh_token,
    //   variables: { userId: userId, refreshToken: refreshToken },
    // })

    // if (findRefreshToken.data.errors) {
    //   throw createHttpError.InternalServerError(findRefreshToken.data.errors[0].message)
    // }
    // const refreshTokenFromDB = findRefreshToken.data.data.refresh_token
    // if (refreshTokenFromDB.length === 0) {
    //   return {
    //     status: false,
    //     data: {
    //       success: ResponseConstants.ERROR,
    //       message: ResponseConstants.TOKEN_EXPIRED,
    //     },
    //   }
    // } else {
    //   let found = false
    //   for (const token of refreshTokenFromDB) {
    //     if (token.token === refreshToken) {
    //       found = true
    //       break
    //     }
    //   }
    //   if (found === false) {
    //     return {
    //       status: false,
    //       data: {
    //         success: ResponseConstants.ERROR,
    //         message: ResponseConstants.TOKEN_EXPIRED,
    //       },
    //     }
    //   }
    // }

    // return { status: true, data: verify }
  }
}
