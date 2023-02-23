import React, { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import * as S from './styles'

interface Props {
  type: string
  placeholder?: string
  id?: string
  aName?: string
  max?: number
  min?: number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  error?: boolean
  value?: string
}

const GenericInput = ({ type, placeholder, id, aName, max, min, onChange, onClick, onBlur, error = false, value }: Props) => (
  <S.InputTypes type={type} placeholder={placeholder} id={id} name={aName} max={max} min={min} onChange={onChange} onClick={onClick} errorField={error} value={value} onBlur={onBlur} />
)

export default GenericInput
