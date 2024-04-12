import { components } from './pocketsmith-schema'

export interface AllDataType {
  accounts: AccountType[]
  user: UserType
  addedAccountdata: AddedAccountDataType
}

export type AccountType = components['schemas']['Account']
export type UserType = components['schemas']['User']

export type AddedAccountDataType = {
  accountGroups: AccountGroupType[]
  limits: number[]
  mortgageAccounts: number[]
  revolvingCredits: number[]
  nonLiquidAssets: number[]
  liquidAssets: number[]
  goalDistribution: { key: string; value: number }[]
}

export type AccountGroupType = {
  name: string
  accountIds: (number | undefined)[]
  accounts: AccountType[]
  groupBalance: number
}
