'use client'
import React, { useContext, useState } from 'react'
import s from './AccountGroupContainer.module.scss'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { AccountGroup } from './account-group/AccountGroup'
import { AccountGroupType } from '@/app/api/types'

export const AccountGroupContainer = () => {
  const { addedAccountdata } = useContext(PocketsmithContext)

  if (!addedAccountdata) return <></>

  return (
    <>
      {addedAccountdata.accountGroups.map(
        (group: AccountGroupType, i: number) => {
          return (
            <AccountGroup
              key={i}
              groupName={group.name}
              groupAccounts={group.accounts}
              groupBalance={group.groupBalance}
            />
          )
        }
      )}
    </>
  )
}
