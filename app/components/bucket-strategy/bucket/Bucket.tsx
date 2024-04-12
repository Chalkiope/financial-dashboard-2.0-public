import React, { ReactNode, useState } from 'react'
import s from './Bucket.module.scss'

export const Bucket = ({
  title,
  subtitle,
  children
}: {
  title: string
  subtitle: string
  children: ReactNode
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
        className={`${s.bucketInner} ${flipped ? s.flipped : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
