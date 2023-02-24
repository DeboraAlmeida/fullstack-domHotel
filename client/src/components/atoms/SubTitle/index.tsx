import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SubTitle = ({ children }: Props) => {
  return (
    <h2>{children}</h2>
  )
}

export default SubTitle