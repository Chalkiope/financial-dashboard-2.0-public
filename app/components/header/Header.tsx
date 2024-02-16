'use client'
import s from './Header.module.scss'
import { useContext, useState } from 'react'
import { Navigation } from '../navigation/Navigation'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { Logo } from '../logo/Logo'

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  console.log(open)

  const data = useContext(PocketsmithContext)
  // console.log(data)

  return (
    <header className={`${s.header} ${open ? '' : s.closed}`}>
      <div className={s.pageTitle}>
        <Logo open={open} />
      </div>
      <a
        href="#"
        className={s.menuToggle}
        onClick={() => {
          setOpen(!open)
        }}
      ></a>
      <Navigation />
    </header>
  )
}
