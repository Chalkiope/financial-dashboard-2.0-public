'use client'
import { ReactElement, createContext, useContext, useState } from 'react'
import { getUserData, getAccountData } from '../lib/fetchPocketsmithData'

export const PocketsmithDataContext = createContext(null)

export const PocketsmithDataProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [data, setData] = useState({})

  const value = {data: data}

  return (
    <PocketsmithDataContext.Provider value={null}>
      {children}
    </PocketsmithDataContext.Provider>
  )
}
