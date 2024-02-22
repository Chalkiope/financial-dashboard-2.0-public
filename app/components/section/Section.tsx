import React from 'react'
import s from './Section.module.scss'
import { Container } from '../container/Container'

export const Section = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <>
      <section className={s.section}>
        <Container>
          <h2 className={s.sectionTitle}>{title}</h2>
          {children}
        </Container>
      </section>
    </>
  )
}
