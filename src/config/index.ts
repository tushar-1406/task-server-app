import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
class Locals {
  public static config() {
    const PORT: number = parseInt(process.env.PORT as string)
    return {
      PORT,
    }
  }

  public static App(): { [key: string]: string } {
    const NODE_ENV = process.env.NODE_ENV || 'development'
    return {
      NODE_ENV,
    }
  }

  public static JWT() {
    const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || ''
    const JWT_PUBLIC_KEY = process.env.JWT_PUBLIC_KEY || ''
    const JWT_REFRESH_PRIVATE_KEY = process.env.JWT_REFRESH_PRIVATE_KEY || ''
    const JWT_REFRESH_PUBLIC_KEY = process.env.JWT_REFRESH_PUBLIC_KEY || ''
    const JWT_ALGORITHM = process.env.JWT_ALGORITHM || 'RS256'
    const JWT_ACCESS_TOKEN_EXPIRY = process.env.JWT_ACCESS_TOKEN_EXPIRY || ('900000' as string) // 15mins = 15 * 60 * 1000 = 900000   // 1 day = 24 * 60 * 60 * 1000 = 86400000
    const JWT_REFRESH_TOKEN_EXPIRY = process.env.JWT_REFRESH_TOKEN_EXPIRY || ('604800000' as string) // 7 days = 7 * 24 * 60 * 60 * 1000 = 604800000
    const JWT_ISSUER = process.env.JWT_ISSUER || ''
    return {
      JWT_PRIVATE_KEY,
      JWT_PUBLIC_KEY,
      JWT_REFRESH_PRIVATE_KEY,
      JWT_REFRESH_PUBLIC_KEY,
      JWT_ALGORITHM,
      JWT_ACCESS_TOKEN_EXPIRY,
      JWT_REFRESH_TOKEN_EXPIRY,
      JWT_ISSUER,
    }
  }

  public static Hashing() {
    const ARGON2_SALT = process.env.ARGON2_SALT || 'somesecretkey'
    return {
      ARGON2_SALT,
    }
  }
}
export default Locals
