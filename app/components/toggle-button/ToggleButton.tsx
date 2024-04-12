import { useState } from 'react'
import s from './ToggleButton.module.scss'

export const ToggleButton = ({
  labelLeft,
  labelRight,
  onActive
}: {
  labelLeft: string
  labelRight: string
  onActive: () => void
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={s.toggleContainer}>
      <span id="actual" className={s.toggleLabel}>
        {labelLeft}
      </span>
      <div
        id="asset-dist-toggle"
        className={`${s.toggle} ${isActive ? s.active : ''}`}
        onClick={() => {
          setIsActive(!isActive)
          onActive()
        }}
      >
        <div className={s.toggleInner}></div>
      </div>
      <span id="goal" className={s.toggleLabel}>
        {labelRight}
      </span>
    </div>
  )
}
