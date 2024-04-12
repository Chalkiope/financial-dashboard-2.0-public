import React from 'react'
import s from './Section.module.scss'
import { Container } from '../container/Container'

export const Section = ({
  title,
  columns = 1,
  scrollToId,
  children
}: {
  title: string
  columns?: number
  scrollToId?: string
  children: React.ReactNode
}) => {
  return (
    <>
      <section className={s.section} id={scrollToId}>
        <h2 className={s.sectionTitle}>{title}</h2>
        <Container columns={columns}>{children}</Container>
      </section>
    </>
  )
}
