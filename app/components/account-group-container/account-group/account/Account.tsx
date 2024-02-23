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
      <p>
        {balance} <span>{currency}</span>
      </p>
      <p>
        {balance} <span>{currency}</span>
      </p>
      {/* <p>{germanNumberFormat(balance)} <span>{CurrencySymbols(currency)}</span></p> */}
    </div>
  )
}
