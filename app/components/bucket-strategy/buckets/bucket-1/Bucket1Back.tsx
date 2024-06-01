'use client'
import { useContext, useEffect, useState } from 'react'
import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket1.module.scss'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { getOneAccountData } from '@/app/lib/fetchPocketsmithData'
import { AccountType, DummyDataAccount } from '@/app/api/types'

export const Bucket1Back = () => {
  const { accounts } = useContext(PocketsmithContext)
  const [account, setAccount] = useState<AccountType | DummyDataAccount>()

  // const account = getOneAccountData(1203277)

  const getOneAccount = async (id: number) => {
    const response = await getOneAccountData(id)
    setAccount(response)
  }

  useEffect(() => {
    getOneAccount(1203277)
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
        goalValue={30000}
        currentValue={account?.current_balance_in_base_currency}
      />
    </div>
  )
}
