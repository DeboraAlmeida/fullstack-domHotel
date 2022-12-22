import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles'

const GenericLabel = ({ id, children }) => {
  return (
        <S.LabelFor htmlFor={id}>{children}</S.LabelFor>

  )
}

export default GenericLabel

GenericLabel.propTypes = {
  id: PropTypes.node,
  children: PropTypes.node
}