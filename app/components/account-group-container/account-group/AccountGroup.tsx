import { useState } from 'react';
import s from './AccountGroup.module.scss';
import { Account } from './account/Account';

export const AccountGroup = ({groupName, accounts, accountGroupBalance}: {groupName: string, accounts: [], accountGroupBalance: number}) => {
  const [open, setOpen] = useState(false)
  
    return (
    <div>
    <div className={`${s.accountGroupTitle} ${accountGroupBalance < 0 ? s.negativeBalance : ''}`}>
        <div className={s.groupName}>
            <h4>Account Group</h4>
            {/* <h3>{fixCamelCase(groupName)}</h3> */}
            <h3>{groupName}</h3>
        </div>
        <div className={s.groupAccNo}>
            <h4>No. of Accounts</h4>
            <h3 className={s.accountGroupNo}>{accounts.length}</h3>
        </div>
        <div className={s.groupBalance}>
            <h4>Combined Balance</h4>
            <h3 className={s.accountGroupBalance}>
                {/* {germanNumberFormat(accountGroupBalance)} */}
                <span> NZ$</span>
            </h3>
        </div>
        <button 
            className={s.accountGroupToggle} 
            onClick={() => {setOpen(!open)}}>
                Show
        </button>
    </div>
    <div 
        className={`${s.group} ${s.accountGroup} ${open ? '' : s.isClosed}`}
        id={groupName}>
        {accounts.map((account, i) => {
            return (
            <>
            {/* <Account name={account}/> */}
            </>)
        })}
    </div>
</div>
  )
}