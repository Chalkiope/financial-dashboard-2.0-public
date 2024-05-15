import { useContext } from 'react'
import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket1.module.scss'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'

export const Bucket1Back = () => {
  const { accounts } = useContext(PocketsmithContext)
  // console.log(accounts)

  // get balance of sharesies car savings

  return (
    <div className={s.bucket1}>
      <BucketPart
        percentage={100}
        name="Sharesies Car Savings"
        type="Low Risk"
        side="back"
      />
    </div>
  )
}
