import { useNZNumberFormat } from '@/app/hooks/useNumberFormat'
import { useCurrencySymbols } from '@/app/hooks/useCurrencySymbols'
import s from './Account.module.scss'
import RevolvingCredit from '../../../../assets/img/revolving-credit.svg'
import { useContext } from 'react'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'

export const Account = ({
  id,
  name,
  exchangeRate,
  balance,
  currency
}: {
  id: number | undefined
  name: string
  exchangeRate: number | null
  balance: number
  currency: string
}) => {
  const { addedAccountdata } = useContext(PocketsmithContext)

  const isRevolvingCredit = id && addedAccountdata.revolvingCredits.includes(id)

  const localBalance = exchangeRate !== null ? balance / exchangeRate : balance

  return (
    <div
      className={`${s.account} ${s.tile} ${
        balance < 0 ? s.negativeBalance : ''
      }`}
    >
      <h2>{name}</h2>
      <p>
        <span>{useCurrencySymbols(currency)}</span>{' '}
        {useNZNumberFormat(localBalance)}
      </p>
      {isRevolvingCredit && (
        <i className={s.icon}>
          <RevolvingCredit />
        </i>
      )}
    </div>
  )
}
