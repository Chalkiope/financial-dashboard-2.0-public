import s from './NetWorth.module.scss'
import { useGermanNumberFormat } from "@/app/hooks/useGermanNumberFormat"


export const NetWorth = () => {

    
  return (
    <div className={`${s.tile} ${s.netWorthContainer}`}>
            <div className={s.networthAll}>
                <h2>Current Net Worth</h2>
                {/* <p>{useGermanNumberFormat(totalNetWorth)}
                    <span> NZ$</span>
                </p> */}
            </div>
            <div className='networth-liquid'>
                <h2>Current Liquid Assets</h2>
                {/* <p>{useGermanNumberFormat(liquidNetWorth)}
                    <span> NZ$</span>
                </p> */}
            </div>
        </div>
  )
}