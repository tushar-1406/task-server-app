import * as argon2 from 'argon2'
import Locals from '@src/config'

const ARGON2_SALT = Locals.Hashing().ARGON2_SALT
class Hashing {
  public static async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password, {
      salt: Buffer.from(ARGON2_SALT),
    })
  }
  public static async comparePassword(hashedPassword: string, password: string): Promise<boolean> {
    return await argon2.verify(hashedPassword, password)
  }
}

export default Hashing
