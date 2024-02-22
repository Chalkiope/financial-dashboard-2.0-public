'use client'
import React, { useContext, useState } from 'react';
import s from './AccountGroupContainer.module.scss';
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider';
import { AccountGroup } from './account-group/AccountGroup';

export const AccountGroupContainer = ({children}: {children?: React.ReactNode}) => {
    const data: any = useContext(PocketsmithContext)
    if (!data) return <></>
    // const accountGroups = data
    console.log(data?.addedAccountdata)    
    const [accountGroups, setAccountGroups] = useState<any[]>(data.addedAccountdata.accountGroups)

  return (
  <>
    {accountGroups.map((group: any, i: number) => {
        return (
            <AccountGroup groupName={group.name} accounts={group.accountIds} accountGroupBalance={group.accountGroupBalance}/>
            )
            
        })
        
    }
    </>
  )
}