'use client'
import { useContext, useEffect, useState } from 'react'
import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket1.module.scss'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { getOneAccountData } from '@/app/lib/fetchPocketsmithData'
import { AccountType, DummyDataAccount } from '@/app/api/types'
import { dummyData } from '../../../../lib/dummyData.json'

export const Bucket1Back = () => {
  const [account, setAccount] = useState<AccountType | DummyDataAccount>()
  const { accounts } = useContext(PocketsmithContext)
  console.log(accounts)

  const getOneAccount = (id: number) => {
    accounts.map((_account) => {
      if (_account.id === id) {
        setAccount(_account)
      }
    })
  }

  useEffect(() => {
    getOneAccount(12)
  }, [accounts])

  if (!account || typeof account === 'undefined') return <></>

  return (
    <div className={s.bucket1}>
      <BucketPart
        percentage={100}
        name={account.title}
        type="Low Risk"
        side="back"
        goalValue={15000}
        currentValue={account?.current_balance_in_base_currency}
      />
    </div>
  )
}
