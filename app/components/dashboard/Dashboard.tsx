'use client'
import { useContext } from 'react'
import { Section } from '../section/Section'
import s from './Dashboard.module.scss'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'

export const Dashboard = () => {
  const data = useContext(PocketsmithContext)
  // console.log(data)
  return (
    <main className={s.dashboardWrapper}>
      <Section title="Accounts">
        <div>Account Groups Component</div>
      </Section>
    </main>
  )
}
