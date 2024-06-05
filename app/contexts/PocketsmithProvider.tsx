'use client'

import React, { createContext, useEffect, useState } from 'react'
import {
  getAllAccountData,
  getOneAccountData,
  getUserData
} from '../lib/fetchPocketsmithData'
import {
  AccountType,
  AddedAccountDataType,
  DummyDataAccount,
  UserType
} from '../api/types'
import { AccountGroupType } from '../api/types'

export const PocketsmithContext = createContext<{
  accounts: AccountType[] | DummyDataAccount[]
  user: UserType
  addedAccountdata: AddedAccountDataType
}>({
  accounts: [],
  user: {},
  addedAccountdata: {
    accountGroups: [],
    limits: [],
    mortgageAccounts: [],
    revolvingCredits: [],
    nonLiquidAssets: [],
    liquidAssets: [],
    goalDistribution: [
      {
        key: '',
        value: 0
      }
    ]
  }
})

export default function PocketsmithContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [accounts, setAccounts] = useState<AccountType[] | DummyDataAccount[]>(
    []
  )
  const [user, setUser] = useState<UserType>({})

  const getPocketsmithAccountData = async () => {
    const response = await getAllAccountData()
    setAccounts(response)
  }

  const getPocketSmithUserData = async () => {
    const response = await getUserData()
    setUser(response)
  }

  useEffect(() => {
    getPocketsmithAccountData()
    getPocketSmithUserData()
  }, [])

  const addedAccountdata: AddedAccountDataType = {
    accountGroups: [
      {
        name: 'transaction',
        accountIds: [3, 4],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'investment',
        accountIds: [7, 8, 9],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'House & Mortgage',
        accountIds: [5, 6, 10, 11],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'creditCards',
        accountIds: [1, 2],
        accounts: [],
        groupBalance: 0
      }
    ],
    limits: [250000, 200000, 50000],
    mortgageAccounts: [5, 6, 10],
    revolvingCredits: [10],
    nonLiquidAssets: [7, 8, 9, 11],
    liquidAssets: [1, 2, 3, 4],
    goalDistribution: [
      { key: 'Savings', value: 35 },
      { key: 'Investment', value: 40 },
      { key: 'Real Estate', value: 25 }
    ]
  }

  const addAPIAccountData = () => {
    // map over groups
    addedAccountdata.accountGroups.map((group: AccountGroupType, i: number) => {
      // map over all accounts
      {
        accounts.length &&
          accounts.map((account: AccountType | DummyDataAccount, i: number) => {
            // match up ids
            if (group.accountIds && group.accountIds.includes(account.id)) {
              // push into object
              group.accounts.push(account)
            }
          })
      }
    })
  }

  addAPIAccountData()
  const calcGroupBalances = () => {
    addedAccountdata.accountGroups.map((group: AccountGroupType, i: number) => {
      let balance: number = 0
      group.accounts.map(
        (account: AccountType | DummyDataAccount, i: number) => {
          if (account.current_balance_in_base_currency) {
            balance += account.current_balance_in_base_currency
          }
        }
      )
      group.groupBalance = balance
    })
  }

  calcGroupBalances()

  return (
    <PocketsmithContext.Provider
      value={{
        accounts: accounts,
        user: user,
        addedAccountdata: addedAccountdata
      }}
    >
      {children}
    </PocketsmithContext.Provider>
  )
}
