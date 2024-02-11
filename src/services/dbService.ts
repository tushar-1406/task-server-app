import DB from '@src/db/index'
import { UserData } from '@src/types/db/db'

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

  public static async findUser(email: string, phone: string): Promise<boolean> {
    await DBService.ensureInitialized()
    const userExists = await DBService.db.data.users.some(
      (user: any) => user.personalInfo.email === email || user.personalInfo.phone === phone,
    )

    return userExists
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
