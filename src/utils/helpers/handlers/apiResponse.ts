import { StatusCodeConstants } from '../../../utils/constants/index.js'
class ApiResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T

  constructor(statusCode: number, data: T, message: string) {
    this.statusCode = statusCode
    this.success = statusCode < StatusCodeConstants.COMMON_ERROR
    this.message = message
    this.data = data
  }
}
export default ApiResponse
