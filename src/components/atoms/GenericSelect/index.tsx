import React, { FocusEvent, ReactNode } from 'react'
import * as S from './styles.js'

interface Props {
  id: string
  aName: string
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void
  error?: string
  children: ReactNode
}

const GenericSelect = ({ id, aName, children, onBlur, error }: Props) => {
  return (
        <S.SelectInput defaultValue={'checked'} id={id} name={aName} onBlur={onBlur} errorField={error}>
            { children }
        </S.SelectInput>

  )
}

export default GenericSelect