import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket1.module.scss'

export const Bucket1Front = () => {
  return (
    <div className={s.bucket1}>
      <BucketPart
        percentage={100}
        name="Sharesies Car Savings"
        type="Low Risk"
        side="front"
      />
    </div>
  )
}
