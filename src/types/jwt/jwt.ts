export type JwtPayload = {
  email: string
  userId: string
  role: UserRole
  phone: string
}
export enum UserRole {
  USER = 'USER',
}
