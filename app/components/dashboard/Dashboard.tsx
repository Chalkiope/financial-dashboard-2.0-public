'use client'
import { useContext } from 'react'
import { Section } from '../section/Section'
import s from './Dashboard.module.scss'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountGroupContainer } from '../account-group-container/AccountGroupContainer'

export const Dashboard = () => {
  const data = useContext(PocketsmithContext)
  console.log(data)
  return (
    <main className={s.dashboardWrapper}>
      <Section title="Accounts">
        <AccountGroupContainer/>
      </Section>
    </main>
  )
}
