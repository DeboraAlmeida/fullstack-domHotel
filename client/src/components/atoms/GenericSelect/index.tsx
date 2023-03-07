import React, { FocusEvent, ReactNode } from 'react'
import * as S from './styles'

interface Props {
  id: string
  aName: string
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void
  onChange?: (event: FocusEvent<HTMLSelectElement>) => void
  error?: boolean
  children: ReactNode
}

const GenericSelect = ({ id, aName, children, onBlur, onChange, error = false }: Props) => {
  return (
        <S.SelectInput defaultValue={'checked'} id={id} name={aName} onBlur={onBlur} onChange={onChange} errorField={error}>
            { children }
        </S.SelectInput>

  )
}

export default GenericSelect