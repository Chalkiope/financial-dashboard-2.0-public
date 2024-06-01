import { useRef, useState } from 'react'
import s from './AccountGroup.module.scss'
import { Account } from './account/Account'
import { AccountType, DummyDataAccount } from '@/app/api/types'
import { useGermanNumberFormat } from '@/app/hooks/useGermanNumberFormat'
import { useFormattedText } from '@/app/hooks/useFormattedText'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Container } from '../../container/Container'

export const AccountGroup = ({
  groupName,
  groupAccounts,
  groupBalance
}: {
  groupName: string
  groupAccounts: AccountType[] | DummyDataAccount[]
  groupBalance: number
}) => {
  const groupRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useGSAP(() => {
    gsap.to(groupRef.current, {
      height: open ? 'auto' : '0px',
      duration: 0.5,
      delay: 0,
      ease: 'power1.inOut'
    })
  }, [open])

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
          <h3
            className={`${s.accountGroupBalance} ${
              groupBalance < 0 ? s.negativeBalance : ''
            }`}
          >
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
        className={`${s.group} ${s.accountGroup}  ${open ? '' : s.isClosed}`}
        id={groupName}
        ref={groupRef}
      >
        <Container columns={4}>
          {groupAccounts.map(
            (account: AccountType | DummyDataAccount, i: number) => {
              console.log(account)
              return (
                <>
                  <Account
                    id={account.id}
                    name={`${account.title}`}
                    exchangeRate={account.current_balance_exchange_rate || null}
                    balance={account.current_balance_in_base_currency || 0}
                    currency={`${account.currency_code}`}
                  />
                </>
              )
            }
          )}
        </Container>
      </div>
    </>
  )
}
