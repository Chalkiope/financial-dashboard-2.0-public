'use client'
import { Section } from '../section/Section'
import s from './Dashboard.module.scss'
import { AccountGroupContainer } from '../account-group-container/AccountGroupContainer'
import { NetWorth } from '../net-worth/NetWorth'
import { AssetDistribution } from '../asset-distribution/AssetDistribution'

export const Dashboard = () => {

  return (
    <main className={s.dashboardWrapper}>
      <Section title="Accounts">
        <AccountGroupContainer />
      </Section>
      <Section title="Net Worth" columns={2}>
        <NetWorth />
        <AssetDistribution />
      </Section>
    </main>
  )
}
