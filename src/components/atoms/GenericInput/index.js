import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles.js'

const GenericInput = ({ type, placeholder, id, aName, max, min }) => {
  return (
        <S.InputTypes type={type} placeholder={placeholder} id={id} name={aName} max={max} min={min} />

  )
}

export default GenericInput

GenericInput.propTypes = {
  type: PropTypes.node,
  placeholder: PropTypes.node,
  id: PropTypes.node,
  aName: PropTypes.node,
  max: Number,
  min: Number
}