import React from 'react'
import s from './Container.module.scss'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.container}>Container</div>
}
