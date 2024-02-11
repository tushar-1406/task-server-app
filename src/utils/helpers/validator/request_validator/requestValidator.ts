import { IRequest, INext } from '../../../../types/vendor/index.js'
import createHttpError from 'http-errors'

export const requestValidator = (_req: IRequest, next: INext, schema: any, dataToValidate: any) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: false, // ignore unknown props
    stripUnknown: false, // remove unknown props
    errors: { label: 'key', wrap: { label: false } },
  }
  const { error, value } = schema.validate(dataToValidate, options)
  if (error) {
    throw createHttpError.BadRequest(error.details[0]?.message)
  }

  dataToValidate = value
  return next()
}
