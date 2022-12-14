import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles.js'

const GenericInput = ({ type, placeholder, id, aName }) => {
  return (
        <S.InputTypes type={type} placeholder={placeholder} id={id} name={aName} />

  )
}

export default GenericInput

GenericInput.propTypes = {
  type: PropTypes.node,
  placeholder: PropTypes.node,
  id: PropTypes.node,
  aName: PropTypes.node
}