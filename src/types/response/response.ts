export type InternalResponse = {
  statusCode: number
  data: { [key: string]: string | any } | string | number
  message: string
}
