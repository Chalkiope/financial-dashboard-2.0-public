import React from 'react'
import s from './Section.module.scss'
import { Container } from '../container/Container'

export const Section = ({
  title,
  columns = 1,
  children
}: {
  title: string
  columns?: number
  children: React.ReactNode
}) => {
  


  return (
    <>
      <section className={s.section}>
        <h2 className={s.sectionTitle}>{title}</h2>
        <Container columns={columns}>
          {children}
        </Container>
      </section>
    </>
  )
}
