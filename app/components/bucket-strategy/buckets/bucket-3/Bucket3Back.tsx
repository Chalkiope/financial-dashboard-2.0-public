import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket3.module.scss'
export const Bucket3Back = () => {
  return (
    <div className={s.bucket3}>
      <BucketPart
        percentage={70}
        name="Total World Fund"
        type="High Risk"
        side="back"
      />
      <BucketPart
        percentage={20}
        name="NZ 50 Fund"
        type="Medium Risk"
        side="back"
      />
      <BucketPart
        percentage={10}
        name="US Value Fund"
        type="High Risk"
        side="back"
      />
    </div>
  )
}
