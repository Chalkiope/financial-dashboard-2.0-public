import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket2.module.scss'

export const Bucket2Front = () => {
  return (
    <div className={s.bucket2}>
      <BucketPart
        percentage={50}
        name="AMP global fixed interest fund"
        type="Medium Risk"
        side="front"
      />
      <BucketPart
        percentage={50}
        side="front"
        horizontal
        transparent
        collapsePadding
      >
        <BucketPart percentage={50} type="High Risk" side="front" />
        <BucketPart percentage={50} side="front" collapsePadding transparent>
          <BucketPart percentage={70} side="front" name="Total World Fund" />
          <BucketPart percentage={20} side="front" name="NZ 50 Fund" />
          <BucketPart percentage={10} side="front" name="US Value Fund" />
        </BucketPart>
      </BucketPart>
    </div>
  )
}
