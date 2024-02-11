import Joi from 'joi'

export default class AuthInputSchemas {
  static signUpSchema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{6,12}$/)
      .required(),
    confirmPassword: Joi.ref('password'), // Confirm password must match password
    firstName: Joi.string().min(2).max(20).required(),
    lastName: Joi.string().min(2).max(20).required(),
    dob: Joi.date().max('now').required(),
    streetAddress: Joi.string().min(5).max(100).required(),
    optionalAddress: Joi.string().max(100),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    zipCode: Joi.string()
      .pattern(/^[0-9]{5}$/)
      .required(),
    phone: Joi.string()
      .pattern(/^\+\d{1,3}\d{6,14}$/)
      .required(),
    sinNumber: Joi.string()
      .pattern(/^[0-9]{9}$/)
      .required(),
    passportNumber: Joi.string()
      .pattern(/^([A-Z0-9]){9}$/)
      .allow(''),
    driverLicenseNumber: Joi.string()
      .pattern(/^([A-Z0-9]){9}$/)
      .allow(''),
  }).or('passportNumber', 'driverLicenseNumber')

  static signInSchema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    password: Joi.string().required(),
  })
}
