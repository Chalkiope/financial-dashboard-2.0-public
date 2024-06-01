import { components } from './pocketsmith-schema'

export interface AllDataType {
  accounts: AccountType[] | DummyDataAccount[]
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
  accounts: AccountType[] | DummyDataAccount[]
  groupBalance: number
}

export type DummyDataAccount = {
  id?: number | undefined
  title?: string | undefined
  currency_code?: string | undefined
  current_balance?: number | undefined
  current_balance_in_base_currency?: number | undefined
  current_balance_exchange_rate?: number | undefined
}
