import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles.js'

const GenericInput = ({ type, placeholder, id, aName, max, min, onChange, onClick, error, value, required = false, checked = false }) => {
  return (
        <S.InputTypes type={type} placeholder={placeholder} id={id} name={aName} max={max} min={min} onChange={onChange} onClick={onClick} errorField={error} value={value} required={required} defaultChecked={checked} />
  )
}

export default GenericInput

GenericInput.propTypes = {
  type: PropTypes.node,
  placeholder: PropTypes.node,
  id: PropTypes.node,
  aName: PropTypes.node,
  checked: PropTypes.node,
  max: Number,
  min: Number
}