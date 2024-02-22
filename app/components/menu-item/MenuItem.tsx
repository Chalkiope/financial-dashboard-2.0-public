import s from './MenuItem.module.scss'
import { ReactElement } from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export const MenuItem = ({
  menuItemId,
  text,
  icon,
  collapsed
}: {
  menuItemId: string
  text: string
  icon: React.ReactNode
  collapsed: boolean
}) => {
  useGSAP(() => {
    if (collapsed) {
      gsap.fromTo('.text', { opacity: 1 }, { opacity: 0, duration: 0.5 })
    } else if (!collapsed) {
      gsap.fromTo(
        '.text',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.25 }
      )
    }
  }, [collapsed])

  return (
    <div className={s.menuItem} id={`${menuItemId}-menu-item`}>
      <Link
        href={''}
        // to={menuItemId}
        // spy={true}
        // smooth={true}
        // duration={700}
        className={s.link}
        // activeClass="active"
      >
        <i className={`${s.icon} icon`}>{icon}</i>
        <span className={`${s.menuItemText} text`}>{text}</span>
      </Link>
    </div>
  )
}
