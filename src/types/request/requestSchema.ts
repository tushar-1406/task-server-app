export type ISignUpData = {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  dob: string
  streetAddress: string
  optionalAddress: string | undefined
  country: string
  state: string
  city: string
  zipCode: string
  phone: string
  sinNumber: string
  passportNumber?: string
  driverLicenseNumber?: string
}
export type ISignInData = {
  email: string
  password: string
}
