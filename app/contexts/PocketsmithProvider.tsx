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
  isDummyData: boolean
  setIsDummyData: (state: boolean) => void
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
  },
  isDummyData: false,
  setIsDummyData: () => {}
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
  const [isDummyData, setIsDummyData] = useState<boolean>(false)

  const getPocketsmithAccountData = async () => {
    try {
      const response = await getAllAccountData()
      // console.log('success - showing real data')
      setAccounts(response)
    } catch {
      // const response = DummyData
      console.log('error - showing dummy data')
      // console.log(response)

      // setAccounts(response.dummyData)
    }
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
        accountIds: [
          1586124, 1586127, 1586121, 825924, 1203277, 825819, 826674
        ],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'investment',
        accountIds: [
          1201357, 1201823, 1203283, 1217816, 2712487, 2712490, 2712493,
          2712496, 27122502, 2712505, 2712508, 2712511
        ],
        // first 2 accounts missing

        accounts: [],
        groupBalance: 0
      },
      {
        name: 'House & Mortgage',
        accountIds: [1586118, 1586115, 835889, 2712064],
        // first 2 accounts missing
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'creditCards',
        accountIds: [
          1139080, 1201345, 1201346, 1203196, 1203197, 1203198, 1203199,
          1203200, 1931014, 2323223, 2323226, 2323229
        ],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'german',
        accountIds: [1199010, 1200456, 1201347],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'insurance',
        accountIds: [1201432, 1201827, 1203282, 1217814, 2709889],
        // 1217814 missing
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'retired',
        accountIds: [
          848422, 1214535, 1214536, 1214539, 1217782, 1336446, 848373, 826675,
          826630, 848422
        ],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'other',
        accountIds: [2712484],
        accounts: [],
        groupBalance: 0
      }
    ],
    limits: [20000, 110000, 50000, 140000, 140000],
    mortgageAccounts: [1586124, 1586127, 1586121, 1586118, 1586115, 2712064],
    revolvingCredits: [1586124, 1586121, 1586127],
    nonLiquidAssets: [
      835889, 1201432, 1201827, 1203282, 1217814, 1586115, 1586118
    ],
    liquidAssets: [
      1199010, 1200456, 1201345, 1201346, 1201347, 1203196, 1203197, 1203198,
      1203199, 1203200, 1203277, 1586121, 1586124, 1586127, 2323223, 2323226,
      2323229, 2712484, 825819, 826674, 825924
    ],
    goalDistribution: [
      { key: 'Savings', value: 10 },
      { key: 'Investment', value: 40 },
      { key: 'Real Estate', value: 20 },
      { key: 'Cards', value: 5 },
      { key: 'German Accounts', value: 5 },
      { key: 'Insurance', value: 20 },
      { key: 'Other', value: 0 }
    ]
  }

  // const buckets: [
  //   {
  //     name: 'Bucket 1'
  //     goalValue: 30000
  //     description: 'Car Savings'
  //   },
  //   {
  //     name: 'Bucket 2'
  //     goalValue: 128000
  //     description: 'Travel Plans'
  //   },
  //   {
  //     name: 'Bucket 3'
  //     goalValue: 1000000
  //     description: 'Retirement'
  //   }
  // ]

  const addAPIAccountData = () => {
    // map over groups
    addedAccountdata.accountGroups.map((group: AccountGroupType, i: number) => {
      // map over all accounts
      console.log(accounts)
      accounts.map((account: AccountType | DummyDataAccount, i: number) => {
        // match up ids
        if (group.accountIds && group.accountIds.includes(account.id)) {
          // push into object
          // console.log(account)
          group.accounts.push(account)
        }
      })
    })
  }

  addAPIAccountData()
  const calcGroupBalances = () => {
    addedAccountdata.accountGroups.map((group: AccountGroupType, i: number) => {
      let balance: number = 0
      group.accounts.map(
        (account: AccountType | DummyDataAccount, i: number) => {
          // if(group.accountIds.includes(account.id)) {
          if (account.current_balance_in_base_currency) {
            balance += account.current_balance_in_base_currency
          }
          if (group.name === 'creditCards') {
            // console.log(account.current_balance_in_base_currency, balance)
          }
          // }
        }
      )
      group.groupBalance = balance
      // console.log(group.groupBalance)
    })
  }

  calcGroupBalances()

  return (
    <PocketsmithContext.Provider
      value={{
        accounts: accounts,
        user: user,
        addedAccountdata: addedAccountdata,
        isDummyData,
        setIsDummyData
      }}
    >
      {children}
    </PocketsmithContext.Provider>
  )
}
