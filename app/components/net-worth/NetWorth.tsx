import { useContext, useEffect, useState } from 'react'
import s from './NetWorth.module.scss'
import { useGermanNumberFormat } from '@/app/hooks/useGermanNumberFormat'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountType } from '@/app/api/types'

export const NetWorth = () => {
  const [totalNetWorth, setTotalNetWorth] = useState(0)
  const [liquidNetWorth, setLiquidNetWorth] = useState(0)

  const { accounts, addedAccountdata } = useContext(PocketsmithContext)

  const getTotalNetWorth = () => {
    // sum everything up
    let totalBalance = 0
    accounts.map((account: AccountType, i: number) => {
      if (account.current_balance_in_base_currency) {
        totalBalance += account.current_balance_in_base_currency
      }
    })
    setTotalNetWorth(totalBalance)
  }

  const getLiquidNetWorth = () => {
    // check data behind this (what makes up the liquid net worth anyway?)
    let totalBalance = 0
    accounts.map((account: AccountType, i: number) => {
      if (account.current_balance_in_base_currency) {
        if (
          typeof account.id === 'number' &&
          addedAccountdata.liquidAssets.includes(account.id)
        ) {
          totalBalance += account.current_balance_in_base_currency
        }
      }
    })
    setLiquidNetWorth(totalBalance)
  }

  useEffect(() => {
    getTotalNetWorth()
    getLiquidNetWorth()
  }, [accounts])

  return (
    <div className={`${s.tile} ${s.netWorthContainer}`}>
      <div className={s.networthAll}>
        <h2>Current Net Worth</h2>
        <p>
          {useGermanNumberFormat(totalNetWorth)}
          <span> NZ$</span>
        </p>
      </div>
      <div className="networth-liquid">
        <h2>Current Liquid Assets</h2>
        <p>
          {useGermanNumberFormat(liquidNetWorth)}
          <span> NZ$</span>
        </p>
      </div>
    </div>
  )
}
