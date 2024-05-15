import { ReactNode } from 'react'
import s from './BucketPart.module.scss'

export const BucketPart = ({
  percentage,
  horizontal,
  name,
  type,
  children,
  side,
  collapsePadding,
  transparent
}: {
  percentage: number
  horizontal?: boolean
  name?: string
  type?: string
  children?: ReactNode
  side: 'front' | 'back'
  collapsePadding?: boolean
  transparent?: boolean
}) => {
  return (
    <div
      className={`${s.part} ${side === 'front' ? s.front : s.back} ${
        collapsePadding && s.collapsePadding
      } ${transparent && s.transparent}`}
      style={{
        flexBasis: `${percentage}%`,
        flexDirection: horizontal ? 'row' : 'column'
      }}
    >
      {(name || type) && (
        <div className={s.label}>
          <h3>{`${percentage}%`}</h3>
          <span>{type}</span>
          <span>{name}</span>
        </div>
      )}
      {children}
    </div>
  )
}
