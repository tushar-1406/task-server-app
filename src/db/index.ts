import Logger from '@src/providers/logger'
import { JSONFilePreset } from 'lowdb/node'

class Database {
  // Initialize the database connection
  public static async init(): Promise<any> {
    try {
      const db = await JSONFilePreset('./src/db/db.json', { users: [] })
      await db.write()
      return db
    } catch (error: any) {
      Logger.error(`Database connection error: ${error}`)
      process.exit(1)
    }
  }
}

export default Database
