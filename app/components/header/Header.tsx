'use client'
import s from './Header.module.scss'
import { useEffect, useState } from 'react'
import { Navigation } from '../navigation/Navigation'
import { Logo } from '../logo/Logo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  useGSAP(() => {
    gsap.to('header', {
      width: open ? '350px' : '70px',
      duration: 0.5,
      delay: open ? 0 : 0.175,
      ease: 'power1.inOut'
    })
  }, [open])

  return (
    <header className={`${s.header} `}>
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
