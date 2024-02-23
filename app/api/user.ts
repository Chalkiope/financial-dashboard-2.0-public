import { paths } from './pocketsmith-schema'

export type User =
  paths['/me']['get']['responses'][200]['content']['application/json']
