import { BucketPart } from '../bucket-part/BucketPart'
import s from './Bucket2.module.scss'
export const Bucket2Back = () => {
  // get savings goal of bucket 2 (126,000$)
  // devide by 2
  // should be fixed interest part (but isn't)
  // same amount is second half

  return (
    <div className={s.bucket2}>
      <BucketPart
        percentage={50}
        name="AMP global fixed interest fund"
        type="Medium Risk"
        side="back"
        goalValue={64000}
        currentValue={51448.48}
      />
      <BucketPart
        percentage={50}
        side="back"
        horizontal
        transparent
        collapsePadding
      >
        <BucketPart
          percentage={50}
          type="High Risk"
          side="back"
          goalValue={64000}
          currentValue={64000}
        />
        <BucketPart percentage={50} side="back" collapsePadding transparent>
          <BucketPart
            percentage={70}
            side="back"
            name="Total World Fund"
            hideValues
          />
          <BucketPart
            percentage={20}
            side="back"
            name="NZ 50 Fund"
            hideValues
          />
          <BucketPart
            percentage={10}
            side="back"
            name="US Value Fund"
            hideValues
          />
        </BucketPart>
      </BucketPart>
    </div>
  )
}
