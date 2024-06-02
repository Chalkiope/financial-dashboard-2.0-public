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

  const getOneAccount = async (id: number) => {
    const response = await getOneAccountData(id)
    setAccount(response)
    console.log(response)
  }

  useEffect(() => {
    getOneAccount(12)
  }, [])

  useEffect(() => {
    console.log(account)
  }, [account])

  if (!account || typeof account === 'undefined') return <></>

  return (
    <div className={s.bucket1}>
      <BucketPart
        percentage={100}
        name="Sharesies Car Savings"
        type="Low Risk"
        side="back"
        goalValue={15000}
        currentValue={account?.current_balance_in_base_currency}
      />
    </div>
  )
}
