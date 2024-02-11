import DB from '../db/index.js'
import { UserData } from '../types/db/db.js'

class DBService {
  private static db: any
  // Ensure database is initialized before any method is called
  private static async ensureInitialized(): Promise<void> {
    if (!DBService.db) {
      await DBService.init()
    }
  }

  public static async init(): Promise<void> {
    DBService.db = await DB.init()
  }

  // find user
  public static async findUser(email: string, phone: string): Promise<boolean> {
    await DBService.ensureInitialized()
    const userExists = await DBService.db.data.users.some(
      (user: any) => user.personalInfo.email === email || user.personalInfo.phone === phone,
    )

    return userExists
  }

  // get user
  public static async getUser(email: string, phone: string): Promise<UserData> {
    await DBService.ensureInitialized()
    const user = await DBService.db.data.users.find(
      (user: any) => user.personalInfo.email === email || user.personalInfo.phone === phone,
    )

    return user
  }

  // Method to sign up a new user in db
  public static async signUpUser(userData: UserData): Promise<void> {
    await DBService.ensureInitialized()
    // Insert the new user data into the database
    await DBService.db.data.users.push(userData)
    await DBService.db.write()
  }
}

export default DBService
