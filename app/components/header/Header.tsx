'use client'
import s from './Header.module.scss'
import { useContext, useState } from 'react'
import { Navigation } from '../navigation/Navigation'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { Logo } from '../logo/Logo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        'header',
        { width: '70px' },
        { width: '350px', duration: 0.25, ease: 'power4.out' }
      )
    } else if (!open) {
      gsap.fromTo(
        'header',
        { width: '350px' },
        { width: '70px', duration: 0.25, ease: 'power4.out', delay: 0.25 }
      )
    }
  }, [open])

  const data = useContext(PocketsmithContext)

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
      <Navigation open={open} />
    </header>
  )
}
