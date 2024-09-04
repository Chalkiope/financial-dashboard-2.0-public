import { useContext, useEffect, useState } from 'react'
import { MortgageProcessGraph } from '../graphs/MortgageProcessGraph'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountType, DummyDataAccount } from '@/app/api/types'
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
        accArr.push(account)
      }
    })
    setLocalAccData(accArr)
  }

  useEffect(() => {
    if (accounts.length) {
      getMortgageAccounts()
    }
  }, [accounts])

  if (!accounts) return <></>

  return (
    <>
      <div className="col1-container">
        <div className={`${s.col1Container} ${s.graphContainer}`}>
          <h2 className="section-title">Mortgage Breakdown</h2>
          <MortgageProcessGraph accountData={localAccData} />
        </div>
        {/* <div className={s.divider}></div> */}
        <div className={`${s.col1Container} ${s.graphContainer}`}>
          <h2 className="section-title">Mortgage Repayment Progress</h2>
          <OverallMortgageProcessGraph accountData={localAccData} />
        </div>
      </div>
    </>
  )
}
