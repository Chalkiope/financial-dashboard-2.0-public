import { ReactNode } from 'react'
import s from './BucketPart.module.scss'
import { useGermanNumberFormat } from '@/app/hooks/useGermanNumberFormat'

export const BucketPart = ({
  percentage,
  horizontal,
  name,
  type,
  children,
  side,
  collapsePadding,
  transparent,
  description,
  currentValue = 0,
  goalValue = 0,
  hideValues,
  denseLayout
}: {
  percentage: number
  horizontal?: boolean
  name?: string
  type?: string
  children?: ReactNode
  side: 'front' | 'back'
  collapsePadding?: boolean
  transparent?: boolean
  description?: boolean
  currentValue?: number
  goalValue?: number
  hideValues?: boolean
  denseLayout?: boolean
}) => {
  const value = useGermanNumberFormat(currentValue)
  const goal = useGermanNumberFormat(goalValue)

  return (
    <div
      className={`${s.part} ${side === 'front' ? s.front : s.back} ${
        collapsePadding && s.collapsePadding
      } ${transparent && s.transparent} ${denseLayout && s.denseLayout}`}
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
          {side === 'back' && !hideValues && (
            <div className={s.values}>
              <div>
                <span className={s.label}>Progress:</span>
                <span>{`${value} NZ$`}</span>
              </div>
              <div>
                <span className={s.label}>Goal:</span>
                <span>{`${goal} NZ$`}</span>
              </div>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
