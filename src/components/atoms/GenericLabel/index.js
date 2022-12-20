import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const GenericLabel = ({ itsFor, children }) => {
  return (
        <S.LabelFor htmlFor='itsFor'>{children}</S.LabelFor>

  )
}

export default GenericLabel

GenericLabel.propTypes = {
  itsFor: PropTypes.node,
  children: PropTypes.node
}