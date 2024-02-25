import { useGermanNumberFormat } from '@/app/hooks/useGermanNumberFormat'
import { useCurrencySymbols } from '@/app/hooks/useCurrencySymbols'
import s from './Account.module.scss'

export const Account = ({
  name,
  balance,
  currency
}: {
  name: string
  balance: number
  currency: string
}) => {
  return (
    <div
      className={`${s.account} ${s.tile} ${
        balance < 0 ? s.negativeBalance : ''
      }`}
    >
      <h2>{name}</h2>
      <p>{useGermanNumberFormat(balance)} <span>{useCurrencySymbols(currency)}</span></p>
    </div>
  )
}
