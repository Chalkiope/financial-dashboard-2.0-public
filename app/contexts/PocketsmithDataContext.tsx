'use client'
import { ReactElement, createContext, useContext, useState } from 'react'
import { getUserData, getAccountData } from '../lib/fetchPocketsmithData'

export const PocketsmithDataContext = createContext(null)

export const PocketsmithDataProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [data, setData] = useState({})
  // const [addedAccountdata, setAddedAccountData] = useState({
  //   accountGroups: [
  //     {
  //       name: 'transaction',
  //       accountIds: [
  //         1586124, 1586127, 1586121, 825924, 1203277, 825819, 826674
  //       ],
  //       groupBalance: 0
  //     },
  //     {
  //       name: 'investment',
  //       accountIds: [1201357, 1201823, 1203283, 1217816],
  //       groupBalance: 0
  //     },
  //     {
  //       name: 'house',
  //       accountIds: [1586118, 1586115, 835889],
  //       groupBalance: 0
  //     },
  //     {
  //       name: 'creditCards',
  //       accountIds: [
  //         1139080, 1201345, 1201346, 1203196, 1203197, 1203198, 1203199, 1203200
  //       ],
  //       groupBalance: 0
  //     },
  //     {
  //       name: 'german',
  //       accountIds: [1199010, 1200456, 1201347],
  //       groupBalance: 0
  //     },
  //     {
  //       name: 'insurance',
  //       accountIds: [1201432, 1201827, 1203282, 1217814],
  //       groupBalance: 0
  //     },
  //     {
  //       name: 'retired',
  //       accountIds: [
  //         848422, 1214535, 1214536, 1214539, 1217782, 1336446, 848373, 826675,
  //         826630, 848422
  //       ],
  //       groupBalance: 0
  //     }
  //   ],
  //   limits: [140000, 140000, 20000, 110000, 50000],
  //   mortgageAccounts: [1586124, 1586127, 1586121, 1586118, 1586115],
  //   nonLiquidAssets: [
  //     835889, 1201432, 1201827, 1203282, 1217814, 1586115, 1586118
  //   ],
  //   goalDistribution: [
  //     { x: 'Savings', value: 10 },
  //     { x: 'Investment', value: 40 },
  //     { x: 'Real Estate', value: 20 },
  //     { x: 'Cards', value: 5 },
  //     { x: 'German Accounts', value: 5 },
  //     { x: 'Insurance', value: 20 }
  //   ]
  // })

  const value = {
    data: data,
    addedAccountdata: addedAccountdata
  }

  return (
    <PocketsmithDataContext.Provider value={null}>
      {children}
    </PocketsmithDataContext.Provider>
  )
}
