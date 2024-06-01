import { useContext, useEffect, useState } from 'react'
import { MortgageBreakdownGraph } from '../graphs/MortgageBreakdownGraph'
import { MortgageProcessGraph } from '../graphs/MortgageProcessGraph'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountType, DummyDataAccount } from '@/app/api/types'
import { MortgageGraph } from '../graphs/MortgageGraph'
import s from './MortgageBreakdown.module.scss'
import { OverallMortgageProcessGraph } from '../graphs/OverallMortgageProcessGraph'

export const MortgageBreakdown = () => {
  const { accounts, addedAccountdata } = useContext(PocketsmithContext)
  const [localAccData, setLocalAccData] = useState<
    AccountType[] | DummyDataAccount[]
  >([])

  let accArr: AccountType[] | DummyDataAccount[] = []

  // loop through all account data
  // get only the accounts that have id from mortgageAccounts array
  // push those accounts to accArr array
  const getMortgageAccounts = () => {
    accounts.map((account) => {
      if (
        account.id &&
        addedAccountdata.mortgageAccounts.includes(account.id)
      ) {
        // bit hacky... separate 2 fix loans
        if (
          account.hasOwnProperty('transaction_accounts') &&
          account.id === 2712064
        ) {
          accArr.push(account?.transaction_accounts[0])
          accArr.push(account?.transaction_accounts[1])
        } else {
          accArr.push(account)
        }
      }
    })
    setLocalAccData(accArr)
  }

  useEffect(() => {
    getMortgageAccounts()
  }, [accounts])

  // console.log(localAccData)

  return (
    <>
      <div className="col1-container">
        {/* <div className={`${s.col1Container} ${s.graphContainer}`}>
          <h2 className="section-title">Current Mortgage Breakdown</h2>
          <MortgageBreakdownGraph accountData={localAccData} />
        </div> */}
        {/* <div className={s.divider}></div> */}
        <div className={`${s.col1Container} ${s.graphContainer}`}>
          <h2 className="section-title">Current Mortgage Repayment Progress</h2>
          <MortgageProcessGraph accountData={localAccData} />
        </div>
        <div className={s.divider}></div>
        <div className={`${s.col1Container} ${s.graphContainer}`}>
          <h2 className="section-title">Overall Mortgage Repayment Progress</h2>
          <OverallMortgageProcessGraph accountData={localAccData} />
        </div>
      </div>
    </>
  )
}
