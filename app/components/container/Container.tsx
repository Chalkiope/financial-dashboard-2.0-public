import React from 'react'
import s from './Container.module.scss'

export const Container = ({
  columns = 1,
  children
}: {
  columns?: number
  children: React.ReactNode
}) => {
  return (
    <div
      className={`${s.container} ${
        columns === 4 ? s.col4 : columns === 2 ? s.col2 : ''
      }`}
    >
      {children}
    </div>
  )
}
