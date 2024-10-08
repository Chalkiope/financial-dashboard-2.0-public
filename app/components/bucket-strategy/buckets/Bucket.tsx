import React, { ReactNode, useState } from 'react'
import s from './Bucket.module.scss'

export const Bucket = ({
  title,
  subtitle,
  childrenFront,
  childrenBack
}: {
  title: string
  subtitle: string
  childrenFront: ReactNode
  childrenBack: ReactNode
}) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={s.bucketOuter}>
      <h4 className={s.bucketTitle}>{title}</h4>
      <h3 className={s.bucketSubtitle}>{subtitle}</h3>
      <div
        onClick={() => {
          setFlipped(!flipped)
        }}
        className={`${s.bucketCard} ${flipped ? s.flipped : ''}`}
      >
        <div className={`${s.bucket} ${s.bucketFront}`}>{childrenFront}</div>
        <div className={`${s.bucket} ${s.bucketBack}`}>{childrenBack}</div>
      </div>
    </div>
  )
}
