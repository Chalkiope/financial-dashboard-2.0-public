'use client'
import { useContext, useEffect, useState } from 'react'
import s from './NetWorth.module.scss'
import { useNZNumberFormat } from '@/app/hooks/useNumberFormat'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountType, DummyDataAccount } from '@/app/api/types'
import CustomTooltip from '@/app/components/tooltip/Tooltip'

export const NetWorth = () => {
  const { accounts, addedAccountdata } = useContext(PocketsmithContext)
  const [totalNetWorth, setTotalNetWorth] = useState(0)
  const [liquidNetWorth, setLiquidNetWorth] = useState(0)
  const [creditCardDebt, setCreditCardDebt] = useState(0)

  const getTotalNetWorth = () => {
    // sum everything up
    let totalBalance = 0
    accounts.map((account: AccountType | DummyDataAccount, i: number) => {
      if (account.current_balance_in_base_currency) {
        totalBalance += account.current_balance_in_base_currency
      }
    })
    setTotalNetWorth(totalBalance)
  }

  const getLiquidNetWorth = () => {
    let totalBalance = 0
    accounts.map((account: AccountType | DummyDataAccount, i: number) => {
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

  const getCreditCardDebt = () => {
    let totalBalance = 0
    const entries = Object.entries(addedAccountdata.accountGroups)
    let ccAccounts
    for (const [key, value] of entries) {
      if (value.name === 'creditCards') {
        ccAccounts = value.accounts
      }
    }
    ccAccounts?.map((account, i) => {
      if (
        account.current_balance_in_base_currency &&
        account.current_balance_in_base_currency < 0
      ) {
        totalBalance += account.current_balance_in_base_currency
      }
    })
    setCreditCardDebt(totalBalance)
  }

  useEffect(() => {
    getTotalNetWorth()
    getLiquidNetWorth()
    getCreditCardDebt()
  }, [accounts])

  return (
    <div className={`${s.tile} ${s.netWorthContainer}`}>
      <div className={s.networthAll}>
        <div className={s.title}>
          <h2>Current Net Worth</h2>
          <CustomTooltip title="All assets minus all liabilities">
            <span className={s.tooltip}>?</span>
          </CustomTooltip>
        </div>
        <p>
          {useNZNumberFormat(totalNetWorth)}
          <span> NZ$</span>
        </p>
      </div>
      <div className="networth-liquid">
        <div className={s.title}>
          <h2>Current Liquid Assets</h2>
          <CustomTooltip title="All savings and transaction accounts">
            <span className={s.tooltip}>?</span>
          </CustomTooltip>
        </div>

        <p>
          {useNZNumberFormat(liquidNetWorth)}
          <span> NZ$</span>
        </p>
      </div>
      <div className="cc-debt">
        <div className={s.title}>
          <h2>Current Credit Card Debt</h2>
          <CustomTooltip title="Only debt of actual credit cards, not counting sums on debit cards.">
            <span className={s.tooltip}>?</span>
          </CustomTooltip>
        </div>

        <p>
          {useNZNumberFormat(creditCardDebt)}
          <span> NZ$</span>
        </p>
      </div>
    </div>
  )
}
