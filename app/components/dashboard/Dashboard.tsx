'use client'
import { Section } from '../section/Section'
import s from './Dashboard.module.scss'
import { AccountGroupContainer } from '../account-group-container/AccountGroupContainer'
import { NetWorth } from '../net-worth/NetWorth'
import { AssetDistribution } from '../asset-distribution/AssetDistribution'
import { MortgageBreakdown } from '../mortgage-breakdown/MortgageBreakdown'
import { BucketStrategy } from '../bucket-strategy/BucketStrategy'

export const Dashboard = () => {
  return (
    <main className={s.dashboardWrapper}>
      <Section title="Accounts" scrollToId={'accounts'}>
        <></>
        <AccountGroupContainer />
      </Section>
      <Section title="Net Worth" columns={2} scrollToId={'asset-summary'}>
        <NetWorth />
        <AssetDistribution />
        <></>
      </Section>
      <Section title="Mortgage" scrollToId={'mortgage'}>
        <MortgageBreakdown />
        <></>
      </Section>
      <Section title="Bucket Strategy" scrollToId={'bucket-strategy'}>
        <BucketStrategy />
      </Section>
      <Section title="Investments" scrollToId={'investments'}>
        <></>
      </Section>
    </main>
  )
}
