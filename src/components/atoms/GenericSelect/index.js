import React from 'react'
import * as S from './styles.js'

const GenericSelect = ({ id, aName, children, onBlur, error }) => {
  return (
        <S.SelectInput defaultValue={'checked'} id={id} name={aName} onBlur={onBlur} errorField={error}>
            { children }
        </S.SelectInput>

  )
}

export default GenericSelect