import { useContext, useEffect, useState } from 'react'
import { MortgageBreakdownGraph } from '../graphs/MortgageBreakdownGraph'
import { MortgageProcessGraph } from '../graphs/MortgageProcessGraph'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountType } from '@/app/api/types'
import { MortgageGraph } from '../graphs/MortgageGraph'

export const MortgageBreakdown = () => {
  const { accounts, addedAccountdata } = useContext(PocketsmithContext)
  const [localAccData, setLocalAccData] = useState<AccountType[]>([])

  // let mortgageData = [
  //   ['Fix 3', 0, 0],
  //   ['Fix 1', 0, 0],
  //   ['Wedding', 0, 0],
  //   ['Joint', 0, 0],
  //   ['Trip', 0, 0]
  // ]
  // const [defaultData, setDefaultData] = useState(mortgageData)

  let accArr: AccountType[] = []

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
        if (account.transaction_accounts && account.id === 2712064) {
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

  console.log(localAccData)

  return (
    <>
      <div className="col1-container">
        <div id="mortgage-breakdown-container">
          <MortgageBreakdownGraph accountData={localAccData}/>
        </div>
      </div>
      {/* <div className='divider'></div> */}
      <h2 className="section-title">Mortgage Repayment Progress</h2>
      <div className="col1-container">
      <MortgageProcessGraph accountData={localAccData}/>
      <MortgageGraph />
        
      </div>
    </>
  )
}
