import { useState } from 'react'
import s from './AccountGroup.module.scss'
import { Account } from './account/Account'
import { AccountType } from '@/app/api/types'
import {useGermanNumberFormat} from '@/app/hooks/useGermanNumberFormat'
import { useFormattedText } from '@/app/hooks/useFormattedText'

export const AccountGroup = ({
  groupName,
  groupAccounts,
  groupBalance
}: {
  groupName: string
  groupAccounts: AccountType[]
  groupBalance: number
}) => {
  const [open, setOpen] = useState(false)

  // console.log(open)

  return (
    <>
      <div
        className={`${s.accountGroupTitle} ${
          groupBalance < 0 ? s.negativeBalance : ''
        }`}
      >
        <div className={s.groupName}>
          <h4>Account Group</h4>
          <h3>{useFormattedText(groupName)}</h3>
        </div>
        <div className={s.groupAccNo}>
          <h4>No. of Accounts</h4>
          <h3 className={s.accountGroupNo}>{groupAccounts.length}</h3>
        </div>
        <div className={s.groupBalance}>
          <h4>Combined Balance</h4>
          <h3 className={`${s.accountGroupBalance} ${(groupBalance < 0) ? s.negativeBalance : ''}`}>
            {useGermanNumberFormat(groupBalance)}
            <span> NZ$</span>
          </h3>
        </div>
        <button
          className={s.accountGroupToggle}
          onClick={() => {
            setOpen(!open)
          }}
        >
          {`${!open ? 'Show' : 'Hide'}`}
        </button>
      </div>
      <div
        className={`${s.group} ${s.accountGroup} ${s.col4Container} ${
          open ? '' : s.isClosed
        }`}
        id={groupName}
      >
        {open &&
          groupAccounts.map((account: AccountType, i) => {
            return (
              <>
                <Account
                  name={`${account.title}`}
                  balance={account.current_balance_in_base_currency || 0}
                  currency={`${account.currency_code}`}
                />
              </>
            )
          })}
      </div>
      </>
  )
}
