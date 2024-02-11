class StatusCodeConstants {
  public static readonly OK = 200
  public static readonly CREATED = 201
  public static readonly COMMON_ERROR = 400
  public static readonly UNAUTHORIZED = 401
  public static readonly NOT_FOUND = 404
  public static readonly PARAMETER_MISSING = 422
  public static readonly INTERNAL_SERVER_ERROR = 500
  public static readonly SERVICE_UNAVAILABLE = 503
  public static readonly RETRY_CODE = 429
}

export default StatusCodeConstants
