import React, { FocusEvent, ReactNode } from 'react'
import * as S from './styles'

interface Props {
  id: string
  aName: string
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void
  onChange?: (event: FocusEvent<HTMLSelectElement>) => void
  error?: boolean
  children: ReactNode
  defaultValue?: string | number
}

const GenericSelect = ({ id, aName, children, onBlur, onChange, error = false, defaultValue = 'checked' }: Props) => {
  return (
    <S.SelectInput defaultValue={defaultValue} id={id} name={aName} onBlur={onBlur} onChange={onChange} errorField={error}>
            { children }
        </S.SelectInput>

  )
}

export default GenericSelect