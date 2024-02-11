import { UUID } from 'crypto'

export type PersonalInfo = {
  id: UUID
  email: string
  password: string
  phone: string
  firstName: string
  lastName: string
  dob: string
}

export type AddressInfo = {
  streetAddress: string
  optionalAddress?: string
  country: string
  state: string
  city: string
  zipCode: string
}

export type IdentificationInfo = {
  sinNumber: string
  passportNumber?: string
  driverLicenseNumber?: string
}
export type UserData = { personalInfo: PersonalInfo; addressInfo: AddressInfo; identificationInfo: IdentificationInfo }
