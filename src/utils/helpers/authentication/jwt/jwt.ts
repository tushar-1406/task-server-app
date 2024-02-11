import JWT, { SignOptions } from 'jsonwebtoken'
import Locals from '../../../../config/index.js'
import { JwtPayload } from '../../../../types/jwt/jwt.js'
export default class TokenHandler {
  private static JWT_ALGORITHM: JWT.Algorithm = Locals.JWT().JWT_ALGORITHM as JWT.Algorithm
  private static JWT_ACCESS_TOKEN_EXPIRY = Locals.JWT().JWT_ACCESS_TOKEN_EXPIRY
  private static JWT_ISSUER = Locals.JWT().JWT_ISSUER
  private static JWT_REFRESH_TOKEN_EXPIRY = Locals.JWT().JWT_REFRESH_TOKEN_EXPIRY

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
}
